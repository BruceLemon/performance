//全局
var myApp = new Framework7({
    modalTitle:"信息",
    modalButtonOk:"确定",
    modalButtonCancel:"取消"
});


var isFormalService = false;    //true：连接正式服；false：连接测试服
var pad = false;            //是否是pad大屏
var useLocalAddress = false;    //是否使用内网地址

var isDebugMode = true;         //是否在开发调试模式。true:log日志
var isApp = false;              //true：移动版，false：pc版
var appVersion = "test1.0";     //app内存储的版本信息
var appVersionCode = "0";
var deviceId = "pc";            //app设备的标识
var isLoadAppConfig = false;

var platform = "pc";
var isAndroid = false;
var isIos = false;
var isPc = true;

checkPlatform();
function checkPlatform(){
    if(typeof(android) === "object"){
        platform = "android";
        isAndroid = true;
        isPc = false;
        return;
    }
    //pc chrome 非模拟器：     Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36
    //pc chrome iphone6模拟器: Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1
    //iphone6s  ：             Mozilla/5.0 (iPhone: CPU iPhone OS 11_2_5 like Mac OS X) AppleWebKit/604.5.6(KHTML,like Gecko) Mobile/15D60)
    var userAgent = navigator.userAgent;
    if((userAgent.indexOf("iPhone") > -1 && userAgent.indexOf("Safari") === -1) || ((userAgent.indexOf("iPad") > -1 && userAgent.indexOf("Safari") === -1))){
        platform = "ios";
        isIos = true;
        isPc = false;
        return;
    }
    // if(userAgent.indexOf("iPhone") > -1 && userAgent.indexOf("Safari") !== -1){
    //     platform = "iosSimulate";
    //     isIos = true;
    //     isPc = false;
    //     return;
    // }
    platform = "pc";
    isPc = true;
}

if(platform !== "pc"){
    async.parallel([
        function(callback) {
            loadAppData("isApp",callback,function(){
                isApp = isApp === "true";
            });
        },
        function(callback) {
            loadAppData("useLocalAddress",callback,function(){
                useLocalAddress = useLocalAddress === "true";
            });
        },
        function(callback) {
            loadAppData("deviceId",callback)
        },
        function(callback) {
            loadAppData("pad",callback)
        },
        function(callback) {
            loadAppData("appVersionCode",callback)
        },
        function(callback) {
            loadAppData("appVersion",callback,function(){
                if(appVersion.indexOf("test") !== -1){
                    isFormalService = false;
                    isDebugMode = true;
                }else{
                    isFormalService = true;
                    isDebugMode = false;
                }
            })
        }
    ], function(err, results) {
        isLoadAppConfig = true;
        // alert(results);
    });
}

function loadAppData(storeName,callback,loadedCb) {
    AppOp.getAppData(storeName,function(value){
        // alert(storeName+":"+value);
        window[storeName] = value;
        if(_.isFunction(loadedCb)){
            loadedCb();
        }
        callback(null, storeName+":"+value);
    });
}

var screenWidth = $(window).width();
var screenHeight = $(window).height();
var devicePixelRatio = window.devicePixelRatio;
var $$ = Dom7;
var mbiAppLoading = true;
var touchingF7 = false;

$$(window).touchmove(function (e) {
    // myApp.alert("touchstart");
    touchingF7 = true;
});
$$(window).touchend(function (e) {
    touchingF7 = false;
});



//------------------------------------------------------------
//浏览器log信息
function log(str) {
    if (isDebugMode) {
        console.log(str);
    }
}
function error(str) {
    if (isDebugMode) {
        console.error(str);
    }
}
function warn(str) {
    if (isDebugMode) {
        console.warn(str);
    }
}

//------------------------------------------------------------
//错误信息
window.onerror = function(message, source, lineno, colno, error) {
    var content = message+"："+source+"："+lineno+"："+error.stack;
    // alert("content:"+content);
    console.error(content);
    NetManager.httpReq("appModel/addFrontEndErrorLog", {content:content}, function (data) {
        // console.error("addFrontEndErrorLog");
    }, function (data) {
    });
};

//------------------------------------------------------------
//测试
if (isDebugMode) {
    var countF = $.cookie('countF');
    if (typeof(countF) === "undefined") {
        countF = 0;
    }
    countF++;
    $.cookie('countF', countF);
    console.log("------start main:" + countF);
}

//绩效测试网址
//Android测试地址：http://120.26.55.65:8080/mbi/app/android/app-release.apk
// 正式服APK    http://wjrcbmbi.mysticone.com:8000/android/app-release.apk
// http://wjrcbmbi.mysticone.com:8000/app.apk
// 测试服APK    http://wjrcbmbi.mysticone.com:8000/zExample.zip
//IOS测试地址：Test flight下载
//网页地址 http://120.26.55.65:8080/mbi/app/web/index.html
//统一登录账号 0995 277114
//应用统一下载地址：https://www.wjrcb.com:6443/mbi/mbiDownload.html

//1208 47127

// 待办事项
// 管理驾驶舱
// 锦信
// 员工简历
// 绩效
// 授信审批
// 会议：（会议室申请、行办会、董办会、监事会）
// 我的邮箱
// 工作日历
// 大零售
// 对公CRM

//-------------------------------------------------------------
// myApp.onPageInit('index-1', function (page) {
//     log("------- index-1");
//     MBIManager.test2();
// });

// //幻灯片
// var mySwiper = $('.swiper-container')[0].swiper;
// $('#according10').on('opened', function () {
//     mySwiper.slideNext();
// });

// //手风琴
// $('#accordion-item1').on('opened', function () {
// });

// //标签卡
// $('#view-2').on('show', function () {
//     log("=======================show")
// });

//设置主题样式
// var layouts = 'layout-dark layout-white';
// var themeLayout = $.cookie("themeLayout");
// if (themeLayout == null || themeLayout == 1) {
//     $('body').removeClass(layouts).addClass('layout-dark');
// } else {
//     $('body').removeClass(layouts).addClass('layout-white');
// }
// $("#theme1").click(function () {
//     $('body').removeClass(layouts).addClass('layout-dark');
//     $.cookie("themeLayout", "1");
// });
// $("#theme2").click(function () {
//     $('body').removeClass(layouts).addClass('layout-white');
//     $.cookie("themeLayout", "2");
// });

//This event will be triggered when cached page becomes visible. It is only applicaple for Inline Pages (DOM cached pages)
// myApp.onPageReinit('index-1', function (page) {
//     log('index-1');
// });

//calc.add(Number(data.records[0][data.struct.value]), Common.randomNum(0, 100));



