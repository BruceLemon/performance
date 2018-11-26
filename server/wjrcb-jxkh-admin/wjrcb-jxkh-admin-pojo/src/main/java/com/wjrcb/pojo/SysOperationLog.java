package com.wjrcb.pojo;

import java.util.Date;

public class SysOperationLog {
    private String logId;

    private String userId;

    private String reqUrl;

    private String reqParams;

    private Date reqBeginTime;

    private Date reqEndTime;

    private String returnInfo;

    public String getLogId() {
        return logId;
    }

    public void setLogId(String logId) {
        this.logId = logId == null ? null : logId.trim();
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    public String getReqUrl() {
        return reqUrl;
    }

    public void setReqUrl(String reqUrl) {
        this.reqUrl = reqUrl == null ? null : reqUrl.trim();
    }

    public String getReqParams() {
        return reqParams;
    }

    public void setReqParams(String reqParams) {
        this.reqParams = reqParams == null ? null : reqParams.trim();
    }

    public Date getReqBeginTime() {
        return reqBeginTime;
    }

    public void setReqBeginTime(Date reqBeginTime) {
        this.reqBeginTime = reqBeginTime;
    }

    public Date getReqEndTime() {
        return reqEndTime;
    }

    public void setReqEndTime(Date reqEndTime) {
        this.reqEndTime = reqEndTime;
    }

    public String getReturnInfo() {
        return returnInfo;
    }

    public void setReturnInfo(String returnInfo) {
        this.returnInfo = returnInfo == null ? null : returnInfo.trim();
    }
}