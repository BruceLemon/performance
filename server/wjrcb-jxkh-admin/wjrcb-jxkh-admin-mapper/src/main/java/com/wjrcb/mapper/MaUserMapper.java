package com.wjrcb.mapper;

import com.wjrcb.pojo.MaUser;
import com.wjrcb.pojo.MaUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MaUserMapper {
    int countByExample(MaUserExample example);

    int deleteByExample(MaUserExample example);

    int insert(MaUser record);

    int insertSelective(MaUser record);

    List<MaUser> selectByExample(MaUserExample example);

    int updateByExampleSelective(@Param("record") MaUser record, @Param("example") MaUserExample example);

    int updateByExample(@Param("record") MaUser record, @Param("example") MaUserExample example);
}