(function () {
    "use strict";
    function Performances() {
        var mainView = null;
    }

    Performances.prototype = {
        initPfm: function () {
            var role = "1"; //测试数据

            this.mainView = myApp.addView('.view-main',{animatePages:false});
            var url = "content/page/marketDetail.html?role="+role;
            if(role === "1"){   //角色1
                MarketDetail.initMarketDetail();
            }else if (role === "2"){
                Role2.initRole2();
            }
            this.mainView.router.loadPage(url);
        },
    };
    window.Performances = new Performances();
})();

