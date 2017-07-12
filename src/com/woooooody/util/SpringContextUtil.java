package com.woooooody.util;


import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class SpringContextUtil {
	private static ApplicationContext context;
	private static SqlSessionFactoryBean sessionFactoryBean;
	private static ComboPooledDataSource dataSource;
	static{
		// 获得quartz.properties中的参数
		String path = SpringContextUtil.class.getResource("/").getPath();
        path = path.substring(1, path.indexOf("classes"));
        
		context=  new FileSystemXmlApplicationContext(path+"applicationContext.xml"); 
		sessionFactoryBean=(SqlSessionFactoryBean)context.getBean(org.mybatis.spring.SqlSessionFactoryBean.class);
		String databaseId = null;
		try {
			databaseId = sessionFactoryBean.getObject().getConfiguration().getDatabaseId();
		} catch (Exception e) {
			e.printStackTrace();
			dataSource= null;
		}
		dataSource= (ComboPooledDataSource)context.getBean(databaseId);
	}
	public static ComboPooledDataSource getDataSource(){
		return dataSource;
	}
}
