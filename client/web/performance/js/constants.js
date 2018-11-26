//常量枚举
(function () {
    "use strict";
    function Constants() {
        //应用存储名称
        this.ReqName = {
            Login:"login",
            QueryAllUsers: "queryAllUsers",
            QueryUsersByDah:"queryUsersByDah"
        };
        Object.freeze(this.ReqName);
    }
    Constants.prototype = {
        initConstants: function () {
        },
    };
    window.Constants = new Constants();
})();

