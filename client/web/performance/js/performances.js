(function () {
    "use strict";
    function Performances() {
        var mainView = null;
    }

    Performances.prototype = {
        initPfm: function () {
            var self = this;
            self.showExample();
            self.clickEvent();
            var role = "2"; //测试数据

            this.mainView = myApp.addView('.view-main',{animatePages:false});
            var url = "content/page/marketDetail.html?role="+role;
            if(role === "1"){   //角色1
                MarketDetail.initMarketDetail();
            }else if (role === "2"){
                url = "content/page/presidentOfBranch.html?role="+role;
                PresidentOfBranch.initPresidentOfBranch();
            }
            this.mainView.router.loadPage({url:url,reload:true});
        },
        showExample:function(){
            // //1.网络请求
            var sendData = {dah:"1093"};
            NetManager.doHttpReq(Constants.ReqName.QueryUsersByDah,sendData,function(jsonData){
                myApp.alert("QueryUsersByDah:success");
            },function(jsonData){
                myApp.alert("QueryUsersByDah:fail");
            });

            //2.测试登录
            // var sendData = {dah:"1093"};
            // NetManager.doHttpReq(Constants.ReqName.Login,sendData,function(jsonData){
            //     myApp.alert("Login:success");
            //
            //     var sendData = {};
            //     NetManager.doHttpReq(Constants.ReqName.QueryUsersByDah,sendData,function(jsonData){
            //         myApp.alert("QueryUsersByDah:success");
            //     },function(jsonData){
            //         myApp.alert("QueryUsersByDah:fail");
            //     });
            //
            // },function(jsonData){
            //     myApp.alert("Login:fail");
            // });

        },
        clickEvent: function (page) {
            $(document).off('click', "#lsjx").on('click', "#lsjx", function () {
                this.mainView = myApp.addView('.view-main',{animatePages:false});
                this.mainView.router.loadPage("content/page/historicalperformance.html");
            });
        },
    };
    window.Performances = new Performances();
})();

