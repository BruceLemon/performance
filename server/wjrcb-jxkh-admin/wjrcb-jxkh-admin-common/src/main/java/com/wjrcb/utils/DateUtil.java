package com.wjrcb.utils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 日期工具类
 * 
 * @author efraiser.xiaxiaofeng
 */
public class DateUtil {

	public static Date date = null;

	public static DateFormat dateFormat = null;

	public static Calendar calendar = null;

	/**
	 * 英文简写（默认）如：2010-12-01
	 */
	public static String FORMAT_DATE = "yyyy-MM-dd";
	/**
	 * 英文简写（默认）如：2010-12-01
	 */
	/**
	 * 英文简写（默认）如：20101201
	 */
	public static String FORMAT_DATE_SHORT = "yyyyMMdd";
	/**
	 * 英文简写（默认）如：120103
	 */
	public static String FORMAT_TIME_SHORT = "HHmmss";
	public static String FORMAT_TIME = "HH:mm:ss";

	/**
	 * 英文全称 如：2010-12-01 23:15:06
	 */
	public static String FORMAT_LONG = "yyyy-MM-dd HH:mm:ss";

	/**
	 * 精确到毫秒的完整时间 如：yyyy-MM-dd HH:mm:ss.S
	 */
	public static String FORMAT_FULL = "yyyy-MM-dd HH:mm:ss.S";

	/**
	 * 中文简写 如：2010年12月01日
	 */
	public static String FORMAT_SHORT_CN = "yyyy年MM月dd";

	/**
	 * 中文全称 如：2010年12月01日 23时15分06秒
	 */
	public static String FORMAT_LONG_CN = "yyyy年MM月dd日  HH时mm分ss秒";

	/**
	 * 精确到毫秒的完整中文时间
	 */
	public static String FORMAT_FULL_CN = "yyyy年MM月dd日  HH时mm分ss秒SSS毫秒";

	/**
	 * 获得默认的 date pattern
	 */
	public static String getDatePattern() {
		return FORMAT_LONG;
	}

	/**
	 * 根据预设格式返回当前日期
	 * 
	 * @return
	 */
	public static String getNow() {
		return format(new Date());
	}

	/**
	 * 根据用户格式返回当前日期
	 * 
	 * @param format
	 * @return
	 */
	public static String getNow(String format) {
		return format(new Date(), format);
	}

	/**
	 * 使用预设格式格式化日期
	 * 
	 * @param date
	 * @return
	 */
	public static String format(Date date) {
		return format(date, getDatePattern());
	}

	/**
	 * 使用用户格式格式化日期
	 * 
	 * @param date
	 *            日期
	 * @param pattern
	 *            日期格式
	 * @return
	 */
	public static String format(Date date, String pattern) {
		String returnValue = "";
		if (date != null) {
			SimpleDateFormat df = new SimpleDateFormat(pattern);
			returnValue = df.format(date);
		}
		return (returnValue);
	}

	/**
	 * 使用预设格式提取字符串日期
	 * 
	 * @param strDate
	 *            日期字符串
	 * @return
	 */
	public static Date parse(String strDate) {
		return parse(strDate, getDatePattern());
	}

	/**
	 * 使用用户格式提取字符串日期
	 * 
	 * @param strDate
	 *            日期字符串
	 * @param pattern
	 *            日期格式
	 * @return
	 */
	public static Date parse(String strDate, String pattern) {
		SimpleDateFormat df = new SimpleDateFormat(pattern);
		try {
			return df.parse(strDate);
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * 在日期上增加年度
	 * 
	 * @param date
	 *            日期
	 * @param n
	 *            要增加的年度
	 * @return
	 */
	public static Date addYear(Date date, int n) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.YEAR, n);
		return cal.getTime();
	}

