//App接口操作类，IOS和Android
(function () {
    "use strict";
    function AppOp() {
    }

    AppOp.prototype = {
        test: function (msg) {
            // alert("msg: " + msg);
        },
        callFunction: function (functionName, params) {
            // try {
            var u = navigator.userAgent;
            // console.log("userAgent:" + u);
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            // console.log("isAndroid:" + isAndroid);
            // console.log("isiOS:" + isiOS);
            if (params === undefined || params === null) {
                params = [];
            }
            if (isiOS) {
                var iFrame;
                iFrame = document.createElement("iframe");
                iFrame.setAttribute("src", "ios://" + functionName + "?" + params.join("?"));
                iFrame.setAttribute("style", "display:none;");
                iFrame.setAttribute("height", "0px");
                iFrame.setAttribute("width", "0px");
                iFrame.setAttribute("frameborder", "0");
                document.body.appendChild(iFrame);
                iFrame.parentNode.removeChild(iFrame);
                iFrame = null;
            }
            else if (isAndroid) {
                if (typeof(android) !== "undefined"&& android["" + functionName]) {
                    return android["" + functionName](params.join("?"));
                }
            }
            // } catch (e) {
            //
            // }

        },
        changeStatusBarTextColor: function (param) {
            //不修改就是默认颜色
            //this.callFunction("changeStatusBarColor", ["lightContent"]);
        },
        hideLoading: function () {
            mbiAppLoading = false;
            this.callFunction("hideLoading");
        },
        reload: function () {
            this.callFunction("reload");
        },
        //安卓更新
        updateApk: function (versionCode,updateDesc,url) {
            if(updateDesc === undefined){
                updateDesc = "修正若干BUG，提升APP性能";
            }
            this.callFunction("updateApk", ["" + versionCode,updateDesc,url]);
        },
        //苹果更新
        update: function (buildNumber,updateDesc,url) {
            if(updateDesc === undefined){
                updateDesc = "修正若干BUG，提升APP性能";
            }
            this.callFunction("update", ["" + buildNumber,updateDesc,url]);
        },
        // //热更新
        // checkHotUpdate: function () {
        //     this.callFunction("checkHotUpdate", [""]);
        // },
        setAppData: function (name, value) {
            if (name === null || name === undefined || name === "" || value === null || value === undefined) {
                return false;
            }
            if(isIos || isAndroid){
                this.callFunction("setCookie", [name, value]);
            }else{
                $.cookie(name,value);
            }
        },
        getAppData: function (name, funcCb) {
            if (name === null || name === undefined || funcCb === undefined) {
                return "";
            }
            if (isIos) {
                getCookieCallBack = function (value) {
                    funcCb(value);
                };
                this.callFunction("getCookie", [name, "getCookieCallBack"]);
            } else if(isAndroid){
                var getCookie = this.callFunction("getCookie", [name, "getCookieCallBack"]);
                funcCb(getCookie);
            }else {
                var val = $.cookie(name);
                if(val === undefined){
                    val = "";
                }
                funcCb("5124e03a-85c5-41fc-ae5f-97cfda14751d");
            }
        },
        // testCookie: function () {
        //     getCookieCallBack = function (value) {
        //         alert("ios getCookieCallBack:" + value);
        //     };
        //     this.callFunction("setCookie", ["name", "lzw"]);
        //     var getCookie = this.callFunction("getCookie", ["name", "getCookieCallBack"]);
        //     if (getCookie) {
        //         alert("android getCookie:" + getCookie);
        //     }
        // },
        taggingAction: function () {
            var self = window.AppOp;
            this.getAppData(Constants.AppSaveName.AccountName, function (val) {
                var accountName =val;
                var date = Common.getFormatedDate(new Date());
                self.callFunction("taggingAction", [accountName+"@"+date]);
            })

        },
        //打开原生侧边栏
        openSideMenu: function () {
            this.callFunction("openSideMenu", [""]);
        },
        //打开应用模块
        openApp: function (index) {
            this.callFunction("openApp", [index]);
        },
        needLogout: function () {
            this.callFunction("needLogout", []);
        },
        //设置顶部状态栏颜色
        setStatusBarColor: function (colorEnum) {
            this.callFunction("setStatusBarColor", [colorEnum, "true"]);
        },
        //设置iphoneX底部状态栏颜色
        setAppBackgroundColor: function (colorEnum) {
            this.callFunction("setAppBackgroundColor", [colorEnum]);
        },
        getVirtualKeyHeight: function () {
            return this.callFunction("getVirtualKeyHeight", [""]);
        },
        call: function (telNum) {
            this.callFunction("call", [telNum]);
        },
        text: function (telNum) {
            this.callFunction("text", [telNum]);
        },
        mail: function (emailNum) {
            this.callFunction("mail", [emailNum]);
        },
        updateHeadImage: function () {
            this.callFunction("updateHeadImage", [""]);
        },
        showExcel: function (dataJson,style) {
            if (dataJson === null || dataJson === undefined) {
                dataJson = "";
                return;
            }
            this.callFunction("showExcel", [dataJson,style]);
        },
        // //开始设置新的手势密码
        // setGesturePwd:function(){
        //     // myApp.alert("请您设置安全锁以防止他人恶意查看敏感数据!",function(){
        //     //     this.callFunction("setGesturePwd", ["setGesturePwdCb"]);
        //     // });
        //     var self = window.AppOp;
        //     this.getAppData(Constants.AppSaveName.GestureState,function(val){
        //         if(val === undefined || val === "" || val === null){
        //             myApp.alert("请您设置安全锁以防止他人恶意查看敏感数据!",function(){
        //                 self.callFunction("setGesturePwd", ["setGesturePwdCb"]);
        //             });
        //         }else {
        //             var gestureState = JSON.parse(decodeURI(val));
        //             if (gestureState["gestureSwitch"][0] === 'yes'){
        //                 myApp.alert("请您设置安全锁以防止他人恶意查看敏感数据!",function(){
        //                     self.callFunction("setGesturePwd", ["setGesturePwdCb"]);
        //                 });
        //             }
        //         }
        //     });
        // },
        //开始锁定，用户忘记了手势密码，做登出操作
        gestureLock: function (gestureLockForgetCbName, gestureLockSuccessCbName) {
            //指纹登录 1.app首次打开的时候。2.切入后台较长时间后
            //1.长时间未登录时，直接需要用户名和密码登录； 2.用户退出后，把存的autoToken设置为0
            this.callFunction("gestureLock", [gestureLockForgetCbName,gestureLockSuccessCbName]);
            // window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
            // var self = window.AppOp;
            // this.getAppData(Constants.AppSaveName.GestureState, function (val) {
            //     if (val === undefined || val === "" || val === null) {
            //         if (myApp.device.ios) {
            //             window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
            //         } else {
            //             window.AppOp.setStatusBarColor(Constants.StatusBarColor.AndroidColor1);
            //         }
            //         self.callFunction("gestureLock", [gestureLockForgetCbName, gestureLockSuccessCbName]);
            //     } else {
            //         var gestureState = JSON.parse(decodeURI(val));
            //         if (gestureState["gestureSwitch"][0] === 'yes') {
            //             if (myApp.device.ios) {
            //                 window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
            //             } else {
            //                 window.AppOp.setStatusBarColor(Constants.StatusBarColor.AndroidColor1);
            //             }
            //             self.callFunction("gestureLock", [gestureLockForgetCbName, gestureLockSuccessCbName]);
            //         }
            //     }
            // });
        },
        //移除手势
        removeGesturePwd: function () {
            this.callFunction("removeGesturePwd", [""]);
        },
        openGestureLock: function () {
            this.callFunction("openGestureLock", [""]);
        },
        //聊天登录
        chatLogin: function (account,password) {
            this.callFunction("chatLogin", [account,password]);
        },
        //获取聊天未读数量
        getChatUnreadCount: function (funcCb) {
            if (isIos) {
                getChatUnreadCountCallBack = function (value) {
                    funcCb(value);
                };
                this.callFunction("getChatUnreadCount", ["getChatUnreadCountCallBack"]);
            } else if(isAndroid){
                var count = this.callFunction("getChatUnreadCount", [""]);
                funcCb(count);
            }else {
                funcCb("0")
            }
        },
        //IOS登录成功后执行reloadSideMenu接口
        reloadSideMenu: function () {
            this.callFunction("reloadSideMenu", [""]);
        },
        //登录成功后执行
        onMMPLoginSuccess: function (emailName,emailPwd) {
            this.callFunction("onMMPLoginSuccess", [emailName,emailPwd]);
        },
        //更新安卓角标数量，不包括聊天数量
        updateBadgeOther: function (countOther) {
            this.callFunction("updateBadgeOther", [countOther]);
        },
        //安卓下载指定url文件到sd卡.AppOp.downloadUrlFile("http://wjrcbmbi.mysticone.com:8000/test.docx");现在成功后会执行downloadFinishAndroid函数
        downloadUrlFile: function (url) {
            this.callFunction("downloadUrlFile", [url]);
        },
        closeAndSendEmail: function (email) {
            this.callFunction("closeAndSendEmail", [email]);
        },
        zTest1: function (info) {
            this.callFunction("zTest1", [info]);
        },
        //测试两个webView功能
        showPurchaseSubWeb: function (info) {
            this.callFunction("showPurchaseSubWeb", [info]);
        },
        //测试两个webView功能
        showPurchaseMainWeb: function (info) {
            this.callFunction("showMainWeb", [info]);
        },
        //获取邮箱未读数量
        getMailUnreadCount: function (funcCb) {
            if (isIos) {
                getMailUnreadCountCallBack = function (value) {
                    funcCb(value);
                };
                this.callFunction("getMailUnreadCount", ["getMailUnreadCountCallBack"]);
            } else if(isAndroid){
                var count = this.callFunction("getMailUnreadCount", [""]);
                funcCb(count);
            }else {
                funcCb("0")
            }
        },
        finishCurrentActivity: function (info) {
            this.callFunction("finishCurrentActivity", [info]);
        },
        getLocalModuleVersion:function(moduleName,funcCb){
            if (isIos) {
                getLocalModuleVersionCallBack = function (value) {
                    funcCb(value);
                };
                this.callFunction("getLocalModuleVersion", [moduleName,"getMailUnreadCountCallBack"]);
            } else if(isAndroid){
                var version = this.callFunction("getLocalModuleVersion", [moduleName]);
                funcCb(version);
            }else {
                funcCb("0")
            }
        },
        moduleUpdate:function(moduleName,moduleInfo){
            this.callFunction("moduleUpdate", [moduleName,moduleInfo]);
        },
        openModuleActivity:function(moduleName,moduleHtmlName){
            this.callFunction("openModuleActivity", [moduleName,moduleHtmlName]);
        },
        openRemoteWebActivity:function(remoteWebUrl){
            this.callFunction("openRemoteWebActivity", [remoteWebUrl]);
        }
    };

    window.AppOp = new AppOp();
})();

