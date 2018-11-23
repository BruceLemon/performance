(function () {
    "use strict";
    function PresidentOfBranch() {

    }

    PresidentOfBranch.prototype = {
        initPresidentOfBranch: function () {
            var self = window.PresidentOfBranch;

            $(document).on('click', "#presidentTabMembers1", function () {
                $("#imgMinePerformance").attr("src","images/icon/page/wode2.png");
                $("#imgMer1Performance").attr("src","images/icon/page/gongsi1.png");
                $("#imgMer2Performance").attr("src","images/icon/page/lingshou2.png");
                $("#textMinePerformance").attr("style","color:#3d4954");
                $("#textMer1Performance").attr("style","color:#fe6600");
                $("#textMer2Performance").attr("style","color:#3d4954");
            });
            $(document).on('click', "#presidentTabMembers2", function () {
                $("#imgMinePerformance").attr("src","images/icon/page/wode2.png");
                $("#imgMer1Performance").attr("src","images/icon/page/gongsi2.png");
                $("#imgMer2Performance").attr("src","images/icon/page/lingshou1.png");
                $("#textMinePerformance").attr("style","color:#3d4954");
                $("#textMer1Performance").attr("style","color:#3d4954");
                $("#textMer2Performance").attr("style","color:#fe6600");
            });
            $(document).on('click', "#presidentTabMine", function () {
                $("#imgMinePerformance").attr("src","images/icon/page/wode1.png");
                $("#imgMer1Performance").attr("src","images/icon/page/gongsi2.png");
                $("#imgMer2Performance").attr("src","images/icon/page/lingshou2.png");
                $("#textMinePerformance").attr("style","color:#fe6600");
                $("#textMer1Performance").attr("style","color:#3d4954");
                $("#textMer2Performance").attr("style","color:#3d4954");
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
    window.PresidentOfBranch = new PresidentOfBranch();
})();

