package com.wjrcb.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SysOperationLogExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public SysOperationLogExample() {
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

        public Criteria andLogIdIsNull() {
            addCriterion("LOG_ID is null");
            return (Criteria) this;
        }

        public Criteria andLogIdIsNotNull() {
            addCriterion("LOG_ID is not null");
            return (Criteria) this;
        }

        public Criteria andLogIdEqualTo(String value) {
            addCriterion("LOG_ID =", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdNotEqualTo(String value) {
            addCriterion("LOG_ID <>", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdGreaterThan(String value) {
            addCriterion("LOG_ID >", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdGreaterThanOrEqualTo(String value) {
            addCriterion("LOG_ID >=", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdLessThan(String value) {
            addCriterion("LOG_ID <", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdLessThanOrEqualTo(String value) {
            addCriterion("LOG_ID <=", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdLike(String value) {
            addCriterion("LOG_ID like", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdNotLike(String value) {
            addCriterion("LOG_ID not like", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdIn(List<String> values) {
            addCriterion("LOG_ID in", values, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdNotIn(List<String> values) {
            addCriterion("LOG_ID not in", values, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdBetween(String value1, String value2) {
            addCriterion("LOG_ID between", value1, value2, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdNotBetween(String value1, String value2) {
            addCriterion("LOG_ID not between", value1, value2, "logId");
            return (Criteria) this;
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

        public Criteria andReqUrlIsNull() {
            addCriterion("REQ_URL is null");
            return (Criteria) this;
        }

        public Criteria andReqUrlIsNotNull() {
            addCriterion("REQ_URL is not null");
            return (Criteria) this;
        }

        public Criteria andReqUrlEqualTo(String value) {
            addCriterion("REQ_URL =", value, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlNotEqualTo(String value) {
            addCriterion("REQ_URL <>", value, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlGreaterThan(String value) {
            addCriterion("REQ_URL >", value, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlGreaterThanOrEqualTo(String value) {
            addCriterion("REQ_URL >=", value, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlLessThan(String value) {
            addCriterion("REQ_URL <", value, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlLessThanOrEqualTo(String value) {
            addCriterion("REQ_URL <=", value, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlLike(String value) {
            addCriterion("REQ_URL like", value, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlNotLike(String value) {
            addCriterion("REQ_URL not like", value, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlIn(List<String> values) {
            addCriterion("REQ_URL in", values, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlNotIn(List<String> values) {
            addCriterion("REQ_URL not in", values, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlBetween(String value1, String value2) {
            addCriterion("REQ_URL between", value1, value2, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqUrlNotBetween(String value1, String value2) {
            addCriterion("REQ_URL not between", value1, value2, "reqUrl");
            return (Criteria) this;
        }

        public Criteria andReqParamsIsNull() {
            addCriterion("REQ_PARAMS is null");
            return (Criteria) this;
        }

        public Criteria andReqParamsIsNotNull() {
            addCriterion("REQ_PARAMS is not null");
            return (Criteria) this;
        }

        public Criteria andReqParamsEqualTo(String value) {
            addCriterion("REQ_PARAMS =", value, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsNotEqualTo(String value) {
            addCriterion("REQ_PARAMS <>", value, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsGreaterThan(String value) {
            addCriterion("REQ_PARAMS >", value, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsGreaterThanOrEqualTo(String value) {
            addCriterion("REQ_PARAMS >=", value, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsLessThan(String value) {
            addCriterion("REQ_PARAMS <", value, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsLessThanOrEqualTo(String value) {
            addCriterion("REQ_PARAMS <=", value, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsLike(String value) {
            addCriterion("REQ_PARAMS like", value, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsNotLike(String value) {
            addCriterion("REQ_PARAMS not like", value, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsIn(List<String> values) {
            addCriterion("REQ_PARAMS in", values, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsNotIn(List<String> values) {
            addCriterion("REQ_PARAMS not in", values, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsBetween(String value1, String value2) {
            addCriterion("REQ_PARAMS between", value1, value2, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqParamsNotBetween(String value1, String value2) {
            addCriterion("REQ_PARAMS not between", value1, value2, "reqParams");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeIsNull() {
            addCriterion("REQ_BEGIN_TIME is null");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeIsNotNull() {
            addCriterion("REQ_BEGIN_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeEqualTo(Date value) {
            addCriterion("REQ_BEGIN_TIME =", value, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeNotEqualTo(Date value) {
            addCriterion("REQ_BEGIN_TIME <>", value, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeGreaterThan(Date value) {
            addCriterion("REQ_BEGIN_TIME >", value, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("REQ_BEGIN_TIME >=", value, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeLessThan(Date value) {
            addCriterion("REQ_BEGIN_TIME <", value, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeLessThanOrEqualTo(Date value) {
            addCriterion("REQ_BEGIN_TIME <=", value, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeIn(List<Date> values) {
            addCriterion("REQ_BEGIN_TIME in", values, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeNotIn(List<Date> values) {
            addCriterion("REQ_BEGIN_TIME not in", values, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeBetween(Date value1, Date value2) {
            addCriterion("REQ_BEGIN_TIME between", value1, value2, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqBeginTimeNotBetween(Date value1, Date value2) {
            addCriterion("REQ_BEGIN_TIME not between", value1, value2, "reqBeginTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeIsNull() {
            addCriterion("REQ_END_TIME is null");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeIsNotNull() {
            addCriterion("REQ_END_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeEqualTo(Date value) {
            addCriterion("REQ_END_TIME =", value, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeNotEqualTo(Date value) {
            addCriterion("REQ_END_TIME <>", value, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeGreaterThan(Date value) {
            addCriterion("REQ_END_TIME >", value, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("REQ_END_TIME >=", value, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeLessThan(Date value) {
            addCriterion("REQ_END_TIME <", value, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeLessThanOrEqualTo(Date value) {
            addCriterion("REQ_END_TIME <=", value, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeIn(List<Date> values) {
            addCriterion("REQ_END_TIME in", values, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeNotIn(List<Date> values) {
            addCriterion("REQ_END_TIME not in", values, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeBetween(Date value1, Date value2) {
            addCriterion("REQ_END_TIME between", value1, value2, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReqEndTimeNotBetween(Date value1, Date value2) {
            addCriterion("REQ_END_TIME not between", value1, value2, "reqEndTime");
            return (Criteria) this;
        }

        public Criteria andReturnInfoIsNull() {
            addCriterion("RETURN_INFO is null");
            return (Criteria) this;
        }

        public Criteria andReturnInfoIsNotNull() {
            addCriterion("RETURN_INFO is not null");
            return (Criteria) this;
        }

        public Criteria andReturnInfoEqualTo(String value) {
            addCriterion("RETURN_INFO =", value, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoNotEqualTo(String value) {
            addCriterion("RETURN_INFO <>", value, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoGreaterThan(String value) {
            addCriterion("RETURN_INFO >", value, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoGreaterThanOrEqualTo(String value) {
            addCriterion("RETURN_INFO >=", value, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoLessThan(String value) {
            addCriterion("RETURN_INFO <", value, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoLessThanOrEqualTo(String value) {
            addCriterion("RETURN_INFO <=", value, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoLike(String value) {
            addCriterion("RETURN_INFO like", value, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoNotLike(String value) {
            addCriterion("RETURN_INFO not like", value, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoIn(List<String> values) {
            addCriterion("RETURN_INFO in", values, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoNotIn(List<String> values) {
            addCriterion("RETURN_INFO not in", values, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoBetween(String value1, String value2) {
            addCriterion("RETURN_INFO between", value1, value2, "returnInfo");
            return (Criteria) this;
        }

        public Criteria andReturnInfoNotBetween(String value1, String value2) {
            addCriterion("RETURN_INFO not between", value1, value2, "returnInfo");
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