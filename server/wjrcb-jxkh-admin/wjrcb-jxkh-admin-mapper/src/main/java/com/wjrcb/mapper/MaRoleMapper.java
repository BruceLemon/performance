package com.wjrcb.mapper;

import com.wjrcb.pojo.MaRole;
import com.wjrcb.pojo.MaRoleExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MaRoleMapper {
    int countByExample(MaRoleExample example);

    int deleteByExample(MaRoleExample example);

    int insert(MaRole record);

    int insertSelective(MaRole record);

    List<MaRole> selectByExample(MaRoleExample example);

    int updateByExampleSelective(@Param("record") MaRole record, @Param("example") MaRoleExample example);

    int updateByExample(@Param("record") MaRole record, @Param("example") MaRoleExample example);
}