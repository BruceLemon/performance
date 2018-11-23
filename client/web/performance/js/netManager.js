//网络和协议通讯管理
(function () {
    "use strict";
    function NetManager() {
        // http://192.168.88.93:8080/wjrcb-jxkh-admin-web/queryAllUsers.do
        // http://222.92.218.141:8080/wjrcb-jxkh-admin-web/queryAllUsers.do
        this.ipTest = "222.92.218.141";     //测试服临时外网IP
        this.ipTestLocal = "192.168.88.93";     //内网测试服IP
        this.port = "8080";

        //todo
        //1.需要后端提供返回的错误码文档。
        //2.需要前端操作日志接口。

    }

    NetManager.prototype = {
        doHttpReq:function(reqName,jsonData,successCb,failCb){
            var self = this;
            if(reqName === undefined || reqName === ""){
                error("请求reqName为空!");
                return;
            }
            if(jsonData === undefined){
                jsonData = {};
            }
            var url = "http://"+self.ipTest+":"+self.port+"/wjrcb-jxkh-admin-web/"+reqName+".do";
            // {
            //     "status": 200,
            //     "msg": "OK",
            //     "data": [
            //     {
            //         "userId": "111N0400",
            //         "userName": "黄云峰"
            //
            //     },
            //     {
            //         "userId": "200N1682",
            //         "userName": "黄一芯"
            //     }
            //  ],
            //     "ok": null
            // }
            $.ajax({
                type : 'POST',
                dataType: 'json',
                data : jsonData,
                url : url,
                success : function(jsonData){
                    log("reqName:"+reqName+" msg"+JSON.stringify(jsonData, null, 4));

                    if (jsonData.status === 200) {
                        if(_.isFunction(successCb)){
                            successCb(jsonData);
                        }
                    } else {
                        error("请求失败：reqName:"+reqName+" status:"+jsonData.status+" msg:"+jsonData.msg);
                        if(_.isFunction(failCb)){
                            failCb(jsonData);
                        }
                    }
                },
                error :  function (jqXHR, textStatus, errorThrown) {
                    error("请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown);
                    if(_.isFunction(failCb)){
                        failCb({msg:"请求"+reqName+"失败error,textStatus:" + textStatus + " jqXHR:" + jqXHR + " errorThrown:" + errorThrown});
                    }
                },
                complete : function() {
                }
            });
        },
    };

    window.NetManager = new NetManager();
})();