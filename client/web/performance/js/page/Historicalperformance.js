(function () {
    "use strict";
    function Historicalperformance() {
        this.init();
    }

    Historicalperformance.prototype = {
        init: function () {
            var self = this;

            myApp.onPageAfterAnimation('Historicalperformance', function (page) {
                log("start Historicalperformance");
                self.Performance_k();
                self.timeinit();
                $('#calendar-default').val("2017-11-11");
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
        }
    };
    window.Historicalperformance = new Historicalperformance();
})();

