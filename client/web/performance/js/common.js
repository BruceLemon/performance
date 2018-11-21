//常用工具类
(function () {
    "use strict";

    function Common() {
        this.currencys = {"11": "人民币", "95": "本外币"};
        this.isChoose = {"0": "是", "1": "否"};//是否选中
        this.budgettType = {"0": "预算内", "1": "预算外","2":"营销费用"};//预算类型
        this.approveSelecType = {"0":"请选择","1": "同意", "2": "拒绝","3":"有条件同意"};//审核结果
        this.approveLccpSelecType = {"0":"请选择","1": "同意", "2": "拒绝"};//审核结果
        this.PurchaseType = {
            "1": "自行采购",
            "2": "集中采购",
        }// 采购类型
        this.PurchaseTypes = {
            "0": "公开招标",
            "2": "邀请招标",
            "1": "竞争性谈判",
            "3": "单一来源采购",
            "4": "协议供货",
            "5": "询价采购"

        }
        //登陆次序设定
        this.portalLeval = {
            "Schedule": "1",
            "MBI": "4",
            "PM": "9",
            "Performance": "5",
            "LAM": "8",
        };
        //登陆显示
        this.portalModule = {
            "Schedule": "待办事项",
            "MBI": "驾驶舱",
            "PM": "员工简历",
            "Performance": "我的绩效",
            "LAM": "授信审批",
        }
        //采购具体方式
        this.zxPurchaseTypes = {
            "3": "单一来源采购",
            "4": "协议供货",
            "5": "询价采购"
        }//采购具体方式
        this.approvePurchaseTypes = {"0": "需求部门自行采购", "1": "物品管理部门领用"};//审批采购方式

        this.organizations = '';
        this.havePermissionTreeData = '';  //存储树状的机构数据
        this.currCurrencyId = "95";
        this.currCurrencysId = "11";
        this.currOrganizationId = ""; //070667800

        this.imdCurrencys = {
            "94": "折美元合计",
            "95": "折人民币合计",
            "11": "人民币",
            "12": "英镑",
            "13": "港币",
            "14": "美元",
            "15": "瑞士法朗",
            "27": "日元",
            "29": "澳大利亚元",
            "38": "欧元"
        };
        this.imdCurrencysId = "94";
        this.imdCurrOrganizationId = "070667800";
        this.fmCurrOrganizationId = "000000000";
        var date = new Date("2017-11-30")
        this.imdCurrDate = date;


        //var date = new Date(new Date()-24*60*60*1000);//获取当前时间 "2017-09-30"
        // var date = new Date("2017-10-29"); //
        // date.setDate(date.getDate()-1);//设置天数 -1 天
        //  this.currDate = date;

        this.currDate = "";
        this.batchDate = "";                  //跑批日期
        this.indexMonitorDate = "";
        this.indexPresidentDate = "";
        this.ebankDate = "";
        this.mpaDate = "";
        this.totalDate = "";
        this.imdDate = "";
        var date1 = new Date("2018-07-31")
        this.presidentDate = date1;
        this.event_filterConfirm = "event_filterConfirm";
        this.event_ipadiFlterConfirm = "event_ipadiFlterConfirm";
        this.event_ipadMPAiFlterConfirm = "event_ipadMPAiFlterConfirm";
        this.event_ipadImdiFlterConfirm = "event_ipadImdiFlterConfirm";
        this.event_ipadFMiFlterConfirm = "event_ipadFMiFlterConfirm"
        this.event_ipadEBankiFlterConfirm = "event_ipadEBankiFlterConfirm";
        this.event_ipadMonitoriFlterConfirm = "event_ipadMonitoriFlterConfirm";
        this.event_ipadTotaliFlterConfirm = "event_ipadTotaliFlterConfirm";
        this.event_ipadDlRealTimefilterConfirm = "event_ipadDlRealTimefilterConfirm";
        this.event_ipadCommoniFlterConfirm = "event_ipadCommoniFlterConfirm";
        this.event_ipadPresidentiFlterConfirm = "event_ipadPresidentiFlterConfirm";
        this.SwitchState = {'switchSus': ['yes']}; //,'switchShare':['yes'],'switchSlide':['yes']
        this.gestureSwitch = {'gestureSwitch': ['yes']};

        this.quotaExplain = {};

        this.attributes = {
            keyField: 'branchId',
            // 上级标识字段名
            parentKeyField: 'pId',
            // 文本字段名
            textField: 'branchName',
            //权限
            qx: 'qx',
            // 根节点标识
            rootKey: ''
        };
        // this.attributes = {
        //     keyField: 'departId',
        //     // 上级标识字段名
        //     parentKeyField: 'parentDepartId',
        //     // 文本字段名
        //     textField: 'departName',
        //     // 根节点标识
        //     rootKey: 'root'
        // };
        // this.departRows = [{
        //     parentDepartId: 'root',
        //     departId: 'DC',
        //     departName: '集团'
        // }, {
        //     parentDepartId: 'DC',
        //     departId: '01',
        //     departName: '上海总部'
        // }, {
        //     parentDepartId: 'DC',
        //     departId: '02',
        //     departName: '苏州分部'
        // }, {
        //     parentDepartId: '02',
        //     departId: '0200',
        //     departName: '苏州分部部门A'
        // }, {
        //     parentDepartId: '02',
        //     departId: '0201',
        //     departName: '苏州分部部门B'
        // }, {
        //     parentDepartId: '0201',
        //     departId: '020100',
        //     departName: '苏州分部部门B小组A'
        // }, {
        //     parentDepartId: '0201',
        //     departId: '020101',
        //     departName: '苏州分部部门B小组B'
        // }, {
        //     parentDepartId: '0201',
        //     departId: '020102',
        //     departName: '苏州分部部门B小组C'
        // }, {
        //     parentDepartId: '0201',
        //     departId: '020103',
        //     departName: '苏州分部部门B小组D'
        // }];
        // var treeData = this.convertTreeData(this.departRows, this.attributes);
        // log(treeData);
        // Constants.getJsonChild(treeData,"0201");
        // log(Constants.arr1);
    }

    Common.prototype = {
        addCommonEvent: function (dom, name, callback) {
            this.arr = this.arr || [];
            this.arr[dom] = this.arr[dom] || [];
            this.arr[dom].push({
                name: name,
                callback: callback
            })

        },
        removeCommonEvent: function (dom, name) {
            if (this.arr && this.arr[dom]) {
                var len = this.arr[dom].length;
                for (var i = 0; i < len; i++) {
                    if (this.arr[dom][i].name === name) {
                        this.arr[dom].splice(i, 1);
                        break;
                    }
                }
            }
        },
        triggerOne: function (dom, name) {
            if (this.arr && this.arr[dom]) {
                var len = this.arr[dom].length;
                for (var i = 0; i < len; i++) {
                    if (this.arr[dom][i].hasOwnProperty("name") && this.arr[dom][i].name === name) {
                        this.arr[dom][i].callback();
                    }
                }
            }
        },
        triggerAll: function (name) {
            if(this.arr === undefined){
                return;
            }
            for (var dom in this.arr) {
                if(this.arr[dom] === undefined){
                    continue;
                }
                var len = this.arr[dom].length;
                for (var i = 0; i < len; i++) {
                    if (this.arr[dom][i].hasOwnProperty("name") && this.arr[dom][i].name === name) {
                        this.arr[dom][i].callback();
                        break;
                    }
                }
            }
        },
        //获取url中的参数
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r !== null) return unescape(r[2]);
            return null; //返回参数值
        },
        getCommonParamId: function (objInfo, val) {
            for (var key in objInfo) {
                if (objInfo[key] === val) {
                    return key;
                }
            }
            return "";
        },
        getValArr: function (objInfo) {
            var arr = [];
            for (var key in objInfo) {
                arr.push(objInfo[key]);
            }
            return arr;
        },
        getFormatedDate: function (date) {
            //date:Date类型
            var dateFormat = 'yyyy-mm-dd';
            var year = date.getFullYear();
            var month = date.getMonth();
            var month1 = month + 1;
            var day = date.getDate();
            var weekDay = date.getDay();
            return dateFormat
                .replace(/yyyy/g, year)
                .replace(/yy/g, (year + '').substring(2))
                .replace(/mm/g, month1 < 10 ? '0' + month1 : month1)
                .replace(/m(\W+)/g, month1 + '$1')
                .replace(/dd/g, day < 10 ? '0' + day : day)
                .replace(/d(\W+)/g, day + '$1')
        },
        //生成从minNum到maxNum的随机数
        randomNum: function (minNum, maxNum) {
            switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * minNum + 1, 10);
                    break;
                case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                    break;
                default:
                    return 0;
                    break;
            }
        },
        traverse: function (o, func) {
            for (var i in o) {
                func.apply(this, [i, o[i]]);
                if (o[i] !== null && typeof(o[i]) === "object") {
                    window.Common.traverse(o[i], func);
                }
            }
        },
        dealJson: function (jsonData) {
            for (var key in jsonData) {
                var data = jsonData[key];
                if (data.leafType === 1) {
                    jsonData.slice(key, 1);
                    // delete jsonData[key];
                }
                log("------ key:" + key + " jsonData:" + data);
                // if (o[i] !== null && typeof(o[i]) === "object") {
                //     window.Common.traverse(o[i], func);
                // }
            }
        },
        //F7通知
        notice: function () {
            var notification = myApp.addNotification({
                title: 'Framework7',
                message: 'This is a simple notification message with title and message'
            });
            myApp.closeNotification(notification);
        },
        //图形的放大缩小以及拖拽
        initScaleAndMoveAction: function (areaId, elementId) {
            // try {
            if (window[areaId + "_scale"] == null) {
                window[areaId + "_scale"] = 1;
            }
            window.interactScrollEnabled = true;
            var lastPageY = -10000;
            var lastPageX = -10000;
            window.interactTimer = 0;
            var interactObj;
            window[areaId + "_scroll"] = false;
            var lastStep = 0;
            var lastDragMoveDx = 0;
            var lastDragMoveDy = 0;
            var lastDragMoveVx = 0;
            var lastDragMoveVy = 0;
            var lastDragMoveTarget = null;
            var gestureArea = $("#" + areaId);
            var getCurrentPage = function () {
                if(pad.toString() === "true"){
                    var currentView = window.MBIPadManager.getCurrView();
                }else{
                    var currentView = window.MBIManager.getCurrView();
                }
                var activePage = currentView.activePage;
                var currentPage = $$(".page-content", activePage.container);
                return currentPage;
            }
            var scaleElement = $("#" + elementId);
            var gestureAreaElement = document.getElementById(areaId);
            var scaleElementElement = document.getElementById(elementId);
            if (_.isNull(gestureAreaElement) || _.isNull(scaleElementElement)) {
                return;
            }
            window[areaId + "_scaleElementWidth"] = scaleElement.width();
            window[areaId + "_scaleElementHeight"] = scaleElement.height();
            window[areaId + "_gestureAreaWidth"] = gestureArea.width();
            window[areaId + "_gestureAreaHeight"] = gestureArea.height();
            scaleElementElement.style.webkitTransform = scaleElementElement.style.transform = 'scale(' + window[areaId + "_scale"] + ')';
            var scrollDisable = function () {
                //alert("scrollDisable");
                window.interactScrollEnabled = false;
                clearTimeout(window.interactTimer);
                window.interactTimer = setTimeout(function () {
                    window.interactScrollEnabled = true;
                }, 4000);
            }
            var scrollEnable = function () {
                window.interactScrollEnabled = true;
                clearTimeout(window.interactTimer);
            }
            var lastScrollTop = 0;
            var dragMove = function (dx, dy) {
                //return;
                if (lastDragMoveTarget) {
                    var lastX = parseFloat(lastDragMoveTarget.getAttribute('data-x'));
                    var lastY = parseFloat(lastDragMoveTarget.getAttribute('data-y'));
                    var x = (parseFloat(lastDragMoveTarget.getAttribute('data-x')) || 0) + dx;
                    var y = (parseFloat(lastDragMoveTarget.getAttribute('data-y')) || 0) + dy;

                    if (x + scaleElement.width() / 2 - (scaleElement.width() / 2) * window[areaId + "_scale"] > 0) {
                        x = ((scaleElement.width() / 2) * window[areaId + "_scale"]) - scaleElement.width() / 2;
                    }
                    else if ((x + scaleElement.width() / 2 + ((scaleElement.width() / 2) * window[areaId + "_scale"]) < gestureArea.width())) {
                        x = gestureArea.width() - (scaleElement.width() / 2 + ((scaleElement.width() / 2) * window[areaId + "_scale"]));
                    }
                    window[areaId + "_scroll"] = false;
                    if (y + scaleElement.height() / 2 - (scaleElement.height() / 2) * window[areaId + "_scale"] > 0) {
                        y = ((scaleElement.height() / 2) * window[areaId + "_scale"]) - scaleElement.height() / 2;
                        if (Math.abs(dy) > Math.abs(dx)) {
                            window[areaId + "_scroll"] = true;
                        }
                    }
                    else if ((y + scaleElement.height() / 2 + ((scaleElement.height() / 2) * window[areaId + "_scale"]) < gestureArea.height())) {
                        y = gestureArea.height() - (scaleElement.height() / 2 + ((scaleElement.height() / 2) * window[areaId + "_scale"]));
                        if (Math.abs(dy) > Math.abs(dx)) {
                            window[areaId + "_scroll"] = true;
                        }
                    }
                    if (
                        window[areaId + "_scroll"] == false
                        && ((y + scaleElement.height() / 2 + ((scaleElement.height() / 2) * window[areaId + "_scale"]) - gestureArea.height())) != 0
                        && (y + scaleElement.height() / 2 - (scaleElement.height() / 2) * window[areaId + "_scale"]) != 0
                    ) {
                        scrollDisable();
                    }
                    var currentPage = getCurrentPage();
                    if ((lastX != x || lastY != y) && (lastScrollTop == currentPage.scrollTop())) {
                        gestureAreaElement.style.webkitTransform = gestureAreaElement.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
                        gestureAreaElement.setAttribute('data-x', x);
                        gestureAreaElement.setAttribute('data-y', y);
                    }
                    lastScrollTop = currentPage.scrollTop();
                }
            }
            var dragMoveAnimation = function () {
                if (lastDragMoveDx != 0 && lastDragMoveDy != 0) {
                    if (lastDragMoveDx > 0) {
                        lastDragMoveDx -= lastDragMoveVx;
                        if (lastDragMoveDx <= 0) {
                            lastDragMoveDx = 0;
                        }
                    }
                    if (lastDragMoveDy > 0) {
                        lastDragMoveDy -= lastDragMoveVy;
                        if (lastDragMoveDy <= 0) {
                            lastDragMoveDy = 0;
                        }
                    }
                    if (lastDragMoveDx < 0) {
                        lastDragMoveDx -= lastDragMoveVx;
                        if (lastDragMoveDx >= 0) {
                            lastDragMoveDx = 0;
                        }
                    }
                    if (lastDragMoveDy < 0) {
                        lastDragMoveDy -= lastDragMoveVy;
                        if (lastDragMoveDy >= 0) {
                            lastDragMoveDy = 0;
                        }
                    }
                    if (lastDragMoveDx == 0 && lastDragMoveDy == 0) {
                        clearInterval(window.dragMoveAnimationTimer);
                    }
                    else {
                        dragMove(lastDragMoveDx, lastDragMoveDy);
                    }
                }
            }
            var dragMoveListener = function (event) {
                lastDragMoveTarget = event.target;
                lastDragMoveDx = event.dx / 1;
                lastDragMoveDy = event.dy / 1;
                lastDragMoveVx = lastDragMoveDx / 20;
                lastDragMoveVy = lastDragMoveDy / 20;
                dragMove(event.dx, event.dy);
            };
            var lastTouchStartTick = 0;
            $(gestureArea).on('touchstart', function (e) {
                var now = new Date().getTime();
                lastPageY = -10000;
                lastPageX = -10000;
                window.isTouching=true;
                window.scrollByStepStop = true;
                lastTouchStartTick = new Date().getTime();
            });
            $(gestureArea).on('touchmove', function (e) {
                var _touch = e.originalEvent.changedTouches[0];
                var dx = _touch.pageX - lastPageX;
                var dy = _touch.pageY - lastPageY;
                window.isTouching=true;
                if (lastPageY != -10000 && e.originalEvent.targetTouches.length == 1 && e.originalEvent.changedTouches.length == 1) {
                    if (window[areaId + "_scroll"]) {
                        lastStep = dy;
                        var currentPage = getCurrentPage();
                        //$$(currentPage).scrollTop($$(currentPage).scrollTop()-dy, 0);
                        scrollEnable();
                    }
                }
                window[areaId + "_touches"]=e.originalEvent.touches.length;
                lastPageY = _touch.pageY;
                lastPageX = _touch.pageX;
            });
            $(gestureArea).on('touchend', function (e) {
                //return;
                window.isTouching=false;
                var _touch = e.originalEvent.changedTouches[0];
                var _x = _touch.pageX;
                if (lastPageY != -10000 && e.originalEvent.changedTouches.length == 1 && e.originalEvent.targetTouches.length == 0) {
                    if (window[areaId + "_scroll"]) {
                        var currentPage = getCurrentPage();
                        var step = lastStep / 1;
                        //alert(step);
                        if (step > 30) {
                            step = 30;
                        }
                        if (step < -30) {
                            step = -30;
                        }
                        //$$(currentPage).scrollByStep(step,step/40);
                        scrollEnable();
                    }
                    else {
                        clearInterval(window.dragMoveAnimationTimer);
                        window.dragMoveAnimationTimer = setInterval(dragMoveAnimation, 1000 / 60);
                    }
                }
            });
            interactObj = interact(gestureAreaElement)
                .gesturable({
                    onstart: function (event) {
                        window[areaId + "_scroll"] = false;
                    },
                    onmove: function (event) {
                        // console.log("onmove");

                        if(window[areaId + "_touches"]<=1)
                        {
                          return;
                        }

                        window[areaId + "_scale"] = window[areaId + "_scale"] * (1 + event.ds);
                        if (window[areaId + "_scale"] < 1) {
                            window[areaId + "_scale"] = 1;
                        }
                        if (window[areaId + "_scale"] > 2) {
                            window[areaId + "_scale"] = 2;
                        }
                        scaleElementElement.style.webkitTransform = scaleElementElement.style.transform = 'scale(' + window[areaId + "_scale"] + ')';
                        dragMoveListener(event);
                        if (window[areaId + "_scale"] <= 1.1) {
                            scrollEnable();
                        }
                        else {
                            scrollDisable();
                        }
                        window[areaId + "_scroll"] = false;
                    },
                    onend: function (event) {
                        window[areaId + "_scroll"] = false;
                    },
                    oncancel: function (event) {
                        window[areaId + "_scroll"] = false;
                    }
                })
                .draggable({
                    onmove: dragMoveListener
                });
            //interactObj.options.drag.enabled=false;
            // } catch (e) {
            //     log(">>>>>>>>>>异常 initScaleAndMoveAction error catch e:" + e.toString())
            // }
        },
        getOgranizationName: function (id) {
            for (var i = 0; i < this.organizations.length; i++) {
                if (this.organizations[i]["branchId"] === id) {
                    return this.organizations[i]["branchName"];
                }
            }
            return id;
        },
        getOrganizeId: function (name) {
            for (var i = 0; i < this.organizations.length; i++) {
                if (this.organizations[i]["branchName"] === name) {
                    return this.organizations[i]["branchId"];
                }
            }
            return name;
        },
        // getOrganizeId: function (name) {
        //     log("organizations: " + JSON.stringify(this.organizations))
        //     for (var key in this.organizations) {
        //         if (this.organizations[key] === name) {
        //             return key;
        //         }
        //     }
        //     return name
        // },
        dateFormat1: function (dateStr) {
            var result = "";
            if (dateStr === null || dateStr === undefined) {
                return result;
            }
            if (dateStr.length > 0 && dateStr.length <= 4) {
                result = dateStr + '年';
            } else if (dateStr.length > 4 && dateStr.length <= 6) {
                result = dateStr.substring(0, 4) + '年' + dateStr.substring(4) + '月';
            } else if (dateStr.length > 6 && dateStr.length <= 8) {
                result = dateStr.substring(0, 4) + '年' + dateStr.substring(4, 6) + '月' + dateStr.substring(6) + '日';
            }
            return result;
        },
        //将JSON数据转换为树状结构
        convertTreeData: function (rows, attributes) {
            var keyNodes = {}, parentKeyNodes = {};
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                row.id = row[attributes.keyField];
                row.parentId = row[attributes.parentKeyField];
                row.text = row[attributes.textField];
                row.qx = row[attributes.qx];
                row.children = [];

                keyNodes[row.id] = row;

                if (parentKeyNodes[row.parentId]) {
                    parentKeyNodes[row.parentId].push(row);
                }
                else {
                    parentKeyNodes[row.parentId] = [row];
                }

                var children = parentKeyNodes[row.id];
                if (children) {
                    row.children = children;
                }

                var pNode = keyNodes[row.parentId];
                if (pNode) {
                    pNode.children.push(row);
                }
            }
            return parentKeyNodes[attributes.rootKey];
        },
        //递归遍历树
        loopJgQx: function (treeDatas) {
            for (var i = 0; i < treeDatas.length; i++) {
                var treeData = treeDatas[i];
                log("treeData: " + JSON.stringify(treeData, null, 4));
                if (treeData.qx == "1") {   // if(treeData.qx == "1"){
                    log("name: " + treeData.branchName);
                    return
                }
                if (treeData.children && treeData.children.length > 0) {
                    log("treeData.children: " + JSON.stringify(treeData.children, null, 4));
                    this.loopJgQx(treeData.children);
                }
            }
        },
        //非递归遍历树
        loopJgQxTree: function (treeNodes) {
            var havePermissionArray = [];
            var stack = [];
            if (!treeNodes || !treeNodes.length) return;
            //先将第一层节点放入栈
            for (var i = 0, len = treeNodes.length; i < len; i++) {
                stack.push(treeNodes[i]);
            }
            var item;
            while (stack.length) {
                item = stack.shift();
                //log("stack.shift(): " + JSON.stringify(stack.shift(),null,4));
                if (item.qx == "1") {
                    var havaPermission = {};
                    havaPermission.pId = item.pId;
                    havaPermission.branchId = item.branchId;
                    havaPermission.branchName = item.branchName;
                    havaPermission.qx = item.qx;
                    havePermissionArray.push(havaPermission);
                }
                //如果该节点有子节点，继续添加进入栈底
                if (item.children && item.children.length) {
                    stack = stack.concat(item.children);
                }
            }
            return havePermissionArray;
        },
        //转换pId,当元素的Pid没有作为BranchId出现时，将Pid转换为“”
        convertPidNull: function (jsonData) {
            var convertJsonData = jsonData;
            for (var i = 0; i < jsonData.length; i++) {
                // if( i + 1 < jsonData.length){
                var flag = true;
                for (var j = 0; j < jsonData.length; j++) {
                    if (jsonData[i].pId == jsonData[j].branchId) {
                        flag = false;
                    }
                }
                if (flag) {
                    convertJsonData[i].pId = '';
                }
            }
            return convertJsonData;
        },
        createTreeData: function (data, pId) {
            var result = [], temp;
            for (var i = 0; i < data.length; i++) {
                if (data[i].pId == pId) {
                    var obj = {
                        "branchId": data[i].branchId,
                        "branchName": data[i].branchName,
                        "pId": data[i].pId,
                        "qx": data[i].qx
                    };
                    temp = this.createTreeData(data, data[i].branchId);
                    if (temp.length > 0) {
                        obj.children = temp;
                    }
                    result.push(obj)
                }
            }
            return result;
        },
        getLocalDate: function (timesy) {
            Date.prototype.toLocaleString = function () {
                var m = this.getMinutes();
                if (this.getMinutes() < 10) {
                    m = "0" + m;
                }
                var s = this.getSeconds()
                if (this.getSeconds() < 10) {
                    s = "0" + s;
                }
                var M = this.getMonth() + 1;
                if (M < 10) {
                    M = "0" + M
                }
                var d = this.getDate();
                if (d < 10) {
                    d = "0" + d;
                }
                return this.getFullYear() + "-" + M + "-" + d + " " + this.getHours() + ":" + m + ":" + s;
            };


            var unixTimestamp = new Date(timesy);
            var commonTime = unixTimestamp.toLocaleString();
            return commonTime;
        },
        //base64加密
        base64Encrypt: function (str) {
            if (str && str !== undefined && str !== "") {
                var wordArray = CryptoJS.enc.Utf8.parse(str);
                var base64 = CryptoJS.enc.Base64.stringify(wordArray);
                return base64;
            }
            return ""
        },
        //base64解密
        base64Decrypt: function (base64Str) {
            if (base64Str && base64Str !== undefined && base64Str !== "") {
                var parsedWordArray = CryptoJS.enc.Base64.parse(base64Str);
                var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
                return parsedStr;
            }
            return ""
        },
        loadQuotaParameter: function (indexType,isTopic) {
            // 1 --表示首页  2 --表示mpa  3 --电子银行  4 --国际业务 5 6-- 通用页面  7 -- 综合页面 11 - 理财
            var quotaHtml = '';
            var colHtmls = "";
            var marginStyle = "";

            if (indexType === 2) {
                colHtmls += '                           <div class="col-25" id="organizationClick_Mpa' + indexType + '">\n' +
                    '                                        <div class="item-content" style="padding-left: 10px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 10px">\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px">\n' +
                    '                                                    <input id="organizationId_Mpa' + indexType + '" type="text" class="style-common-text" style="font-size: 14px;text-align: center;height: 24px;" readonly value="总行">\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="col-35">\n' +
                    '                                        <div class="item-content" style="padding-left: 20px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 20px">\n' +
                    // '                                                <div id="currencyLeft_Mpa' + indexType + '" class="item-after" style="padding-right: 5px;padding-left: 0px">\n' +
                    // '                                                    <img src="images/homePage/leftSelect.png" style="height: 20px;width: 20px">\n' +
                    // '                                                </div>\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px">\n' +
                    '                                                    <input id="currencyId_Mpa' + indexType + '" type="text" class="style-common-text" style="font-size: 14px;text-align: center;height: 24px;width: 90%;margin-left: 10px;" readonly value="本外币">\n' +
                    '                                                </div>\n' +
                    // '                                                <div class="item-after" id="currencyRight_Mpa' + indexType + '">\n' +
                    // '                                                    <img src="images/homePage/rightSelect.png" style="height: 20px;width: 20px">\n' +
                    // '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>'
            } else if (indexType === 3 || isTopic) {
                colHtmls += '                           <div class="col-25" id="organizationClick_Ebank' + indexType + '">\n' +
                    '                                        <div class="item-content" style="padding-left: 10px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 10px">\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px">\n' +
                    '                                                    <input id="organizationId_Ebank' + indexType + '" type="text" class="style-common-text" style="font-size: 14px;text-align: center;height: 24px;" readonly value="总行">\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="col-35">\n' +
                    '                                        <div class="item-content" style="padding-left: 10px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 10px">\n' +
                    // '                                                <div id="currencyLeft_Ebank' + indexType + '" class="item-after" style="padding-right: 5px;padding-left: 0px">\n' +
                    // '                                                    <img src="images/homePage/leftSelect.png" style="height: 20px;width: 20px">\n' +
                    // '                                                </div>\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px">\n' +
                    '                                                    <input id="currencyId_Ebank' + indexType + '" type="text" class="style-common-text" style="font-size: 14px;text-align: center;height: 24px;" readonly value="人民币">\n' +
                    '                                                </div>\n' +
                    // '                                                <div class="item-after" id="currencyRight_Ebank' + indexType + '">\n' +
                    // '                                                    <img src="images/homePage/rightSelect.png" style="height: 20px;width: 20px">\n' +
                    // '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>';
            } else if (indexType === 11) {
                colHtmls += '                           <div class="col-25" id="organizationClick_FM' + indexType + '">\n' +
                    '                                        <div class="item-content" style="padding-left: 10px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 10px">\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px">\n' +
                    '                                                    <input id="organizationId_FM' + indexType + '" type="text" class="style-common-text" style="font-size: 14px;text-align: center;height: 24px;" readonly value="全部汇总">\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="col-35">\n' +
                    '                                        <div class="item-content" style="padding-left: 10px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 10px">\n' +
                    // '                                                <div id="currencyLeft_Ebank' + indexType + '" class="item-after" style="padding-right: 5px;padding-left: 0px">\n' +
                    // '                                                    <img src="images/homePage/leftSelect.png" style="height: 20px;width: 20px">\n' +
                    // '                                                </div>\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px">\n' +
                    '                                                    <input id="currencyId_FM' + indexType + '" type="text" class="style-common-text" style="font-size: 14px;text-align: center;height: 24px;" readonly value="人民币">\n' +
                    '                                                </div>\n' +
                    // '                                                <div class="item-after" id="currencyRight_Ebank' + indexType + '">\n' +
                    // '                                                    <img src="images/homePage/rightSelect.png" style="height: 20px;width: 20px">\n' +
                    // '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>';
            } else if(indexType === 4){
                colHtmls += '                           <div class="col-25" id="organizationClick_' + indexType + '">\n' +
                    '                                        <div class="item-content" style="padding-left: 5px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 5px">\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px">\n' +
                    '                                                    <input id="organizationId_' + indexType + '" type="text" class="style-common-text" style="font-size: 14px;text-align: center;height: 24px;" readonly>\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="col-35">\n' +
                    '                                        <div class="item-content" style="padding-left: 10px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 10px">\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px">\n' +
                    '                                                    <input id="currencyId_' + indexType + '" type="text" class="style-common-text" style="font-size: 14px;text-align: center;height: 24px;width: 80%;margin-left:10px;" readonly >\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>';
            }else {
                colHtmls += '                           <div class="col-25" id="organizationClick_' + indexType + '">\n' +
                    '                                        <div class="item-content" style="padding-left: 5px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 5px">\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px">\n' +
                    '                                                    <input class="style-common-text"  id="organizationId_' + indexType + '" type="text" style="font-size: 14px;text-align: center;height: 24px;" readonly>\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="col-35">\n' +
                    '                                        <div class="item-content" style="padding-left: 10px">\n' +
                    '                                            <div class="item-inner" style="padding-right: 10px">\n' +
                    // '                                                <div id="currencyLeft_' + indexType + '" class="item-after" style="padding-right: 5px;padding-left: 0px">\n' +
                    // '                                                    <img src="images/homePage/currencyLeftAnd.png" style="height: 20px;width: 22px">\n' +
                    // '                                                </div>\n' +
                    '                                                <div class="item-input style-common-span" style="margin: 0px" id="currencyLeft_' + indexType + '">\n' +
                    '                                                    <input class="style-common-text"  class="style-common-text" id="currencyId_' + indexType + '" type="text" style="font-size: 14px;text-align: center;height: 24px;width: 80%;margin-left:10px;" readonly >\n' +
                    '                                                </div>\n' +
                    // '                                                <div class="item-after" id="currencyRight_' + indexType + '">\n' +
                    // '                                                    <img src="images/homePage/rightSelect.png" style="height: 20px;width: 20px">\n' +
                    // '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>';
            }

            // if (indexType === 1) {
            //     marginStyle = " margin: 0px 3px;";
            // } else if (indexType === 2) {
            //     marginStyle = " margin: 0px 5px;";
            // } else if (indexType === 3) {
            //     marginStyle = "margin: 2px 10px 0px;";
            // } else if (indexType === 5) {
            //     marginStyle = "margin: 2px 10px 0px;";
            // }else{
            //     marginStyle = "margin: 0px;";
            // }
            quotaHtml += '                    <div class="list-block" style="margin: 0px;" >\n' +
                '                        <ul>\n' +
                '                            <li>\n' +
                '                                <div class="row no-gutter  style-cardContent-div">\n' +
                colHtmls +
                '                                    <div class="col-40">\n' +
                '                                        <div class="item-content" style="padding-left: 2px">\n' +
                '                                            <div class="item-inner" style="padding-right: 10px;">\n' +
                '                                                <div class="item-media" style="padding:0px 5px 0px;" id="dateLeft_' + indexType + '">\n' +
                '                                                    <img src="images/homePage/dateLeft2.png" style="height: 20px;width: 19px">\n' +
                '                                                </div>\n' +
                '                                                <div class="item-input style-common-span"  style="margin: 0px">\n' +
                '                                                    <input    id="dateId_' + indexType + '" type="text" class="style-common-text" style="font-size: 14px;text-align: center;height: 24px;" readonly>\n' +
                '                                                </div>\n' +
                '                                                <div class="item-after" id="dateRight_' + indexType + '">\n' +
                '                                                    <img src="images/homePage/dateRight2.png" style="height: 20px;width: 18px">\n' +
                '                                                </div>\n' +
                '                                                <div class="item-after" id="realTimeId_' + indexType + '" style="display: none">\n' +
                '                                                    <img src="images/homePage/realTime2.png" style="height: 21px;width: 31px;">\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </div>';

            return quotaHtml;
        },
        loadQuotaData: function (organization, currency, date, indexType) {
            // 1 --表示首页  2 --表示mpa  3 --电子银行  4 --国际业务   5 -- 综合页面  6 7 8 9 10-- 通用页面
            var date1 = this.getFormatedDate(date).replace(/-/g, "");
            $("#dateId_" + indexType).val(date1);

            var view = MBIManager.getCurrView();
            var activePageName = view.activePage.name;
            if (this.isToday(date)) {
                if (activePageName === "index-1") {
                    $("#realTimeId_" + indexType).show();
                    $("#dateRight_" + indexType).hide();
                } else {
                    $("#realTimeId_" + indexType).hide();
                    $("#dateRight_" + indexType).hide();
                }
            } else {
                if (activePageName === "commonModel") {
                    if (this.isYesterday(date)) {
                        $("#realTimeId_" + indexType).hide();
                        $("#dateRight_" + indexType).hide();
                    } else {
                        if (!this.isToday(date)) {
                            $("#realTimeId_" + indexType).hide();
                            $("#dateRight_" + indexType).show();
                        }
                    }
                } else if (activePageName === "index-2" || activePageName === "mpaModel"||activePageName === "index-3"||activePageName === "commonTotal"||activePageName === "commonModel") {

                    if (this.isYesterday(date)) {
                        $("#realTimeId_" + indexType).hide();
                        $("#dateRight_" + indexType).hide();
                    } else {
                        $("#realTimeId_" + indexType).hide();
                        $("#dateRight_" + indexType).show();
                    }
                } else {
                    $("#realTimeId_" + indexType).hide();
                    $("#dateRight_" + indexType).show();
                }
            }
            if (indexType === 1 || indexType === 5 || indexType === 6 || indexType === 7 || indexType === 8 || indexType === 9 || indexType === 10 ) {
                var organizationName = this.getOgranizationName(organization);
                var currencyName = this.currencys[currency];
                $("#organizationId_" + indexType).val(organizationName);
                $("#currencyId_" + indexType).val(currencyName);
            }
            if (indexType === 4) {
                var organizationName = this.getOgranizationName(organization);
                var currencyName = this.imdCurrencys[currency];
                $("#organizationId_" + indexType).val(organizationName);
                $("#currencyId_" + indexType).val(currencyName);
            }
        },
        isToday: function (str) {
            var sendDate = this.getFormatedDate(str).replace(/-/g, "");
            var nowDate = new Date();
            var today = this.getFormatedDate(nowDate).replace(/-/g, "");
            if (sendDate === today) {
                return true;
            } else {
                return false;
            }
        },
        isYesterday: function (str) {
            var entryDate = this.getFormatedDate(str).replace(/-/g, "");
            var today = new Date();
            var yesterday = new Date(today.setDate(today.getDate() - 1));
            var yesterdayString = this.getFormatedDate(yesterday).replace(/-/g, "");
            if (entryDate === yesterdayString) {
                return true;
            } else {
                return false;
            }
        },
        initDateId: function (indexType, isTopic) {
            if (window.IndexController["dateIdInit" + indexType] === 1) {
                window.IndexController["myCalendarQuota" + indexType].setValue([window.Common.currDate]);
                return;
            } else {
                window.IndexController["dateIdInit" + indexType] = 1;
            }

            var disabledDate = "";
            var view = MBIManager.getCurrView();
            var activePageName = view.activePage.name;

            if (isTopic || activePageName === "commonModel"||activePageName === "index-3") {
                var today = new Date();
                today.setDate(today.getDate() - 1);
                disabledDate = new Date(today);
            } else {
                disabledDate = new Date();
            }
            window.IndexController["myCalendarQuota" + indexType] = myApp.calendar({
                input: '#dateId_' + indexType,
                dateFormat: 'yyyymmdd',
                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
                closeOnSelect: true,
                onChange: function (p, values) {
                    window.Common.currDate = new Date(values[0]);
                    var nowDate = new Date();
                    var nowDateString = window.Common.getFormatedDate(nowDate).replace(/-/g, "");
                    var date1 = window.Common.getFormatedDate(values[0]).replace(/-/g, "");

                    var view = MBIManager.getCurrView();
                    var activePageName = view.activePage.name;
                    if (date1 === nowDateString) {
                        if (activePageName === "index-1") {
                            $("#realTimeId_" + indexType).show();
                            $("#dateRight_" + indexType).hide();
                        }
                    } else {
                        if (activePageName === "index-2" || activePageName === "mpaModel"||activePageName === "index-3" ||activePageName === "commonTotal"||activePageName === "commonModel") {
                            if (window.Common.isYesterday(values[0])) {
                                $("#realTimeId_" + indexType).hide();
                                $("#dateRight_" + indexType).hide();
                            } else {
                                $("#realTimeId_" + indexType).hide();
                                $("#dateRight_" + indexType).show();
                            }
                        } else {
                            $("#realTimeId_" + indexType).hide();
                            $("#dateRight_" + indexType).show();
                        }


                        // $("#realTimeId_" + indexType).hide();
                        // $("#dateRight_" + indexType).show();
                    }
                    // window.Common.triggerAll(window.Common.event_filterConfirm);
                    window.IndexController["myCalendarQuota" + indexType].close();
                },
                disabled: {
                    from: disabledDate
                },
                onClose: function () {
                    window.Common.triggerAll(window.Common.event_filterConfirm);
                }
            });
            window.IndexController["myCalendarQuota" + indexType].setValue([window.Common.currDate]);
        },
        initImdCurrencyId: function (indexType) {
            if (window.IndexController.currencyIdImdInit === 1) {
                return;
            } else {
                window.IndexController.currencyIdImdInit = 1
            }
            window.IndexController.imdPickerDevice = myApp.picker({
                input: '#currencyId_' + indexType,
                cols: [
                    {
                        textAlign: 'center',
                        values: window.Common.getValArr(window.Common.imdCurrencys)
                    }
                ],
                onChange: function (p, values) {
                    window.Common.imdCurrencysId = window.Common.getCommonParamId(window.Common.imdCurrencys, values[0]);
                },
                onOpen: function (imdPickerDevice) {
                    var col0Values = imdPickerDevice.cols[0].values[8];
                    imdPickerDevice.setValue([col0Values]);
                },
                onClose: function () {
                    window.Common.triggerAll(window.Common.event_filterConfirm);
                },
                toolbarCloseText: "完成"
            });
        },
        initCurrencyId: function (indexType) {
            if (window.IndexController["currencyIdInit" + indexType] === 1) {
                return;
            } else {
                window.IndexController["currencyIdInit" + indexType] = 1
            }
            var pickerDevice2 = myApp.picker({
                input: '#currencyId_' + indexType,
                cols: [
                    {
                        textAlign: 'center',
                        values: this.getValArr(window.Common.currencys)
                    }
                ],
                onChange: function (p, values) {
                    window.Common.currCurrencyId = window.Common.getCommonParamId(window.Common.currencys, values[0]);

                },
                onOpen: function (pickerDevice2) {
                    // var col0Values = pickerDevice2.cols[0].values[1];
                    var beginValue = $("#currencyId_" + indexType).val();
                    var col0Values = "";
                    if(beginValue !== undefined){
                        col0Values = beginValue;
                    }else {
                        col0Values = pickerDevice2.cols[0].values[1];
                    }
                    pickerDevice2.setValue([col0Values]);
                },
                onClose: function () {
                    window.Common.triggerAll(window.Common.event_filterConfirm);
                },
                toolbarCloseText: "完成"
            });
        },
        getUrlBase: function () {
            //获取当前网址，如： http://localhost:8080/Tmall/index.jsp
            var curWwwPath = window.document.location.href;
            //获取主机地址之后的目录如：/Tmall/index.jsp
            var pathName = window.document.location.pathname;
            var pos = curWwwPath.indexOf(pathName);
            //获取主机地址，如： http://localhost:8080
            var localhostPath = curWwwPath.substring(0, pos);
            //获取带"/"的项目名，如：/Tmall
            var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
            var base = localhostPath + projectName + "/";
            return base;
        },
        //判断当前日期是否是月末，不是则返回上月末
        isMonthEnd:function (date) {
            // //date 为Date类型
            var date1 =new Date(date)
            var nowMonth = date1.getMonth();
            var nowDay = date1;
            var nextDay = date1.setDate(date.getDate() + 1);
            var newMonth = date1.getMonth();
            return nowMonth === newMonth ? this.getLastMonthEndDate(date1) : new Date(date1.setDate(date1.getDate() - 1));
        },
        //获得上月结束时间
        getLastMonthEndDate:function (date) {
            var nowdays = new Date(date);
            var year = nowdays.getFullYear();
            var month = nowdays.getMonth();
            if(month==0)
            {
                month=12;
                year=year-1;
            }
            if (month < 10) {
                month = "0" + month;
            }
            var myDate = new Date(year, month, 0);
            var lastDay = year + "-" + month + "-" + myDate.getDate();//上个月的最后一天
            return lastDay;
        },
        converterEngine:function (input) { // fn BLOB => Binary => Base64 ?
            var uInt8Array = new Uint8Array(input),
                i = uInt8Array.length;
            var biStr = []; //new Array(i);
            while (i--) { biStr[i] = String.fromCharCode(uInt8Array[i]);  }
            var base64 = window.btoa(biStr.join(''));
            return base64;
        },
        getImageBase64:function (url, callback) {
            var self = window.Common;
            // to comment better
            var xhr = new XMLHttpRequest(url), img64;
            xhr.open('GET', url, true); // url is the url of a PNG/JPG image.
            xhr.responseType = 'arraybuffer';
            xhr.callback = callback;
            xhr.onload  = function(){
                img64 = self.converterEngine(this.response); // convert BLOB to base64
                this.callback(null,img64) // callback : err, data
            };
            xhr.onerror = function(){ callback('B64 ERROR', null); };
            xhr.send();

            //例子
            // Common.getImageBase64('http://120.26.55.65:8080/mbi/app/web/images/homePage/headBg.png', function (err,data) {
            //     var imgStr = "data:image/png;base64,"+data;
            //     // $("#headImg_setting").attr("src", imgStr);
            //     log(imgStr);
            // });
        },
        saveUserTrail:function(modelId){
            AppOp.getAppData(Constants.AppSaveName.AccountName, function (val) {
                if (val !== undefined && val !== "" && val !== null) {
                    var userId = val;
                    var setInfo = {};
                    setInfo.userId = userId;
                    setInfo.modelId = modelId;
                    NetManager.httpReq(Constants.HttpReqName.SaveUserAction, setInfo, function (data) {
                    }, function (data) {
                    });
                }
            });

        },
        numFun : function (obj) {
            var newStr = "";
            var count = 0;
            var objStr = obj.toString();
            if(objStr.indexOf(".")==-1){
                if(objStr.charAt(0) == '0'){ //不存在小数点时，判断第一位数字是否为0
                    objStr = objStr.substring(1);
                }
                for(var i=objStr.length-1;i>=0;i--){
                    if(count % 3 == 0 && count != 0){
                        newStr = objStr.charAt(i) + "," + newStr;
                    }
                    else{
                        newStr = objStr.charAt(i) + newStr;
                    }
                    count++;
                }
                objStr = newStr + ".00";
                return objStr;
            }
            else{
                for(var i=objStr.indexOf(".")-1;i>=0;i--){
                    if(count % 3 == 0 && count != 0){
                        newStr = objStr.charAt(i) + "," + newStr;
                    }
                    else{
                        newStr = objStr.charAt(i) + newStr;
                    }
                    count++;
                }

                objStr = newStr + (objStr + "00").substr((objStr + "00").indexOf("."),3);
                return objStr;
            }

        },

        moneyzhuanhuan : function(x){
                var f = parseFloat(x);
                if (isNaN(f)) {
                    return false;
                }
                var f = Math.round(x*100)/100;
                var s = f.toString();
                var rs = s.indexOf('.');
                if (rs < 0) {
                    rs = s.length;
                    s += '.';
                }
                while (s.length <= rs + 2) {
                    s += '0';
                }
                return s;
            }
    };
    window.Common = new Common();
})();
