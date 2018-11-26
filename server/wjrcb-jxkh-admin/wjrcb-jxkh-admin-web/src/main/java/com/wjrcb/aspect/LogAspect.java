package com.wjrcb.aspect;

import java.lang.reflect.InvocationTargetException;
import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.wjrcb.pojo.BaseEntity;
import com.wjrcb.pojo.MaUser;
import com.wjrcb.pojo.SysOperationLog;
import com.wjrcb.service.ISysOperationLogService;
import com.wjrcb.utils.JSONResult;
import com.wjrcb.utils.test;

/**
 * 
 * @Description
 * @author biweifei
 * @time 2018年8月15日 上午10:41:28
 */
@Aspect
@Component
public class LogAspect {
	@Autowired
	private ISysOperationLogService logService;

	private final static Logger logger = LoggerFactory.getLogger(LogAspect.class);

	@Pointcut("execution(public * com.wjrcb.controller.*.*(..))")
	public void log() {
		System.out.println("11111111111");
	}

	@Before("log()")
	public void doBefore(JoinPoint joinPoint) throws Throwable {
//		System.out.println("调用方法之前。。。。");
//		System.out.println("11111111111");
//		ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
//		HttpServletRequest request = attributes.getRequest();
//		System.out.println(request.hashCode());
//
//		// url
//		logger.info("url={}", request.getRequestURL());

		// method
//        logger.info("method={}", request.getMethod());

		// ip
//        logger.info("ip={}", request.getRemoteAddr());

		//
//        logger.info("class_method={}", joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName());

//		 参数
//		logger.info("args={}", joinPoint.getArgs().toString());
//		Object[] obj = joinPoint.getArgs();
//		for (int i = 0; i < obj.length; i++) {
//			System.out.println(obj[i].toString());
//		}
	}

	@Around("log()")
	public void around(ProceedingJoinPoint pj) {
		ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
		HttpServletRequest request = attributes.getRequest();
		String reqUrl = request.getRequestURI();
		
		StringBuffer params = new StringBuffer();
		Object[] obj = pj.getArgs();
		for (int i = 0; i < obj.length; i++) {
			if(obj[i] instanceof String) {
				params.append(obj[i].toString()).append(",");
			}
		}
		
		SysOperationLog sysOperationLog = new SysOperationLog();
		sysOperationLog.setLogId(UUID.randomUUID().toString());
		sysOperationLog.setReqUrl(reqUrl);
		sysOperationLog.setReqParams(params.toString());
		sysOperationLog.setReqBeginTime(new Date());
		
		MaUser maUser ;
		Object object = null;
		try {
			object = pj.proceed();
		} catch (Throwable e) {
			sysOperationLog.setReturnInfo(e.getMessage());
		}finally {
			maUser =(MaUser) request.getSession().getAttribute("sessionUser");
			sysOperationLog.setUserId(maUser.getUserId());
			sysOperationLog.setReqEndTime(new Date());
			if(StringUtils.isBlank(sysOperationLog.getReturnInfo())) {
				sysOperationLog.setReturnInfo("ok");
			}
			logService.insert(sysOperationLog);
		}
	}

	@After("log()")
	public void doAfter(JoinPoint joinPoint) {
//		logger.info("class_method={}",
//				joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName());
//		System.out.println("调用方法之前。。。。");
//		logger.info("222222222222");
	}

	@AfterReturning(returning = "object", pointcut = "log()")
	public void doAfterReturning(Object object) {
//		logger.info("333333333333");
//        logger.info("response={}", object.toString());
	}

}
