Search.setIndex({docnames:["api/finetuner","api/finetuner.embedding","api/finetuner.helper","api/finetuner.labeler","api/finetuner.labeler.executor","api/finetuner.tailor","api/finetuner.tailor.base","api/finetuner.tailor.keras","api/finetuner.tailor.paddle","api/finetuner.tailor.pytorch","api/finetuner.toydata","api/finetuner.tuner","api/finetuner.tuner.base","api/finetuner.tuner.dataset","api/finetuner.tuner.dataset.samplers","api/finetuner.tuner.keras","api/finetuner.tuner.keras.data","api/finetuner.tuner.keras.losses","api/finetuner.tuner.keras.miner","api/finetuner.tuner.miner","api/finetuner.tuner.miner.base","api/finetuner.tuner.paddle","api/finetuner.tuner.paddle.datasets","api/finetuner.tuner.paddle.losses","api/finetuner.tuner.paddle.miner","api/finetuner.tuner.pytorch","api/finetuner.tuner.pytorch.datasets","api/finetuner.tuner.pytorch.losses","api/finetuner.tuner.pytorch.miner","api/finetuner.tuner.summary","api/modules","basics/data-format","basics/fit","basics/glossary","basics/index","components/index","components/labeler","components/overview","components/tailor","components/tuner","get-started/celeba","get-started/covid-qa","get-started/fashion-mnist","get-started/swiss-roll/index","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/finetuner.rst","api/finetuner.embedding.rst","api/finetuner.helper.rst","api/finetuner.labeler.rst","api/finetuner.labeler.executor.rst","api/finetuner.tailor.rst","api/finetuner.tailor.base.rst","api/finetuner.tailor.keras.rst","api/finetuner.tailor.paddle.rst","api/finetuner.tailor.pytorch.rst","api/finetuner.toydata.rst","api/finetuner.tuner.rst","api/finetuner.tuner.base.rst","api/finetuner.tuner.dataset.rst","api/finetuner.tuner.dataset.samplers.rst","api/finetuner.tuner.keras.rst","api/finetuner.tuner.keras.data.rst","api/finetuner.tuner.keras.losses.rst","api/finetuner.tuner.keras.miner.rst","api/finetuner.tuner.miner.rst","api/finetuner.tuner.miner.base.rst","api/finetuner.tuner.paddle.rst","api/finetuner.tuner.paddle.datasets.rst","api/finetuner.tuner.paddle.losses.rst","api/finetuner.tuner.paddle.miner.rst","api/finetuner.tuner.pytorch.rst","api/finetuner.tuner.pytorch.datasets.rst","api/finetuner.tuner.pytorch.losses.rst","api/finetuner.tuner.pytorch.miner.rst","api/finetuner.tuner.summary.rst","api/modules.rst","basics/data-format.md","basics/fit.md","basics/glossary.md","basics/index.md","components/index.md","components/labeler.md","components/overview.md","components/tailor.md","components/tuner.md","get-started/celeba.md","get-started/covid-qa.md","get-started/fashion-mnist.md","get-started/swiss-roll/index.md","index.md"],objects:{"":[[0,0,0,"-","finetuner"]],"finetuner.embedding":[[1,1,1,"","embed"]],"finetuner.helper":[[2,2,1,"","AnyDNN"],[2,2,1,"","AnyDataLoader"],[2,2,1,"","AnyOptimizer"],[2,2,1,"","AnyTensor"],[2,1,1,"","get_framework"],[2,1,1,"","is_seq_int"]],"finetuner.labeler":[[4,0,0,"-","executor"],[3,1,1,"","fit"]],"finetuner.labeler.executor":[[4,3,1,"","DataIterator"],[4,3,1,"","FTExecutor"]],"finetuner.labeler.executor.DataIterator":[[4,4,1,"","add_fit_data"],[4,5,1,"","requests"],[4,4,1,"","store_data"],[4,4,1,"","take_batch"]],"finetuner.labeler.executor.FTExecutor":[[4,4,1,"","embed"],[4,4,1,"","fit"],[4,4,1,"","get_collate_fn"],[4,4,1,"","get_embed_model"],[4,4,1,"","get_preprocess_fn"],[4,4,1,"","get_stop_event"],[4,5,1,"","requests"],[4,4,1,"","save"],[4,4,1,"","terminate"]],"finetuner.tailor":[[6,0,0,"-","base"],[5,1,1,"","display"],[7,0,0,"-","keras"],[8,0,0,"-","paddle"],[9,0,0,"-","pytorch"],[5,1,1,"","to_embedding_model"]],"finetuner.tailor.base":[[6,3,1,"","BaseTailor"]],"finetuner.tailor.base.BaseTailor":[[6,4,1,"","display"],[6,6,1,"","embedding_layers"],[6,4,1,"","summary"],[6,4,1,"","to_embedding_model"]],"finetuner.tailor.keras":[[7,3,1,"","KerasTailor"]],"finetuner.tailor.keras.KerasTailor":[[7,4,1,"","summary"],[7,4,1,"","to_embedding_model"]],"finetuner.tailor.paddle":[[8,3,1,"","PaddleTailor"]],"finetuner.tailor.paddle.PaddleTailor":[[8,4,1,"","summary"],[8,4,1,"","to_embedding_model"]],"finetuner.tailor.pytorch":[[9,3,1,"","PytorchTailor"]],"finetuner.tailor.pytorch.PytorchTailor":[[9,4,1,"","summary"],[9,4,1,"","to_embedding_model"]],"finetuner.toydata":[[10,1,1,"","generate_fashion"],[10,1,1,"","generate_qa"]],"finetuner.tuner":[[12,0,0,"-","base"],[13,0,0,"-","dataset"],[11,1,1,"","fit"],[15,0,0,"-","keras"],[19,0,0,"-","miner"],[21,0,0,"-","paddle"],[25,0,0,"-","pytorch"],[11,1,1,"","save"],[29,0,0,"-","summary"]],"finetuner.tuner.base":[[12,3,1,"","BaseLoss"],[12,3,1,"","BaseTuner"]],"finetuner.tuner.base.BaseLoss":[[12,4,1,"","compute"],[12,5,1,"","distance"],[12,4,1,"","get_default_miner"],[12,5,1,"","miner"]],"finetuner.tuner.base.BaseTuner":[[12,6,1,"","embed_model"],[12,4,1,"","fit"],[12,4,1,"","save"]],"finetuner.tuner.dataset":[[13,3,1,"","BaseDataset"],[13,3,1,"","ClassDataset"],[13,3,1,"","SessionDataset"],[14,0,0,"-","samplers"]],"finetuner.tuner.dataset.BaseDataset":[[13,6,1,"","labels"]],"finetuner.tuner.dataset.ClassDataset":[[13,6,1,"","labels"]],"finetuner.tuner.dataset.SessionDataset":[[13,6,1,"","labels"]],"finetuner.tuner.dataset.samplers":[[14,3,1,"","RandomClassBatchSampler"],[14,3,1,"","SessionBatchSampler"]],"finetuner.tuner.keras":[[15,3,1,"","KerasTuner"],[16,0,0,"-","data"],[15,1,1,"","get_device"],[17,0,0,"-","losses"],[18,0,0,"-","miner"]],"finetuner.tuner.keras.KerasTuner":[[15,4,1,"","fit"],[15,4,1,"","save"]],"finetuner.tuner.keras.data":[[16,3,1,"","KerasDataSequence"]],"finetuner.tuner.keras.data.KerasDataSequence":[[16,4,1,"","on_epoch_end"]],"finetuner.tuner.keras.losses":[[17,3,1,"","KerasLoss"],[17,3,1,"","SiameseLoss"],[17,3,1,"","TripletLoss"],[17,1,1,"","get_distance"]],"finetuner.tuner.keras.losses.KerasLoss":[[17,4,1,"","call"]],"finetuner.tuner.keras.losses.SiameseLoss":[[17,4,1,"","compute"],[17,4,1,"","get_default_miner"]],"finetuner.tuner.keras.losses.TripletLoss":[[17,4,1,"","compute"],[17,4,1,"","get_default_miner"]],"finetuner.tuner.keras.miner":[[18,3,1,"","SiameseMiner"],[18,3,1,"","SiameseSessionMiner"],[18,3,1,"","TripletMiner"],[18,3,1,"","TripletSessionMiner"]],"finetuner.tuner.keras.miner.SiameseMiner":[[18,4,1,"","mine"]],"finetuner.tuner.keras.miner.SiameseSessionMiner":[[18,4,1,"","mine"]],"finetuner.tuner.keras.miner.TripletMiner":[[18,4,1,"","mine"]],"finetuner.tuner.keras.miner.TripletSessionMiner":[[18,4,1,"","mine"]],"finetuner.tuner.miner":[[20,0,0,"-","base"],[19,1,1,"","get_session_pairs"],[19,1,1,"","get_session_triplets"]],"finetuner.tuner.miner.base":[[20,3,1,"","BaseClassMiner"],[20,3,1,"","BaseMiner"],[20,3,1,"","BaseSessionMiner"]],"finetuner.tuner.miner.base.BaseClassMiner":[[20,4,1,"","mine"]],"finetuner.tuner.miner.base.BaseMiner":[[20,4,1,"","mine"]],"finetuner.tuner.miner.base.BaseSessionMiner":[[20,4,1,"","mine"]],"finetuner.tuner.paddle":[[21,3,1,"","PaddleTuner"],[22,0,0,"-","datasets"],[21,1,1,"","get_device"],[23,0,0,"-","losses"],[24,0,0,"-","miner"]],"finetuner.tuner.paddle.PaddleTuner":[[21,4,1,"","fit"],[21,4,1,"","save"]],"finetuner.tuner.paddle.datasets":[[22,3,1,"","PaddleClassDataset"],[22,3,1,"","PaddleSessionDataset"]],"finetuner.tuner.paddle.losses":[[23,3,1,"","PaddleLoss"],[23,3,1,"","SiameseLoss"],[23,3,1,"","TripletLoss"],[23,1,1,"","get_distance"]],"finetuner.tuner.paddle.losses.PaddleLoss":[[23,4,1,"","forward"]],"finetuner.tuner.paddle.losses.SiameseLoss":[[23,4,1,"","compute"],[23,4,1,"","get_default_miner"]],"finetuner.tuner.paddle.losses.TripletLoss":[[23,4,1,"","compute"],[23,4,1,"","get_default_miner"]],"finetuner.tuner.paddle.miner":[[24,3,1,"","SiameseMiner"],[24,3,1,"","SiameseSessionMiner"],[24,3,1,"","TripletMiner"],[24,3,1,"","TripletSessionMiner"]],"finetuner.tuner.paddle.miner.SiameseMiner":[[24,4,1,"","mine"]],"finetuner.tuner.paddle.miner.SiameseSessionMiner":[[24,4,1,"","mine"]],"finetuner.tuner.paddle.miner.TripletMiner":[[24,4,1,"","mine"]],"finetuner.tuner.paddle.miner.TripletSessionMiner":[[24,4,1,"","mine"]],"finetuner.tuner.pytorch":[[25,3,1,"","PytorchTuner"],[26,0,0,"-","datasets"],[25,1,1,"","get_device"],[27,0,0,"-","losses"],[28,0,0,"-","miner"]],"finetuner.tuner.pytorch.PytorchTuner":[[25,4,1,"","fit"],[25,4,1,"","save"]],"finetuner.tuner.pytorch.datasets":[[26,3,1,"","PytorchClassDataset"],[26,3,1,"","PytorchSessionDataset"]],"finetuner.tuner.pytorch.losses":[[27,3,1,"","PytorchLoss"],[27,3,1,"","SiameseLoss"],[27,3,1,"","TripletLoss"],[27,1,1,"","get_distance"]],"finetuner.tuner.pytorch.losses.PytorchLoss":[[27,4,1,"","forward"]],"finetuner.tuner.pytorch.losses.SiameseLoss":[[27,4,1,"","compute"],[27,4,1,"","get_default_miner"]],"finetuner.tuner.pytorch.losses.TripletLoss":[[27,4,1,"","compute"],[27,4,1,"","get_default_miner"]],"finetuner.tuner.pytorch.miner":[[28,3,1,"","SiameseMiner"],[28,3,1,"","SiameseSessionMiner"],[28,3,1,"","TripletMiner"],[28,3,1,"","TripletSessionMiner"]],"finetuner.tuner.pytorch.miner.SiameseMiner":[[28,4,1,"","mine"]],"finetuner.tuner.pytorch.miner.SiameseSessionMiner":[[28,4,1,"","mine"]],"finetuner.tuner.pytorch.miner.TripletMiner":[[28,4,1,"","mine"]],"finetuner.tuner.pytorch.miner.TripletSessionMiner":[[28,4,1,"","mine"]],"finetuner.tuner.summary":[[29,2,1,"","NumericType"],[29,3,1,"","ScalarSequence"],[29,3,1,"","Summary"]],"finetuner.tuner.summary.ScalarSequence":[[29,4,1,"","floats"]],"finetuner.tuner.summary.Summary":[[29,4,1,"","dict"],[29,4,1,"","plot"],[29,4,1,"","save"]],finetuner:[[1,0,0,"-","embedding"],[0,1,1,"","fit"],[2,0,0,"-","helper"],[3,0,0,"-","labeler"],[5,0,0,"-","tailor"],[10,0,0,"-","toydata"],[11,0,0,"-","tuner"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","data","Python data"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:function","2":"py:data","3":"py:class","4":"py:method","5":"py:attribute","6":"py:property"},terms:{"0":[0,10,11,12,13,14,15,17,18,19,20,21,23,24,25,27,28,31,32,36,38,39,40,41,42,43,44],"00":[32,36,40,42],"000":31,"001":[0,11,12,15,21,25],"01":32,"02":32,"03":40,"05":43,"06":[32,40],"1":[10,13,14,17,18,19,20,22,23,24,26,27,28,31,32,33,36,38,39,40,42,43,44],"10":[0,11,12,15,21,25,31,32,39,43],"100":[32,36,38,40,44],"1000":[38,40,42],"100480":38,"102764544":38,"109":[36,40,42],"11":40,"112":38,"1180160":38,"11ec":[41,42],"128":[31,32,38,39,42,44],"12900":38,"132":[36,40,42],"135":[36,40,42],"14":[32,38],"141":42,"147584":38,"1500":43,"16781312":38,"172":[36,40,42],"1792":38,"18":[36,40,42],"180":40,"19":42,"1bab":42,"1bae":41,"1d":[18,20,24,28],"1e008a366d49":[41,42],"2":[10,31,32,38,42,43,44],"20":[14,40],"224":[38,40],"22900":42,"231":[36,40,42],"2359808":38,"25":32,"25088":38,"2508900":38,"256":[0,1,11,12,15,21,25,38],"28":[38,39,42,44],"28x28":31,"295168":38,"29672":36,"3":[10,31,32,38,40,42,43,44],"300":43,"31":42,"32":[32,38,39,42,44],"320000":[32,38],"33":42,"3300":38,"36928":38,"3d":43,"3gb":40,"4":[14,32,40,44],"4096":38,"409700":38,"4097000":38,"4128":[32,38],"481":[10,31,32],"49":42,"5":[14,31,32,43,44],"50":[39,41],"500":43,"5000":[32,38],"512":38,"52621":42,"53":40,"56":[10,38,42],"5716974480":42,"5794172560":41,"590080":38,"6":[40,43],"60":31,"60000":10,"61130":36,"61622":40,"64":[32,38],"65":42,"66048":38,"6620":40,"66560":[32,38],"67":42,"685":[36,40],"7":[38,42,43,44],"73856":38,"75":40,"784":38,"784x128x32":39,"8":31,"80":43,"9":[42,44],"94":[36,40,42],"98":32,"abstract":[4,6,12,20],"case":[14,31,44],"class":[4,6,7,8,9,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,32,33,38,39,41],"default":[11,12,15,17,21,23,25,27,39],"do":[14,32,38,40,41,43,44],"final":[17,23,27,38,40,41,42,43],"float":[0,11,15,17,21,23,25,27,29],"function":[1,3,4,11,12,13,15,21,22,25,26,29,31,38,39,41],"import":[2,31,32,36,38,39,40,41,42,43,44],"int":[0,1,3,5,6,7,8,9,10,11,13,14,15,19,21,25,29,38,43],"long":32,"new":[36,38,39,43,44],"public":[36,40,42,44],"return":[0,1,2,3,5,6,7,8,9,10,11,12,13,15,17,18,19,20,21,23,24,25,27,28,29,31,32,38,39,41,43],"short":31,"super":[39,41],"switch":[39,44],"true":[0,2,3,14,31,32,36,38,39,40,41,42,44],"try":14,"while":[14,31,36],A:[1,3,11,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,31,33,36],And:43,As:43,But:[32,38,44],By:39,For:[10,14,31,33,36,38,40],If:[3,7,8,9,10,11,14,15,17,21,25,27,29,36,40,41,43],In:[31,32,36,38,39,40,41,42,43,44],It:[1,2,3,6,7,8,9,10,11,13,14,15,21,22,25,26,36,38,39,44],Its:39,No:[32,40,44],On:40,One:[10,43],That:33,The:[1,2,3,5,6,7,8,9,10,11,12,13,14,15,17,21,22,23,25,26,27,29,31,36,37,39,40,41,42,43,44],Then:31,There:31,To:[5,6,7,8,9,31,38,43],_:[32,38],__init__:[8,39,41],__module__:2,_i:39,_j:39,_n:39,_p:39,a207:42,aaaaaaaaaaaaaa:42,abc:[6,12,13,20],abl:[36,40],about:[31,32,39,44],abov:[32,36,40],accept:[1,3,11,13,15,21,22,25,26,31,40,41,42],access:[36,40,42],accompani:44,accord:[31,39],accordingli:43,accur:38,accuraci:42,achiev:38,action:38,activ:[36,37,38,39,40,42,44],actual:[2,29],ad:[14,38],adam:[11,15,21,25],adaptiveavgpool2d_32:38,add:38,add_fit_data:4,addit:[3,4,12,38],address:[36,40,42],adjust:36,affect:36,after:[5,6,7,8,9,36,38,39,40,41,42],afterward:[36,38,43],again:[14,38],agnost:44,ai:44,albument:31,algorithm:36,alia:[2,29],all:[3,5,6,7,8,9,10,13,14,17,18,19,23,24,27,28,29,31,32,36,38,39,40,41,43,44],all_q:32,allow:[12,31,41,44],along:43,alreadi:[14,32,36,44],also:[12,13,22,26,32,33,36,38,39],although:39,alwai:[4,14,31,32,36],an:[1,2,3,5,6,7,8,9,11,13,14,15,17,21,22,23,25,26,27,31,32,33,36,37,38,39,43,44],anchor:[13,14,17,18,19,20,22,23,24,26,27,28],ani:[2,13,22,26,32,33,36,37,38,42,44],answer:[31,32,36,44],anydataload:[2,12],anydnn:[0,1,2,3,5,6,7,8,9,11,12,15,21,25,38],anylabel:13,anyoptim:[0,2,12],anytensor:[2,12,20],apach:44,apart:38,api:[31,38,43,44],app:44,appear:14,appli:[11,15,21,25,31],applic:[38,40,44],ar:[3,4,6,11,12,13,14,15,17,21,22,23,25,26,27,31,32,36,38,39,40,41,42,43,44],ara:4,architectur:[5,6,32,38],arg:[6,11,12,13,15,17,18,20,21,23,24,25,27,28],argument:[3,4,11,15,21,25,31,32,36,40],arrai:[10,13,18,24,28,31,40,42],ask:[33,36,43],assum:14,assumpt:31,astyp:43,async:36,attribut:[10,31,41],augment:31,augment_imag:31,auto:4,automodel:[39,41],autotoken:[39,41],avail:[5,6,7,8,9,12,15,21,25,36,40,42],avalil:[17,23,27],averag:[17,23,27],avoid:4,ax:[40,43],axes3d:43,axi:[10,43],b32d:41,b9557788:42,b:[10,33],back:44,backend:[3,36,40,42,44],bad:[31,36],bar:[36,41],base64:42,base:[0,2,4,5,7,8,9,11,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,36,40,41,42,43],baseclassmin:[18,20,24,28],basedataset:13,baseexecutor:4,baseloss:[11,12,15,17,21,23,25,27],basemin:[12,17,20,27],basesessionmin:[18,20,24,28],basetailor:[6,7,8,9],basetun:[12,15,21,25],basic:[31,43],batch:[1,3,6,7,8,9,11,13,14,15,16,21,25,31,33,41],batch_first:[32,38],batch_sampl:16,batch_siz:[0,1,11,12,14,15,21,25,31],batch_token:[39,41],becaus:[31,36],been:[36,38,41,43],befor:[40,41,42,43],behav:[32,36],below:[31,32,36,39,44],besid:36,best:[40,41],better:[12,33,36,37,40,41,42,44],between:[17,18,20,23,24,27,28,31,39,44],bewar:40,bidirect:[32,38],bigger:10,bin:43,blob:[10,13,22,26,31,42,43],block1_conv1:38,block1_conv2:38,block1_pool:38,block2_conv1:38,block2_conv2:38,block2_pool:38,block3_conv1:38,block3_conv2:38,block3_conv3:38,block3_pool:38,block4_conv1:38,block4_conv2:38,block4_conv3:38,block4_pool:38,block5_conv1:38,block5_conv2:38,block5_conv3:38,block5_pool:38,blous:31,bool:[0,2,3,5,6,7,8,9,10,14,38],bottleneck:38,bound:[17,23,27],box:43,browser:[36,40],buffer:42,build:[31,38,39,43,44],built:[31,39],butteri:44,button:36,c:[6,7,8,9,10],calcul:[17,23,27],calendar:44,call:[12,17,31,32,38,39],callabl:[13,22,26],can:[1,5,6,7,8,9,10,31,32,33,36,37,38,39,40,41,42,43,44],card:36,cdot:39,certain:38,chang:[12,32,36,40],channel:[10,31,40,44],channel_axi:10,chapter:31,chat:44,chatbot:41,check:[5,6,7,8,9],checkout:[41,42],choic:36,choos:[31,40],chop:38,cl:41,class_data:31,classdataset:[13,22,26],classic:43,classif:[31,33],clear_labels_on_start:[0,3,4],click:[31,36],close:43,closer:43,cls_token:[39,41],cm:43,code:[36,40,43],codebas:31,colab:43,colder:43,collat:[1,3,11,15,21,25,41],collate_fn:[0,1,3,11,12,15,16,21,25,39,41],collatefntyp:0,collect:[29,36,40],color:43,column:[31,43],combin:37,come:[13,14,31,36,43],comfort:40,commun:44,complet:[14,36,43],complex:29,compon:[33,36,37,38,39],compos:[31,37],comput:[1,12,15,17,21,23,25,27,31,32,36],concat:38,conclus:43,conduct:[29,36,37],config:[4,12,36],consecut:12,consid:[31,36,43],consider:36,consist:[13,14,38],consol:36,construct:[14,31,39,41],constuct:14,consum:41,contain:[17,23,27,31,33,36,40,43],content:[1,10,22,26,30,31,33,36],context:[31,44],continu:14,control:31,conv2d_11:38,conv2d_13:38,conv2d_15:38,conv2d_18:38,conv2d_1:38,conv2d_20:38,conv2d_22:38,conv2d_25:38,conv2d_27:38,conv2d_29:38,conv2d_3:38,conv2d_6:38,conv2d_8:38,converg:[40,41,42],convert:[5,6,7,8,9,31,32,33,37,38,40,41,42,44],cool:43,coordin:43,copi:[40,42,43],correct:[36,38],correctli:[32,36],correspond:31,cosin:[3,4,17,23,27,43],cosinc:39,cost:44,could:31,cover:43,covid19:41,covidqa:41,cpp:[40,42],cpu:[0,1,11,12,15,21,25,40],creat:[12,13,15,16,21,22,25,26,29,41],csrc:[40,42],csv:31,cuda:[1,11,15,21,25],current:[12,13,15,21,22,25,26],custom:[11,15,21,25],cut:43,cutoff:14,d:[17,23,27,33,39,43],da2:43,da3:43,da4:43,da:43,dam_path:4,danger:36,data:[2,3,5,6,7,8,9,10,11,12,13,15,21,25,26,29,32,33,36,37,39,44],data_adapt:15,dataiter:4,dataload:[21,25],dataset:[0,1,3,11,12,15,16,17,21,23,25,27,33,40,41,42,44],dc315d50:41,debug:[31,36],deem:31,deep:[2,31,37,44],deepcopi:43,def:[31,32,38,39,41,43],defin:[6,7,8,9,12,38],deliv:44,demo:[31,41,42],denot:[13,14,19,20,22,26,31,39],denotind:[18,20,24,28],dens:[6,38,39,42,44],dense_1:38,dense_2:38,depend:[32,36],depth:43,desid:14,design:[36,43,44],desir:[17,23,27,38,39,43],detect:33,determin:36,develop:39,devic:[0,1,11,12,15,21,25],di:[31,39],dict:[1,3,4,6,7,8,9,11,15,21,25,29],dictionari:29,did:31,differ:[12,14,31,32,36,37,38,43],digit:43,dim:[38,39,42,44],dimens:[33,38],dimension:[5,6,7,8,9,38,43,44],direct:38,directli:[1,3,11,15,21,25,31,36,38],discuss:44,disk:31,displai:[5,6],dissimilar:[17,23,27,31,33],dist:[17,23,27],dist_neg:[17,23,27],dist_po:[17,23,27],distanc:[3,12,17,18,20,23,24,27,28,39,43],dive:44,divers:36,divid:36,dnn:[2,5,6,7,8,9,33,43],dnn_model:2,doc:[1,4,13,22,26,32,36,40,42],doctor:41,document:[1,10,13,14,22,26,31,33,36,39,40,41,42,43],documentarrai:[10,31,32,33,40,41,42,43],documentarraymemap:31,documentarraymemmap:[32,40,41,42],documentsequ:[0,3,11,13,15,21,22,25,26],doe:[10,32,33,40,42,43,44],domain:44,don:[32,44],done:[32,36,40,42],download:40,download_proxi:10,dropout_35:38,dropout_38:38,dtype:42,dure:4,dynam:[31,41],e:[10,29,43],each:[1,3,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,33,36,39,40,41,43],ear:31,easi:[32,44],easier:36,easili:43,ecosystem:44,effect:43,either:[1,3,12,13,15,21,22,25,26,31,33,38,39],element:[17,18,19,23,24,27,28],ell_:39,emb:[1,4,43],embed:[0,3,5,6,7,8,9,11,12,15,17,18,20,21,23,24,25,27,28,30,31,32,33,36,37,38,39,40,43,44],embed_model:[1,3,11,12,15,21,25,32,36,38,39,42,43,44],embedding_1:[32,38],embedding_dim:[32,38],embedding_lay:[5,6,7,8,9],empti:43,enabl:[40,41],enapsul:13,end:[11,15,16,21,25,38],endpoint:4,engin:[15,31,44],enough:[14,31],enpow:2,entir:31,epoch:[0,11,12,14,15,16,21,25,32,36,39,43],equal:[14,17,23,27,39],estim:[32,36,40],eta:32,euclidean:[17,23,27],eval:32,eval_data:[0,11,12,15,21,25,31,32,39],evalu:[11,15,21,25,31,32],event:44,eventu:43,everi:[36,41,42,44],everyth:36,exampl:[10,14,33,36,40,41,42,43,44],exce:14,except:38,executor0:36,executor1:36,executor:[0,3,36,40,42],exist:[38,39],expand_dim:43,expect:[4,10,13,22,26,43],experi:[36,40,43,44],expos:3,extra:[4,29],extrem:[32,44],f4:42,f:25,factor:10,fail:4,fall:43,fals:[0,3,4,5,6,7,8,9,10,14,31,32,38],far:36,fashion:[10,44],faster:[36,41],fc1:38,fc2:38,featur:44,feed:[1,3,4,11,15,21,25,39,41,42,44],feedback:[31,41,42],feel:40,few:[14,36],field:[4,5,6,7,8,9,36,41],fig:43,figur:43,file:[11,29,36,40],filepath:[15,29],fill:[1,4,14,31,33,43],find:[32,36,38,44],fine:[3,32,38,44],finetun:[30,31,32,33,36,37,38,39],finetuner__label:[10,13,22,26],finetuner_label:43,first:[12,14,18,19,24,28,29,31,38,40,41,42,43],fit:[0,3,4,11,12,15,21,25,31,33,38,40,41,42,43,44],fix:36,flat:31,flatten:[38,39,42,44],flatten_1:38,flatten_input:38,float32:[0,5,6,7,8,9,38,43],flow:[36,40,42],fly:[31,32,44],folder:11,follow:[31,32,36,38,39,40,42,44],form:39,format:[39,40,41,42],forward:[12,23,27,32,38,39,41],forwardref:[0,1,3,11,15,21,25],found:[32,39,43],four:43,fourth:43,framework:[2,11,12,32,38,40,42,44],freeli:39,freez:[0,5,6,7,8,9,38,40,44],from:[4,5,6,7,8,9,11,12,14,15,20,21,25,31,32,33,36,38,39,40,41,42,43,44],from_fil:40,from_pretrain:[39,41],frontend:[31,36,44],frozen:38,ftexecutor:4,full:[31,40,43],fundament:38,further:[36,43],g:[10,29],gatewai:36,gener:[5,6,7,8,9,10,12,13,18,19,20,24,28,31,33,36,38,39,40,41,42,43],general_model:[32,36,44],generate_fashion:[10,31,39,42,44],generate_qa:[10,31,32,39,41],get:[6,10,12,13,14,15,17,21,23,25,27,29,36,38,40,41,42,43,44],get_collate_fn:4,get_default_min:[12,17,23,27],get_devic:[15,21,25],get_dist:[17,23,27],get_embed_model:4,get_framework:2,get_preprocess_fn:4,get_session_pair:19,get_session_triplet:19,get_stop_ev:4,give:[10,32,38,43],given:[12,14,17,23,27,29,31,33,36,38,39,40,42,43],go:[41,42],good:[31,43],got:[32,44],gpu:[11,15,21,25,40,43],grai:10,graph:31,grayscal:[10,31],green:32,grid:36,groundtruh:43,groundtruth:43,guid:43,h:10,ha:[13,31,33,36,38,43],hand:44,handl:36,hanxiao:[36,40,42],have:[10,13,22,26,31,32,33,36,38,40,41,44],height:40,hello:[41,42],help:[17,23,27,32,40,44],helper:[0,12,20,30,36,38,40],henc:31,here:[12,13,31,32,38,39,40,41,43],high:[31,38],hire:44,hit:36,hold:[18,19,24,28],hopefulli:[40,41,42],horizontalflip:31,how:[14,31,32,36,38,40,43,44],howev:14,http:[36,40,42],httpruntim:36,huggingfac:38,human:[33,36,44],i:[36,39,40,42,43],ical:44,id:[13,14,41,42],idea:[2,44],ident:[6,7,8,9,44],identityceleba:40,ignor:[36,40],illustr:31,imag:[10,31,33,36,39,40],imaga:10,imagenet:40,img_align_celeba:40,implement:[2,12,31,36,38,39,40],improv:[31,40,41,42,44],in_featur:[32,38,39,42,43,44],includ:[6,11,14,15,25,29,31],include_identity_lay:6,index:[13,17,18,19,23,24,27,28,36,44],indic:[12,17,20,23,27,36],individu:[1,3,11,15,21,25,31],info:6,inform:[7,8,9,31,32,38],init:43,initi:[17,23,27,43],inject:4,inplac:1,input:[1,2,3,5,6,7,8,9,11,12,13,15,21,22,25,26,31,33,36,38,39,41],input_dim:38,input_dtyp:[0,5,6,7,8,9,32,38],input_s:[0,5,6,7,8,9,32,38,40],input_shap:[38,39,42,44],insid:3,inspect:40,inspir:[41,42],instal:[29,44],instanc:[12,13,15,17,21,22,23,25,26,27,31,36],instead:31,int64:38,integ:[2,6,7,8,9,10,13,14,18,19,22,24,26,28],integr:44,interact:[0,3,31,32,37,44],intern:[40,42],interpret:[7,8,9],introduc:31,intuit:[43,44],invert:36,io:[21,22],is_seq_int:2,is_session_dataset:[12,17,23,27],is_sim:[17,23,27],is_testset:[10,39],isspeci:36,item:[1,3,11,13,14,15,18,20,21,22,24,25,26,28,31,39,41],iter:38,its:[14,31,33,38,40,42,43],ivborw0k:42,j:39,jina:[4,31,32,36,40,41,42,43,44],jpg:[31,40],json:29,just:[36,43],k:[36,40,41,42],keep:[36,43],kei:[2,15,21,25,29,36,39],kera:[0,1,2,5,11,32,38,39,40,42,44],kerasdatasequ:16,kerasloss:17,kerassequenceadapt:15,kerastailor:7,kerastun:15,keyboard:[36,40,41,42],keyword:[3,4,11,15,21,25],kind:[31,33],know:41,known:31,kwarg:[3,4,5,6,11,12,15,17,21,23,25,27,29,39],kwd:[12,13,18,20,24,28],l6:[39,41],l_y:43,label:[0,10,12,13,14,17,18,19,20,22,23,24,26,27,28,30,32,33,37,39,43,44],label_i:43,labeled_dam_path:4,labeled_data:[32,36,44],labeltyp:20,labler:40,lambda:32,larger:[29,36],largest:41,last:[5,6,7,8,9,14,38,40,44],last_hidden_st:[39,41],lastcel:[32,38],lastcell_3:[32,38],later:41,latest:44,layer:[5,6,7,8,9,15,17,21,23,32,38,39,40,42,43,44],layer_nam:[0,5,6,7,8,9,32,38],layerinfotyp:[6,7,8,9],learn:[11,15,21,25,31,32,36,37,43,44],learning_r:[0,11,12,15,21,25],left:[14,36,41],len:43,length:[10,41],less:[41,43],let:[31,38,39,40,41,42,43,44],level:[31,38,44],leverag:40,librari:31,licens:44,like:[31,33,36,43],limit:43,line:40,linear:[32,38,39,40,42,43,44],linear_2:38,linear_33:38,linear_34:38,linear_36:38,linear_39:38,linear_4:[32,38],linear_5:38,liner:44,linspac:[29,43],linux:44,list:[1,3,5,6,7,8,9,11,13,15,17,19,21,23,25,27,29,36,38,39,40,41],literatur:43,live:44,ll:31,load:[36,38],load_imag:31,load_uri_to_image_blob:40,loader:2,local:[36,40,42],localhost:[36,40,42],lock:36,logic:[31,43],look:[31,36,38,41,42,43],loop:44,loss:[0,3,4,11,12,15,21,25,29,32,40,42,43],lstm:32,lstm_2:[32,38],luckili:[32,44],m:39,machin:[40,43],maco:44,made:31,mai:[13,31,32,36,38,40,42],main:36,make:[14,39,40,41,42,44],make_swiss_rol:43,mani:[14,36],manifold:43,manual:[36,38],map:4,margin:[17,23,27,39],match:[10,13,14,17,18,19,20,22,23,24,26,27,28,31,33,36,39,43],match_typ:19,mathbf:39,mathrm:39,matplotlib:[29,43],matrix:[17,18,20,23,24,27,28],max:[17,23,27,39,43],max_length:[39,41],max_plot_point:29,max_seq_len:[10,32],maximum:[10,29,36,41],maxpool2d_10:38,maxpool2d_17:38,maxpool2d_24:38,maxpool2d_31:38,maxpool2d_5:38,mean:[13,31,36,40,41,42],meaning:36,meant:31,meanwhil:[32,44],meet:44,member:44,memori:[31,41],merg:[1,3,11,15,21,25],meta:4,method:[11,12,15,32],metric:[4,29],micro:38,might:14,mile:44,min:43,mine:[12,18,20,24,28],miner:[0,11,12,15,17,21,23,25,27],minilm:[39,41],minimum:39,minmax_norm:43,minuer:[17,27],minut:43,mix:36,mlp:44,mnist:[10,42,44],model:[0,1,2,3,5,6,7,8,9,11,12,15,21,25,31,33,36,37,43,44],model_path:11,modul:[30,32,38,39,41,44],month:44,more:[31,32,36,43,44],most:36,mous:[40,41,42],move:[11,15,21,25],mpl_toolkit:43,mplot3d:43,multi:36,multipl:12,must:[10,31,32,39],n:[17,23,27,39],n_sampl:43,name:[2,5,6,7,8,9,12,15,21,25,29,32,38],nativ:29,nb_param:[32,38],ndarrai:[13,22,26,31,33],nearest:[31,36],necessarili:31,need:[8,12,15,21,25,31,32,36,38,39,40,41,43,44],neg:[10,13,14,17,18,19,20,22,23,24,26,27,28,31,36,39],neg_valu:10,neighbour:[31,36],network:[2,3,11,17,23,27,31,36,37,40,42,44],neural:[2,31,37,44],new_model:43,newli:36,next:[4,14,31,33],nn:[21,23,25,27,32,38,39,41,42,43,44],nois:43,non:[38,40,42],none:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,21,22,23,25,26,27,29,38],normal:43,note:[6,7,8,9,12,31,32,36,40,41,42,43],notebook:43,now:[32,38,40,41,42,43,44],np:[31,43],num_embed:[32,38],num_items_per_class:[0,11,14,15,21,25,31],num_neg:[10,32],num_tot:[10,42],number:[1,10,11,14,15,17,21,23,25,27,29,31,36],numer:29,numerictyp:29,numpi:[18,24,28,29,31,40,42,43],object:[2,12,14,15,17,21,23,25,27,29,31,32,33,41,42],observ:[36,38,43],occur:14,off:38,often:[31,38],on_epoch_end:16,onc:[14,36],one:[12,14,18,19,24,28,29,31,39,43,44],onli:[11,13,14,15,22,25,26,31,32,36,39,40,41],open:[31,36,40],opensourc:44,oper:[36,38],optim:[0,2,11,12,15,21,25,39],option:[0,1,3,5,6,7,8,9,10,11,12,13,14,15,17,21,22,23,25,26,27,29,38],order:14,origin:[5,6,7,8,9,13,38,40],other:[14,31,39,44],otherwis:39,our:[31,40,41,42,43,44],out:[32,38,43,44],out_featur:[32,38,39,42,43,44],out_model:[39,41],output:[1,3,5,6,7,8,9,11,12,15,21,25,29,32,33,36,38,44],output_dim:[0,5,6,7,8,9,32,36,38,40,44],output_shape_displai:[32,38],over:[17,23,27,32,38],own:[31,38],p3:43,p:[31,39],packag:30,pad:[39,41],paddl:[0,1,2,5,11,32,38,39,40,42,44],paddleclassdataset:22,paddleloss:23,paddlepaddl:44,paddlesessiondataset:22,paddletailor:[6,7,8,9],paddletun:21,pair:[17,18,19,23,24,27,28,39],pairwis:[17,18,20,23,24,27,28],parallel:3,param:4,paramet:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,38,39],paraphras:[39,41],part:[6,7,8,9,36,43],particular:31,partit:43,pass:[4,6,11,15,21,25,29,31,41],path:[11,15,21,25,29,31,36,40],pattern:43,pea:3,per:[10,14,31],perceptron:38,perfect:[32,44],perform:[36,38,44],pil:31,pip:44,pipelin:[41,42],place:[12,41],pleas:40,plot:[29,32,43],plt:43,png:[32,42],point:[29,43],polo:31,pool:36,port:3,port_expos:[0,3],pos_valu:10,posit:[10,13,14,17,18,19,22,23,24,26,27,28,31,36,39],positv:36,possibl:[14,17,18,19,24,27,28],postiv:[18,19,20,24,28],potenti:6,power:44,pre:[1,3,11,13,15,21,22,25,26,31,40],precis:[41,42],predict:[33,38,39],preprocess_fn:[0,1,3,11,12,13,15,21,22,25,26,31],preprocfntyp:0,preserv:38,pretrain:[39,44],pretti:43,previou:[14,38],primit:31,print:32,privat:[36,40,42],problem:38,procedur:[32,36,40,41,42],process:[1,3,11,13,15,21,22,25,26,31],produc:[7,8,9,12,15,21,25,40,41,42],product:[36,44],program:[40,42],project:37,promis:44,properti:[6,12,13,20],propos:36,protect:[40,42],protocol:[36,40,42],provid:[11,15,17,21,25,27,31,32,38,43,44],prune:44,pt:[39,41],purpos:[31,36],put:31,py:[36,40,42],pyplot:43,python:[29,44],pytorch:[0,1,5,10,11,32,38,39,40,42,44],pytorchclassdataset:26,pytorchloss:27,pytorchsessiondataset:26,pytorchtailor:[6,7,8,9],pytorchtun:25,q:43,qa:[10,41],qualiti:[41,42],queri:[31,36,43,44],question:[31,32,33,44],queyr:43,quickli:[32,44],rais:[36,40,42],rand:31,random:[31,43],randombrightnesscontrast:31,randomclassbatchsampl:14,randomli:[14,31,43],rate:[11,15,21,25],rather:[31,43],ratio:36,re:[16,44],readi:[36,40,42],real:10,recommend:[36,41,42],record:29,red:43,redoc:[36,40,42],reduc:44,reduct:[43,44],refer:[17,23,27,31,33,39],regardless:31,regress:33,reject:[40,41,42],relat:[13,22,26,31,36,39],relationship:31,relev:[11,15,25,31,36],relu:[38,39,42,43,44],relu_12:38,relu_14:38,relu_16:38,relu_19:38,relu_21:38,relu_23:38,relu_26:38,relu_28:38,relu_2:38,relu_30:38,relu_34:38,relu_37:38,relu_3:38,relu_4:38,relu_7:38,relu_9:38,remain:[36,38],rememb:[41,42],remov:[3,5,6,7,8,9,38],render:[32,36],repeat:43,replac:38,repres:[17,23,27,36,39,43],represent:39,request:4,requir:[6,7,8,9,29,32,38,40],rescal:10,resnet50:40,respect:[18,19,20,24,28,39,40],rest:[40,42],restrict:33,result:[31,36,40,41,42],retriev:43,return_tensor:[39,41],rgb:10,rich:44,right:[36,43],root:[13,14,31,33],root_docu:31,round:[40,41,42],row:31,run:[12,40,41,43],runtim:[3,4,36],runtime_arg:4,runtime_backend:[0,3],runtimebackend:36,runtimeerror:36,s:[11,31,32,33,36,38,40,41,42,43,44],sai:[38,43],same:[31,33,36,41,42],sampl:[14,29,31,36,43],sampler:[11,13],save:[4,10,11,12,13,15,21,22,25,26,29,33,36],save_path:39,scalar:29,scalarsequ:29,scale:10,scatter:43,scenario:37,scikit:43,scratch:38,script:40,search:[31,41,43,44],second:[14,18,19,24,28,32,36,40,44],section:36,see:[5,6,7,8,9,32,36,38,40,42,43,44],select:[17,27,31,36,38,41],self:[32,38,39,41,43],semant:41,sentenc:[39,41],sequenc:[2,6,7,8,9,10,14,16,33],sequenti:[32,38,39,42,43,44],session:[13,14,18,19,20,24,28,33,36],sessionbatchsampl:14,sessiondataset:[13,14,22,26],set:[3,5,6,7,8,9,10,13,36,38,41,42,43,44],set_image_blob_channel_axi:40,set_image_blob_norm:40,set_wakeup_fd:36,setup:36,sever:[40,41,42],shape:[6,7,8,9,32,33,42],shirt:31,shortcut:36,shot:36,should:[1,3,10,11,12,13,14,15,21,22,25,26,31,36,40,43],show:[29,31,36,43],shuffl:14,siames:[3,11,17,23,27,39,44],siameseloss:[0,3,4,11,12,15,17,21,23,25,27,39],siamesemin:[17,18,23,24,27,28],siamesesessionmin:[17,18,23,24,27,28],side:36,signal:36,sim:39,similar:[17,23,27,31,33,39,40,41,42,43],similarli:31,simpl:43,simpli:[31,32,38,43,44],simul:10,singl:[11,14,15,17,23,25,27,31],size:[5,6,7,8,9,11,14,15,21,25,31,33,36,40],skip:[7,8,9],skip_identity_lay:[7,8,9],sklearn:43,slack:44,slower:36,small:31,smaller:[36,40],smooth:44,so:[14,31,36,40,41,42],solid:2,solut:44,solv:38,some:[14,31,32,33,36,38,43,44],someth:14,sometim:32,sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],space:36,spawn:40,specif:[11,12,31,36,38,44],specifi:[11,15,21,25,36,39,40],spinner:36,sqeuclidean:[17,23,27],start:[14,31,36,40],stat:36,statist:[32,36],step:[32,38,39,40,42],still:36,store:[7,8,9,13,22,26,29,31,33,36],store_data:4,str:[0,1,2,3,5,6,7,8,9,11,12,13,15,17,21,22,23,25,26,27,29,31,38,39,41],straightforward:43,stream:44,string:[13,22,26],stronli:[41,42],structur:31,subclass:12,submiss:36,submit:36,submodul:30,subpackag:30,subscrib:44,subset:31,success:36,suffl:14,suggest:43,summar:39,summari:[0,5,6,7,8,9,11,12,15,21,25,32,38,43,44],supervis:43,support:[3,11,15,21,25,31,40,42],suppos:[13,36],supposedli:[40,42],suppress:[40,42],sure:[14,39,40,44],surpervis:43,swagger:[36,40,42],synthet:[10,31],system:36,t:[31,32,40,44],tabl:[5,6,38],tag:[10,13,22,26,31,33,36,41,42,43],tailor:[0,30,32,33,37,40,44],take:[1,3,11,13,15,21,22,25,26,31,40,43],take_batch:4,taken:[14,31],talk:44,target:[17,23,27],task:[31,41,42,44],tell:[2,36,43],temperatur:43,tensor:[1,2,3,6,7,8,9,11,15,17,18,20,21,23,24,25,27,28,40,42],tensor_numpi:[40,42],tensorflow:[15,16,17,18,32,38,39,40,42,44],termin:[4,36,40],test:10,text:[10,13,22,26,31,33,36,41],textbox:36,tf:[38,39,40,42,44],than:[29,43],thei:[12,17,23,27,31,38],them:[38,41,42],themselv:31,thi:[2,8,11,12,13,14,15,17,21,22,23,25,26,27,29,31,32,36,38,39,40,41,42,43,44],third:[18,19,24,28,43],those:14,thread:[0,3,36,40],three:[17,18,19,23,24,27,28,31,37,39],through:[41,42],thu:31,time:[12,31,32,36,38],to_dataturi:40,to_embedding_model:[0,5,6,7,8,9,32,36,40,44],togeth:[13,31,36,43],token:[33,39,41],tool:44,top:[36,40,41,42],topk:36,torch:[2,25,26,27,28,32,38,39,40,41,42,43,44],torchvis:[38,40],total:[10,14],toydata:[0,30,31,32,39,41,42,44],tp:2,train:[2,3,11,15,21,25,31,32,33,36,39,40,41,42,43,44],train_data:[0,3,11,12,15,21,25,31,32,36,39,40,41,42,43,44],trainabl:[32,38],trainer:[40,42],transform:31,transformer_model:[39,41],transformerembedd:[39,41],trigger:[40,42],triplet:[3,11,17,18,19,23,24,27,28,39,44],tripletloss:[3,11,12,15,17,21,23,25,27,39],tripletmin:[17,18,24,27,28],tripletsessionmin:[17,18,24,27,28],trivial:43,trouser:31,truncat:[39,41],tsne:32,tuesdai:44,tune:[2,3,31,32,37,38,40,41,42,43,44],tuned_model:[32,44],tuner:[0,30,32,33,36,37,38,40,44],tupl:[0,5,6,7,8,9,13,14,17,18,19,20,23,24,27,28,32,38],tutori:[41,42,44],two:[13,14,17,18,20,23,24,27,28,31,32,36,38],txt:40,type:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,23,24,25,27,28,29,31,36,38,39,40,41,42],typevar:2,ui:[3,29,36,37,40,42],under:[10,13,22,26,31,33,37,44],underli:[40,42],underneath:40,union:[0,1,11,12,13,15,17,21,22,23,25,26,27,29],uniqu:14,unknown:[36,40],unlabel:[33,36],unlabeled_data:[32,36,44],unlock:44,unrel:[36,39],until:14,up:[36,40,41,42,43,44],upsampl:10,uri:[31,42],url:36,us:[1,3,5,6,7,8,9,11,12,14,15,17,21,23,25,27,31,32,33,37,38,39,40,41,42,43],usag:[32,44],user:[31,40,42,44],userwarn:[36,40,42],util:[16,25,26,40,42],v2:[39,41],valu:[4,10,29,36],valueerror:2,ve:[32,44],vector:[39,42,44],veri:[36,43],version:40,via:[32,37,38,39,43,44],video:44,view_init:43,vision:[38,40],visual:[29,32,40,42],w:[10,36],wa:[14,40],wai:[14,31,36,44],wait:36,want:[31,38,40,41,42,44],warmer:43,warn:[40,42],we:[10,31,38,39,40,41,42,43,44],web:31,wedg:[17,23,27,39],weight:[5,6,7,8,9,12,36,38,39,40,44],well:[13,22,26],what:[32,44],whatev:40,when:[4,5,6,7,8,9,14,29,31,36,40,41,43,44],where:[11,12,13,15,17,21,23,25,27,29,31,33,39,41,44],wherea:[32,36,39],whether:[13,22,26,31,38],which:[3,11,13,14,15,17,21,22,23,25,26,27,31,32,36,38,40,41,43,44],whose:32,wide:43,width:40,without:2,work:[36,38,39,40,43,44],worri:[32,39,44],would:[14,31],write:[39,40,42,44],writeabl:[40,42],written:[1,38,39],wrong_answ:[31,41],x:[10,32,33,38,39,43],y:43,yaml:4,ye:[32,44],yet:[36,44],yield:[41,42],you:[5,6,7,8,9,11,15,21,25,31,32,36,38,39,40,41,42,44],your:[31,32,36,38,39,40,41,44],youtub:44,zip:[40,43],zoo:38,zoom:44},titles:["finetuner package","finetuner.embedding module","finetuner.helper module","finetuner.labeler package","finetuner.labeler.executor module","finetuner.tailor package","finetuner.tailor.base module","finetuner.tailor.keras package","finetuner.tailor.paddle package","finetuner.tailor.pytorch package","finetuner.toydata module","finetuner.tuner package","finetuner.tuner.base module","finetuner.tuner.dataset package","finetuner.tuner.dataset.samplers module","finetuner.tuner.keras package","finetuner.tuner.keras.data module","finetuner.tuner.keras.losses module","finetuner.tuner.keras.miner module","finetuner.tuner.miner package","finetuner.tuner.miner.base module","finetuner.tuner.paddle package","finetuner.tuner.paddle.datasets module","finetuner.tuner.paddle.losses module","finetuner.tuner.paddle.miner module","finetuner.tuner.pytorch package","finetuner.tuner.pytorch.datasets module","finetuner.tuner.pytorch.losses module","finetuner.tuner.pytorch.miner module","finetuner.tuner.summary module","191ba763c24a05f75461c2edf7f7f873072406c5","Data Format","One-liner <code class=\"docutils literal notranslate\"><span class=\"pre\">fit()</span></code>","Glossary","&lt;no title&gt;","&lt;no title&gt;","Labeler","Overview","Tailor","Tuner","Finetuning Pretrained ResNet for Celebrity Face Search","Finetuning a Transformer for Question-Answering","Finetuning MLP for Fashion Image Search","Finetuning MLP on Swiss Roll Dataset","Welcome to Finetuner!"],titleterms:{"191ba763c24a05f75461c2edf7f7f873072406c5":30,"class":31,One:32,advanc:36,answer:41,argument:39,base:[6,12,20],bi:38,build:[41,42],call:43,celeba:40,celebr:40,content:[0,3,5,7,8,9,11,13,15,19,21,25],control:36,covid:[31,39],data:[16,31,40,41,42,43],dataset:[13,14,22,26,31,43],displai:[32,38],document:32,emb:32,embed:[1,41,42],exampl:[31,32,38,39],executor:4,face:40,fashion:[31,39,42],finetun:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,40,41,42,43,44],fit:[32,36,39],follow:43,format:31,glossari:33,helper:2,imag:42,interact:[36,40,41,42],interfac:36,join:44,kera:[7,15,16,17,18],label:[3,4,31,36,40,41,42],liner:32,load:[31,40,43],loss:[17,23,27,39],lstm:38,method:[36,38,39],miner:[18,19,20,24,28],mlp:[38,39,42,43],mnist:[31,39],model:[32,38,39,40,41,42],modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],nearest:43,neighbour:43,next:44,origin:43,overview:37,packag:[0,3,5,7,8,9,11,13,15,19,21,25],paddl:[8,21,22,23,24],panel:36,prepar:[40,41,42],preprocess:31,pretrain:[38,40],progress:36,put:[40,41,42],pytorch:[9,25,26,27,28],qa:[31,39],question:[36,41],quick:44,resnet:40,result:43,roll:43,run:36,sampler:14,save:[32,39],search:[40,42],session:31,simpl:[38,39],space:43,start:44,step:44,submodul:[0,3,5,11,13,15,19,21,25],subpackag:[0,5,11],summari:29,supervis:31,support:44,swiss:43,tailor:[5,6,7,8,9,36,38],tip:38,to_embedding_model:38,togeth:[40,41,42],toydata:10,transform:[39,41],tune:39,tuner:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,39],understand:31,unlabel:31,us:[36,44],usag:37,user:36,valid:43,vgg16:38,view:36,warp:43,welcom:44,without:36}})