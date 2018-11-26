package com.wjrcb.pojo;

import java.math.BigDecimal;
import java.util.Date;

public class MaUser extends BaseEntity{
    private String userId;

    private String userName;

    private String orgId;

    private String postId;

    private String degreeId;

    private String eduLvl;

    private String workYear;

    private String employeeAttr;

    private String departmentId;

    private String leadOrgFlg;

    private String passwd;

    private String lastUpdateDt;

    private String lastUpdateUser;

    private String emailName;

    private String isValid;

    private String passwordPolicyCde;

    private Date lastChangePwdTime;

    private BigDecimal wrongPwdNum;

    private Date lastLoginTime;

    private String isLocked;

    private String accOrg;

    private String loginId;

    private String cPost;

    private String postLevel;

    private String mobileNo;

    private String entryDate;

    private String leaveDate;

    private String employType;

    private String paType;

    private String postType;

    private BigDecimal seniority;

    private String newDate;

    private String post;

    private String groupType;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId == null ? null : orgId.trim();
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId == null ? null : postId.trim();
    }

    public String getDegreeId() {
        return degreeId;
    }

    public void setDegreeId(String degreeId) {
        this.degreeId = degreeId == null ? null : degreeId.trim();
    }

    public String getEduLvl() {
        return eduLvl;
    }

    public void setEduLvl(String eduLvl) {
        this.eduLvl = eduLvl == null ? null : eduLvl.trim();
    }

    public String getWorkYear() {
        return workYear;
    }

    public void setWorkYear(String workYear) {
        this.workYear = workYear == null ? null : workYear.trim();
    }

    public String getEmployeeAttr() {
        return employeeAttr;
    }

    public void setEmployeeAttr(String employeeAttr) {
        this.employeeAttr = employeeAttr == null ? null : employeeAttr.trim();
    }

    public String getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(String departmentId) {
        this.departmentId = departmentId == null ? null : departmentId.trim();
    }

    public String getLeadOrgFlg() {
        return leadOrgFlg;
    }

    public void setLeadOrgFlg(String leadOrgFlg) {
        this.leadOrgFlg = leadOrgFlg == null ? null : leadOrgFlg.trim();
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd == null ? null : passwd.trim();
    }

    public String getLastUpdateDt() {
        return lastUpdateDt;
    }

    public void setLastUpdateDt(String lastUpdateDt) {
        this.lastUpdateDt = lastUpdateDt == null ? null : lastUpdateDt.trim();
    }

    public String getLastUpdateUser() {
        return lastUpdateUser;
    }

    public void setLastUpdateUser(String lastUpdateUser) {
        this.lastUpdateUser = lastUpdateUser == null ? null : lastUpdateUser.trim();
    }

    public String getEmailName() {
        return emailName;
    }

    public void setEmailName(String emailName) {
        this.emailName = emailName == null ? null : emailName.trim();
    }

    public String getIsValid() {
        return isValid;
    }

    public void setIsValid(String isValid) {
        this.isValid = isValid == null ? null : isValid.trim();
    }

    public String getPasswordPolicyCde() {
        return passwordPolicyCde;
    }

    public void setPasswordPolicyCde(String passwordPolicyCde) {
        this.passwordPolicyCde = passwordPolicyCde == null ? null : passwordPolicyCde.trim();
    }

    public Date getLastChangePwdTime() {
        return lastChangePwdTime;
    }

    public void setLastChangePwdTime(Date lastChangePwdTime) {
        this.lastChangePwdTime = lastChangePwdTime;
    }

    public BigDecimal getWrongPwdNum() {
        return wrongPwdNum;
    }

    public void setWrongPwdNum(BigDecimal wrongPwdNum) {
        this.wrongPwdNum = wrongPwdNum;
    }

    public Date getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public String getIsLocked() {
        return isLocked;
    }

    public void setIsLocked(String isLocked) {
        this.isLocked = isLocked == null ? null : isLocked.trim();
    }

    public String getAccOrg() {
        return accOrg;
    }

    public void setAccOrg(String accOrg) {
        this.accOrg = accOrg == null ? null : accOrg.trim();
    }

    public String getLoginId() {
        return loginId;
    }

    public void setLoginId(String loginId) {
        this.loginId = loginId == null ? null : loginId.trim();
    }

    public String getcPost() {
        return cPost;
    }

    public void setcPost(String cPost) {
        this.cPost = cPost == null ? null : cPost.trim();
    }

    public String getPostLevel() {
        return postLevel;
    }

    public void setPostLevel(String postLevel) {
        this.postLevel = postLevel == null ? null : postLevel.trim();
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo == null ? null : mobileNo.trim();
    }

    public String getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(String entryDate) {
        this.entryDate = entryDate == null ? null : entryDate.trim();
    }

    public String getLeaveDate() {
        return leaveDate;
    }

    public void setLeaveDate(String leaveDate) {
        this.leaveDate = leaveDate == null ? null : leaveDate.trim();
    }

    public String getEmployType() {
        return employType;
    }

    public void setEmployType(String employType) {
        this.employType = employType == null ? null : employType.trim();
    }

    public String getPaType() {
        return paType;
    }

    public void setPaType(String paType) {
        this.paType = paType == null ? null : paType.trim();
    }

    public String getPostType() {
        return postType;
    }

    public void setPostType(String postType) {
        this.postType = postType == null ? null : postType.trim();
    }

    public BigDecimal getSeniority() {
        return seniority;
    }

    public void setSeniority(BigDecimal seniority) {
        this.seniority = seniority;
    }

    public String getNewDate() {
        return newDate;
    }

    public void setNewDate(String newDate) {
        this.newDate = newDate == null ? null : newDate.trim();
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post == null ? null : post.trim();
    }

    public String getGroupType() {
        return groupType;
    }

    public void setGroupType(String groupType) {
        this.groupType = groupType == null ? null : groupType.trim();
    }
}