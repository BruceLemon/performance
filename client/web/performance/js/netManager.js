//网络和协议通讯管理
(function () {
    "use strict";
    function NetManager() {
        this.flagC = true;

        this.ipTest = "222.92.218.141";             //测试服务器
        this.ipTestLocal = "192.168.88.65";         //测试服务器（内网）  2008&wjrcb
        this.ipTestFormal = "mmptj.wjrcb.com";      //模拟正式服(提交机，模拟正式mbi数据)
        this.ipTestFormalLocal = "192.168.55.87";   //模拟正式服（内网）(提交机，模拟正式mbi数据)
        this.ipFormal = "mmp.wjrcb.com";            //正式服
        this.ipFormalLocal = "192.168.55.86";       //正式服（内网）
        this.ipFormalJex = "https://jex.wjrcb.com:18001/APIM/a";                      //锦e行2代正式服
        this.ipTestJex = "http://222.92.218.140:15001/APIM/a";                      //锦e行2代测试服
        // this.processBankLocal = "http://222.92.218.141:18080/hoyi/ysaf.wf.wkitem.cptWorkitem.getWorkitemsTodoCount4App.biz.ext?username=admin";       //流程银行登陆接口地址

        if(useLocalAddress){
            this.ip = this.ipTestFormalLocal;                //当前ip地址
        }else{

            this.ip = this.ipTest;                //当前ip地址

            // this.ip = this.ipTestFormal;                //当前ip地址
            this.ip = this.ipTest;

        }

        this.port = "8080";
        this.noticePort="8081";         // 获取服务器额外信息端口
        var urlParam= window.location.search.substring(1);
        // var loc = urlParam.substring(urlParam.lastIndexOf('=')+1, urlParam.length);
        var loc = urlParam.split("&");
        var urlData ={};
        for (var i=0;i<loc.length;i++) {
            var pair = loc[i].split("=");
            urlData[pair[0]] = pair[1];
        }
        // alert("全部11"+JSON.stringify(urlData,null,4))
        // this.dah = urlData.userId;
        // this.sfz = "";
        this.inst_no = urlData.inst_no;
        this.inst_verify = urlData.inst_verify;
        this.inst_id = urlData.inst_id;
        this.userDada = urlData;
        // alert("全部11"+JSON.stringify(this.userDada,null,4))
        // setTimeout(function () {
        //     alert(context.secureGetString("TokenName"))
        // },1000)

    }

    NetManager.prototype = {
        //测试服IP
        getIPTest:function(){
            var ip = window.NetManager.ipTest;
            if(useLocalAddress){
                 ip =window.NetManager.ipTestLocal;
            }
            return ip;
        },
        //模拟正式服IP
        getIPTestFormal:function () {
            var ip = window.NetManager.ipTestFormal;
            if(useLocalAddress){
                ip =window.NetManager.ipTestFormalLocal;
            }
            return ip;
        },
        //正式服IP
        getIPFormal:function(){
            var ip = window.NetManager.ipFormal;
            if(useLocalAddress){
                ip =window.NetManager.ipFormalLocal;
            }
            return ip;
        },
        setServerIp:function(serverIp){

            window.NetManager.ip = serverIp;
            AppOp.setAppData(Constants.AppSaveName.ServerIp,serverIp);
        },
        //http消息请求
        httpReq:function(reqName,jsonData1,successCb,failCb){
            var self = this;

            /*AppOp.getAppData(Constants.AppSaveName.AccountAutoTokenChanging,function(accountAutoTokenChanging){
                // "true"+apploginBySSO
                if(accountAutoTokenChanging !== "true" || reqName === Constants.HttpReqName.AppLoginWithoutLogin){
                    AppOp.getAppData(Constants.AppSaveName.AccountToken,function(tokenVal){
                        self.doHttpReq(tokenVal,reqName,jsonData,successCb,failCb);
                    });
                }
            });*/
            var jsonData = {};
            var jsonData1 = JSON.stringify(jsonData1)
            jsonData.foo = "a";
            jsonData.f = "ncrestF";
            jsonData.session_provider = "infinispan_based";
            jsonData.session_token = "";
            jsonData.req_type = "rf";
            jsonData.req_id = reqName;
            jsonData.inst_id = self.inst_id;
            jsonData.inst_verify = self.inst_verify;
            jsonData.inst_no = self.inst_no;
            jsonData.enc_code = "";
            jsonData.enc = jsonData1;
            jsonData.enc_type = "crypt";
            jsonData.encdata = "";
            // log("!!"+JSON.stringify(jsonData,null,4))
            self.doHttpReq2(reqName,jsonData,successCb,failCb );
        },
        //http消息请求
        httpReqH:function(reqName,jsonData1,successCb,failCb){
            var self = this;

            /*AppOp.getAppData(Constants.AppSaveName.AccountAutoTokenChanging,function(accountAutoTokenChanging){
                // "true"+apploginBySSO
                if(accountAutoTokenChanging !== "true" || reqName === Constants.HttpReqName.AppLoginWithoutLogin){
                    AppOp.getAppData(Constants.AppSaveName.AccountToken,function(tokenVal){
                        self.doHttpReq(tokenVal,reqName,jsonData,successCb,failCb);
                    });
                }
            });*/
            var jsonData = {};
            var jsonData1 = JSON.stringify(jsonData1)
            jsonData.foo = "a";
            jsonData.f = "ncrestF";
            jsonData.session_provider = "infinispan_based";
            jsonData.session_token = "";
            jsonData.req_type = "rf";
            jsonData.req_id = reqName;
            jsonData.inst_id = self.inst_id;
            jsonData.inst_verify = self.inst_verify;
            jsonData.inst_no = self.inst_no;
            jsonData.enc_code = "";
            jsonData.enc = jsonData1;
            jsonData.enc_type = "crypt";
            jsonData.encdata = "";
             log("!!"+JSON.stringify(jsonData,null,4))
            self.doHttpReqH(reqName,jsonData,successCb,failCb );
        },
        //信贷消息请求
        httpReqS:function(reqName,jsonData1,successCb,failCb){
            var self = this;

            /*AppOp.getAppData(Constants.AppSaveName.AccountAutoTokenChanging,function(accountAutoTokenChanging){
                // "true"+apploginBySSO
                if(accountAutoTokenChanging !== "true" || reqName === Constants.HttpReqName.AppLoginWithoutLogin){
                    AppOp.getAppData(Constants.AppSaveName.AccountToken,function(tokenVal){
                        self.doHttpReq(tokenVal,reqName,jsonData,successCb,failCb);
                    });
                }
            });*/
            var jsonData = {};
            var jsonData1 = JSON.stringify(jsonData1)
            jsonData.foo = "a";
            jsonData.f = "ncrestF";
            jsonData.session_provider = "infinispan_based";
            jsonData.session_token = "";
            jsonData.req_type = "rf";
            jsonData.req_id = reqName;
            jsonData.inst_id = self.inst_id;
            jsonData.inst_verify = self.inst_verify;
            jsonData.inst_no = self.inst_no;
            jsonData.enc_code = "";
            jsonData.enc = jsonData1;
            jsonData.enc_type = "crypt";
            jsonData.encdata = "";
            // log("!!"+JSON.stringify(jsonData,null,4))
            self.doHttpReqS(reqName,jsonData,successCb,failCb );
        },
        buildService: function (SvcCd, SvcScn,bodyObj) {
            var self=this;
            // <Head>
            //     <SvcCd>50013000009</SvcCd><!-- 50012000005:处理流程（提交，否决，退回）服务  50013000009 查询服务 -->
            //     <SvcScn>07</SvcScn> <!-- 不同请求对应编号不同，详见代码  -->
            //     <CnlTp>02060000</CnlTp><!-- 渠道类型 固定-->
            //     <CnsmrSysId>101100</CnsmrSysId><!--消费方系统编号 固定-->
            //
            //
            //     <!-- S101100固定 ；181023111143531时间(yyyyMMddHHmmssSSS)；00000001:八位数字累加（累加数存server端jvm缓存，用意不明是否有约定规则，若仅仅区别唯一，可以用8位uuid） -->
            //     <CnsmrSeqNo>S10110018102311114353100000001</CnsmrSeqNo>
            //     <!-- G101100固定 ；181023111143531时间(yyyyMMddHHmmssSSS)；00000001:八位数字累加（累加数存server端jvm缓存，用意不明是否有约定规则，若仅仅区别唯一，可以用8位uuid） -->
            //     <BsnSeqNo>G10110018102311114353100000001</BsnSeqNo>
            //     <TxnDt>20181023</TxnDt><!--日期 yyyyMMdd -->
            //     <TxnTm>111143</TxnTm> <!--日期 HHmmss -->
            //     <FileFlg>0</FileFlg> <!-- 固定值-->
            //     </Head>

            var Head = {};
            Head.SvcCd = SvcCd;
            Head.SvcScn = SvcScn;
            Head.CnlTp = Constants.serverReqConstant.serviceCnlTp;
            Head.CnsmrSysId = Constants.serverReqConstant.serviceCnsmrSysId;

            //2018102311114866
            var timeStr = self.timeStamp2String();
            // year = year.substr(2,4);
            //1e4bb232
            var uuid =  self.uuid();
            Head.CnsmrSeqNo = "S" + Constants.serverReqConstant.CNSMR_SYS_ID + timeStr.substr(2,timeStr.length) + uuid;
            Head.BsnSeqNo = "G" + Constants.serverReqConstant.CNSMR_SYS_ID + timeStr.substr(2,timeStr.length) + uuid;
            Head.TxnDt = timeStr.substr(0,8);//20181023
            Head.TxnTm = timeStr.substr(8,6);//111143
            log("timeStr:"+timeStr);
            log("TxnTm:"+Head.TxnTm);
            Head.FileFlg = Constants.serverReqConstant.serviceFileFlg;

            var Service = {};
            Service.Head = Head;
            Service.Body = bodyObj;

            var serviceObj = {};
            serviceObj.service = Service;
            return serviceObj;

        }, uuid : function () {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 8; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }

            var uuid = s.join("");
            return uuid;

        }, timeStamp2String: function () {

            var time = new Date().getTime()
            var datetime = new Date();
            datetime.setTime(time);
            var year = datetime.getFullYear();


            var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
            var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
            var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
            var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
            var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
            var millSec = datetime.getMilliseconds();
            var millSecStr = "" + millSec;
            if (millSec < 10) {
                millSecStr = "00" + millSec;
            } else if (millSec >= 10 && millSec < 100) {
                millSecStr = "0" + millSec;
            }
            //var ss = year + "" + month + "" + date+""+hour+""+minute+""+second+"-"+millSecStr+"--"+ uuid();
            var ss = year + "" + month + "" + date + "" + hour + "" + minute + "" + second + "" + millSecStr;
            return ss;
        },

        //webservice网络请求
        doHttpReq2:function(reqName,jsonData,successCb,failCb){
            var self = this;
            /*if(token === null || token === undefined){
             token = "";
             }
             jsonData.token = token;*/

            // jsonData = JSON.stringify(jsonData);log("数据"+JSON.stringify(jsonData,null,4))

            // var url = "http://222.92.218.140:15001/APIM/a";
            // var url = "https://jex.wjrcb.com:18001/APIM/a";//正式地址
            // log("数据"+JSON.stringify(jsonData,null,4))
            // myApp.alert("reqName:"+reqName+" jsonData:"+jsonData);
            // alert(url);
            // log("json报文体"+JSON.stringify(jsonData, null, 4));
            $.ajax({
                type : 'POST',
                dataType: 'json',
                data : jsonData,
                async : true,
                url : self.ipTestJex,//测试服地址
                // url : self.ipFormalJex,//正式服地址
                // timeout: 10000,
                success : function(msg){
                    //log("msg"+JSON.stringify(msg, null, 4));
                    if (msg.status === "SUCCESS") {
                        // log("内容333"+JSON.stringify(msg, null, 4));
                        // error(JSON.stringify(msg));
                        // log("请求"+reqName+"成功!");
                        // log(reqName+"内容："+JSON.stringify(text.data, null, 4));
                        if(msg.data.status === "111111"){
                            if(msg.data.enc == null){
                               return;
                            }
                            var jData = $.parseJSON(msg.data.enc);
                         //   log("内容222"+JSON.stringify(jData, null, 4));
                            var jsonResp = Common.getValArr(jData.Body);
                          //  log("内容444"+JSON.stringify(jsonResp, null, 4));
                            // var resultJson = Common.getValArr(jsonResp[0]);
                            // var jjData = $.parseJSON(resultJson[0]);
                            //  log("jsonResp"+JSON.stringify(jsonResp, null, 4));
                            successCb(jsonResp);
                        }else{
                            successCb("");
                        }
                    } else {
                        error(msg.data.enc);
                        if(_.isFunction(failCb)){
                            failCb(msg.data.enc);
                        }

                    }
                },
                error :  function (jqXHR, textStatus, errorThrown) {
                    // myApp.alert("请求"+reqName+"失败-error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                    if(_.isFunction(failCb)){
                        failCb("请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                    }
                    error("请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                },
                complete : function() {
                }
            });
        },
        //信贷请求网络请求
        doHttpReqS:function(reqName,jsonData,successCb,failCb){
            var self = this;
            /*if(token === null || token === undefined){
             token = "";
             }
             jsonData.token = token;*/

            // jsonData = JSON.stringify(jsonData);log("数据"+JSON.stringify(jsonData,null,4))

            // var url = "http://222.92.218.140:15001/APIM/a";
            // var url = "https://jex.wjrcb.com:18001/APIM/a";//正式地址

            // log("数据"+JSON.stringify(jsonData,null,4))
            // myApp.alert("reqName:"+reqName+" jsonData:"+jsonData);
            // alert(url);
            // log("json报文体"+JSON.stringify(jsonData, null, 4));
            $.ajax({
                type : 'POST',
                dataType: 'json',
                data : jsonData,
                async : true,
                url : self.ipTestJex,//测试服地址
                // url : self.ipFormalJex,//正式服地址
                // timeout: 10000,
                success : function(msg){
                   // log("msg"+JSON.stringify(msg, null, 4));
                    if (msg.status === "SUCCESS") {
                        // log("内容333"+JSON.stringify(msg, null, 4));
                        // error(JSON.stringify(msg));
                        // log("请求"+reqName+"成功!");
                        // log(reqName+"内容："+JSON.stringify(text.data, null, 4));
                        if(msg.data.status === "111111"){
                            if(msg.data.enc == null){
                                return;
                            }
                            var jData = $.parseJSON(msg.data.enc);
                            // log("内容222"+JSON.stringify(jData, null, 4));
                            var jsonResp = jData.data;
                             // log("内容444"+JSON.stringify(jsonResp, null, 4));
                            // var resultJson = Common.getValArr(jsonResp[0]);
                            // var jjData = $.parseJSON(resultJson[0]);
                            //  log("jsonResp"+JSON.stringify(jsonResp, null, 4));
                            successCb(jsonResp);
                        }else{
                            successCb("");
                        }
                    } else {
                        error(msg.data.enc);
                        if(_.isFunction(failCb)){
                            failCb(msg.data.enc);
                        }

                    }
                },
                error :  function (jqXHR, textStatus, errorThrown) {
                    // myApp.alert("请求"+reqName+"失败-error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                    if(_.isFunction(failCb)){
                        failCb("请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                    }
                    error("请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                },
                complete : function() {
                }
            });
        },
        //http接口网络请求
        doHttpReqH:function(reqName,jsonData,successCb,failCb){
            var self = this;
            /*if(token === null || token === undefined){
             token = "";
             }
             jsonData.token = token;*/

            // jsonData = JSON.stringify(jsonData);log("数据"+JSON.stringify(jsonData,null,4))

            // var url = "http://222.92.218.140:15001/APIM/a";//测试地址
            // var url = "https://jex.wjrcb.com:18001/APIM/a";//正式地址


            // log("数据"+JSON.stringify(jsonData,null,4))
            // myApp.alert("reqName:"+reqName+" jsonData:"+jsonData);
            // alert(url);
             //log("json报文体"+JSON.stringify(jsonData, null, 4));
            $.ajax({
                type : 'POST',
                dataType: 'json',
                data : jsonData,
                async : true,
                url : self.ipTestJex,//测试服地址
                // url : self.ipFormalJex,//正式服地址
                // timeout: 10000,
                success : function(msg){
                    // log("msg"+JSON.stringify(msg, null, 4));
                    if (msg.status === "SUCCESS") {
                        // log("内容333"+JSON.stringify(msg, null, 4));
                        // error(JSON.stringify(msg));
                        // log("请求"+reqName+"成功!");
                        // log(reqName+"内容："+JSON.stringify(text.data, null, 4));
                        if(msg.data.status === "111111"){
                            if(msg.data.enc == null){
                                return;
                            }
                            var jData = $.parseJSON(msg.data.enc);
                            // log("内容222"+JSON.stringify(jData, null, 4));
                            var jsonResp = jData.service;
                            log("内容444"+JSON.stringify(jsonResp, null, 4));
                            // var resultJson = Common.getValArr(jsonResp[0]);
                            // var jjData = $.parseJSON(resultJson[0]);
                            //  log("jsonResp"+JSON.stringify(jsonResp, null, 4));
                            successCb(jsonResp);
                        }else{
                            successCb("");
                        }
                    } else {
                        error(msg.data.enc);
                        if(_.isFunction(failCb)){
                            failCb(msg.data.enc);
                        }

                    }
                },
                error :  function (jqXHR, textStatus, errorThrown) {
                    // myApp.alert("请求"+reqName+"失败-error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                    if(_.isFunction(failCb)){
                        failCb("请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                    }
                    error("请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                },
                complete : function() {
                }
            });
        },

        doHttpReq:function(token,reqName,jsonData,successCb,failCb){
            var self = this;
            if(token === null || token === undefined){
                token = "";
            }
            jsonData.token = token;

            jsonData = JSON.stringify(jsonData);

            var url = 'http://'+window.NetManager.ip+':'+window.NetManager.port+'/mbi/'+reqName+'.nut';
            // alert("reqName:"+reqName+" jsonData:"+jsonData);
            // alert(url);
            $.ajax({
                type : 'POST',
                dataType: 'json',
                data : jsonData,
                async : true,
                url : url,
                // timeout: 10000,
                success : function(msg){
                    if (msg.success === true) {
                        // error(JSON.stringify(msg));
                        // log("请求"+reqName+"成功!");
                        // log(reqName+"内容："+JSON.stringify(text.data, null, 4));
                        if(msg.hasOwnProperty("data")){
                            successCb(msg.data);
                        }else{
                            successCb("");
                        }
                    } else {
                        error(msg.data);
                        if(_.isFunction(failCb)){
                            failCb(msg.data);
                        }
                        if(msg.data.errorCode === Constants.errorCode_100){      //100 通用操作的提示
                            if(msg.data.errorDesc !== ""){
                                myApp.alert(msg.data.errorDesc);
                            }
                        }else if(msg.data.errorCode === Constants.errorCode_0){  //-1 非正常异常，需要log出errorMsg方便调试
                            error("错误码-1:errorMsg:"+msg.data.errorMsg+" errorDesc:"+msg.data.errorDesc);
                            if(isDebugMode){
                                myApp.alert("错误码-1:errorMsg:"+msg.data.errorMsg+" errorDesc:"+msg.data.errorDesc);
                            }
                        }else{
                            if(msg.data.errorCode ===Constants.errorCode_101 && self.flagC){
                                AppOp.hideLoading();
                                self.flagC = false;
                                myApp.alert(msg.data.errorDesc,function(){
                                    AppOp.setAppData(Constants.AppSaveName.AccountToken, "0");
                                    AppOp.setAppData(Constants.AppSaveName.AccountAutoToken, "0");
                                    AppOp.needLogout();
                                    AppOp.openApp("0");
                                });
                            }else if(msg.data.errorCode === Constants.errorCode_102){
                                myApp.alert(msg.data.errorDesc,"登录");
                            }else if(msg.data.errorCode ===Constants.errorCode_103){
                                myApp.alert("你没有查看权限。", function ( ) {
                                    AppOp.openApp("0");
                                });
                            }else if(msg.data.errorCode === Constants.errorCode_104){
                                // myApp.alert("对不起，您没有操作权限!!!");
                                /*if(msg.data.errorDesc !== ""){   不再提示无权限，因为大多数人都没有
                                    myApp.alert(msg.data.errorDesc);
                                }*/
                            }else if(msg.data.errorCode===Constants.errorCode_105||msg.data.errorCode===Constants.errorCode_106||msg.data.errorCode===Constants.errorCode_107){
                                if(msg.data.errorDesc !== ""){
                                    myApp.alert(msg.data.errorDesc);
                                }
                            }
                        }
                    }
                },
                error :  function (jqXHR, textStatus, errorThrown) {
                    // myApp.alert("请求"+reqName+"失败-error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                    if(_.isFunction(failCb)){
                        failCb("请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                    }
                    error("请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                },
                complete : function() {
                }
            });
        },
        //获取服务器额外信息（如服务器是否在维护中）
        requestServerStatusByJsonP:function(cb,errorCb){
            $.ajax({
                // url : 'http://'+this.ip+':'+this.noticePort+'/jsonp/server_flag.jsonp',
                url : 'http://'+window.NetManager.ip+':'+window.NetManager.noticePort+'/jsonp/server_flag.jsonp?v='+Math.random(),
                type: "post",
                data: "",
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback:"callback",
                success: function (data) {
                    log(data);
                    if(_.isFunction(cb)){
                        cb(data);
                    }
                    // myApp.alert("SERVER_UPDATE_FLAG:"+data.SERVER_UPDATE_FLAG);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    error("requestServerStatusByJsonP error:"+textStatus+" errorThrown:"+errorThrown);
                    if(_.isFunction(errorCb)){
                        errorCb(jqXHR, textStatus, errorThrown);
                    }
                }
            });
        },
        //测试
        requestServerInfo:function(url,jsonData,cb){
            /*var jsonData = {"user":"bruce","password":"123"};
            jsonData = JSON.stringify(jsonData);*/
            $.ajax({
                // url : 'http://127.0.0.1:8000/postTest?name=DDD&pwd=EEE',
                url : url,
                type: "post",
                /*beforeSend:function (xhr) {
                    xhr.setRequestHeader("Cookie",jsonData.JSESSIONID)
                },*/
                /*headers: {
                    'Cookie':jsonData.JSESSIONID
                },*/
                dataType: 'json',
                data : {},
                success: function (data) {
                    log("数据"+JSON.stringify(data,null,4));
                    if(cb !== undefined){
                        cb(data);
                    }
                    // myApp.alert("SERVER_UPDATE_FLAG:"+data.SERVER_UPDATE_FLAG);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    error("requestServerInfo error:"+textStatus+" errorThrown:"+errorThrown)
                }
            });
        },
        //测试
        requestServer:function(url,jsonData,cb){
            //var jsonData = {"user":"bruce","password":"123"};
            //jsonData = JSON.stringify(jsonData);

            $.ajax({
                // url : 'http://127.0.0.1:8000/postTest?name=DDD&pwd=EEE',
                url : url,
                type: "post",
                dataType: 'json',
                data : jsonData,
                success: function (data) {log("获取流程银行"+JSON.stringify(data,null,4))
                    //log("网页申请成功 " + JSON.stringify(data, null, 4));
                    if(data.rtCode === "1"){
                        if(cb !== undefined){
                            cb(data);
                        }
                    }else{
                        myApp.alert("流程银行接口登陆失败")
                    }

                    // myApp.alert("SERVER_UPDATE_FLAG:"+data.SERVER_UPDATE_FLAG);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    error("requestServerInfo error:"+textStatus+" errorThrown:"+errorThrown)
                }
            });
        }

    };

    window.NetManager = new NetManager();
})();