(function () {

    function Charts() {

    }

    Charts.prototype = {
        init: function () {

        },
        chose_Charts: function (type, ElementName, date, clickFunc, exart) {
            /* type
            *       1 单曲线图
            *
            *
            *
            * */
            if (type == "1") {
                var highchartJson = this.type1(date, clickFunc, exart)
            }
            //Highcharts.chart(ElementName.attr("id"), highchartJson);
            ElementName.highcharts(highchartJson);
        },
        type1: function (data, clickFunc, objInfo) {
            data = {
                "id": "758e17d396b44e9b8ba09ed75b9a9468",
                "type": "3",
                "name": "资产趋势分析",
                "struct": {
                    "unit": "单位",
                    "y": "金额",
                    "x": "日期"
                },
                "otherInfo": {},
                "records": [
                    {
                        "日期": "201611",
                        "金额": "788.680000",
                        "单位": "亿元"
                    },
                    {
                        "日期": "201612",
                        "金额": "800.450000",
                        "单位": "亿元"
                    },
                    {
                        "日期": "201701",
                        "金额": "793.350000",
                        "单位": "亿元"
                    }
                ]
            }
            var yTitleName = "";
            var categories = [];
            var series_data = [];
            var xName = data.struct.x;
            var yName = data.struct.y;
            var zName = data.struct.z;
            var unitName = "";
            var otherInfo = {};
            var param1 = objInfo.param1;
            var hig = objInfo.height;
            for (var i = 0; i < data.records.length; i++) {
                var yVal = parseFloat(Number(data.records[i][yName]).toFixed(2));
                if (isNaN(yVal)) {
                    continue;
                }
                // yVal = Math.round(yVal,2);
                var xVal = Common.getOgranizationName(data.records[i][xName]);
                var xVals = xVal.split("-");
                if (xVals.length === 3) {  //2017-08-09 日期转换为20170809
                    xVal = xVals.join("")
                }
                categories.push(xVal);
                series_data.push(yVal);
                unitName = data.records[i][data.struct.unit].split(',');
                //加载Y轴额外信息
                otherInfo[xVal] = {};
                for (var z = 0; z < 10; z++) {
                    var otherInfoKey = data.struct["y" + z];
                    if (otherInfoKey !== undefined && data.records[i][otherInfoKey] !== undefined) {
                        otherInfo[xVal][otherInfoKey] = data.records[i][otherInfoKey] + unitName[z];
                    }
                }
            }
            var yTitleX = 0;
            var yTitleY = 0;
            if (unitName[0] === "万元" || unitName[0] === "亿元") {
                yTitleName = "金额︵" + unitName[0] + "︶";
                yTitleX = 70;
                yTitleY = -30;
            } else if (unitName[0] === "%") {
                yTitleName = "百分比︵" + unitName[0] + "︶";
                yTitleX = 70;
                yTitleY = -30;
            } else if (unitName[0] === "万笔" || unitName[0] === "万张") {
                yTitleName = "数量︵" + unitName[0] + "︶";
                yTitleX = 70;
                yTitleY = -30;
            } else {
                yTitleName = unitName[0];
            }

            if (yTitleName !== undefined) {
                yTitleName = yTitleName.split('').join('<br>');
            }

            // var elementTitle = $("#commonModel_title_" + data.id);
            // elementTitle.text(elementTitle.text()+"("+unitName+")");
            var chartWidth = 100;
            if (data.records.length > 30 && data.name.indexOf("趋势") === -1) {
                chartWidth = 100 + (data.records.length - 30) * (100 / 30);
            }
            var xStep = parseInt(data.records.length / 4);
            chartWidth = chartWidth + "%";

            var highchartJson = {
                chart: {
                    type: "spline"
                },
                title: {
                    text: ""
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    //tickPixelInterval:40,//设置横坐标密度
                    //minorTickInterval: 10,
                    //tickAmount: 8,
                    //tickInterval: 1,//刻度间隔
                    categories: categories,
                    tickwidth: 0,//去掉刻度
                    crosshair: true,
                    labels: {
                        //step:xStep,
                        //enabled:false,//去掉刻度数字
                        style: {
                            textOverflow: 'none',
                            color: '#acadb5',
                        },
                        autoRotation: false,
                        formatter: function () {
                            var pos = this.pos;
                            var len = this.axis.categories.length - 1;
                            var xc = len - pos;
                            if (this.axis.categories.length <= 2) {
                                return this.value;
                            }
                            if (this.axis.categories.length <= 15) {

                                if (pos % 3 === 0 && xc >= 3 || pos === len) {
                                    return this.value;
                                }

                            } else if (15 < this.axis.categories.length && this.axis.categories.length <= 25) {
                                if (pos % 5 === 0 && xc >= 5) {
                                    return this.value;
                                }
                                ;
                                if (pos === len - 1) {
                                    return this.axis.categories[len];
                                }
                            } else {
                                if (pos % 10 === 0 && xc >= 9) {
                                    return this.value;
                                }
                                ;
                                if (pos === len - 2) {
                                    return this.axis.categories[len];
                                }

                            }


                        }

                    }
                },
                yAxis: {
                    // min: 0,
                    crosshair: true,
                    title: {
                        text: yTitleName,
                        rotation: 360,
                        x: yTitleX,
                        y: yTitleY,
                        style: {
                            color: '#616667',
                        },
                    },
                    labels: {
                        style: {
                            color: '#acadb5',
                        },
                        formatter: function () {
                            var yVal = this.value;
                            if (yVal >= 10000 || yVal <= -10000) {
                                yVal = yVal / 10000 + "万";
                            }
                            if (yVal >= 100000000 || yVal <= -100000000) {
                                yVal = yVal / 10000 + "亿";
                            }
                            return yVal;
                        }
                    }
                },
                tooltip: {
                    shared: true,
                    // useHTML: true,
                    // headerFormat: '<span>{point.key}</span><table>',
                    // // pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                    // // '<td style="text-align: right"><b>{point.y} </b></td></tr>' +
                    // // '<tr><td style="color: {series.color}">{series.name}: </td>' +
                    // // '<td style="text-align: right"><b>{point.y} </b></td></tr>',
                    // pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                    // // pointFormat: '<tr><td style="color: {series.color}"> </td>' +
                    // '<td style="text-align: right"><b>{point.y} </b></td></tr>',
                    // footerFormat: '</table>',
                    // valueDecimals: 2,
                    // valueSuffix: ' ' + unitName[0]
                    // formatter: function () {
                    //     var date = '';
                    //     if (this.x.length > 0 && this.x.length <= 4) {
                    //         date = this.x + '年';
                    //     } else if (this.x.length > 4 && this.x.length <= 6) {
                    //         date = this.x.substring(0, 4) + '年' + this.x.substring(4) + '月';
                    //     } else if (this.x.length > 6 && this.x.length <= 8) {
                    //         date = this.x.substring(0, 4) + '年' + this.x.substring(4, 6) + '月' + this.x.substring(6) + '日';
                    //     }
                    //     var s = date + ',';
                    //     s += param1 + ': ' + '<b>' +
                    //         this.y + '</b>' + unitName[0];
                    //     /*
                    //     if( param1 !== "undefined"){
                    //         $.each(this.points, function () {
                    //             s += param1 + ': ' + '<b>'+
                    //                 this.y + '</b>' + unitName[0];
                    //         });
                    //     }else{
                    //         $.each(this.points, function () {
                    //             s += this.series.name + ': ' + '<b>'+
                    //                 this.y  + unitName[0];
                    //         });
                    //     } */
                    //     return s;
                    // }
                    backgroundColor: '#FFFFFF',
                    headerFormat: '',
                    pointFormatter: function () {
                        // console.log(this);
                        if (isNaN(this.category) === false) {
                            var date = '';
                            if (this.category.length > 0 && this.category.length <= 4) {
                                date = this.category + '年';
                            } else if (this.category.length > 4 && this.category.length <= 6) {
                                date = this.category.substring(0, 4) + '年' + this.category.substring(4) + '月';
                            } else if (this.category.length > 6 && this.category.length <= 8) {
                                date = this.category.substring(0, 4) + '年' + this.category.substring(4, 6) + '月' + this.category.substring(6) + '日';
                            }
                        }
                        if (date !== undefined) {
                            var html = '<table><tr><td style="text-align: left">' + date + '</td></tr>' + '<tr><td style="text-align: left">' + yName + ': ' + '</td><td style="text-align: left">' + this.options.y + unitName[0] + '</td></tr>';
                        } else {
                            var html = '<table ><tr><td style="text-align: left">' + this.category + param1 + ': ' + '</td>' + '<td style="text-align: left">' + this.y + unitName[0] + '</td></tr>';

                        }
                        var tl = this.category;
                        if (otherInfo[tl].length > 0) {
                            html += '<tr><td style="text-align: left">' + zName + ': ' + '</td>' + '<td style="text-align: left">' + otherInfo[tl][zName] + unitName[1] + '</td></tr>'
                        }

                        var info = otherInfo[this.category];
                        for (var name in info) {
                            if (name.indexOf("排名") > -1) {
                                html += '<tr><td style="text-align: left">' + name + ':' + '</td>' + '<td style="text-align: left">' + info[name] + '</td></tr>';
                            }
                        }
                        for (var name in info) {
                            if (name.indexOf("排名") === -1) {
                                var va = parseFloat(info[name]);
                                html += '<tr><td style="text-align: left">' + name + ':' + '</td>' + '<td style="text-align: left">' + va + unitName[1] + '</td></tr>';
                            }
                        }
                        html += '</table>';
                        return html;
                    },
                    useHTML: true,
                    // backgroundColor: {
                    //     linearGradient: [0, 0, 0, 60],
                    //     stops: [
                    //         [0, '#FFFFFF'],
                    //         [1, '#E0E0E0']
                    //     ]
                    // },
                },
                plotOptions: {
                    series: {
                        pointPadding: 0.2,
                        borderWidth: 0,
                        events: {
                            click: clickFunc
                        },
                        dataLabels: {
                            enabled: true,          // 开启数据标签
                            // format: '{y} '
                            style: {
                                fontWeight: 'none',
                                //fontSize: '14px',
                                color: '#616667'
                            },
                            formatter: function () {
                                var tip = this.y;
                                if (unitName[0] === "%") {
                                    tip = this.y + "%";
                                }
                                var pos = this.point.index;
                                var len = this.series.data.length - 1;
                                var xc = len - pos;
                                if (this.series.data.length <= 2) {
                                    return tip;
                                }
                                if (this.series.data.length <= 15) {

                                    if (pos % 2 === 0 && xc >= 2 || pos === len) {
                                        return tip;
                                    }
                                } else {
                                    if (pos % 4 === 0 && xc >= 4 || pos === len) {
                                        return tip;
                                    }
                                    ;
                                }
                            }
                        }
                    },
                    spline: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                series: [{
                    name: data.name,
                    data: series_data
                }]
                // series: [{
                //     name: '东京',
                //     data: [7.00, 6.00, 9.00, 14.00, 18.00, 21.00, 25.00, 26.00, 23.00, 18.00, 13.00, 9.00]
                // }]
            };
            return highchartJson;
        }
    };
    window.Charts = new Charts();
})();
