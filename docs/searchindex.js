Search.setIndex({docnames:["api/finetuner","api/finetuner.helper","api/finetuner.labeler","api/finetuner.labeler.executor","api/finetuner.tailor","api/finetuner.tailor.base","api/finetuner.tailor.keras","api/finetuner.tailor.paddle","api/finetuner.tailor.pytorch","api/finetuner.toydata","api/finetuner.tuner","api/finetuner.tuner.base","api/finetuner.tuner.dataset","api/finetuner.tuner.dataset.helper","api/finetuner.tuner.keras","api/finetuner.tuner.keras.datasets","api/finetuner.tuner.keras.head_layers","api/finetuner.tuner.logger","api/finetuner.tuner.paddle","api/finetuner.tuner.paddle.datasets","api/finetuner.tuner.paddle.head_layers","api/finetuner.tuner.pytorch","api/finetuner.tuner.pytorch.datasets","api/finetuner.tuner.pytorch.head_layers","api/modules","basics/data-format","basics/glossary","basics/index","basics/labeler","basics/tailor","basics/tuner","design/design-decisions","design/design-philo","design/index","design/overview","get-started/covid-qa","get-started/fashion-mnist","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/finetuner.rst","api/finetuner.helper.rst","api/finetuner.labeler.rst","api/finetuner.labeler.executor.rst","api/finetuner.tailor.rst","api/finetuner.tailor.base.rst","api/finetuner.tailor.keras.rst","api/finetuner.tailor.paddle.rst","api/finetuner.tailor.pytorch.rst","api/finetuner.toydata.rst","api/finetuner.tuner.rst","api/finetuner.tuner.base.rst","api/finetuner.tuner.dataset.rst","api/finetuner.tuner.dataset.helper.rst","api/finetuner.tuner.keras.rst","api/finetuner.tuner.keras.datasets.rst","api/finetuner.tuner.keras.head_layers.rst","api/finetuner.tuner.logger.rst","api/finetuner.tuner.paddle.rst","api/finetuner.tuner.paddle.datasets.rst","api/finetuner.tuner.paddle.head_layers.rst","api/finetuner.tuner.pytorch.rst","api/finetuner.tuner.pytorch.datasets.rst","api/finetuner.tuner.pytorch.head_layers.rst","api/modules.rst","basics/data-format.md","basics/glossary.md","basics/index.md","basics/labeler.md","basics/tailor.md","basics/tuner.md","design/design-decisions.md","design/design-philo.md","design/index.md","design/overview.md","get-started/covid-qa.md","get-started/fashion-mnist.md","index.md"],objects:{"":{finetuner:[0,0,0,"-"]},"finetuner.helper":{AnyDNN:[1,2,1,""],AnyDataLoader:[1,2,1,""],DocumentArrayLike:[1,2,1,""],DocumentSequence:[1,2,1,""],LayerInfoType:[1,2,1,""],TunerReturnType:[1,2,1,""],get_framework:[1,1,1,""],is_seq_int:[1,1,1,""]},"finetuner.labeler":{executor:[3,0,0,"-"],fit:[2,1,1,""]},"finetuner.labeler.executor":{DataIterator:[3,3,1,""],FTExecutor:[3,3,1,""]},"finetuner.labeler.executor.DataIterator":{add_fit_data:[3,4,1,""],requests:[3,5,1,""],store_data:[3,4,1,""],take_batch:[3,4,1,""]},"finetuner.labeler.executor.FTExecutor":{embed:[3,4,1,""],fit:[3,4,1,""],get_embed_model:[3,4,1,""],requests:[3,5,1,""]},"finetuner.tailor":{base:[5,0,0,"-"],display:[4,1,1,""],keras:[6,0,0,"-"],paddle:[7,0,0,"-"],pytorch:[8,0,0,"-"],to_embedding_model:[4,1,1,""]},"finetuner.tailor.base":{BaseTailor:[5,3,1,""]},"finetuner.tailor.base.BaseTailor":{display:[5,4,1,""],embedding_layers:[5,6,1,""],summary:[5,4,1,""],to_embedding_model:[5,4,1,""]},"finetuner.tailor.keras":{KerasTailor:[6,3,1,""]},"finetuner.tailor.keras.KerasTailor":{summary:[6,4,1,""],to_embedding_model:[6,4,1,""]},"finetuner.tailor.paddle":{PaddleTailor:[7,3,1,""]},"finetuner.tailor.paddle.PaddleTailor":{summary:[7,4,1,""],to_embedding_model:[7,4,1,""]},"finetuner.tailor.pytorch":{PytorchTailor:[8,3,1,""]},"finetuner.tailor.pytorch.PytorchTailor":{summary:[8,4,1,""],to_embedding_model:[8,4,1,""]},"finetuner.toydata":{generate_fashion_match:[9,1,1,""],generate_qa_match:[9,1,1,""]},"finetuner.tuner":{base:[11,0,0,"-"],dataset:[12,0,0,"-"],fit:[10,1,1,""],keras:[14,0,0,"-"],logger:[17,0,0,"-"],paddle:[18,0,0,"-"],pytorch:[21,0,0,"-"]},"finetuner.tuner.base":{BaseArityModel:[11,3,1,""],BaseDataset:[11,3,1,""],BaseHead:[11,3,1,""],BaseTuner:[11,3,1,""]},"finetuner.tuner.base.BaseArityModel":{forward:[11,4,1,""]},"finetuner.tuner.base.BaseHead":{arity:[11,5,1,""],forward:[11,4,1,""],get_output:[11,4,1,""],loss_fn:[11,4,1,""],metric_fn:[11,4,1,""]},"finetuner.tuner.base.BaseTuner":{arity:[11,6,1,""],embed_model:[11,6,1,""],fit:[11,4,1,""],head_layer:[11,6,1,""],save:[11,4,1,""],wrapped_model:[11,6,1,""]},"finetuner.tuner.dataset":{SiameseMixin:[12,3,1,""],TripletMixin:[12,3,1,""],helper:[13,0,0,"-"]},"finetuner.tuner.dataset.helper":{get_dataset:[13,1,1,""]},"finetuner.tuner.keras":{KerasTuner:[14,3,1,""],datasets:[15,0,0,"-"],head_layers:[16,0,0,"-"]},"finetuner.tuner.keras.KerasTuner":{fit:[14,4,1,""],head_layer:[14,6,1,""],save:[14,4,1,""],wrapped_model:[14,5,1,""]},"finetuner.tuner.keras.datasets":{SiameseDataset:[15,3,1,""],TripletDataset:[15,3,1,""]},"finetuner.tuner.keras.head_layers":{CosineLayer:[16,3,1,""],HeadLayer:[16,3,1,""],TripletLayer:[16,3,1,""]},"finetuner.tuner.keras.head_layers.CosineLayer":{arity:[16,5,1,""],get_output:[16,4,1,""],loss_fn:[16,4,1,""],metric_fn:[16,4,1,""]},"finetuner.tuner.keras.head_layers.HeadLayer":{arity:[16,5,1,""],call:[16,4,1,""]},"finetuner.tuner.keras.head_layers.TripletLayer":{arity:[16,5,1,""],get_output:[16,4,1,""],loss_fn:[16,4,1,""],metric_fn:[16,4,1,""]},"finetuner.tuner.logger":{LogGenerator:[17,3,1,""]},"finetuner.tuner.logger.LogGenerator":{get_log_value:[17,4,1,""],get_statistic:[17,4,1,""],mean_loss:[17,4,1,""],mean_metric:[17,4,1,""]},"finetuner.tuner.paddle":{PaddleTuner:[18,3,1,""],datasets:[19,0,0,"-"],head_layers:[20,0,0,"-"]},"finetuner.tuner.paddle.PaddleTuner":{fit:[18,4,1,""],head_layer:[18,6,1,""],save:[18,4,1,""],wrapped_model:[18,6,1,""]},"finetuner.tuner.paddle.datasets":{SiameseDataset:[19,3,1,""],TripletDataset:[19,3,1,""]},"finetuner.tuner.paddle.head_layers":{CosineLayer:[20,3,1,""],TripletLayer:[20,3,1,""]},"finetuner.tuner.paddle.head_layers.CosineLayer":{arity:[20,5,1,""],get_output:[20,4,1,""],loss_fn:[20,4,1,""],metric_fn:[20,4,1,""]},"finetuner.tuner.paddle.head_layers.TripletLayer":{arity:[20,5,1,""],get_output:[20,4,1,""],loss_fn:[20,4,1,""],metric_fn:[20,4,1,""]},"finetuner.tuner.pytorch":{PytorchTuner:[21,3,1,""],datasets:[22,0,0,"-"],head_layers:[23,0,0,"-"]},"finetuner.tuner.pytorch.PytorchTuner":{fit:[21,4,1,""],head_layer:[21,6,1,""],save:[21,4,1,""],wrapped_model:[21,5,1,""]},"finetuner.tuner.pytorch.datasets":{SiameseDataset:[22,3,1,""],TripletDataset:[22,3,1,""]},"finetuner.tuner.pytorch.head_layers":{CosineLayer:[23,3,1,""],TripletLayer:[23,3,1,""]},"finetuner.tuner.pytorch.head_layers.CosineLayer":{arity:[23,5,1,""],get_output:[23,4,1,""],loss_fn:[23,4,1,""],metric_fn:[23,4,1,""]},"finetuner.tuner.pytorch.head_layers.TripletLayer":{arity:[23,5,1,""],get_output:[23,4,1,""],loss_fn:[23,4,1,""],metric_fn:[23,4,1,""]},finetuner:{fit:[0,1,1,""],helper:[1,0,0,"-"],labeler:[2,0,0,"-"],tailor:[4,0,0,"-"],toydata:[9,0,0,"-"],tuner:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","data","Python data"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:function","2":"py:data","3":"py:class","4":"py:method","5":"py:attribute","6":"py:property"},terms:{"0":[9,16,20,23,25,36,37],"00":36,"000":25,"00010502179":25,"002585097":25,"011804931":25,"028714137":25,"0e7ec5aa":25,"0e7ec7c6":25,"0e7ecd52":25,"0e7ece7":25,"1":[9,16,20,23,30,31,35,36],"10":[0,10,11,14,18,21,25,30],"100":[9,35],"109":36,"11ec":[25,35,36],"128":[30,31,36,37],"132":36,"135":36,"141":36,"172":36,"18":36,"19":36,"1bab":36,"1bae":35,"1e008a366d49":[25,35,36],"1f9f":25,"1faa":25,"2":[9,11,16,20,23,25,30,35,36,37],"2021":31,"22900":36,"231":36,"256":[0,10,11,14,18,21],"28":[30,36,37],"28x28":25,"3":[9,11,16,20,23,25,31,36,37],"31":36,"32":[30,35,36,37],"33":36,"3d":32,"4":25,"481":[9,25],"49":36,"5":[25,30],"5000":[30,35],"52621":36,"56":[9,36],"5716974480":36,"5794172560":35,"6":25,"60":25,"60000":9,"64":[30,35],"65":36,"67":36,"67432a92":25,"67432cd6":25,"7":[36,37],"70":32,"784x128x32":30,"9":36,"94":36,"99":32,"9a49":25,"abstract":[3,5,11],"case":32,"class":[3,5,6,7,8,11,12,14,15,16,17,18,19,20,21,22,23,25,30,35,36],"default":[30,31],"do":[11,14,18,21,25,29,31,32,34],"final":[32,35,36],"float":25,"function":[1,3,25],"import":[1,25,29,30,31,32,34,35,36,37],"int":[0,5,6,7,8,9,11],"new":[29,30,31,32],"public":[31,32,34,36],"return":[0,1,2,4,5,6,7,8,9,10,11,14,18,21,30,35],"static":17,"switch":37,"true":[0,1,9,25,30,31,35,36,37],"try":31,A:[11,18,26],And:32,As:31,At:31,But:[25,31],By:[30,31,34],For:[9,11,25,26,31],If:[9,25,32,35],In:[25,29,30,31,32,35,36,37],It:[1,5,6,7,8,9,25,29,30,31,32,34,35,37],On:31,One:[9,30],Or:32,That:[31,32],The:[1,5,6,7,8,9,11,14,21,25,31,32,35,36,37],Then:[25,32],There:[31,32],To:[5,6,7,8,25,31,34],With:32,_:[30,35],__init__:7,__module__:1,a207:36,a46a:25,a5dd3158:25,a5dd3784:25,a5dd3b94:25,a5dd3d74:25,aaaaaaaa:25,aaaaaaaaaaaaaa:36,aaaaaaaaaaaaaaaa:35,aaaaaaaaekaaaaaaaaawqaaaaaaaabpa:25,abc:[5,11],about:[25,31,32,34],ac8a:25,accept:[25,30,35,36],access:36,accompani:37,accord:[30,31],accuraci:[32,36],across:31,activ:[30,31,34,36,37],actual:[1,31],ad:32,add:[25,29],add_fit_data:3,addit:3,address:36,adjac:25,adopt:31,advanc:25,affect:[31,32],after:[5,6,7,8,25,29,31,32,34,35,36],ag:32,again:32,agnost:[31,37],ai:[31,32,34],aim:[31,34],alia:1,all:[5,6,7,8,9,11,18,29,31,37],allow:[11,14,18,21,25,31,32,34,37],alreadi:31,also:[30,31,32,35],alwai:[3,25],among:32,an:[5,6,7,8,11,18,26,29,30,31,32,34,37],anchor:[16,20,23],ani:[1,5,6,7,8,10,26,29,31,32,34,35,36,37],annot:31,answer:[25,32,35],anydataload:1,anydnn:[0,1,4,5,6,7,8,11],anymor:32,anyon:[32,34],anyth:25,api:[29,32,34],app:[32,34,37],append:25,appli:32,applic:[32,37],aqaaaaaaaaacaaaaaaaaaamaaaaaaaaa:25,ar:[3,11,14,18,21,25,31,32,35,36,37],ara:3,arbitari:31,arbitrari:31,architectur:[5,6,7,8,29,31,37],arg:[11,14,16,18,21],argu:34,argument:[3,30],ariti:[11,13,16,18,20,23],arity_model:[11,16,20,23],around:32,arrai:[1,25,35,36],articl:32,arxiv:32,attract:32,auf:25,auto:3,auxiliari:[11,14,18,21],avail:[5,6,7,8,36],avoid:3,awar:32,axi:9,b32d:35,b9557788:36,b:[9,25,26,31],baaaaaaaaaafaaaaaaaaaayaaaaaaaaa:25,back:31,backend:[34,36,37],bad:25,baidu:31,bar:35,base64:36,base:[0,1,3,4,6,7,8,10,12,14,15,16,17,18,19,20,21,22,23,35,36],basearitymodel:11,basedataset:[11,15,19,22],baseexecutor:3,basehead:[11,16,18,20,21,23],basetailor:[5,6,7,8],basetun:[11,14,18,21],batch:[5,6,7,8,26,30,31],batch_first:[30,35],batch_siz:[0,10,11,14,18,21,30],beautifulli:31,becam:32,becaus:25,becom:32,been:35,befor:[32,36],behav:34,behavior:31,behind:31,being:32,believ:32,beliv:32,below:[25,30,31,32,34],bert:32,besid:30,best:31,better:[11,14,18,21,31,32,34,35,36,37],between:[25,37],bidirect:35,big:31,bigger:9,bit:32,blank:32,blob:[25,35,36],block:32,blog:31,bonjour:25,bool:[0,1,5,6,7,8,9],bottleneck:31,brows:32,buffer:[25,35,36],build:[25,30,31,32],built:[25,32],butteri:37,button:32,c:[5,6,7,8,9],cach:[14,21],call:[11,14,16,18,21,25,29,30,31],callabl:1,cambridg:32,can:[5,6,7,8,9,25,29,30,31,32,34,35,36,37],carefulli:31,chain:[31,32],chanc:32,chang:[11,14,18,21,32],channel:[9,25],channel_axi:9,chapter:[25,32,34],chatbot:35,check:[5,6,7,8],china:31,chosen:31,clarifi:31,classic:32,classif:[26,31],clear_labels_on_start:[0,2,3],click:32,cloud:32,code:[31,35],codebas:25,colleagu:31,collect:[31,32,34],color:32,column:25,combin:25,come:[25,31],comfort:34,common:[31,32],commun:31,compani:32,compat:31,compli:31,complic:32,compon:[26,29,30,31,34],compos:34,comput:25,concept:31,conduct:[31,34],config:[3,11,14,18,21],consecut:[11,14,18,21],consid:[25,31],consist:[31,34],construct:[25,30],contain:[25,26],content:[24,25,26,31,32,34,35],context:[25,37],continu:32,contrari:31,converg:[35,36],convert:[5,6,7,8,25,26,31,35,36],copi:[11,36],core:[32,34],correctli:32,correspond:11,cosin:[3,25],cosinelay:[0,2,3,10,16,20,23,30],cost:[32,37],could:31,covid19:35,covidqa:35,cpp:36,creat:32,critic:32,csrc:36,csv:25,current:32,cut:31,d8aaaaaaaaeqaaaaaaaaaxa:25,d:[25,26,31],da1:25,da2:25,dai:32,dam_path:3,data:[1,5,6,7,8,9,11,14,17,18,21,22,26,30,31,34,37],dataiter:3,dataset:[0,10,14,18,21,25,35,36],dc315d50:35,debug:25,decis:[32,34],decompress:32,decor:[14,21],decoupl:32,deep:[1,25,31,32,34,37],def:[30,35],defacto:32,defin:[5,6,7,8],definit:31,deliv:[31,32,37],deliveri:[31,34],demo:25,dens:[5,25,29,30,35,36,37],depend:31,descript:30,design:[32,34],desir:29,despit:31,detect:[26,31],determin:31,develop:[31,32,34],dict:[1,3,5,6,7,8,10,11],differ:[11,14,18,21,25,31],dim:[30,35,36,37],dimens:[26,29],dimension:[5,6,7,8,35,37],direct:[30,35],directli:[25,31],displai:[4,5],dive:37,diversifi:31,dnn:[1,5,6,7,8,26,31,32],dnn_model:1,doc:[3,36],doctor:35,document:[1,9,25,26,30,31,35,36],documentarrai:[1,25,26,31,35,36],documentarraylik:[0,1],documentarraymemap:25,documentarraymemmap:[1,25,31,35,36],documentsequ:1,doe:[9,29,31,36],domain:32,don:32,done:[31,32,36],download:32,downstream:31,dtype:[25,35,36],dure:3,e:[9,25,31],each:[9,25,26,30,31],earlier:32,easi:32,easili:34,ecosystem:[31,32,34],edg:32,effect:32,effort:31,either:[25,30],emb:3,embed:[1,5,6,7,8,25,26,29,30,31,32,34,37],embed_model:[2,10,11,14,18,21,30,31,35,36,37],embedding_dim:[30,35],embedding_lay:[5,6,7,8],end:31,endli:31,endpoint:3,engin:32,enjoi:34,enlarg:31,enough:32,enpow:1,entrypoint:31,enviro:32,epoch:[0,10,11,14,18,21,30],equal:31,est:31,establish:32,eval_data:[0,10,11,14,18,21,30],evalu:[25,30],everi:[25,30,32,35,36],everyth:32,exactli:31,exampl:[9,11,26,31,35,36,37],exchang:31,executor:[0,2,32,36],exist:[30,31,32],expect:[3,9,32],experi:[31,37],explain:32,expos:[31,32],exposur:31,express:25,extend:25,exteremli:32,extra:3,extrem:[31,32],f4:36,f8:25,factor:9,fail:3,fals:[0,2,3,4,5,6,7,8,9,25],familiar:32,fashion:[9,36,37],featur:[32,37],feed:[3,25,30,35,36,37],feedback:[25,32,35,36],feel:[31,34],fetch:32,few:31,fewer:32,field:[3,5,6,7,8],file:32,fill:[3,25,26,31,32,35],find:29,finetun:[25,26,29,30,31,34],first:[31,32,35,36],fit:[0,2,3,10,11,14,18,21,25,26,29,31,34,35,36,37],fix:[9,25,31],flatten:[30,36,37],flexibl:31,float32:[0,4,5,6,7,8],flow:[31,36],fly:[25,31],follow:[25,29,30,31,32,35,36,37],form:31,format:[30,31,35,36],forward:[11,30,35],forwardref:0,found:32,four:25,framework:[1,31,35,36,37],freez:[0,4,5,6,7,8,29,37],freeze_lay:31,from:[3,5,6,7,8,25,29,30,31,32,34,35,36,37],frontend:[25,37],ft:[31,34],ftexecutor:3,full:32,fulli:31,funnel:31,fuse:[11,18],g:9,gap:31,gener:[5,6,7,8,9,25,26,29,30,31,32,34,35,36],general_model:31,generate_fashion_match:[9,25,30,36,37],generate_qa_match:[9,25,30,35],get:[5,9,11,14,18,21,31,32,35,36,37],get_dataset:13,get_embed_model:3,get_framework:1,get_log_valu:17,get_output:[11,16,20,23],get_statist:17,give:[1,9,31,34],given:[26,29,30,31,36],global:32,good:[25,31,32],goodby:25,googl:32,grai:9,grammar:32,graph:25,grayscal:[9,25],groundtruth:25,h236cf4:25,h:9,ha:[25,31,34],had:32,hallo:25,hand:32,handl:31,hanxiao:36,happen:31,have:[9,31,32,35,37],head:[11,14,18,21],head_lay:[0,2,3,10,11,14,18,21,30],headlay:[14,16],heavi:32,hello:[25,35,36],helper:[0,10,11,12,24],henc:[25,31],here:[25,30,31,32,34],hf:32,high:[29,31,32,34],highlight:32,hopefulli:[35,36],how:[25,31,32,34,37],howev:[25,32],http:36,hub:32,huggingfac:[29,31,32],human:[31,32],i8:[25,35],i:[25,31,32,34,36],id:[25,35,36],idea:[1,32],ident:37,illustr:25,imag:[9,25,26,30,31],imaga:9,implement:[1,30,31],impli:34,improv:[25,32,35,36,37],in_featur:[30,35,36,37],includ:[25,29],incorp:32,independ:[31,32],index:37,influr:32,info:[5,6,7,8,25],inform:1,initi:31,inject:3,input:[1,5,6,7,8,11,15,19,22,25,26,31],input_dim:[30,35],input_dtyp:[0,4,5,6,7,8],input_s:[0,4,5,6,7,8],input_shap:[30,36,37],insid:[31,32,34],inspir:31,instal:37,instanc:25,integ:[1,5,6,7,8,9],integr:37,interact:[0,25,31,34,37],interest:31,interfac:[31,32],intern:36,introduc:25,intuit:37,invok:31,io:19,irrelev:31,is_seq_int:1,is_testset:[9,30],item:25,iter:[1,29],its:[25,31,32,36],itself:29,ivborw0k:36,jina:[1,3,25,32,34,35,36,37],job:31,just:32,k:[32,35,36],keep:32,kei:[1,30],kera:[0,1,4,10,29,30,31,34,35,36,37],kerastailor:6,kerastun:14,keyboard:[35,36],keyword:3,knowledg:32,kwarg:[2,3,4,10,11,14,16,18,21,30,31],label:[0,9,11,14,18,21,24,26,30,34,37],labeled_dam_path:3,lambda:30,landscap:[31,32,34],languag:25,last:[5,6,7,8,29,31,34,37],lastcel:[30,35],later:[31,32,34],latest:31,layer:[1,5,6,7,8,11,14,16,18,21,29,30,31,35,36,37],layer_nam:[0,4,5,6,7,8],layerinfotyp:1,learn:[25,31,34,37],least:25,left:35,length:[9,25],less:[31,32],let:[31,32,35,36,37],level:[29,31,32,34],leverag:[31,32],like:[25,26],linear:[30,35,36,37],liner:37,linux:37,list:[1,5,6,7,8],liter:32,load:32,loader:1,local:36,localhost:36,loggener:17,logger:[0,10],logic:25,look:[31,32,34,35,36],loss:[1,17,36],loss_fn:[11,16,20,23],lvalu:[16,20,23],m1:25,m2:25,m3:25,m:25,machin:32,maco:37,made:25,mai:[31,32,34,36],maintain:31,major:31,make:[31,32,36,37],manag:31,mandatori:31,mani:32,manner:34,manual:[25,29],map:3,margin:[16,20,23],match:[9,26,30],max_seq_len:9,maxim:31,maximum:9,me:[31,32],mean:[25,31,35,36],mean_loss:17,mean_metr:17,meant:[31,32,34],memmap:1,mention:32,mesh:32,meta:3,metric:[1,3,17],metric_fn:[11,16,20,23],micro:[29,31],microsoft:32,mile:[31,34,37],mime_typ:25,minor:31,minut:32,mission:32,mlp:[35,37],mnist:[9,36,37],model:[0,1,4,5,6,7,8,11,14,18,21,25,26,29,30,31,32,34,37],modul:[24,30,35,37],mond:25,monet:32,more:[25,31,37],most:[31,32,34],mostli:31,motiv:32,mous:[32,35,36],movi:31,multi:11,multipl:[11,14,18,21],multipli:32,must:[9,30,31,34],my:[31,32,34],myself:32,n:32,name:[1,5,6,7,8,17],nativ:32,natuar:32,ndarrai:[9,25,26,31],nearest:25,need:[7,11,14,18,21,25,29,31,32,37],neg:[9,16,20,23,25,30,37],neg_valu:9,neighbour:25,network:[1,11,25,31,34,36,37],neural:[1,25,31,32,34,37],next:[3,26,31,32],nich:32,nn:[18,20,23,30,35,36,37],non:36,none:[0,2,3,4,5,6,7,8,9,10,11,14,16,18,20,21,23],note:[5,6,7,8,11,14,18,21,25,35,36],noth:[31,32],nov:31,now:[25,32,35,36,37],nowher:32,np:25,num_embed:[30,35],num_neg:[9,30,37],num_po:[9,30,37],num_tot:9,number:[9,25,30],numpi:[25,36],object:[1,11,12,14,17,18,21,25,26,31,35,36],observ:31,obviou:32,often:[25,31,32],okayish:32,one:[11,14,18,21,25,30,31,32,34,37],onli:[25,31,32],oper:[29,31],option:[0,5,6,7,8,9,29,31],organ:25,origin:[5,6,7,8,25],other:[25,31,32],otherwis:25,our:[31,32,35,36],out:[30,32,35],out_featur:[30,35,36,37],output:[5,6,7,8,26,29,31],output_dim:[0,4,5,6,7,8,30,31,35],over:29,own:25,packag:24,pad:35,paddl:[0,1,4,10,30,31,34,35,36,37],paddlepaddl:37,paddletailor:[5,6,7,8],paddletun:18,page:32,paper:32,paragraph:[31,32,34],param:3,paramet:[1,3,5,6,7,8,9],parent:25,part:[5,6,7,8,32,34],partial:31,particular:[25,31,32],pass:3,peopl:[31,32],per:[9,25],perform:[31,32,37],philosophi:34,pictur:32,pip:37,pipelin:[31,32,35,36],place:[11,14,18,21],plain:25,pleas:[31,32,34],plu:32,png:36,point:32,popular:[31,32],port_expos:[0,2],pos_valu:9,pose:32,posit:[9,16,20,23,25,30,31,34,37],possibl:[5,6,7,8],post:[31,32],postiv:25,potenti:32,power:37,preachitectur:31,precis:[35,36],pred_val:[11,16,20,23],predict:[26,31],prefix:17,prepar:25,press:31,pretrain:[30,31,32],previou:31,primit:25,print:25,prioriti:32,privat:36,probabl:32,problem:32,procedur:[32,35,36],process:25,produc:[35,36],product:[32,37],program:36,project:[31,32,34],promis:37,promot:31,properti:[5,11,14,18,21],protect:36,protocol:36,provid:[25,29,31,32,34],publish:[31,32,34],purpos:[25,32],py:36,python:37,pytorch:[0,4,9,10,29,30,31,32,34,35,36,37],pytorchtailor:[5,6,7,8],pytorchtun:21,qa:[9,35],qualiti:[31,35,36],quantiti:31,question:[25,32,35],quickli:32,r:31,rais:36,randomli:25,re:37,reach:[32,34],read:[31,34],readi:[32,36],real:9,rearrang:32,reason:32,redoc:36,reduc:[31,37],reduct:37,refer:30,reflect:25,regress:[26,31],reject:[35,36],relat:25,releas:31,relev:25,reli:25,relu:[30,36,37],remain:29,rememb:[35,36],remov:[5,6,7,8,29],render:35,repeat:32,replic:[11,18],repres:25,represent:31,request:3,requir:[5,6,7,8,31],rescal:9,research:32,respons:[31,32],rest:36,restrict:26,result:[31,32,35,36],retrain:32,revis:[31,32,34],rgb:9,rich:[31,37],round:[35,36],row:25,runtim:3,runtime_arg:3,runtime_backend:[0,2],rvalu:[16,20,23],s:[25,31,32,35,36,37],said:31,same:[25,26,30,32,34,35,36],sampl:[25,31],save:[11,14,18,21,32],scale:9,schedul:31,score:25,scratch:[29,31,32,34],search:[25,31,32,34,35,36,37],section:[31,32,34],see:[5,6,7,8,32,36],seen:31,select:[29,31,35],self:[30,35],semant:35,sens:32,sentenc:25,sequenc:[1,5,6,7,8,9,26,31],sequenti:[30,35,36,37],serv:31,set:[5,6,7,8,9,30,32,35,36,37],sever:[35,36],shall:[31,32],shape:[5,6,7,8,25,26,35,36],share:[25,31,32,34],shot:25,should:[9,25,31,32,34],show:31,siames:[11,37],siamesedataset:[15,19,22],siamesemixin:[12,15,19,22],similar:[31,35,36],simpl:[31,32],simpli:[25,31],simul:9,singl:[25,34],size:[5,6,7,8,26,31],slide:31,smooth:37,so:[25,31,32,35,36],soldier:31,solid:1,solut:32,solv:[32,34],some:[25,31,32,34],sometim:31,sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,31],specif:31,speed:31,spy:31,start:25,step:[30,32,36],stick:34,still:32,store:[11,14,18,21,25,35],store_data:3,str:[0,1,5,6,7,8,10],strong:[31,32],structur:31,stuck:32,submodul:24,subpackag:24,summar:31,summari:[5,6,7,8,25],suppli:[31,32],support:[34,36],supposedli:36,suppress:36,sure:37,swagger:36,synergi:32,syntax:32,synthet:[9,25,37],t:32,tabl:5,tag:[25,26,35,36],tailor:[0,1,24,25,26,34],take:[31,32],take_batch:3,taken:25,talk:[31,32],target_v:[11,16,20,23],task:[25,31,32,35,36,37],tell:[1,35],tensor:[5,6,7,8,36],tensor_numpi:36,tensorflow:[16,30,32,35,36,37],term:31,test:9,text:[9,25,26,31],textur:32,tf:[30,35,36,37],than:[25,31],thei:[11,14,18,21,32,34],them:[25,31,32,35,36],thi:[1,7,11,14,18,21,25,30,31,32,34,35,36,37],thing:[29,32],think:32,those:[25,32],though:32,thought:[31,32,34],thread:[0,2],three:30,time:[11,14,18,21,25,32],tinker:31,to_embedding_model:[0,4,5,6,7,8,29],to_ndarrai:9,todai:32,token:[9,25,26,31],too:32,tool:32,top:[32,35,36],torch:[1,22,23,30,35,36,37],total:9,toydata:[0,24,25,30,35,36,37],tp:1,train:[25,26,30,31,32,34,35,36],train_data:[0,2,10,11,14,18,21,30,31,35,36],trainer:36,transform:30,trigger:36,trim:[31,34],triplet:[11,37],tripletdataset:[15,19,22],tripletlay:[16,20,23,30],tripletmixin:[12,15,19,22],truncat:31,tune:[11,14,18,21,25,31,32,34,35,36,37],tuner:[0,1,24,25,26,29,34],tunerreturntyp:[0,1],tupl:[0,5,6,7,8],two:[25,31,32],type:[0,1,2,4,5,6,7,8,9,10,11,14,18,21,25,35,36],typevar:1,ui:[31,34,35,36],underli:36,understand:[31,34],unfold:32,unifi:31,union:1,univers:32,unlabel:26,unlik:[31,34],unlock:37,up:[31,32,35,36,37],upsampl:9,upstream:31,uri:36,us:[1,5,6,7,8,25,29,30,31,32,34,35,36],user:[31,32,34,36,37],userwarn:36,util:[22,36],valid:[25,32],valu:[3,9,25,31,32],valueerror:1,vector:[30,31,35,36,37],veri:32,via:[30,31,34],view:35,visual:36,vs:32,w:9,wa:32,wai:[25,31,32,37],want:[32,35,36,37],warn:36,we:[9,25,30,31,32,35,36,37],web:25,websit:32,weight:[5,6,7,8,11,14,18,21,30,31,37],well:32,welt:25,what:[31,32,34],when:[3,5,6,7,8,25,32,34],where:[25,26,31,32],wherea:25,which:[25,29,31,35],whole:32,why:31,wide:31,wiedersehen:25,wish:32,without:1,word:32,work:[31,32,37],world:25,would:32,wrap:[11,18],wrapped_model:[11,14,18,21],write:[30,35,36,37],writeabl:36,written:[29,30],wrong_answ:[25,35],x:[9,26,30,31,35],yahaha:32,yaml:3,ye:[25,32],year:32,yet:[32,37],yield:[35,36],you:[5,6,7,8,25,29,32,35,36,37],your:[25,31,35,37],zero:32,zip:32,zoo:[29,31],zoom:32},titles:["finetuner package","finetuner.helper module","finetuner.labeler package","finetuner.labeler.executor module","finetuner.tailor package","finetuner.tailor.base module","finetuner.tailor.keras package","finetuner.tailor.paddle package","finetuner.tailor.pytorch package","finetuner.toydata module","finetuner.tuner package","finetuner.tuner.base module","finetuner.tuner.dataset package","finetuner.tuner.dataset.helper module","finetuner.tuner.keras package","finetuner.tuner.keras.datasets module","finetuner.tuner.keras.head_layers module","finetuner.tuner.logger module","finetuner.tuner.paddle package","finetuner.tuner.paddle.datasets module","finetuner.tuner.paddle.head_layers module","finetuner.tuner.pytorch package","finetuner.tuner.pytorch.datasets module","finetuner.tuner.pytorch.head_layers module","finetuner","Data Format","Glossary","&lt;no title&gt;","Labeler","Tailor","Tuner","Decisions","Philosophy","&lt;no title&gt;","Overview","Finetuning Bi-LSTM on Text","Finetuning MLP on Image","Welcome to Finetuner!"],titleterms:{"1":25,Is:25,One:34,agnost:34,all:25,api:31,argument:31,backend:31,backstori:32,base:[5,11],bi:[29,35],bidirect:30,build:[35,36],content:[0,2,4,6,7,8,10,12,14,18,21],convert:29,covid:[25,30],data:[25,35,36],dataset:[12,13,15,19,22],decis:31,deliveri:32,design:31,dl:31,embed:[35,36],exampl:[25,29,30],executor:3,experi:34,fashion:[25,30],field:25,finetun:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,32,35,36,37],fit:30,flexibl:34,format:25,framework:34,glossari:26,have:25,head_lay:[16,20,23],helper:[1,13],imag:36,interact:[35,36],interfac:34,jina:31,kera:[6,14,15,16],label:[2,3,25,28,31,35,36],last:32,learn:32,liner:34,logger:17,lstm:[29,30,35],manag:34,match:25,method:[29,30],mile:32,minimum:[31,34],mlp:[29,30,36],mnist:[25,30],model:[35,36],modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],okai:25,overview:34,packag:[0,2,4,6,7,8,10,12,14,18,21],paddl:[7,18,19,20],philosophi:32,pillar:[31,34],posit:32,prepar:[35,36],put:[35,36],pytorch:[8,21,22,23],qa:[25,30],quick:37,relationship:31,requir:25,simpl:[29,30],singl:31,sourc:25,start:37,submodul:[0,2,4,10,12,14,18,21],subpackag:[0,4,10],summari:31,supervis:25,support:31,tailor:[4,5,6,7,8,29,31],text:35,three:[31,34],togeth:[35,36],toydata:9,transfer:32,tune:30,tuner:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,30,31],understand:25,vgg16:29,welcom:37,why:32}})