	/**
	 * 在日期上增加数个整月
	 * 
	 * @param date
	 *            日期
	 * @param n
	 *            要增加的月数
	 * @return
	 */
	public static Date addMonth(Date date, int n) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.MONTH, n);
		return cal.getTime();
	}

	/**
	 * 获取日期年份
	 * 
	 * @param date
	 *            日期
	 * @return
	 */
	public static int getYear(Date date) {
		calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.get(Calendar.YEAR);
	}

	/**
	 * 在日期上增加天数
	 * 
	 * @param date
	 *            日期
	 * @param n
	 *            要增加的天数
	 * @return
	 */
	public static Date addDay(Date date, int n) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.DATE, n);
		return cal.getTime();
	}

	public static String addDay(Date date, String pattern, int n) {
		Date d2 = addDay(date, n);
		return format(d2, pattern);
	}

	public static String addDay(String strDate, String pattern, int n) {
		Date d = parse(strDate, pattern);
		Date d2 = addDay(d, n);
		return format(d2, pattern);
	}

	/**
	 * 在日期上增加分钟
	 * 
	 * @param date
	 *            日期
	 * @param n
	 *            要增加的分钟
	 * @return
	 */
	public static Date addMinute(Date date, int n) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.MINUTE, n);
		return cal.getTime();
	}

	/**
	 * 获取距现在某一小时的时刻
	 * 
	 * @param format
	 *            格式化时间的格式
	 * @param h
	 *            距现在的小时 例如：h=-1为上一个小时，h=1为下一个小时
	 * @return
	 */
	public static String getpreHour(String format, int h) {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		Date date = new Date();
		date.setTime(date.getTime() + h * 60 * 60 * 1000);
		return sdf.format(date);
	}

	/**
	 * 获取时间戳
	 */
	public static String getTimeString() {
		SimpleDateFormat df = new SimpleDateFormat(FORMAT_FULL);
		Calendar calendar = Calendar.getInstance();
		return df.format(calendar.getTime());
	}

	/**
	 * 功能描述：返回月
	 * 
	 * @param date
	 *            Date 日期
	 * @return 返回月份
	 */
	public static int getMonth(Date date) {
		calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.get(Calendar.MONTH) + 1;
	}

	/**
	 * 功能描述：返回日
	 * 
	 * @param date
	 *            Date 日期
	 * @return 返回日份
	 */
	public static int getDay(Date date) {
		calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.get(Calendar.DAY_OF_MONTH);
	}

	/**
	 * 功能描述：返回小
	 * 
	 * @param date
	 *            日期
	 * @return 返回小时
	 */
	public static int getHour(Date date) {
		calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.get(Calendar.HOUR_OF_DAY);
	}

	/**
	 * 功能描述：返回分
	 * 
	 * @param date
	 *            日期
	 * @return 返回分钟
	 */
	public static int getMinute(Date date) {
		calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.get(Calendar.MINUTE);
	}

	/**
	 * 返回秒钟
	 * 
	 * @param date
	 *            Date 日期
	 * @return 返回秒钟
	 */
	public static int getSecond(Date date) {
		calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.get(Calendar.SECOND);
	}

	/**
	 * 功能描述：返回毫
	 * 
	 * @param date
	 *            日期
	 * @return 返回毫
	 */
	public static long getMillis(Date date) {
		calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.getTimeInMillis();
	}

	/**
	 * 按默认格式的字符串距离今天的天数
	 * 
	 * @param date
	 *            日期字符串
	 * @return
	 */
	public static int countDays(String date) {
		long t = Calendar.getInstance().getTime().getTime();
		Calendar c = Calendar.getInstance();
		c.setTime(parse(date));
		long t1 = c.getTime().getTime();
		return (int) (t / 1000 - t1 / 1000) / 3600 / 24;
	}

	/**
	 * 按用户格式字符串距离今天的天数
	 * 
	 * @param date
	 *            日期字符串
	 * @param format
	 *            日期格式
	 * @return
	 */
	public static int countDays(String date, String format) {
		long t = Calendar.getInstance().getTime().getTime();
		Calendar c = Calendar.getInstance();
		c.setTime(parse(date, format));
		long t1 = c.getTime().getTime();
		return (int) (t / 1000 - t1 / 1000) / 3600 / 24;
	}
	
	/**
	 * 
	 * 功能描述：按默认格式字符串距离当前时间分钟数
	 * @author 
	 * @date 2018年2月11日
	 * @param date
	 * @return
	 * @modify log:
	 */
	public static int countMinute(String date){
		long t = Calendar.getInstance().getTime().getTime();
		Calendar c = Calendar.getInstance();
		c.setTime(parse(date));
		long t1 = c.getTime().getTime();
		return (int) (t / 1000 - t1 / 1000) / 60;
	}
	
	/**
	 * 
	 * 功能描述：按用户格式字符串距离当前时间分钟数
	 * @author 
	 * @date 2018年2月11日
	 * @param date
	 * @param format
	 * @return
	 * @modify log:
	 */
	public static int countMinute(String date, String format){
		long t = Calendar.getInstance().getTime().getTime();
		Calendar c = Calendar.getInstance();
		c.setTime(parse(date, format));
		long t1 = c.getTime().getTime();
		return (int) (t / 1000 - t1 / 1000) / 60;
	}

	/**
	 * 比较两日期
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param dt1
	 * @param dt2
	 * @return 1：dt1 在dt2前 -1：dt1在dt2后 0：相等
	 */
	public static int compareDate(Date dt1, Date dt2) {
		try {
			if (dt1.getTime() > dt2.getTime()) {
				return 1;
			} else if (dt1.getTime() < dt2.getTime()) {
				return -1;
			} else {
				return 0;
			}
		} catch (Exception exception) {
			exception.printStackTrace();
		}
		return 0;
	}

	/**
	 * 根据日期获得星期
	 * 
	 * @param date
	 * @return
	 */
	public static String getWeekOfDate(Date date) {
		String[] weekDaysName = { "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" };
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int intWeek = calendar.get(Calendar.DAY_OF_WEEK) - 1;
		return weekDaysName[intWeek];
	}

	/**
	 * 获取但前日期上月末日期
	 * 
	 * @return
	 */
	public static Date getLastMonthDay() {
		Date date = new Date();
		int day = getDay(date) * -1;
		return addDay(date, day);
	}

	/**
	 * 获取2个日期相隔的天数
	 * 
	 * @param firstDate
	 * @param secondDate
	 * @return
	 */
	public static long daysBetween(Date startDate, Date endDate) {
		long totalDate = 0;
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(startDate);
		long timestart = calendar.getTimeInMillis();
		calendar.setTime(endDate);
		long timeend = calendar.getTimeInMillis();
		totalDate = Math.abs((timeend - timestart)) / (1000 * 60 * 60 * 24);
		return totalDate;
	}

	public static int mothBetween(Date beginDate, Date endDate) {

		calendar = Calendar.getInstance();

		calendar.setTime(beginDate);
		int beginYear = calendar.get(Calendar.YEAR);
		int beginMonth = calendar.get(Calendar.MONTH);

		calendar.setTime(endDate);
		int endYear = calendar.get(Calendar.YEAR);
		int endMonth = calendar.get(Calendar.MONTH);

		int difMonth = (endYear - beginYear) * 12 + (endMonth - beginMonth) + 1;

		return difMonth;

	}

	/**
	 * 是否周末(星期五)
	 * 
	 * @param date
	 * @return
	 */
	public static boolean isEndWeek(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
		int friday = 6;
		if (friday == dayOfWeek) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 是否月头
	 * 
	 * @param date
	 * @return
	 */
	public static boolean isStartMonth(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);
		int startMonth = calendar.getActualMinimum(Calendar.DAY_OF_MONTH);
		if (startMonth == dayOfMonth) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 是否季度月份
	 * 
	 * @param date
	 * @return
	 */
	public static boolean isQuarterDate(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int i = calendar.get(Calendar.MONTH) + 1;
		if (i == 3 || i == 6 | i == 9 || i == 12) {
			return true;
		}
		return false;
	}

	public static int getMonthMaxDays(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
	}

	/**
	 * 是否月末
	 * 
	 * @param date
	 * @return
	 */
	public static boolean isEndMonth(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);
		int endMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
		if (endMonth == dayOfMonth) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 判断日期是否为半年末(0630)
	 * 
	 * @param date
	 * @return
	 */
	public static boolean isEndHalfOfYear(Date date) {
		String dateString = format(date, FORMAT_DATE_SHORT);
		if ("0630".equals(dateString.substring(2))) {
			return true;
		}
		return false;
	}

	/**
	 * 判断日期是否为年末(1231)
	 * 
	 * @param date
	 * @return
	 */
	public static boolean isEndYear(Date date) {
		String dateString = format(date, FORMAT_DATE_SHORT);
		if ("1231".equals(dateString.substring(2))) {
			return true;
		}
		return false;
	}
	

	public static void main(String[] args) {
		System.out.println(countMinute("2018-02-11 19:00:00", DateUtil.FORMAT_LONG));
	}
}