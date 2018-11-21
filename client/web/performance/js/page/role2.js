(function () {
    "use strict";
    function Role2() {

    }

    Role2.prototype = {
        initRole2: function () {
            myApp.onPageAfterAnimation('role2', function (page) {
                Performances.mainView.params.animatePages = true;
                log("start role2");
            });
        },
    };
    window.Role2 = new Role2();
})();