// //进程内切换
// function handleVisibilityChange() {
//     if (document.hidden) {
//         // pauseSimulation();
//         alert("pauseSimulation");
//     } else  {
//         // startSimulation();
//         alert("startSimulation");
//     }
// }
// document.addEventListener("visibilitychange", handleVisibilityChange, false);

var touchLastTime = 0;
Dom7(window).touchstart(function (e) {
    touchLastTime = new Date().getTime();
    window.AppOp.setAppData("touchLastTime",touchLastTime);
});

var isLocking = false;
window.onActive = function () {
    Common.triggerAll("onActive");

    var now = new Date().getTime();
    // alert("onActive:"+now+" touchLastTime:"+touchLastTime);
    //5分钟未操作，重新唤醒时需要指纹验证
    var logoutFunc = function(){
        //未开启指纹解锁.24小时没有操作，则唤醒时需要重新登录
        window.AppOp.getAppData("touchLastTime", function (touchLastTime) {
            var lastTime = parseInt(touchLastTime);
            var time = 24 * 60 * 60 * 1000;
            // time = 2*60*1000;
            if (lastTime !== 0 && new Date().getTime() - lastTime > time) {
                window.AppOp.setAppData(Constants.AppSaveName.IsLoginSuccess, "0");
                window.AppOp.setAppData(Constants.AppSaveName.AccountToken, "0");
                window.AppOp.setAppData(Constants.AppSaveName.AccountAutoToken, "0");
                window.AppOp.openApp(0);
                window.AppOp.needLogout();
                window.AppOp.setStatusBarColor(Constants.StatusBarColor.Login);
                window.AppOp.reload();
            }
        });
    };
    window.AppOp.getAppData(Constants.AppSaveName.IsLoginSuccess, function (IsLoginSuccess) {
        if(IsLoginSuccess === "0"){
            return;
        }
        AppOp.getAppData(Constants.AppSaveName.BiometryType,function(biometryType){
            if(biometryType ==="touchID" || biometryType ==="faceID"){
                window.AppOp.getAppData(Constants.AppSaveName.BiometrySwitchState, function (val) {
                    if (val === "true") {
                        //开启了指纹解锁。5分钟未操作则需要上锁
                        if(isLocking === false){
                            window.AppOp.getAppData(Constants.AppSaveName.AccountAutoToken, function (autoToken) {
                                    if(autoToken !== "0" && autoToken !== ""){
                                    window.AppOp.getAppData("touchLastTime", function (touchLastTime) {
                                        var lastTime = parseInt(touchLastTime);
                                        var time = 10 * 60 * 1000;
                                        // time = 5000;
                                        if (lastTime !== 0 && now - lastTime > time) {
                                            isLocking = true;
                                            window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
                                            window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.White);
                                            window.AppOp.gestureLock("gestureLockForgetCb","gestureLockSuccessCb");
                                        }
                                    });
                                }
                            });
                        }
                    }else{
                        logoutFunc();
                    }
                });
            }else{
                logoutFunc();
            }
        });
    });

    window.AppOp.setAppData("touchLastTime",now.toString());
    touchLastTime = now;
};

