package com.woooooody.dao;

import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.woooooody.entity.BaseTriggerEntity;
import com.woooooody.entity.JobEntity;
import com.woooooody.mapper.IJobMapper;
import com.woooooody.util.JsonUtil;

@Repository
public class JobDao {
	@Autowired
	private IJobMapper jobMapper;

	public List<JobEntity> getJobList() {
		List<JobEntity> jobs = jobMapper.getJobList();
		for (JobEntity job : jobs) {
			// 解析BLOB
			String blob_string = null;
			blob_string = JsonUtil.objToJSONString(getObjectFromBlob(job.getJOB_DATA()));
			job.setJOB_DATA_STRING(blob_string);

			// 获得触发器
			List<BaseTriggerEntity> triggers = jobMapper.getBaseTriggersByJob(job);

			// 遍历triggers,判断trigger类型
			for (BaseTriggerEntity baseTrigger : triggers) {
				if ("SIMPLE".equals(baseTrigger.getTRIGGER_TYPE())) {
					baseTrigger.setRealTrigger(jobMapper.getSimpleTrigger(baseTrigger));
				} else if ("CRON".equals(baseTrigger.getTRIGGER_TYPE())) {
					baseTrigger.setRealTrigger(jobMapper.getCronTrigger(baseTrigger));
				}
			}

			job.setTriggers(triggers);
		}
		return jobs;
	}

	private Object getObjectFromBlob(Object JOB_DATA) {
		byte[] job_data = (byte[]) JOB_DATA;
		InputStream is;
		try {
			is = new BufferedInputStream(new ByteArrayInputStream(job_data));
			ObjectInputStream in = new ObjectInputStream(is);
			try {
				return in.readObject();
			} finally {
				in.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
