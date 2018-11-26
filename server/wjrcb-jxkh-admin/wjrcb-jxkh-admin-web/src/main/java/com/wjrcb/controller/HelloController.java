package com.wjrcb.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	
	@PostMapping("queryUsersByDah")
	@ResponseBody
	public JSONResult queryUsersByDah(String dah) {
		List<MaUser> maUserList = new ArrayList<MaUser>();
		try {
			maUserList = iMaUserService.queryUsersByDah(dah);
		} catch (Exception e) {
			
		}
		return JSONResult.ok(maUserList);
		
	}
	
	@PostMapping("deleteUsersByDah")
	@ResponseBody
	public JSONResult deleteUsersByDah(String dah) {
		iMaUserService.deleteUsersByDah(dah);
		return JSONResult.ok();
	}
	
	@PostMapping("login")
	@ResponseBody
	public JSONResult userLogin(String dah,HttpServletRequest request, HttpServletResponse response) {
		MaUser user = new MaUser();
		user.setUserId(dah);
		request.getSession().setAttribute("sessionUser", user);
		return JSONResult.ok();
	}
}
