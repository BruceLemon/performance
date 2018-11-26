package com.wjrcb.utils;

import static org.quartz.SimpleScheduleBuilder.simpleSchedule;
import static org.quartz.TriggerBuilder.newTrigger;

import org.quartz.Job;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.quartz.impl.StdSchedulerFactory;

public class Scheduling {

	public static void main(String[] args) {
		Scheduling thismeth = new Scheduling();
		try {
			// 创建scheduler
			Scheduler scheduler = thismeth.gettrigger("trigger1", "group1", "job1", "group1",HelloQuartz.class);
			// 启动之
			scheduler.start();
			// 运行一段时间后关闭
			Thread.sleep(10000);
			scheduler.shutdown(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public Scheduler gettrigger(String triggerName, String triggerGroup, String jobName, String jobGroup,Object ddd) throws SchedulerException {
		Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();

		Trigger trigger = newTrigger().withIdentity(triggerName, triggerGroup) // 定义name/group
				.startNow()// 一旦加入scheduler，立即生效
				.withSchedule(simpleSchedule() // 使用SimpleTrigger
						.withIntervalInSeconds(1) // 每隔一秒执行一次
						.repeatForever()) // 一直执行，奔腾到老不停歇
				.build();

		JobDetail job = JobBuilder.newJob((Class<? extends Job>) ddd) // 定义Job类为HelloQuartz类，这是真正的执行逻辑所在
				.withIdentity(jobName, jobGroup) // 定义name/group
				// .usingJobData("name", "quartz") // 定义属性
				.build();
		scheduler.scheduleJob(job, trigger);
		return scheduler;
	}

}