// var lastFired = new Date().getTime();
// setInterval(function() {
//     var now = new Date().getTime();
//     if(now - lastFired > 10000) {
//         window.AppOp.gestureLock("gestureLockForgetCb","gestureLockSuccessCb");
//     }
//     lastFired = now;
// }, 1000);


function setGesturePwdCb() {
    // alert("setGesturePwdCb run");
}

function gestureLockSuccessCb() {
    isLocking = false;
    window.AppOp.setAppData("touchLastTime",new Date().getTime().toString());
    window.AppOp.getAppData(Constants.AppSaveName.AccountName,function(userId){
        window.AppOp.getAppData(Constants.AppSaveName.AccountAutoToken,function(autoToken){
            window.AppOp.setAppData(Constants.AppSaveName.AccountAutoTokenChanging, "true");
            NetManager.httpReq(Constants.HttpReqName.AppLoginWithoutLogin, {userId:userId,autoToken: autoToken,versionId:appVersion}, function (data) {
                window.AppOp.setAppData(Constants.AppSaveName.AccountAutoToken, data.autoToken);
                window.AppOp.setAppData(Constants.AppSaveName.AccountToken, data.token);
                window.AppOp.setAppData(Constants.AppSaveName.AccountAutoTokenChanging, "false");
                var timeStr = new Date().getTime().toString();
                window.AppOp.setAppData("loginLastTime", timeStr);
                if (myApp.device.ios) {
                    //移动驾驶舱
                    try {
                        var currentView = window.MBIManager.getCurrView();
                        var pageName = currentView.activePage.name;
                        //在弹出层Popup中，关闭弹出层
                        if (IndexController.currPopup !== null) {
                            if(  window.MBIStyle.currStyle ==="2"){
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.iosBlackColor);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.iosBlackColor);
                            }else{
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.White);
                            }
                        }
                        //在实时界面
                        if (MBIManager.getCurrView().activePage.name === "dlRealTime" || pageName === Constants.PageName.DlRealTimeCommon || pageName === Constants.PageName.CommonDlRealTime) {
                            if(  window.MBIStyle.currStyle ==="2"){
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.iosBlackColor);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.iosBlackColor);
                            }else{
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.White);
                            }
                        }
                        //在通用弹出层
                        if (pageName === Constants.PageName.CommonModel || pageName === Constants.PageName.MpaModel || pageName === Constants.PageName.CollectModel) {
                            if(  window.MBIStyle.currStyle ==="2"){
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.iosBlackColor);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.iosBlackColor);
                            }else{
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.White);
                            }
                        }
                        //在其他view的首页时，返回首页
                        if (pageName === Constants.PageName.IndexPage2 || pageName === Constants.PageName.IndexPage3 || pageName === Constants.PageName.IndexPage4) {
                            if(  window.MBIStyle.currStyle ==="2"){
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.iosBlackColor);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.iosBlackColor);
                            }else{
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.White);
                            }
                        }
                        //在首页的时候再点击返回时：返回1,执行退出App功能
                        if (pageName === Constants.PageName.IndexPage1) {
                            if(  window.MBIStyle.currStyle ==="2"){
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.iosBlackColor);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.iosBlackColor);
                            }else{
                                window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
                                window.AppOp.setAppBackgroundColor(Constants.StatusBarColor.White);
                            }
                        }
                    } catch (e) {
                        window.AppOp.setStatusBarColor(Constants.StatusBarColor.White);
                    }
                } else {
                    window.AppOp.setStatusBarColor(Constants.StatusBarColor.AndroidColor1);
                }
            }, function (data) {
                window.AppOp.setAppData(Constants.AppSaveName.IsLoginSuccess, "0");
                window.AppOp.setAppData(Constants.AppSaveName.AccountAutoTokenChanging, "false");
                window.AppOp.setAppData(Constants.AppSaveName.AccountToken, "0");
                window.AppOp.setAppData(Constants.AppSaveName.AccountAutoToken, "0");
                window.AppOp.openApp(0);
                window.AppOp.needLogout();
                window.AppOp.setStatusBarColor(Constants.StatusBarColor.Login);
                window.AppOp.reload();
            });
        });
    });
}

