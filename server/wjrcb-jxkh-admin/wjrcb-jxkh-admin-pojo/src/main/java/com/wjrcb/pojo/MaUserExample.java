package com.wjrcb.pojo;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MaUserExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public MaUserExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andUserIdIsNull() {
            addCriterion("USER_ID is null");
            return (Criteria) this;
        }

        public Criteria andUserIdIsNotNull() {
            addCriterion("USER_ID is not null");
            return (Criteria) this;
        }

        public Criteria andUserIdEqualTo(String value) {
            addCriterion("USER_ID =", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotEqualTo(String value) {
            addCriterion("USER_ID <>", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThan(String value) {
            addCriterion("USER_ID >", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThanOrEqualTo(String value) {
            addCriterion("USER_ID >=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThan(String value) {
            addCriterion("USER_ID <", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThanOrEqualTo(String value) {
            addCriterion("USER_ID <=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLike(String value) {
            addCriterion("USER_ID like", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotLike(String value) {
            addCriterion("USER_ID not like", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdIn(List<String> values) {
            addCriterion("USER_ID in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotIn(List<String> values) {
            addCriterion("USER_ID not in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdBetween(String value1, String value2) {
            addCriterion("USER_ID between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotBetween(String value1, String value2) {
            addCriterion("USER_ID not between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andUserNameIsNull() {
            addCriterion("USER_NAME is null");
            return (Criteria) this;
        }

        public Criteria andUserNameIsNotNull() {
            addCriterion("USER_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andUserNameEqualTo(String value) {
            addCriterion("USER_NAME =", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotEqualTo(String value) {
            addCriterion("USER_NAME <>", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameGreaterThan(String value) {
            addCriterion("USER_NAME >", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameGreaterThanOrEqualTo(String value) {
            addCriterion("USER_NAME >=", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameLessThan(String value) {
            addCriterion("USER_NAME <", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameLessThanOrEqualTo(String value) {
            addCriterion("USER_NAME <=", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameLike(String value) {
            addCriterion("USER_NAME like", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotLike(String value) {
            addCriterion("USER_NAME not like", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameIn(List<String> values) {
            addCriterion("USER_NAME in", values, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotIn(List<String> values) {
            addCriterion("USER_NAME not in", values, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameBetween(String value1, String value2) {
            addCriterion("USER_NAME between", value1, value2, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotBetween(String value1, String value2) {
            addCriterion("USER_NAME not between", value1, value2, "userName");
            return (Criteria) this;
        }

        public Criteria andOrgIdIsNull() {
            addCriterion("ORG_ID is null");
            return (Criteria) this;
        }

        public Criteria andOrgIdIsNotNull() {
            addCriterion("ORG_ID is not null");
            return (Criteria) this;
        }

        public Criteria andOrgIdEqualTo(String value) {
            addCriterion("ORG_ID =", value, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdNotEqualTo(String value) {
            addCriterion("ORG_ID <>", value, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdGreaterThan(String value) {
            addCriterion("ORG_ID >", value, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdGreaterThanOrEqualTo(String value) {
            addCriterion("ORG_ID >=", value, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdLessThan(String value) {
            addCriterion("ORG_ID <", value, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdLessThanOrEqualTo(String value) {
            addCriterion("ORG_ID <=", value, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdLike(String value) {
            addCriterion("ORG_ID like", value, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdNotLike(String value) {
            addCriterion("ORG_ID not like", value, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdIn(List<String> values) {
            addCriterion("ORG_ID in", values, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdNotIn(List<String> values) {
            addCriterion("ORG_ID not in", values, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdBetween(String value1, String value2) {
            addCriterion("ORG_ID between", value1, value2, "orgId");
            return (Criteria) this;
        }

        public Criteria andOrgIdNotBetween(String value1, String value2) {
            addCriterion("ORG_ID not between", value1, value2, "orgId");
            return (Criteria) this;
        }

        public Criteria andPostIdIsNull() {
            addCriterion("POST_ID is null");
            return (Criteria) this;
        }

        public Criteria andPostIdIsNotNull() {
            addCriterion("POST_ID is not null");
            return (Criteria) this;
        }

        public Criteria andPostIdEqualTo(String value) {
            addCriterion("POST_ID =", value, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdNotEqualTo(String value) {
            addCriterion("POST_ID <>", value, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdGreaterThan(String value) {
            addCriterion("POST_ID >", value, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdGreaterThanOrEqualTo(String value) {
            addCriterion("POST_ID >=", value, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdLessThan(String value) {
            addCriterion("POST_ID <", value, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdLessThanOrEqualTo(String value) {
            addCriterion("POST_ID <=", value, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdLike(String value) {
            addCriterion("POST_ID like", value, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdNotLike(String value) {
            addCriterion("POST_ID not like", value, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdIn(List<String> values) {
            addCriterion("POST_ID in", values, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdNotIn(List<String> values) {
            addCriterion("POST_ID not in", values, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdBetween(String value1, String value2) {
            addCriterion("POST_ID between", value1, value2, "postId");
            return (Criteria) this;
        }

        public Criteria andPostIdNotBetween(String value1, String value2) {
            addCriterion("POST_ID not between", value1, value2, "postId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdIsNull() {
            addCriterion("DEGREE_ID is null");
            return (Criteria) this;
        }

        public Criteria andDegreeIdIsNotNull() {
            addCriterion("DEGREE_ID is not null");
            return (Criteria) this;
        }

        public Criteria andDegreeIdEqualTo(String value) {
            addCriterion("DEGREE_ID =", value, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdNotEqualTo(String value) {
            addCriterion("DEGREE_ID <>", value, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdGreaterThan(String value) {
            addCriterion("DEGREE_ID >", value, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdGreaterThanOrEqualTo(String value) {
            addCriterion("DEGREE_ID >=", value, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdLessThan(String value) {
            addCriterion("DEGREE_ID <", value, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdLessThanOrEqualTo(String value) {
            addCriterion("DEGREE_ID <=", value, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdLike(String value) {
            addCriterion("DEGREE_ID like", value, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdNotLike(String value) {
            addCriterion("DEGREE_ID not like", value, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdIn(List<String> values) {
            addCriterion("DEGREE_ID in", values, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdNotIn(List<String> values) {
            addCriterion("DEGREE_ID not in", values, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdBetween(String value1, String value2) {
            addCriterion("DEGREE_ID between", value1, value2, "degreeId");
            return (Criteria) this;
        }

        public Criteria andDegreeIdNotBetween(String value1, String value2) {
            addCriterion("DEGREE_ID not between", value1, value2, "degreeId");
            return (Criteria) this;
        }

        public Criteria andEduLvlIsNull() {
            addCriterion("EDU_LVL is null");
            return (Criteria) this;
        }

        public Criteria andEduLvlIsNotNull() {
            addCriterion("EDU_LVL is not null");
            return (Criteria) this;
        }

        public Criteria andEduLvlEqualTo(String value) {
            addCriterion("EDU_LVL =", value, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlNotEqualTo(String value) {
            addCriterion("EDU_LVL <>", value, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlGreaterThan(String value) {
            addCriterion("EDU_LVL >", value, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlGreaterThanOrEqualTo(String value) {
            addCriterion("EDU_LVL >=", value, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlLessThan(String value) {
            addCriterion("EDU_LVL <", value, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlLessThanOrEqualTo(String value) {
            addCriterion("EDU_LVL <=", value, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlLike(String value) {
            addCriterion("EDU_LVL like", value, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlNotLike(String value) {
            addCriterion("EDU_LVL not like", value, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlIn(List<String> values) {
            addCriterion("EDU_LVL in", values, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlNotIn(List<String> values) {
            addCriterion("EDU_LVL not in", values, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlBetween(String value1, String value2) {
            addCriterion("EDU_LVL between", value1, value2, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andEduLvlNotBetween(String value1, String value2) {
            addCriterion("EDU_LVL not between", value1, value2, "eduLvl");
            return (Criteria) this;
        }

        public Criteria andWorkYearIsNull() {
            addCriterion("WORK_YEAR is null");
            return (Criteria) this;
        }

        public Criteria andWorkYearIsNotNull() {
            addCriterion("WORK_YEAR is not null");
            return (Criteria) this;
        }

        public Criteria andWorkYearEqualTo(String value) {
            addCriterion("WORK_YEAR =", value, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearNotEqualTo(String value) {
            addCriterion("WORK_YEAR <>", value, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearGreaterThan(String value) {
            addCriterion("WORK_YEAR >", value, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearGreaterThanOrEqualTo(String value) {
            addCriterion("WORK_YEAR >=", value, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearLessThan(String value) {
            addCriterion("WORK_YEAR <", value, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearLessThanOrEqualTo(String value) {
            addCriterion("WORK_YEAR <=", value, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearLike(String value) {
            addCriterion("WORK_YEAR like", value, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearNotLike(String value) {
            addCriterion("WORK_YEAR not like", value, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearIn(List<String> values) {
            addCriterion("WORK_YEAR in", values, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearNotIn(List<String> values) {
            addCriterion("WORK_YEAR not in", values, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearBetween(String value1, String value2) {
            addCriterion("WORK_YEAR between", value1, value2, "workYear");
            return (Criteria) this;
        }

        public Criteria andWorkYearNotBetween(String value1, String value2) {
            addCriterion("WORK_YEAR not between", value1, value2, "workYear");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrIsNull() {
            addCriterion("EMPLOYEE_ATTR is null");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrIsNotNull() {
            addCriterion("EMPLOYEE_ATTR is not null");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrEqualTo(String value) {
            addCriterion("EMPLOYEE_ATTR =", value, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrNotEqualTo(String value) {
            addCriterion("EMPLOYEE_ATTR <>", value, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrGreaterThan(String value) {
            addCriterion("EMPLOYEE_ATTR >", value, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrGreaterThanOrEqualTo(String value) {
            addCriterion("EMPLOYEE_ATTR >=", value, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrLessThan(String value) {
            addCriterion("EMPLOYEE_ATTR <", value, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrLessThanOrEqualTo(String value) {
            addCriterion("EMPLOYEE_ATTR <=", value, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrLike(String value) {
            addCriterion("EMPLOYEE_ATTR like", value, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrNotLike(String value) {
            addCriterion("EMPLOYEE_ATTR not like", value, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrIn(List<String> values) {
            addCriterion("EMPLOYEE_ATTR in", values, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrNotIn(List<String> values) {
            addCriterion("EMPLOYEE_ATTR not in", values, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrBetween(String value1, String value2) {
            addCriterion("EMPLOYEE_ATTR between", value1, value2, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andEmployeeAttrNotBetween(String value1, String value2) {
            addCriterion("EMPLOYEE_ATTR not between", value1, value2, "employeeAttr");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdIsNull() {
            addCriterion("DEPARTMENT_ID is null");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdIsNotNull() {
            addCriterion("DEPARTMENT_ID is not null");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdEqualTo(String value) {
            addCriterion("DEPARTMENT_ID =", value, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdNotEqualTo(String value) {
            addCriterion("DEPARTMENT_ID <>", value, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdGreaterThan(String value) {
            addCriterion("DEPARTMENT_ID >", value, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdGreaterThanOrEqualTo(String value) {
            addCriterion("DEPARTMENT_ID >=", value, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdLessThan(String value) {
            addCriterion("DEPARTMENT_ID <", value, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdLessThanOrEqualTo(String value) {
            addCriterion("DEPARTMENT_ID <=", value, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdLike(String value) {
            addCriterion("DEPARTMENT_ID like", value, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdNotLike(String value) {
            addCriterion("DEPARTMENT_ID not like", value, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdIn(List<String> values) {
            addCriterion("DEPARTMENT_ID in", values, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdNotIn(List<String> values) {
            addCriterion("DEPARTMENT_ID not in", values, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdBetween(String value1, String value2) {
            addCriterion("DEPARTMENT_ID between", value1, value2, "departmentId");
            return (Criteria) this;
        }

        public Criteria andDepartmentIdNotBetween(String value1, String value2) {
            addCriterion("DEPARTMENT_ID not between", value1, value2, "departmentId");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgIsNull() {
            addCriterion("LEAD_ORG_FLG is null");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgIsNotNull() {
            addCriterion("LEAD_ORG_FLG is not null");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgEqualTo(String value) {
            addCriterion("LEAD_ORG_FLG =", value, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgNotEqualTo(String value) {
            addCriterion("LEAD_ORG_FLG <>", value, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgGreaterThan(String value) {
            addCriterion("LEAD_ORG_FLG >", value, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgGreaterThanOrEqualTo(String value) {
            addCriterion("LEAD_ORG_FLG >=", value, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgLessThan(String value) {
            addCriterion("LEAD_ORG_FLG <", value, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgLessThanOrEqualTo(String value) {
            addCriterion("LEAD_ORG_FLG <=", value, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgLike(String value) {
            addCriterion("LEAD_ORG_FLG like", value, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgNotLike(String value) {
            addCriterion("LEAD_ORG_FLG not like", value, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgIn(List<String> values) {
            addCriterion("LEAD_ORG_FLG in", values, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgNotIn(List<String> values) {
            addCriterion("LEAD_ORG_FLG not in", values, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgBetween(String value1, String value2) {
            addCriterion("LEAD_ORG_FLG between", value1, value2, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andLeadOrgFlgNotBetween(String value1, String value2) {
            addCriterion("LEAD_ORG_FLG not between", value1, value2, "leadOrgFlg");
            return (Criteria) this;
        }

        public Criteria andPasswdIsNull() {
            addCriterion("PASSWD is null");
            return (Criteria) this;
        }

        public Criteria andPasswdIsNotNull() {
            addCriterion("PASSWD is not null");
            return (Criteria) this;
        }

        public Criteria andPasswdEqualTo(String value) {
            addCriterion("PASSWD =", value, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdNotEqualTo(String value) {
            addCriterion("PASSWD <>", value, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdGreaterThan(String value) {
            addCriterion("PASSWD >", value, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdGreaterThanOrEqualTo(String value) {
            addCriterion("PASSWD >=", value, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdLessThan(String value) {
            addCriterion("PASSWD <", value, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdLessThanOrEqualTo(String value) {
            addCriterion("PASSWD <=", value, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdLike(String value) {
            addCriterion("PASSWD like", value, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdNotLike(String value) {
            addCriterion("PASSWD not like", value, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdIn(List<String> values) {
            addCriterion("PASSWD in", values, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdNotIn(List<String> values) {
            addCriterion("PASSWD not in", values, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdBetween(String value1, String value2) {
            addCriterion("PASSWD between", value1, value2, "passwd");
            return (Criteria) this;
        }

        public Criteria andPasswdNotBetween(String value1, String value2) {
            addCriterion("PASSWD not between", value1, value2, "passwd");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtIsNull() {
            addCriterion("LAST_UPDATE_DT is null");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtIsNotNull() {
            addCriterion("LAST_UPDATE_DT is not null");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtEqualTo(String value) {
            addCriterion("LAST_UPDATE_DT =", value, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtNotEqualTo(String value) {
            addCriterion("LAST_UPDATE_DT <>", value, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtGreaterThan(String value) {
            addCriterion("LAST_UPDATE_DT >", value, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtGreaterThanOrEqualTo(String value) {
            addCriterion("LAST_UPDATE_DT >=", value, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtLessThan(String value) {
            addCriterion("LAST_UPDATE_DT <", value, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtLessThanOrEqualTo(String value) {
            addCriterion("LAST_UPDATE_DT <=", value, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtLike(String value) {
            addCriterion("LAST_UPDATE_DT like", value, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtNotLike(String value) {
            addCriterion("LAST_UPDATE_DT not like", value, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtIn(List<String> values) {
            addCriterion("LAST_UPDATE_DT in", values, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtNotIn(List<String> values) {
            addCriterion("LAST_UPDATE_DT not in", values, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtBetween(String value1, String value2) {
            addCriterion("LAST_UPDATE_DT between", value1, value2, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateDtNotBetween(String value1, String value2) {
            addCriterion("LAST_UPDATE_DT not between", value1, value2, "lastUpdateDt");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserIsNull() {
            addCriterion("LAST_UPDATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserIsNotNull() {
            addCriterion("LAST_UPDATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserEqualTo(String value) {
            addCriterion("LAST_UPDATE_USER =", value, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserNotEqualTo(String value) {
            addCriterion("LAST_UPDATE_USER <>", value, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserGreaterThan(String value) {
            addCriterion("LAST_UPDATE_USER >", value, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserGreaterThanOrEqualTo(String value) {
            addCriterion("LAST_UPDATE_USER >=", value, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserLessThan(String value) {
            addCriterion("LAST_UPDATE_USER <", value, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserLessThanOrEqualTo(String value) {
            addCriterion("LAST_UPDATE_USER <=", value, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserLike(String value) {
            addCriterion("LAST_UPDATE_USER like", value, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserNotLike(String value) {
            addCriterion("LAST_UPDATE_USER not like", value, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserIn(List<String> values) {
            addCriterion("LAST_UPDATE_USER in", values, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserNotIn(List<String> values) {
            addCriterion("LAST_UPDATE_USER not in", values, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserBetween(String value1, String value2) {
            addCriterion("LAST_UPDATE_USER between", value1, value2, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andLastUpdateUserNotBetween(String value1, String value2) {
            addCriterion("LAST_UPDATE_USER not between", value1, value2, "lastUpdateUser");
            return (Criteria) this;
        }

        public Criteria andEmailNameIsNull() {
            addCriterion("EMAIL_NAME is null");
            return (Criteria) this;
        }

        public Criteria andEmailNameIsNotNull() {
            addCriterion("EMAIL_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andEmailNameEqualTo(String value) {
            addCriterion("EMAIL_NAME =", value, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameNotEqualTo(String value) {
            addCriterion("EMAIL_NAME <>", value, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameGreaterThan(String value) {
            addCriterion("EMAIL_NAME >", value, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameGreaterThanOrEqualTo(String value) {
            addCriterion("EMAIL_NAME >=", value, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameLessThan(String value) {
            addCriterion("EMAIL_NAME <", value, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameLessThanOrEqualTo(String value) {
            addCriterion("EMAIL_NAME <=", value, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameLike(String value) {
            addCriterion("EMAIL_NAME like", value, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameNotLike(String value) {
            addCriterion("EMAIL_NAME not like", value, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameIn(List<String> values) {
            addCriterion("EMAIL_NAME in", values, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameNotIn(List<String> values) {
            addCriterion("EMAIL_NAME not in", values, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameBetween(String value1, String value2) {
            addCriterion("EMAIL_NAME between", value1, value2, "emailName");
            return (Criteria) this;
        }

        public Criteria andEmailNameNotBetween(String value1, String value2) {
            addCriterion("EMAIL_NAME not between", value1, value2, "emailName");
            return (Criteria) this;
        }

        public Criteria andIsValidIsNull() {
            addCriterion("IS_VALID is null");
            return (Criteria) this;
        }

        public Criteria andIsValidIsNotNull() {
            addCriterion("IS_VALID is not null");
            return (Criteria) this;
        }

        public Criteria andIsValidEqualTo(String value) {
            addCriterion("IS_VALID =", value, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidNotEqualTo(String value) {
            addCriterion("IS_VALID <>", value, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidGreaterThan(String value) {
            addCriterion("IS_VALID >", value, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidGreaterThanOrEqualTo(String value) {
            addCriterion("IS_VALID >=", value, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidLessThan(String value) {
            addCriterion("IS_VALID <", value, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidLessThanOrEqualTo(String value) {
            addCriterion("IS_VALID <=", value, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidLike(String value) {
            addCriterion("IS_VALID like", value, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidNotLike(String value) {
            addCriterion("IS_VALID not like", value, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidIn(List<String> values) {
            addCriterion("IS_VALID in", values, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidNotIn(List<String> values) {
            addCriterion("IS_VALID not in", values, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidBetween(String value1, String value2) {
            addCriterion("IS_VALID between", value1, value2, "isValid");
            return (Criteria) this;
        }

        public Criteria andIsValidNotBetween(String value1, String value2) {
            addCriterion("IS_VALID not between", value1, value2, "isValid");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeIsNull() {
            addCriterion("PASSWORD_POLICY_CDE is null");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeIsNotNull() {
            addCriterion("PASSWORD_POLICY_CDE is not null");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeEqualTo(String value) {
            addCriterion("PASSWORD_POLICY_CDE =", value, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeNotEqualTo(String value) {
            addCriterion("PASSWORD_POLICY_CDE <>", value, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeGreaterThan(String value) {
            addCriterion("PASSWORD_POLICY_CDE >", value, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeGreaterThanOrEqualTo(String value) {
            addCriterion("PASSWORD_POLICY_CDE >=", value, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeLessThan(String value) {
            addCriterion("PASSWORD_POLICY_CDE <", value, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeLessThanOrEqualTo(String value) {
            addCriterion("PASSWORD_POLICY_CDE <=", value, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeLike(String value) {
            addCriterion("PASSWORD_POLICY_CDE like", value, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeNotLike(String value) {
            addCriterion("PASSWORD_POLICY_CDE not like", value, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeIn(List<String> values) {
            addCriterion("PASSWORD_POLICY_CDE in", values, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeNotIn(List<String> values) {
            addCriterion("PASSWORD_POLICY_CDE not in", values, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeBetween(String value1, String value2) {
            addCriterion("PASSWORD_POLICY_CDE between", value1, value2, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andPasswordPolicyCdeNotBetween(String value1, String value2) {
            addCriterion("PASSWORD_POLICY_CDE not between", value1, value2, "passwordPolicyCde");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeIsNull() {
            addCriterion("LAST_CHANGE_PWD_TIME is null");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeIsNotNull() {
            addCriterion("LAST_CHANGE_PWD_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeEqualTo(Date value) {
            addCriterion("LAST_CHANGE_PWD_TIME =", value, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeNotEqualTo(Date value) {
            addCriterion("LAST_CHANGE_PWD_TIME <>", value, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeGreaterThan(Date value) {
            addCriterion("LAST_CHANGE_PWD_TIME >", value, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("LAST_CHANGE_PWD_TIME >=", value, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeLessThan(Date value) {
            addCriterion("LAST_CHANGE_PWD_TIME <", value, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeLessThanOrEqualTo(Date value) {
            addCriterion("LAST_CHANGE_PWD_TIME <=", value, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeIn(List<Date> values) {
            addCriterion("LAST_CHANGE_PWD_TIME in", values, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeNotIn(List<Date> values) {
            addCriterion("LAST_CHANGE_PWD_TIME not in", values, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeBetween(Date value1, Date value2) {
            addCriterion("LAST_CHANGE_PWD_TIME between", value1, value2, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andLastChangePwdTimeNotBetween(Date value1, Date value2) {
            addCriterion("LAST_CHANGE_PWD_TIME not between", value1, value2, "lastChangePwdTime");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumIsNull() {
            addCriterion("WRONG_PWD_NUM is null");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumIsNotNull() {
            addCriterion("WRONG_PWD_NUM is not null");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumEqualTo(BigDecimal value) {
            addCriterion("WRONG_PWD_NUM =", value, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumNotEqualTo(BigDecimal value) {
            addCriterion("WRONG_PWD_NUM <>", value, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumGreaterThan(BigDecimal value) {
            addCriterion("WRONG_PWD_NUM >", value, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("WRONG_PWD_NUM >=", value, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumLessThan(BigDecimal value) {
            addCriterion("WRONG_PWD_NUM <", value, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumLessThanOrEqualTo(BigDecimal value) {
            addCriterion("WRONG_PWD_NUM <=", value, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumIn(List<BigDecimal> values) {
            addCriterion("WRONG_PWD_NUM in", values, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumNotIn(List<BigDecimal> values) {
            addCriterion("WRONG_PWD_NUM not in", values, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("WRONG_PWD_NUM between", value1, value2, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andWrongPwdNumNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("WRONG_PWD_NUM not between", value1, value2, "wrongPwdNum");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeIsNull() {
            addCriterion("LAST_LOGIN_TIME is null");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeIsNotNull() {
            addCriterion("LAST_LOGIN_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeEqualTo(Date value) {
            addCriterion("LAST_LOGIN_TIME =", value, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeNotEqualTo(Date value) {
            addCriterion("LAST_LOGIN_TIME <>", value, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeGreaterThan(Date value) {
            addCriterion("LAST_LOGIN_TIME >", value, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("LAST_LOGIN_TIME >=", value, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeLessThan(Date value) {
            addCriterion("LAST_LOGIN_TIME <", value, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeLessThanOrEqualTo(Date value) {
            addCriterion("LAST_LOGIN_TIME <=", value, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeIn(List<Date> values) {
            addCriterion("LAST_LOGIN_TIME in", values, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeNotIn(List<Date> values) {
            addCriterion("LAST_LOGIN_TIME not in", values, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeBetween(Date value1, Date value2) {
            addCriterion("LAST_LOGIN_TIME between", value1, value2, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andLastLoginTimeNotBetween(Date value1, Date value2) {
            addCriterion("LAST_LOGIN_TIME not between", value1, value2, "lastLoginTime");
            return (Criteria) this;
        }

        public Criteria andIsLockedIsNull() {
            addCriterion("IS_LOCKED is null");
            return (Criteria) this;
        }

        public Criteria andIsLockedIsNotNull() {
            addCriterion("IS_LOCKED is not null");
            return (Criteria) this;
        }

        public Criteria andIsLockedEqualTo(String value) {
            addCriterion("IS_LOCKED =", value, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedNotEqualTo(String value) {
            addCriterion("IS_LOCKED <>", value, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedGreaterThan(String value) {
            addCriterion("IS_LOCKED >", value, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedGreaterThanOrEqualTo(String value) {
            addCriterion("IS_LOCKED >=", value, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedLessThan(String value) {
            addCriterion("IS_LOCKED <", value, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedLessThanOrEqualTo(String value) {
            addCriterion("IS_LOCKED <=", value, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedLike(String value) {
            addCriterion("IS_LOCKED like", value, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedNotLike(String value) {
            addCriterion("IS_LOCKED not like", value, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedIn(List<String> values) {
            addCriterion("IS_LOCKED in", values, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedNotIn(List<String> values) {
            addCriterion("IS_LOCKED not in", values, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedBetween(String value1, String value2) {
            addCriterion("IS_LOCKED between", value1, value2, "isLocked");
            return (Criteria) this;
        }

        public Criteria andIsLockedNotBetween(String value1, String value2) {
            addCriterion("IS_LOCKED not between", value1, value2, "isLocked");
            return (Criteria) this;
        }

        public Criteria andAccOrgIsNull() {
            addCriterion("ACC_ORG is null");
            return (Criteria) this;
        }

        public Criteria andAccOrgIsNotNull() {
            addCriterion("ACC_ORG is not null");
            return (Criteria) this;
        }

        public Criteria andAccOrgEqualTo(String value) {
            addCriterion("ACC_ORG =", value, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgNotEqualTo(String value) {
            addCriterion("ACC_ORG <>", value, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgGreaterThan(String value) {
            addCriterion("ACC_ORG >", value, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgGreaterThanOrEqualTo(String value) {
            addCriterion("ACC_ORG >=", value, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgLessThan(String value) {
            addCriterion("ACC_ORG <", value, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgLessThanOrEqualTo(String value) {
            addCriterion("ACC_ORG <=", value, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgLike(String value) {
            addCriterion("ACC_ORG like", value, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgNotLike(String value) {
            addCriterion("ACC_ORG not like", value, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgIn(List<String> values) {
            addCriterion("ACC_ORG in", values, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgNotIn(List<String> values) {
            addCriterion("ACC_ORG not in", values, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgBetween(String value1, String value2) {
            addCriterion("ACC_ORG between", value1, value2, "accOrg");
            return (Criteria) this;
        }

        public Criteria andAccOrgNotBetween(String value1, String value2) {
            addCriterion("ACC_ORG not between", value1, value2, "accOrg");
            return (Criteria) this;
        }

        public Criteria andLoginIdIsNull() {
            addCriterion("LOGIN_ID is null");
            return (Criteria) this;
        }

        public Criteria andLoginIdIsNotNull() {
            addCriterion("LOGIN_ID is not null");
            return (Criteria) this;
        }

        public Criteria andLoginIdEqualTo(String value) {
            addCriterion("LOGIN_ID =", value, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdNotEqualTo(String value) {
            addCriterion("LOGIN_ID <>", value, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdGreaterThan(String value) {
            addCriterion("LOGIN_ID >", value, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdGreaterThanOrEqualTo(String value) {
            addCriterion("LOGIN_ID >=", value, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdLessThan(String value) {
            addCriterion("LOGIN_ID <", value, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdLessThanOrEqualTo(String value) {
            addCriterion("LOGIN_ID <=", value, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdLike(String value) {
            addCriterion("LOGIN_ID like", value, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdNotLike(String value) {
            addCriterion("LOGIN_ID not like", value, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdIn(List<String> values) {
            addCriterion("LOGIN_ID in", values, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdNotIn(List<String> values) {
            addCriterion("LOGIN_ID not in", values, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdBetween(String value1, String value2) {
            addCriterion("LOGIN_ID between", value1, value2, "loginId");
            return (Criteria) this;
        }

        public Criteria andLoginIdNotBetween(String value1, String value2) {
            addCriterion("LOGIN_ID not between", value1, value2, "loginId");
            return (Criteria) this;
        }

        public Criteria andCPostIsNull() {
            addCriterion("C_POST is null");
            return (Criteria) this;
        }

        public Criteria andCPostIsNotNull() {
            addCriterion("C_POST is not null");
            return (Criteria) this;
        }

        public Criteria andCPostEqualTo(String value) {
            addCriterion("C_POST =", value, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostNotEqualTo(String value) {
            addCriterion("C_POST <>", value, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostGreaterThan(String value) {
            addCriterion("C_POST >", value, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostGreaterThanOrEqualTo(String value) {
            addCriterion("C_POST >=", value, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostLessThan(String value) {
            addCriterion("C_POST <", value, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostLessThanOrEqualTo(String value) {
            addCriterion("C_POST <=", value, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostLike(String value) {
            addCriterion("C_POST like", value, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostNotLike(String value) {
            addCriterion("C_POST not like", value, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostIn(List<String> values) {
            addCriterion("C_POST in", values, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostNotIn(List<String> values) {
            addCriterion("C_POST not in", values, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostBetween(String value1, String value2) {
            addCriterion("C_POST between", value1, value2, "cPost");
            return (Criteria) this;
        }

        public Criteria andCPostNotBetween(String value1, String value2) {
            addCriterion("C_POST not between", value1, value2, "cPost");
            return (Criteria) this;
        }

        public Criteria andPostLevelIsNull() {
            addCriterion("POST_LEVEL is null");
            return (Criteria) this;
        }

        public Criteria andPostLevelIsNotNull() {
            addCriterion("POST_LEVEL is not null");
            return (Criteria) this;
        }

        public Criteria andPostLevelEqualTo(String value) {
            addCriterion("POST_LEVEL =", value, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelNotEqualTo(String value) {
            addCriterion("POST_LEVEL <>", value, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelGreaterThan(String value) {
            addCriterion("POST_LEVEL >", value, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelGreaterThanOrEqualTo(String value) {
            addCriterion("POST_LEVEL >=", value, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelLessThan(String value) {
            addCriterion("POST_LEVEL <", value, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelLessThanOrEqualTo(String value) {
            addCriterion("POST_LEVEL <=", value, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelLike(String value) {
            addCriterion("POST_LEVEL like", value, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelNotLike(String value) {
            addCriterion("POST_LEVEL not like", value, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelIn(List<String> values) {
            addCriterion("POST_LEVEL in", values, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelNotIn(List<String> values) {
            addCriterion("POST_LEVEL not in", values, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelBetween(String value1, String value2) {
            addCriterion("POST_LEVEL between", value1, value2, "postLevel");
            return (Criteria) this;
        }

        public Criteria andPostLevelNotBetween(String value1, String value2) {
            addCriterion("POST_LEVEL not between", value1, value2, "postLevel");
            return (Criteria) this;
        }

        public Criteria andMobileNoIsNull() {
            addCriterion("MOBILE_NO is null");
            return (Criteria) this;
        }

        public Criteria andMobileNoIsNotNull() {
            addCriterion("MOBILE_NO is not null");
            return (Criteria) this;
        }

        public Criteria andMobileNoEqualTo(String value) {
            addCriterion("MOBILE_NO =", value, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoNotEqualTo(String value) {
            addCriterion("MOBILE_NO <>", value, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoGreaterThan(String value) {
            addCriterion("MOBILE_NO >", value, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoGreaterThanOrEqualTo(String value) {
            addCriterion("MOBILE_NO >=", value, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoLessThan(String value) {
            addCriterion("MOBILE_NO <", value, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoLessThanOrEqualTo(String value) {
            addCriterion("MOBILE_NO <=", value, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoLike(String value) {
            addCriterion("MOBILE_NO like", value, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoNotLike(String value) {
            addCriterion("MOBILE_NO not like", value, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoIn(List<String> values) {
            addCriterion("MOBILE_NO in", values, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoNotIn(List<String> values) {
            addCriterion("MOBILE_NO not in", values, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoBetween(String value1, String value2) {
            addCriterion("MOBILE_NO between", value1, value2, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andMobileNoNotBetween(String value1, String value2) {
            addCriterion("MOBILE_NO not between", value1, value2, "mobileNo");
            return (Criteria) this;
        }

        public Criteria andEntryDateIsNull() {
            addCriterion("ENTRY_DATE is null");
            return (Criteria) this;
        }

        public Criteria andEntryDateIsNotNull() {
            addCriterion("ENTRY_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andEntryDateEqualTo(String value) {
            addCriterion("ENTRY_DATE =", value, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateNotEqualTo(String value) {
            addCriterion("ENTRY_DATE <>", value, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateGreaterThan(String value) {
            addCriterion("ENTRY_DATE >", value, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateGreaterThanOrEqualTo(String value) {
            addCriterion("ENTRY_DATE >=", value, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateLessThan(String value) {
            addCriterion("ENTRY_DATE <", value, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateLessThanOrEqualTo(String value) {
            addCriterion("ENTRY_DATE <=", value, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateLike(String value) {
            addCriterion("ENTRY_DATE like", value, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateNotLike(String value) {
            addCriterion("ENTRY_DATE not like", value, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateIn(List<String> values) {
            addCriterion("ENTRY_DATE in", values, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateNotIn(List<String> values) {
            addCriterion("ENTRY_DATE not in", values, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateBetween(String value1, String value2) {
            addCriterion("ENTRY_DATE between", value1, value2, "entryDate");
            return (Criteria) this;
        }

        public Criteria andEntryDateNotBetween(String value1, String value2) {
            addCriterion("ENTRY_DATE not between", value1, value2, "entryDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateIsNull() {
            addCriterion("LEAVE_DATE is null");
            return (Criteria) this;
        }

        public Criteria andLeaveDateIsNotNull() {
            addCriterion("LEAVE_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andLeaveDateEqualTo(String value) {
            addCriterion("LEAVE_DATE =", value, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateNotEqualTo(String value) {
            addCriterion("LEAVE_DATE <>", value, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateGreaterThan(String value) {
            addCriterion("LEAVE_DATE >", value, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateGreaterThanOrEqualTo(String value) {
            addCriterion("LEAVE_DATE >=", value, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateLessThan(String value) {
            addCriterion("LEAVE_DATE <", value, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateLessThanOrEqualTo(String value) {
            addCriterion("LEAVE_DATE <=", value, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateLike(String value) {
            addCriterion("LEAVE_DATE like", value, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateNotLike(String value) {
            addCriterion("LEAVE_DATE not like", value, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateIn(List<String> values) {
            addCriterion("LEAVE_DATE in", values, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateNotIn(List<String> values) {
            addCriterion("LEAVE_DATE not in", values, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateBetween(String value1, String value2) {
            addCriterion("LEAVE_DATE between", value1, value2, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andLeaveDateNotBetween(String value1, String value2) {
            addCriterion("LEAVE_DATE not between", value1, value2, "leaveDate");
            return (Criteria) this;
        }

        public Criteria andEmployTypeIsNull() {
            addCriterion("EMPLOY_TYPE is null");
            return (Criteria) this;
        }

        public Criteria andEmployTypeIsNotNull() {
            addCriterion("EMPLOY_TYPE is not null");
            return (Criteria) this;
        }

        public Criteria andEmployTypeEqualTo(String value) {
            addCriterion("EMPLOY_TYPE =", value, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeNotEqualTo(String value) {
            addCriterion("EMPLOY_TYPE <>", value, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeGreaterThan(String value) {
            addCriterion("EMPLOY_TYPE >", value, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeGreaterThanOrEqualTo(String value) {
            addCriterion("EMPLOY_TYPE >=", value, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeLessThan(String value) {
            addCriterion("EMPLOY_TYPE <", value, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeLessThanOrEqualTo(String value) {
            addCriterion("EMPLOY_TYPE <=", value, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeLike(String value) {
            addCriterion("EMPLOY_TYPE like", value, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeNotLike(String value) {
            addCriterion("EMPLOY_TYPE not like", value, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeIn(List<String> values) {
            addCriterion("EMPLOY_TYPE in", values, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeNotIn(List<String> values) {
            addCriterion("EMPLOY_TYPE not in", values, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeBetween(String value1, String value2) {
            addCriterion("EMPLOY_TYPE between", value1, value2, "employType");
            return (Criteria) this;
        }

        public Criteria andEmployTypeNotBetween(String value1, String value2) {
            addCriterion("EMPLOY_TYPE not between", value1, value2, "employType");
            return (Criteria) this;
        }

        public Criteria andPaTypeIsNull() {
            addCriterion("PA_TYPE is null");
            return (Criteria) this;
        }

        public Criteria andPaTypeIsNotNull() {
            addCriterion("PA_TYPE is not null");
            return (Criteria) this;
        }

        public Criteria andPaTypeEqualTo(String value) {
            addCriterion("PA_TYPE =", value, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeNotEqualTo(String value) {
            addCriterion("PA_TYPE <>", value, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeGreaterThan(String value) {
            addCriterion("PA_TYPE >", value, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeGreaterThanOrEqualTo(String value) {
            addCriterion("PA_TYPE >=", value, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeLessThan(String value) {
            addCriterion("PA_TYPE <", value, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeLessThanOrEqualTo(String value) {
            addCriterion("PA_TYPE <=", value, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeLike(String value) {
            addCriterion("PA_TYPE like", value, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeNotLike(String value) {
            addCriterion("PA_TYPE not like", value, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeIn(List<String> values) {
            addCriterion("PA_TYPE in", values, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeNotIn(List<String> values) {
            addCriterion("PA_TYPE not in", values, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeBetween(String value1, String value2) {
            addCriterion("PA_TYPE between", value1, value2, "paType");
            return (Criteria) this;
        }

        public Criteria andPaTypeNotBetween(String value1, String value2) {
            addCriterion("PA_TYPE not between", value1, value2, "paType");
            return (Criteria) this;
        }

        public Criteria andPostTypeIsNull() {
            addCriterion("POST_TYPE is null");
            return (Criteria) this;
        }

        public Criteria andPostTypeIsNotNull() {
            addCriterion("POST_TYPE is not null");
            return (Criteria) this;
        }

        public Criteria andPostTypeEqualTo(String value) {
            addCriterion("POST_TYPE =", value, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeNotEqualTo(String value) {
            addCriterion("POST_TYPE <>", value, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeGreaterThan(String value) {
            addCriterion("POST_TYPE >", value, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeGreaterThanOrEqualTo(String value) {
            addCriterion("POST_TYPE >=", value, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeLessThan(String value) {
            addCriterion("POST_TYPE <", value, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeLessThanOrEqualTo(String value) {
            addCriterion("POST_TYPE <=", value, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeLike(String value) {
            addCriterion("POST_TYPE like", value, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeNotLike(String value) {
            addCriterion("POST_TYPE not like", value, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeIn(List<String> values) {
            addCriterion("POST_TYPE in", values, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeNotIn(List<String> values) {
            addCriterion("POST_TYPE not in", values, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeBetween(String value1, String value2) {
            addCriterion("POST_TYPE between", value1, value2, "postType");
            return (Criteria) this;
        }

        public Criteria andPostTypeNotBetween(String value1, String value2) {
            addCriterion("POST_TYPE not between", value1, value2, "postType");
            return (Criteria) this;
        }

        public Criteria andSeniorityIsNull() {
            addCriterion("SENIORITY is null");
            return (Criteria) this;
        }

        public Criteria andSeniorityIsNotNull() {
            addCriterion("SENIORITY is not null");
            return (Criteria) this;
        }

        public Criteria andSeniorityEqualTo(BigDecimal value) {
            addCriterion("SENIORITY =", value, "seniority");
            return (Criteria) this;
        }

        public Criteria andSeniorityNotEqualTo(BigDecimal value) {
            addCriterion("SENIORITY <>", value, "seniority");
            return (Criteria) this;
        }

        public Criteria andSeniorityGreaterThan(BigDecimal value) {
            addCriterion("SENIORITY >", value, "seniority");
            return (Criteria) this;
        }

        public Criteria andSeniorityGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("SENIORITY >=", value, "seniority");
            return (Criteria) this;
        }

        public Criteria andSeniorityLessThan(BigDecimal value) {
            addCriterion("SENIORITY <", value, "seniority");
            return (Criteria) this;
        }

        public Criteria andSeniorityLessThanOrEqualTo(BigDecimal value) {
            addCriterion("SENIORITY <=", value, "seniority");
            return (Criteria) this;
        }

        public Criteria andSeniorityIn(List<BigDecimal> values) {
            addCriterion("SENIORITY in", values, "seniority");
            return (Criteria) this;
        }

        public Criteria andSeniorityNotIn(List<BigDecimal> values) {
            addCriterion("SENIORITY not in", values, "seniority");
            return (Criteria) this;
        }

        public Criteria andSeniorityBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("SENIORITY between", value1, value2, "seniority");
            return (Criteria) this;
        }

        public Criteria andSeniorityNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("SENIORITY not between", value1, value2, "seniority");
            return (Criteria) this;
        }

        public Criteria andNewDateIsNull() {
            addCriterion("NEW_DATE is null");
            return (Criteria) this;
        }

        public Criteria andNewDateIsNotNull() {
            addCriterion("NEW_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andNewDateEqualTo(String value) {
            addCriterion("NEW_DATE =", value, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateNotEqualTo(String value) {
            addCriterion("NEW_DATE <>", value, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateGreaterThan(String value) {
            addCriterion("NEW_DATE >", value, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateGreaterThanOrEqualTo(String value) {
            addCriterion("NEW_DATE >=", value, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateLessThan(String value) {
            addCriterion("NEW_DATE <", value, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateLessThanOrEqualTo(String value) {
            addCriterion("NEW_DATE <=", value, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateLike(String value) {
            addCriterion("NEW_DATE like", value, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateNotLike(String value) {
            addCriterion("NEW_DATE not like", value, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateIn(List<String> values) {
            addCriterion("NEW_DATE in", values, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateNotIn(List<String> values) {
            addCriterion("NEW_DATE not in", values, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateBetween(String value1, String value2) {
            addCriterion("NEW_DATE between", value1, value2, "newDate");
            return (Criteria) this;
        }

        public Criteria andNewDateNotBetween(String value1, String value2) {
            addCriterion("NEW_DATE not between", value1, value2, "newDate");
            return (Criteria) this;
        }

        public Criteria andPostIsNull() {
            addCriterion("POST is null");
            return (Criteria) this;
        }

        public Criteria andPostIsNotNull() {
            addCriterion("POST is not null");
            return (Criteria) this;
        }

        public Criteria andPostEqualTo(String value) {
            addCriterion("POST =", value, "post");
            return (Criteria) this;
        }

        public Criteria andPostNotEqualTo(String value) {
            addCriterion("POST <>", value, "post");
            return (Criteria) this;
        }

        public Criteria andPostGreaterThan(String value) {
            addCriterion("POST >", value, "post");
            return (Criteria) this;
        }

        public Criteria andPostGreaterThanOrEqualTo(String value) {
            addCriterion("POST >=", value, "post");
            return (Criteria) this;
        }

        public Criteria andPostLessThan(String value) {
            addCriterion("POST <", value, "post");
            return (Criteria) this;
        }

        public Criteria andPostLessThanOrEqualTo(String value) {
            addCriterion("POST <=", value, "post");
            return (Criteria) this;
        }

        public Criteria andPostLike(String value) {
            addCriterion("POST like", value, "post");
            return (Criteria) this;
        }

        public Criteria andPostNotLike(String value) {
            addCriterion("POST not like", value, "post");
            return (Criteria) this;
        }

        public Criteria andPostIn(List<String> values) {
            addCriterion("POST in", values, "post");
            return (Criteria) this;
        }

        public Criteria andPostNotIn(List<String> values) {
            addCriterion("POST not in", values, "post");
            return (Criteria) this;
        }

        public Criteria andPostBetween(String value1, String value2) {
            addCriterion("POST between", value1, value2, "post");
            return (Criteria) this;
        }

        public Criteria andPostNotBetween(String value1, String value2) {
            addCriterion("POST not between", value1, value2, "post");
            return (Criteria) this;
        }

        public Criteria andGroupTypeIsNull() {
            addCriterion("GROUP_TYPE is null");
            return (Criteria) this;
        }

        public Criteria andGroupTypeIsNotNull() {
            addCriterion("GROUP_TYPE is not null");
            return (Criteria) this;
        }

        public Criteria andGroupTypeEqualTo(String value) {
            addCriterion("GROUP_TYPE =", value, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeNotEqualTo(String value) {
            addCriterion("GROUP_TYPE <>", value, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeGreaterThan(String value) {
            addCriterion("GROUP_TYPE >", value, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeGreaterThanOrEqualTo(String value) {
            addCriterion("GROUP_TYPE >=", value, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeLessThan(String value) {
            addCriterion("GROUP_TYPE <", value, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeLessThanOrEqualTo(String value) {
            addCriterion("GROUP_TYPE <=", value, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeLike(String value) {
            addCriterion("GROUP_TYPE like", value, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeNotLike(String value) {
            addCriterion("GROUP_TYPE not like", value, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeIn(List<String> values) {
            addCriterion("GROUP_TYPE in", values, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeNotIn(List<String> values) {
            addCriterion("GROUP_TYPE not in", values, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeBetween(String value1, String value2) {
            addCriterion("GROUP_TYPE between", value1, value2, "groupType");
            return (Criteria) this;
        }

        public Criteria andGroupTypeNotBetween(String value1, String value2) {
            addCriterion("GROUP_TYPE not between", value1, value2, "groupType");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}