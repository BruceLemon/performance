(function () {
    "use strict";
    function MarketDetail() {

    }

    MarketDetail.prototype = {
        initMarketDetail: function () {
            var self = window.MarketDetail;

            $(document).off('click', "#tab_marketContract").on('click', "#tab_marketContract", function () {
                $("#img_marketContract").attr("src","images/icon/page/jixiaoheyue1.png");
                $("#img_marketPerformance").attr("src","images/icon/page/wode2.png");

            });
            $(document).off('click', "#tab_marketPerformance").on('click', "#tab_marketPerformance", function () {
                $("#img_marketContract").attr("src","images/icon/page/jixiaoheyue2.png");
                $("#img_marketPerformance").attr("src","images/icon/page/wode1.png");

            });

            myApp.onPageAfterAnimation('role1', function (page) {
                Performances.mainView.params.animatePages = true;
                log("start role1");

                //测试打开其他页面
                setInterval(function(){
                    Performances.mainView.router.loadPage("content/page/role2.html?role=2");
                },20000000)

            });
        }
    };
    window.MarketDetail = new MarketDetail();
})();

