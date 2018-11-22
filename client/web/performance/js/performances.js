(function () {
    "use strict";
    function Performances() {
        var mainView = null;
    }

    Performances.prototype = {
        initPfm: function () {
            var self = this;
            self.showExample();

            var role = "1"; //测试数据

            this.mainView = myApp.addView('.view-main',{animatePages:false});
            var url = "content/page/marketDetail.html?role="+role;
            // var url = "content/page/presidentOfBranch.html?role="+role;
            if(role === "1"){   //角色1
                MarketDetail.initMarketDetail();
                // PresidentOfBranch.initPresidentOfBranch();
            }else if (role === "2"){
                Role2.initRole2();
            }
            this.mainView.router.loadPage(url);
        },
        showExample:function(){
            //1.网络请求
            var sendData = {};
            NetManager.doHttpReq(Constants.ReqName.QueryAllUsers,sendData,function(jsonData){
                myApp.alert("QueryAllUsers请求成功");
            },function(jsonData){
                myApp.alert("QueryAllUsers请求失败:");
            });

        }
    };
    window.Performances = new Performances();
})();

