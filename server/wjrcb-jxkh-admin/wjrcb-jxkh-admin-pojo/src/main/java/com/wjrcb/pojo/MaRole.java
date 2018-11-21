package com.wjrcb.pojo;

import java.math.BigDecimal;

public class MaRole {
    private String roleId;

    private String roleDesc;

    private BigDecimal dataScope;

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId == null ? null : roleId.trim();
    }

    public String getRoleDesc() {
        return roleDesc;
    }

    public void setRoleDesc(String roleDesc) {
        this.roleDesc = roleDesc == null ? null : roleDesc.trim();
    }

    public BigDecimal getDataScope() {
        return dataScope;
    }

    public void setDataScope(BigDecimal dataScope) {
        this.dataScope = dataScope;
    }
}