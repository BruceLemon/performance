(function () {
    "use strict";
    function historicalperformance() {
        this.init();
    }

    historicalperformance.prototype = {
        init: function () {


            var self = this;

            myApp.onPageAfterAnimation('historicalperformance', function (page) {
                log("start historicalperformance");
                self.Performance_k();
                self.timeinit();
                $('#calendar-default').val("2017-11-11");
                $("#main_view").html("历史绩效");

                $("#lsjx").html("");

            });

        },
        Performance_k:function () {
            //(type, ElementName, date, clickFunc, exart)
            Charts.chose_Charts("1",$('#Performance_k'),"","","");
        },
        timeinit: function () {
            var calendarDefault = myApp.calendar({
                input: '#calendar-default',
            });
        },

    };
    window.historicalperformance = new historicalperformance();
})();

