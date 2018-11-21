(function () {
    "use strict";
    function Role1() {

    }

    Role1.prototype = {
        initRole1: function () {
            myApp.onPageAfterAnimation('role1', function (page) {
                Performances.mainView.params.animatePages = true;
                log("start role1");

                //测试打开其他页面
                setInterval(function(){
                    Performances.mainView.router.loadPage("content/page/role2.html?role=2");
                },2000)

            });
        },
    };
    window.Role1 = new Role1();
})();

