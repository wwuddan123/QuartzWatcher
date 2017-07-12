package com.woooooody.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.quartz.SchedulerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.woooooody.entity.JobEntity;
import com.woooooody.service.JobService;
import com.woooooody.util.SpringContextUtil;
/**
 * 任务控制器
 * @author admin
 *
 */
@Controller
public class JobController {
	@Autowired
	private JobService jobService;
	/**
	 * 获得所有任务
	 */
	@RequestMapping("/jobs")
	public @ResponseBody List<JobEntity>  getJobList(HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("utf8");
		List<JobEntity> taskList=jobService.getJobList();
		return taskList;
	}
	/**
	 * 获得数据库地址
	 */
	@RequestMapping("/data_source")
	public @ResponseBody String getDataSource(HttpServletResponse response) throws IOException, SchedulerException{
		String msg="1";
		InputStream is=null;
		try {
			msg=SpringContextUtil.getDataSource().getJdbcUrl();
		} catch (Exception e) {
			e.printStackTrace();
			msg=e.getMessage();
		}finally {
			if (is!=null) {
				is.close();
			}
		}
		return msg;
	}
}
