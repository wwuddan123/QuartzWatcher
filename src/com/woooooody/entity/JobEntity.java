package com.woooooody.entity;

import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;

/**
 * JobDetail实体类
 * 
 * @author woooooody
 * @date 2017年6月29日
 */
public class JobEntity {

	@JsonProperty(value = "SCHED_NAME")
	private String SCHED_NAME;// 调度器名称，主键
	@JsonProperty(value = "JOB_NAME")
	private String JOB_NAME;// 集群中job的名字,该名字用户自己可以随意定制,无强行要求
	@JsonProperty(value = "JOB_GROUP")
	private String JOB_GROUP;// 集群中job的所属组的名字,该名字用户自己随意定制,无强行要求
	@JsonProperty(value = "DESCRIPTION")
	private String DESCRIPTION;
	@JsonProperty(value = "JOB_CLASS_NAME")
	private String JOB_CLASS_NAME;// job实现类的完全包名,quartz就是根据这个路径到classpath找到该job类
	@JsonProperty(value = "IS_DURABLE")
	private String IS_DURABLE;// 是否持久化,把该属性设置为1，即使没有触发器，jobdetail也不会被删除
	@JsonProperty(value = "IS_NONCONCURRENT")
	private String IS_NONCONCURRENT;// 是否支持并发
	@JsonProperty(value = "IS_UPDATE_DATA")
	private String IS_UPDATE_DATA;// 是否可以在多次执行任务时更新数据
	@JsonProperty(value = "REQUESTS_RECOVERY")
	private String REQUESTS_RECOVERY;// 是否支持哑火处理
	private Object JOB_DATA;// 一个blob字段，存放持久化job对象
	@JsonProperty(value = "JOB_DATA")
	private String JOB_DATA_STRING;// 一个blob字段，存放持久化job对象
	
	@JsonProperty(value = "triggers")
	private List<BaseTriggerEntity> triggers;

	@JsonIgnore
	public String getSCHED_NAME() {
		return SCHED_NAME;
	}

	public void setSCHED_NAME(String sCHED_NAME) {
		SCHED_NAME = sCHED_NAME;
	}

	@JsonIgnore
	public String getJOB_NAME() {
		return JOB_NAME;
	}

	public void setJOB_NAME(String jOB_NAME) {
		JOB_NAME = jOB_NAME;
	}

	@JsonIgnore
	public String getJOB_GROUP() {
		return JOB_GROUP;
	}

	public void setJOB_GROUP(String jOB_GROUP) {
		JOB_GROUP = jOB_GROUP;
	}

	@JsonIgnore
	public String getDESCRIPTION() {
		return DESCRIPTION;
	}

	public void setDESCRIPTION(String dESCRIPTION) {
		DESCRIPTION = dESCRIPTION;
	}

	@JsonIgnore
	public String getJOB_CLASS_NAME() {
		return JOB_CLASS_NAME;
	}

	public void setJOB_CLASS_NAME(String jOB_CLASS_NAME) {
		JOB_CLASS_NAME = jOB_CLASS_NAME;
	}

	@JsonIgnore
	public String getIS_DURABLE() {
		return IS_DURABLE;
	}

	public void setIS_DURABLE(String iS_DURABLE) {
		IS_DURABLE = iS_DURABLE;
	}

	@JsonIgnore
	public String getIS_NONCONCURRENT() {
		return IS_NONCONCURRENT;
	}

	public void setIS_NONCONCURRENT(String iS_NONCONCURRENT) {
		IS_NONCONCURRENT = iS_NONCONCURRENT;
	}

	@JsonIgnore
	public String getIS_UPDATE_DATA() {
		return IS_UPDATE_DATA;
	}

	public void setIS_UPDATE_DATA(String iS_UPDATE_DATA) {
		IS_UPDATE_DATA = iS_UPDATE_DATA;
	}

	@JsonIgnore
	public String getREQUESTS_RECOVERY() {
		return REQUESTS_RECOVERY;
	}

	public void setREQUESTS_RECOVERY(String rEQUESTS_RECOVERY) {
		REQUESTS_RECOVERY = rEQUESTS_RECOVERY;
	}

	@JsonIgnore
	public Object getJOB_DATA() {
		return JOB_DATA;
	}

	public void setJOB_DATA(Object jOB_DATA) {
		JOB_DATA = jOB_DATA;
	}
	@JsonIgnore
	public String getJOB_DATA_STRING() {
		return JOB_DATA_STRING;
	}
	
	public void setJOB_DATA_STRING(String jOB_DATA_STRING) {
		JOB_DATA_STRING = jOB_DATA_STRING;
	}

	@JsonIgnore
	public List<BaseTriggerEntity> getTriggers() {
		return triggers;
	}

	public void setTriggers(List<BaseTriggerEntity> triggers) {
		this.triggers = triggers;
	}
}
