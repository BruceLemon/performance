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
		return userMapper.selectByExample(example);
	}

}
