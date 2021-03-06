package com.wjrcb.service;

import java.util.List;

import com.wjrcb.pojo.MaUser;

public interface IMaUserService {

	public List<MaUser> queryAllUsers();
	
	public List<MaUser> queryUsersByDah(String dah);
	
	public void deleteUsersByDah(String dah);
}
