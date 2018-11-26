package com.wjrcb.utils;

   
 import java.lang.reflect.Field;  
 import java.lang.reflect.InvocationTargetException;  
 import java.lang.reflect.Method;  
 import java.util.Date;  
   
 /*** 
  * 遍历实体类的属性和数据类型以及属性值 
  *  
  * @author LiBaozhen 
  * @date 2013-1-4 上午10:25:02 
  * @company  
  * @version v1.3 
  * @see 相关类 
  * @since 相关/版本 
  */  
 public class test {  
         public static void reflectTest(Object model) throws NoSuchMethodException,  
                         IllegalAccessException, IllegalArgumentException,  
                         InvocationTargetException {  
                 // 获取实体类的所有属性，返回Field数组  
                 Field[] field = model.getClass().getDeclaredFields();  
                 // 遍历所有属性  
                 for (int j = 0; j < field.length; j++) {  
                         // 获取属性的名字  
                         String name = field[j].getName();  
                         // 将属性的首字符大写，方便构造get，set方法  
                         name = name.substring(0, 1).toUpperCase() + name.substring(1);  
                         // 获取属性的类型  
                         String type = field[j].getGenericType().toString();  
                         // 如果type是类类型，则前面包含"class "，后面跟类名  
                         System.out.println("属性为：" + name);  
                         if (type.equals("class java.lang.String")) {  
                                 Method m = model.getClass().getMethod("get" + name);  
                                 // 调用getter方法获取属性值  
                                 String value = (String) m.invoke(model);  
                                 System.out.println("数据类型为：String");  
                                 if (value != null) {  
                                         System.out.println("属性值为：" + value);  
                                 } else {  
                                         System.out.println("属性值为：空");  
                                 }  
                         }  
                         if (type.equals("class java.lang.Integer")) {  
                                 Method m = model.getClass().getMethod("get" + name);  
                                 Integer value = (Integer) m.invoke(model);  
                                 System.out.println("数据类型为：Integer");  
                                 if (value != null) {  
                                         System.out.println("属性值为：" + value);  
                                 } else {  
                                         System.out.println("属性值为：空");  
                                 }  
                         }  
                         if (type.equals("class java.lang.Short")) {  
                                 Method m = model.getClass().getMethod("get" + name);  
                                 Short value = (Short) m.invoke(model);  
                                 System.out.println("数据类型为：Short");  
                                 if (value != null) {  
                                         System.out.println("属性值为：" + value);  
                                 } else {  
                                         System.out.println("属性值为：空");  
                                 }  
                         }  
                         if (type.equals("class java.lang.Double")) {  
                                 Method m = model.getClass().getMethod("get" + name);  
                                 Double value = (Double) m.invoke(model);  
                                 System.out.println("数据类型为：Double");  
                                 if (value != null) {  
                                         System.out.println("属性值为：" + value);  
                                 } else {  
                                         System.out.println("属性值为：空");  
                                 }  
                         }  
                         if (type.equals("class java.lang.Boolean")) {  
                                 Method m = model.getClass().getMethod("get" + name);  
                                 Boolean value = (Boolean) m.invoke(model);  
                                 System.out.println("数据类型为：Boolean");  
                                 if (value != null) {  
                                         System.out.println("属性值为：" + value);  
                                 } else {  
                                         System.out.println("属性值为：空");  
                                 }  
                         }  
                         if (type.equals("class java.util.Date")) {  
                                 Method m = model.getClass().getMethod("get" + name);  
                                 Date value = (Date) m.invoke(model);  
                                 System.out.println("数据类型为：Date");  
                                 if (value != null) {  
                                         System.out.println("属性值为：" + value);  
                                 } else {  
                                         System.out.println("属性值为：空");  
                                 }  
                         }  
                 }  
         }  
 }