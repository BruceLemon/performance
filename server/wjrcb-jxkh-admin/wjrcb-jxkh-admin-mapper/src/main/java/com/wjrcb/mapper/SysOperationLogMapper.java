package com.wjrcb.mapper;

import com.wjrcb.pojo.SysOperationLog;
import com.wjrcb.pojo.SysOperationLogExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SysOperationLogMapper {
    int countByExample(SysOperationLogExample example);

    int deleteByExample(SysOperationLogExample example);

    int insert(SysOperationLog record);

    int insertSelective(SysOperationLog record);

    List<SysOperationLog> selectByExample(SysOperationLogExample example);

    int updateByExampleSelective(@Param("record") SysOperationLog record, @Param("example") SysOperationLogExample example);

    int updateByExample(@Param("record") SysOperationLog record, @Param("example") SysOperationLogExample example);
}