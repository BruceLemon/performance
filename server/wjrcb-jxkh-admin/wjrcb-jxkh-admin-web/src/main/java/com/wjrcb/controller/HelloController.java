package com.wjrcb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wjrcb.pojo.MaUser;
import com.wjrcb.service.IMaUserService;
import com.wjrcb.utils.JSONResult;

@Controller
public class HelloController {
	@Autowired
	private IMaUserService iMaUserService;

	@GetMapping("hello")
	public String hello() {
		return "hello";
	}
	
	@GetMapping("center")
	public String center() {
		return "center";
	}
	
	@PostMapping("queryAllUsers")
	@ResponseBody
	public JSONResult queryAllUsers() {
		List<MaUser> MaUserList = iMaUserService.queryAllUsers();
		return JSONResult.ok(MaUserList);
	}
}
