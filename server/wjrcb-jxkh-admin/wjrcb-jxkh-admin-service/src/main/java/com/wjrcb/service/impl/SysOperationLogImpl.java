package com.wjrcb.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wjrcb.mapper.SysOperationLogMapper;
import com.wjrcb.pojo.SysOperationLog;
import com.wjrcb.service.ISysOperationLogService;

@Service
public class SysOperationLogImpl implements ISysOperationLogService {
	@Autowired
	private SysOperationLogMapper logMapper;

	@Override
	public int insert(SysOperationLog record) {
		return logMapper.insertSelective(record);
	}

}
