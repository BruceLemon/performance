package com.wjrcb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wjrcb.mapper.MaUserMapper;
import com.wjrcb.pojo.MaUser;
import com.wjrcb.pojo.MaUserExample;
import com.wjrcb.service.IMaUserService;

@Service
public class MaUserServiceImpl implements IMaUserService {
	@Autowired
	private MaUserMapper userMapper;

	@Override
	public List<MaUser> queryAllUsers() {
		MaUserExample example = new MaUserExample();
		example.setOrderByClause("org_id");
		example.createCriteria().andUserNameLike("黄%");
		return userMapper.selectByExample(example);
	}

	@Override
	public List<MaUser> queryUsersByDah(String dah) {
		MaUserExample example = new MaUserExample();
		example.setOrderByClause("org_id");
		example.createCriteria().andUserIdEqualTo(dah);
		return userMapper.selectByExample(example);
	}

	@Override
	public void deleteUsersByDah(String dah) {
		MaUserExample example = new MaUserExample();
		example.createCriteria().andUserIdEqualTo(dah);
		userMapper.deleteByExample(example);
		
		MaUser record = new MaUser();
		record.setUserId("109310931093109310931093");
		record.setOrgId("07066780");
		record.setUserName("biweifei");
		userMapper.insert(record);
	}

}
