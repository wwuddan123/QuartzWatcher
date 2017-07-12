package com.woooooody.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.woooooody.entity.*;

public interface IJobMapper{
	
	@Select("select * from QRTZ_JOB_DETAILS;")
	List<JobEntity> getJobList();
	
	@Select("select * from QRTZ_TRIGGERS "
			+ "where SCHED_NAME=#{SCHED_NAME} "
			+ "and JOB_NAME=#{JOB_NAME} "
			+ "and JOB_GROUP=#{JOB_GROUP};")
	List<BaseTriggerEntity> getBaseTriggersByJob(JobEntity job);

	@Select("select * from QRTZ_SIMPLE_TRIGGERS "
			+ "where SCHED_NAME=#{SCHED_NAME} "
			+ "and TRIGGER_NAME=#{TRIGGER_NAME} "
			+ "and TRIGGER_GROUP=#{TRIGGER_GROUP};")
	SimpleTriggerEntity getSimpleTrigger(BaseTriggerEntity baseTrigger);
	
	@Select("select * from QRTZ_CRON_TRIGGERS "
			+ "where SCHED_NAME=#{SCHED_NAME} "
			+ "and TRIGGER_NAME=#{TRIGGER_NAME} "
			+ "and TRIGGER_GROUP=#{TRIGGER_GROUP};")
	CronTriggerEntity getCronTrigger(BaseTriggerEntity baseTrigger);
}