function gestureLockForgetCb() {
    window.AppOp.setAppData("touchLastTime",new Date().getTime().toString());
    isLocking = false;
    myApp.alert("请用密码重新登录！", function () {
        window.AppOp.setAppData(Constants.AppSaveName.IsLoginSuccess, "0");
        window.AppOp.setAppData(Constants.AppSaveName.AccountToken, "0");
        window.AppOp.setAppData(Constants.AppSaveName.AccountAutoToken, "0");
        window.AppOp.openApp(0);
        window.AppOp.needLogout();
        window.AppOp.setStatusBarColor(Constants.StatusBarColor.Login);
        window.AppOp.reload();
    });

}



//安卓可点击
document.documentElement.style.webkitUserSelect = 'none';
document.documentElement.style.webkitTouchCallout = 'none';

//app数据存储方法
var getCookieCallBack = function () {
};
var getChatUnreadCountCallBack = function () {
};
var getMailUnreadCountCallBack = function () {
};
var getLocalModuleVersionCallBack = function () {
};
//安卓回退键执行
var exitClickTime = 0;

function onAndroidBack() {
    window.AppOp.setAppData("touchLastTime",new Date().getTime().toString());
    if (mbiAppLoading === true) {
        return;
    }

    //平台和登录页面
    try {
        if (Portal.portalView.activePage.name === Constants.PageName.Portal || Portal.portalView.activePage.name === Constants.PageName.Login) {
            var clickTime1 = new Date().getTime();
            if (exitClickTime === 0 || clickTime1 - exitClickTime > 1000) {
                window.AppOp.callFunction("toastShow", ["再按一次退出"]);
            } else {
                window.AppOp.callFunction("exit", [""]);
            }
            exitClickTime = clickTime1;
        }
        if (Portal.portalView.activePage.name === Constants.PageName.SettingDataPage) {
            Portal.portalView.router.back();
        }
    } catch (e) {
    }

    //移动驾驶舱
    try {
        var tabView1 = $("#tabView1");
        var tabView2 = $("#tabView2");
        var tabView3 = $("#tabView3");
        var tabView4 = $("#tabView4");

        var currentView = window.MBIManager.getCurrView();
        var pageName = currentView.activePage.name;
        //在弹出层Popup中，关闭弹出层
        if (IndexController.currPopup !== null) {
            if( window.IndexController.myCalendar !== ""){
                window.IndexController.myCalendar.close();
            }
            if(window.IndexController.eBankDatePopupCalendar !== ""){
                window.IndexController.eBankDatePopupCalendar.close();
            }
            if(window.IndexController.pickerDevicePopup2 !== ""){
                window.IndexController.pickerDevicePopup2.close();
            }
            if(window.IndexController.pickerDevicePopup3 !== ""){
                window.IndexController.pickerDevicePopup3.close();
            }
            myApp.closeModal();
            return;
        }
        //在实时界面
        if (MBIManager.getCurrView().activePage.name === "dlRealTime" || pageName === Constants.PageName.DlRealTimeCommon || pageName === Constants.PageName.CommonDlRealTime) {
            currentView.router.back();
            return;
        }
        //在通用弹出层
        if (pageName === Constants.PageName.CommonModel || pageName === Constants.PageName.MpaModel || pageName === Constants.PageName.CollectModel) {
            if (currentView.selector === "#view-4") {  //在关注页面
                tabView1.removeClass("active");
                tabView2.removeClass("active");
                tabView3.removeClass("active");
                tabView4.removeClass("active");
                tabView1.toggleClass("active");
                myApp.showTab('#view-1');
            } else {
                currentView.router.back();
            }
            myApp.closeModal();
        }
        //在其他view的首页时，返回首页
        if (pageName === Constants.PageName.IndexPage2 || pageName === Constants.PageName.IndexPage3 || pageName === Constants.PageName.IndexPage4) {
            tabView1.removeClass("active");
            tabView2.removeClass("active");
            tabView3.removeClass("active");
            tabView4.removeClass("active");
            tabView1.toggleClass("active");
            if(window.IndexController.myCalendarQuota2 !== ""){
                window.IndexController.myCalendarQuota2.close();
            }
            if(window.IndexController.eBankDateCalendar !== ""){
                window.IndexController.eBankDateCalendar.close();
            }
            if(window.IndexController.myCalendarQuota4 !== ""){
                window.IndexController.myCalendarQuota4.close();
            }
            if(window.IndexController.imdPickerDevice !== ""){
                window.IndexController.imdPickerDevice.close();
            }
            myApp.closeModal();
            myApp.showTab('#view-1');
            return;
        }
        //在首页的时候再点击返回时：返回1,执行退出App功能
        if (pageName === Constants.PageName.IndexPage1) {
            window.IndexController.myCalendarQuota1.close();
            window.AppOp.openApp("0");
            // var clickTime = new Date().getTime();
            // if (exitClickTime === 0 || clickTime - exitClickTime > 1000) {
            //     window.AppOp.callFunction("toastShow", ["再按一次退出"]);
            // } else {
            //     window.AppOp.callFunction("exit", [""]);
            // }
            // exitClickTime = clickTime;closeAndSendEmail
        }
    } catch (e) {
    }

    //人事系统
    try {
        if (PersonnelManagement.personCurrPopover !== null) {
            myApp.closeModal();
            return;
        }
        if (window.PersonnelManagement.personView.activePage.name === "personnelInfo") {
            window.PersonnelManagement.personView.router.back();
            return;
        }

        if (window.PersonnelManagement.personView.activePage.name === "autocomplete-radio") {
            var self = window.PersonnelManagement;
            if ($("#department").is(":hidden")) { //正在搜索中
                self.autocomplete.searchbar.disable();
            } else {
                if (self.currTreeId !== self.rootKey) {   //根目录
                    var pid = self.treeDataMapById[self.currTreeId].zPid;
                    self.updateTree(pid);
                } else {
                    // $("#main_navbar_back").hide();
                    // $("#btnSide").show();
                    window.AppOp.openApp("0");
                }
            }
        }

    } catch (e) {

    }

    //代办工作（采购系统和督查系统）
    try {
        if(window.procurementDetailController.approvePopup !== null){
            window.procurementDetailController.approveSelectPicker.close();
            myApp.closeModal();
            return;
        }
        if(window.procurementDetailController.confirmPopup !== null){
            window.procurementDetailController.PurchaseTypePicker.close();
            myApp.closeModal();
            return;
        }
        if(window.BankMeetDetail.bankMeetPopup !== null){
            myApp.closeModal();
            return;
        }
        if(window.DirectorMeetDetail.directorMeetPopup !== null){
            myApp.closeModal();
            return;
        }
        if(window.SealDetail.sealPopup !== null){
            myApp.closeModal();
            return;
        }

        var purchaseCurrentView = window.Purchase.purchaseView;
        var purChaseCurrentPageName = purchaseCurrentView.activePage.name;
        if(purChaseCurrentPageName === Constants.PageName.WorkToDo){
            myApp.closeModal();
            window.AppOp.openApp("0");
            return;
        }
        if(purChaseCurrentPageName === Constants.PageName.PurchaseDetail || purChaseCurrentPageName === Constants.PageName.CirculationLog
            || purChaseCurrentPageName === Constants.PageName.SuperviseDetail || purChaseCurrentPageName === Constants.PageName.CirculationLogForDCDBInfo || purChaseCurrentPageName === Constants.PageName.Adress
            || purChaseCurrentPageName === Constants.PageName.SuggestionDetail || purChaseCurrentPageName === Constants.PageName.CirculationLogForSuggestionInfo
            || purChaseCurrentPageName === Constants.PageName.SuperviseAddress || purChaseCurrentPageName === Constants.PageName.SuggestionAdress || purChaseCurrentPageName === Constants.PageName.CreditDetail
            || purChaseCurrentPageName === Constants.PageName.DepositRateDetail  || purChaseCurrentPageName === Constants.PageName.DepositRateAddress || purChaseCurrentPageName === Constants.PageName.CirculationLogForDepositRate
            || purChaseCurrentPageName === Constants.PageName.LccpDetail  || purChaseCurrentPageName === Constants.PageName.CirculationLogForLccp || purChaseCurrentPageName === Constants.PageName.DealWorkList
            || purChaseCurrentPageName === Constants.PageName.BankMeetDetail || purChaseCurrentPageName === Constants.PageName.DirectorMeetDetail || purChaseCurrentPageName === Constants.PageName.SealDetail
            || purChaseCurrentPageName === Constants.PageName.CirculationLogForSealInfo || purChaseCurrentPageName === Constants.PageName.SealAddress
            || purChaseCurrentPageName === Constants.PageName.SpRateInfoQueryDetail || purChaseCurrentPageName === Constants.PageName.BigDepositDetail
        ){
            myApp.closeModal();
            purchaseCurrentView.router.back();
            return;
        }
    } catch (e){
    }

    //贷审会页面返回
    try {
        if(window.DshNextDetailList.approvePopup !== null){
            myApp.closeModal();
            return;
        }
        if(window.ShowPhotosDetail.approvePopup !== null){
            myApp.closeModal();
            return;
        }
        if(window.ShowPhotosDetail.RiskEarlyWarnPopup !== null){
            myApp.closeModal();
            return;
        }

        var LoanTrialMeetingCurrentView = window.LoanTrialMeeting.pendingMeetingView;
        var LoanTrialMeetingCurrentPageName = LoanTrialMeetingCurrentView.activePage.name;
        if(LoanTrialMeetingCurrentPageName === Constants.PageName.LoanTrialMeeting){
            myApp.closeModal();
            window.AppOp.openApp("0");
            return;
        }
        if(LoanTrialMeetingCurrentPageName === Constants.PageName.LoanTrialMeeting || LoanTrialMeetingCurrentPageName === Constants.PageName.LoanTrialMeetingListInfo
            || LoanTrialMeetingCurrentPageName === Constants.PageName.DshNextDetailList || LoanTrialMeetingCurrentPageName === Constants.PageName.ShowPhotos){
            myApp.closeModal();
            LoanTrialMeetingCurrentView.router.back();
            return;
        }
    } catch (e){
    }


}

function downloadFinishAndroid(fileName){
    myApp.hideIndicator();
    if(fileName !== ""){
        alert("downloadFinishAndroid:" + fileName);
    }
}

window.openType = "portal";
window.setOpenType = function (openType) {
    window.openType = openType;
    return openType;
}