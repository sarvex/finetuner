import numpy as np
import paddle
import pytest
from paddle import nn

from finetuner.paddle import PaddleTuner
from ...data_generator import fashion_match_doc_generator as fmdg
from ...data_generator import qa_match_doc_generator as qmdg


@pytest.mark.parametrize('head_layer', ['CosineLayer', 'TripletLayer'])
def test_simple_sequential_model(tmpdir, params, head_layer):
    user_model = nn.Sequential(
        nn.Flatten(start_axis=1),
        nn.Linear(
            in_features=params['input_dim'] * params['input_dim'],
            out_features=params['feature_dim'],
        ),
        nn.ReLU(),
        nn.Linear(in_features=params['feature_dim'], out_features=params['output_dim']),
    )

    pt = PaddleTuner(user_model, head_layer=head_layer)
    model_path = tmpdir / 'trained.pd'
    # fit and save the checkpoint
    pt.fit(
        train_data=lambda: fmdg(num_total=params['num_train']),
        eval_data=lambda: fmdg(num_total=params['num_eval'], is_testset=True),
        epochs=params['epochs'],
        batch_size=params['batch_size'],
    )

    pt.save(model_path)

    user_model.set_state_dict(paddle.load(model_path))
    user_model.eval()
    inputs = paddle.to_tensor(
        np.random.random(
            [params['num_predict'], params['input_dim'], params['input_dim']]
        ).astype(np.float32)
    )
    r = user_model(inputs)
    assert tuple(r.shape) == (params['num_predict'], params['output_dim'])


@pytest.mark.parametrize('head_layer', ['CosineLayer', 'TripletLayer'])
def test_simple_lstm_model(tmpdir, params, head_layer):
    class extractlastcell(nn.Layer):
        def forward(self, x):
            out, _ = x
            return out[:, -1, :]

    user_model = nn.Sequential(
        nn.Embedding(num_embeddings=5000, embedding_dim=params['feature_dim']),
        nn.LSTM(
            params['feature_dim'],
            params['feature_dim'],
            direction='bidirectional',
        ),
        extractlastcell(),
        nn.Linear(
            in_features=2 * params['feature_dim'], out_features=params['output_dim']
        ),
    )
    model_path = tmpdir / 'trained.pd'

    pt = PaddleTuner(user_model, head_layer=head_layer)

    # fit and save the checkpoint
    pt.fit(
        train_data=lambda: qmdg(
            num_total=params['num_train'], max_seq_len=params['max_seq_len']
        ),
        eval_data=lambda: qmdg(
            num_total=params['num_eval'], max_seq_len=params['max_seq_len']
        ),
        epochs=params['epochs'],
        batch_size=params['batch_size'],
    )
    pt.save(model_path)

    # load the checkpoint and ensure the dim
    user_model.set_state_dict(paddle.load(model_path))
    user_model.eval()
    inputs = paddle.to_tensor(
        np.random.randint(
            low=0,
            high=100,
            size=[params['num_predict'], params['max_seq_len']],
        ).astype(np.long)
    )
    r = user_model(inputs)
    assert tuple(r.shape) == (params['num_predict'], params['output_dim'])
