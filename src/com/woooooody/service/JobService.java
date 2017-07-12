package com.woooooody.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.woooooody.dao.JobDao;
import com.woooooody.entity.JobEntity;
@Service
public class JobService {
	@Autowired
	private JobDao jobDao;
	public List<JobEntity> getJobList() {
		return jobDao.getJobList();
	}

}
