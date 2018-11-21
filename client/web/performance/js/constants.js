//常量枚举
(function () {
    "use strict";

    function Constants() {

        this.errorCode_0 = "-1";             //-1 非正常异常，需要log出errorMsg方便调试
        this.errorCode_100 = "100";          //100 通用操作的提示
        this.errorCode_101 = "101";          //101 账号在其他地方被登录
        this.errorCode_102 = "102";          //102 账号输入错误超过次数，锁定1小时
        this.errorCode_103 = "103";          //103 APP应用权限。用户无权限查看
        this.errorCode_104 = "104";          //104 没有查看简历的权限
        this.errorCode_105 = "105";          //105 登录设备非上次登录设备，需要手机验证
        this.errorCode_106 = "106";          //106 上次登录时间至当天已间隔超过30天，需要手机验证
        this.errorCode_107 = "107";          //107 首次登陆，需要手机验证
        this.processUrl = "";
        this.errorCodeTip = {
            "101": "账号在其他地方被登录",
            "102": "账号输入错误超过次数，锁定1小时",
            "103": "用户无权限查看",
            "104": "没有查看简历的权限",
            "105": "登录设备非上次登录设备，需要手机验证",
            "106": "上次登录时间至当天已间隔超过30天，需要手机验证",
            "107": "首次登陆，需要手机验证",
        };

        //应用存储名称
        this.AppSaveName = {
            AccountName: "AccountName",
            AccountPwd: "AccountPwd",
            AccountToken: "AccountToken",
            AccountAutoToken: "AccountAutoToken",
            AccountAutoTokenChanging: "AccountAutoTokenChanging",
            AccountLastLoginTime: "AccountLastLoginTime",
            LoginData:"LoginData",
            DepartmentStr: "DepartmentStr",
            EmployeeStr: "EmployeeStr",
            SwitchState: "SwitchState",
            BiometrySwitchState:"BiometrySwitchState",
            GestureState: "GestureState",
            ServerIp: "ServerIp",
            BiometryType:"biometryType",
            LoginLastTime:"LoginLastTime",           //上次登录时间
            IsLoginSuccess:"IsLoginSuccess",
            StyleType:"StyleType",                            //样式类型1:白色。2:黑色
            EmailName:"EmailName",
            EmailPwd:"EmailPwd"
        };
        Object.freeze(this.AppSaveName);

        //指标类型：0:节点；1:表格;2:饼图;3:单值曲线图;31:多值曲线图;4:单值柱状图;41:多值柱状图;5:数值;6:仪表盘;7:面积图;8:条形图）
        this.ModuleType = {
            Node: "0",
            Table: "1",
            Pie: "2",
            LineOne: "3",
            LineMulti: "31",
            LineDynamic: "32",
            ColumnOne: "4",
            ColumnMulti: "41",
            Num: "5",
            GaugeBoard: "6",//速度仪
            Area: "7",
            Bar: "8",
            Compare: "9",        //比值
            PieSp: "10",         //环形图
            PieDouble: "11",      //双层饼
            StackBar: "12",       //堆叠条形图
            HistogramMixLine: "13", //柱状图和折线图混合图
            Pie3D: "14",//3d饼图
            HisMixLineNoReapt: "15", //柱状图和折线图（柱状图不堆叠）
            HisAndLineNoReapt: "22", //柱状图和折线图
            VariablePie: "16",//玫瑰图（可变宽度的环形图）
            PieGraph: "17",//扇形图
            Dashboard: "18",//仪表盘
            SingleDialDashboard: "19" ,//单刻度仪表盘
            Solidgauge:"23",//活动图图
            StackColumn:"24",//堆叠柱状图
            Pyramid:"25" ,//金字塔图
            Areaspline:"26",//曲线面积图
            Column3D:"21",//3d柱状图

            GaugeBoardDetal: "27",//速度仪详细
        };
        Object.freeze(this.ModuleType);

        //页面名称
        this.PageName = {
            CommonModel: "commonModel",
            DlRealTime: "dlRealTime",
            IndexPage1: "index-1",
            IndexPage2: "index-2",
            IndexPage3: "index-3",
            IndexPage4: "index-4",
            Portal: "portal",
            SettingDataPage: "settingDataPage",
            Login: "login-screen",
            MpaModel: "mpaModel",
            CollectModel: "collectModel",
            PersonnelInfo: "personnelInfo",
            Person: "person",
            AutoCompleteRadio: "autocomplete-radio",
            WorkToDo : "purchase",
            PurchaseDetail: "procurementDetail",
            CirculationLog: "circulationLogInfo",
            DlRealTimeCommon: "dlRealTimeCommon",
            CommonDlRealTime : "commonDlRealTime",
            SuperviseDetail:"superviseDetail",
            CirculationLogForDCDBInfo:"circulationLogForDCDBInfo",
            SuggestionDetail:"suggestionDetail",
            CirculationLogForSuggestionInfo:"circulationLogForSuggestionInfo",
            SuperviseAddress:"superviseAddress",
            SuggestionAdress:"suggestionAdress",
            CreditDetail:"creditDetail",
            CirculationLogForDepositRate:"circulationLogForDepositRateInfo",
            DepositRateAddress:"depositRateAdress",
            DepositRateDetail:"depositRateDetail",
            LccpDetail:"lccpDetail",
            CirculationLogForLccp:"circulationLogForLccpInfo",
            DealWorkList:"dealWorkList",
            Adress:"adress",     //采购选人页面
            LoanTrialMeeting:"loanTrialMeeting",     //贷审会页面
            LoanTrialMeetingListInfo:"loanTrialMeetingListInfo",     //贷审会列表页面
            DshNextDetailList:"dshNextDetailList",     //贷审会集团公司页面
            ShowPhotos:"showPhotosDetail",     //贷审会客户详情页面
            BankMeetDetail:"bankMeetDetail",     //行办会详情页面
            DirectorMeetDetail:"directorMeetDetail" ,    //董办会详情页面
            BigDepositDetail:"bigdepositDetail",
            SealDetail:"sealDetail",    // 用印审批详情页面
            CirculationLogForSealInfo:"circulationLogForSealInfo",    // 用印审批流转日志页面
            SealAddress:"sealAddress",    // 用印审批指派页面
            SpRateInfoQueryDetail:"SpRateInfoQueryDetail"   //服务价格审批
        };
        Object.freeze(this.PageName);

        //协议名称
        this.HttpReqName = {
            AppLogin: "appLoginBySSO",        //登录
            AppLoginWithoutLogin: "appLoginWithoutLogin",    //免密登录
            GetAndroidVersion: "appModel/getAndriodVersion",       //获取安卓和ios版本信息
            SendSms: "sendSms",
            DelUserLoginDevice: "appManage/protocol/appUserLoginDevice/delUserLoginDevice",
            RegisterPushToken:"push/registerPushToken",
            NullifyPushToken:"push/nullifyPushToken",
            GetYZM:"getYZM",
            ForgetPwd:"forgetPwd",
            getMailInfo:"getMailInfo",
            SaveCzjl:"appManage/userCZJL/saveCzjl",
            SaveUserAction:"appManage/userAction/saveUserAction",
            SubmitUserAdvice:"sysUser/userAdvice/submitUserAdvice"
        };
        Object.freeze(this.HttpReqName);

        this.StatusBarColor = {
            White: "#f7f7f8",
            Login: "#C43027",
            AndroidColor1: "#afafaf",
            iosBlackColor:"#515368",
            iosToDoWhite:"#f0eff5",
            iosPortalWhite:"#ffffff"

        };
        Object.freeze(this.StatusBarColor);

        this.CardTemplateType = {
            Template1:"Template1"
        };
        Object.freeze(this.CardTemplateType);
        //http head前置
        this.serverReqConstant = {
            getDoneDbhMeetingsByCodeLimit:10, //获取已办会议列表数量限制
            serviceCnlTp:"02060000", //渠道类型
            serviceCnsmrSysId:"101100", //消费方系统编号
            serviceFileFlg:"0", //标识
            /**消费方系统编号*/
            CNSMR_SYS_ID : "101100",
            //查询服务
            QUERY_SERVER:"50013000009",
            //处理流程（提交，否决，退回）服务
            DEAL_SERVER:"50012000005",
            //SvcScn
            SVC_SCN01:"01",
            SVC_SCN02:"02",
            SVC_SCN03:"03",
            SVC_SCN04:"04",
            SVC_SCN05:"05",
            SVC_SCN06:"06",
            SVC_SCN07:"07",
            SVC_SCN08:"08",
            SVC_SCN09:"09",
            SVC_SCN10:"10"

        };

        //ws和http接口名称
        this.reqID = {

            //事件审批详情
            getEventWorkItemById:"sjspxq",
            //事件审批待办
            getEventWorkItems:"sjspdsp",
            //事件审批已办
            getDoneEventWorkItems:"sjspysp",
            //事件审批
            approve:"sjsp",
            //报销单待办
            getUndoBxdList:"bxddbsp",
            //报销单已办
            getDoneBxdList:"bxdybsp",
            //报销单详情
            getBxdApplyInfo:"bxdxqsp",
            //报销单采购关联列表
            getBxdCgList:"bxdscgglsp",
            //报销单科目关联列表
            getBxdExacctList:"bxdkmglsp",
            //报销单发票关联列表接口
            getBxdReceiptList:"bxdfpglsp",
            //报销单审批意见接口
            getBxdApproveInfo:"bxdyjsp",
            //报销单流转日志列表接口
            getBxdRecordList:"bxdlzrzsp",
            //报销单流程审批接口
            bxdCommit:"bxdsp",
            //报销单附件
            getBxdAttachList:"bxdfj",

            //合同审批详情
            getContractApplyDetailByCode:"htsphqhtxq",
            //合同审批待办
            getUndoContractApplyList:"htsphqdbhd",
            //合同审批已办
            searchContractApplyList:"htspyb",
            //合同审批流转日志
            getContractApplyLogs:"htsplzrz",
            //合同审批
            commitContractApprove:"htsp",
            //合同审批获取分管领导
            getContractApplyFgleaders:"htspfgld",
            //获取印控历史流程
            acquireSCHistoricalProcessList:"yysplslc",
            //获取印控流程审批意见
            acquireSCProcessApprovalOpinions:"yysphqspyj",
            //获取印控流程附件
            acquireSCProcessAttachments:"yysphqlcfj",
            //获取印控流转日志
            acquireSCProcessCirculationLog:"yysplzrz",
            //获取印控详情
            acquireSCProcessDetail:"yysplcxq",
            //获取印控流程角色
            acquireSCProcessUsersByRoleId:"yysphqjs",
            //获取印控待办数量
            acquireSCUndoneProcessCount:"yyspdbsl",
            //获取印控待办列表
            acquireSCUndoneProcessList:"yyspdblclb",
            //用于实现审批印控流程记录的功能
            approveSCProcess:"yyspyklcxq",
            //获取印控流程审批记录
            getSCProcessApprovalRecords:"yyspyklc",
            //统一获取印章信息接口
            getSCSeals:"yyspyzxx",
            //获取所有总行部室信息
            getHeadBankList:"yyspzhbs",
            //用于实现获取当前登录用户待办流程列表的功能
            getCkllUndoApplyList:"cklldbsp",
            //用于实现获取当前登录用户已办流程列表的功能
            getCkllApplyList:"ckllybsp",
            //获取流转日志信息
            getCkllRecordListByCode:"cklllzrzsp",
            //获取审批意见列表
            getCkllApproveListByCode:"ckllyjsp",
            //获取单条存款利率审批详情
            getCkllDetailByCode:"ckllxqsp",
            //存款利率提交审批
            commitCkllResponse:"ckllsp",
            //利率定价/服务价格/大额存单已办列表
            getUndealTask:"getUndealTask",
            //利率定价/服务价格/大额存单待办列表
            getDonedealTask:"getUndealTask",
            //大额存单详情
            getBigDeposit:"getBigDeposit",
            //利率/服务/大额查找下一处理人
            getNextUser:"getNextUser",
            //利率定价详情
            getTaskDetail:"getTaskDetail",
            //利率/服务/大额提交
            opiniondeal:"opiniondeal",
            //服务定价详情信息
            getTaskSpInfoQueryDetail: "getTaskSpInfoQueryDetail",
            //法律诉讼
            flsslcspld: "flsslcspld",//法律诉讼流程审批列表
            flsslcspldsl: "flsslcspldsl",//法律诉讼流程审批列表数量
            gjflssidhlxcxflssdcl: "gjflssidhlxcxflssdcl",//根据法律诉讼id和类型查询法律诉讼待处理
            flsssp: "flsssp",//法律诉讼审批
            flssyspjk: "flssyspjk",//法律诉讼已审批接口
            //信贷审批
            getUndealTaskCount: "getUndealTaskCount",//未处理任务数量查询
            getUndealTaskCountString: "getUndealTaskCountString",//未处理任务数量查询数量
            xdspgetUndealTask: "getUndealTask",//未处理任务列表查询
            xdspgetTaskDetail: "xdspgetTaskDetail",//任务详情查询
            getProcesstrail: "getProcesstrail",//流程详情界面
            xdspopiniondeal: "xdspopiniondeal",//提交提流程
            //采购
            cgspxqcx: "cgspxqcx",//getCgInfoByCode采购审批详情查询
            purchasetodo: "purchasetodo",//getCgUndoneInfo采购待办获取
            purchasegetspinfo: "purchasegetspinfo",//getSpInfo采购审批提交接口
            purchasedetail: "purchasedetail",//getCgInfoByCode采购审批详情接口
            purchaseyspcx: "purchaseyspcx",//getCgInfoByCgInfoSearch采购审已审批查询
            purchaseconfirm: "purchaseconfirm",//confirmCgApply采购审批确认操作
            purchaselog: "purchaselog",//getCgApplyLog采购流程流转日志
            purchasezhixun: "purchasezhixun",//cwLeaderBackToStater采购质询接口
            purchasetodocount: "purchasetodocount",//getCgUndoneCount采购待办数量获取=
            purchasegys: "purchasegys",//getGysList采购供应商列表
            purchasegysdetail: "purchasegysdetail",//getGysInfoById采购供应商列表详情
            //合理化
            suggestiondone: "suggestiondone",//getSuggestDoneInfoByDah合理化建议已处理查询
            suggestionundone: "suggestionundone",//getSuggestUnDoneInfoByDah合理化建议未处理查询
            suggestiondetail: "suggestiondetail",//getSuggestInfoByCode合理化建议详情获取
            suggestionlog: "suggestionlog",//getSuggestRecondLog合理化建议浏览日志获取
            suggestionmember: "suggestionmember",//getSuggestHandleMembers合理化建议获取待处理人员信息
            suggestiondepartment: "suggestiondepartment",//getSuggestDepartment合理化建议获取主协办部门信息
            suggestioncount: "suggestioncount",//getSuggestUndoneInfoNumber合理化建议获取待办数量=
            suggestioncommit: "suggestioncommit",//commitSuggest合理化建议提交接口

            //督察督办已处理查询
            getDcdbInfoByDcdbInfoSearch:"dcdbyclcx",
            //督察督办待处理查询
            getDcdbUndoneInfo:"dcdbdbclcx",
            //督察督办详情查询
            getDcdbInfoByCode:"dcdbxqcx",
            //督察督办日志查询
            getDcdbApplyLog:"dcdbrzcx",
            //督察督办待处理人员查询
            getDcdbHandleMembers:"dcdbdclrycx",
            //督察督办流程提交
            commitDcdb:"dcdblctj",
            //督察督办流程退回
            refuseDcdb:"dcdblcth",
            //督察督办流程转发
            forwardDcdb:"dcdblczf",
            //督察督办流程结束
            finishDcdb:"dcdblcjs",
            //督察督办流程批量提交
            batchCommitDcdb:"dcdblcpltj",
            //督察督办待办事项个数
            getDcdbUndoneInfoNumber:"dcdbdbsxgs",
            //督察督办判断平台管理员
            getIsflag:"dcdbpdptgly",

            //工资审批待处理查询
            getSalaryApprovingList:"gzspdclcx",
            //工资审批已处理查询
            getSalaryApprovedList:"gzspyclcx",
            //工资审批待审批数量
            getSalaryApprovingCount:"gzspdspsl",
            //工资审批审批详情
            getSalaryApproveDetail:"gzspspxq",
            //工资审批提交流程
            SaveSalaryApproveAdvice:"gzsptjlx",

            //微信预约开户待审批
            getWaitApproveInfo:"wxyykhdsp",
            //微信预约开户已审批
            getEndApproveInfo:"wxyykhysp",
            //微信预约开户审批详情
            getAccountInfo:"wxyykhspxq",
            //获取支行信贷经理信息
            getXdjlInfo:"wxyykhjlxq",
            //支行信贷经理流程转派
            getPublicAccountRedeploy:"wxyykhjlzp",
            //信贷经理和信贷行长审批
            publicAccountApprove:"wxyykhsp",

            //董事会
            hqdbhylb: "hqdbhylb",//获取董办会待办列表
            hqdshyaxq: "hqdshyaxq",//获取待审议案详情
            hqybhylb: "hqybhylb",//获取已办会议列表
            hqyshyaxq: "hqyshyaxq",//获取已审核议案详情
            sptj: "sptj",//审批提交
            hqsyhy: "hqsyhy",//获取所有会议
            hqdbhysl: "hqdbhysl",//获取待办会议数量
        };
        Object.freeze(this.reqID);
    }

    Constants.prototype = {
        initConstants: function () {
        },

    };


    window.Constants = new Constants();
})();

