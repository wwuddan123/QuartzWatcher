package com.woooooody.entity;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;

import com.mysql.jdbc.Blob;

public class BaseTriggerEntity {
    @JsonProperty("SCHED_NAME")
	private String SCHED_NAME;
    @JsonProperty("TRIGGER_NAME")
    private String TRIGGER_NAME;//trigger的名字,该名字用户自己可以随意定制,无强行要求
    @JsonProperty("TRIGGER_GROUP")
    private String TRIGGER_GROUP;//trigger所属组的名字,该名字用户自己随意定制,无强行要求'
    @JsonProperty("JOB_NAME")
    private String JOB_NAME;//qrtz_job_details表job_name的外键',
    @JsonProperty("JOB_GROUP")
    private String JOB_GROUP;//qrtz_job_details表job_group的外键',
    @JsonProperty("DESCRIPTION")
    private String DESCRIPTION; 
    @JsonProperty("NEXT_FIRE_TIME")
    private long NEXT_FIRE_TIME;
    @JsonProperty("PREV_FIRE_TIME")
    private long PREV_FIRE_TIME;
    @JsonProperty("PRIORITY")
    private int PRIORITY;//线程优先级
    @JsonProperty("TRIGGER_STATE")
    private String TRIGGER_STATE;//当前trigger状态，设置为ACQUIRED,如果设置为WAITING,则job不会触发',
    @JsonProperty("TRIGGER_TYPE")
    private String TRIGGER_TYPE;
    @JsonProperty("START_TIME")
    private long START_TIME;
    @JsonProperty("END_TIME")
    private long END_TIME;
    @JsonProperty("CALENDAR_NAME")
    private String CALENDAR_NAME;
    @JsonProperty("MISFIRE_INSTR")
    private int MISFIRE_INSTR;
    @JsonProperty("JOB_DATA")
    private Blob JOB_DATA;
    private Object realTrigger;//细化的trigger
    public Object getRealTrigger() {
		return realTrigger;
	}
	public void setRealTrigger(Object realTrigger) {
		this.realTrigger = realTrigger;
	}
	@JsonIgnore
	public String getSCHED_NAME() {
		return SCHED_NAME;
	}
	public void setSCHED_NAME(String sCHED_NAME) {
		SCHED_NAME = sCHED_NAME;
	}
	@JsonIgnore
	public String getTRIGGER_NAME() {
		return TRIGGER_NAME;
	}
	public void setTRIGGER_NAME(String tRIGGER_NAME) {
		TRIGGER_NAME = tRIGGER_NAME;
	}
	@JsonIgnore
	public String getTRIGGER_GROUP() {
		return TRIGGER_GROUP;
	}
	public void setTRIGGER_GROUP(String tRIGGER_GROUP) {
		TRIGGER_GROUP = tRIGGER_GROUP;
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
	public long getNEXT_FIRE_TIME() {
		return NEXT_FIRE_TIME;
	}
	public void setNEXT_FIRE_TIME(long nEXT_FIRE_TIME) {
		NEXT_FIRE_TIME = nEXT_FIRE_TIME;
	}
	@JsonIgnore
	public long getPREV_FIRE_TIME() {
		return PREV_FIRE_TIME;
	}
	public void setPREV_FIRE_TIME(long pREV_FIRE_TIME) {
		PREV_FIRE_TIME = pREV_FIRE_TIME;
	}
	@JsonIgnore
	public int getPRIORITY() {
		return PRIORITY;
	}
	public void setPRIORITY(int pRIORITY) {
		PRIORITY = pRIORITY;
	}
	@JsonIgnore
	public String getTRIGGER_STATE() {
		return TRIGGER_STATE;
	}
	public void setTRIGGER_STATE(String tRIGGER_STATE) {
		TRIGGER_STATE = tRIGGER_STATE;
	}
	@JsonIgnore
	public String getTRIGGER_TYPE() {
		return TRIGGER_TYPE;
	}
	public void setTRIGGER_TYPE(String tRIGGER_TYPE) {
		TRIGGER_TYPE = tRIGGER_TYPE;
	}
	@JsonIgnore
	public long getSTART_TIME() {
		return START_TIME;
	}
	public void setSTART_TIME(long sTART_TIME) {
		START_TIME = sTART_TIME;
	}
	@JsonIgnore
	public long getEND_TIME() {
		return END_TIME;
	}
	public void setEND_TIME(long eND_TIME) {
		END_TIME = eND_TIME;
	}
	@JsonIgnore
	public String getCALENDAR_NAME() {
		return CALENDAR_NAME;
	}
	public void setCALENDAR_NAME(String cALENDAR_NAME) {
		CALENDAR_NAME = cALENDAR_NAME;
	}
	@JsonIgnore
	public int getMISFIRE_INSTR() {
		return MISFIRE_INSTR;
	}
	public void setMISFIRE_INSTR(int mISFIRE_INSTR) {
		MISFIRE_INSTR = mISFIRE_INSTR;
	}
	@JsonIgnore
	public Blob getJOB_DATA() {
		return JOB_DATA;
	}
	public void setJOB_DATA(Blob jOB_DATA) {
		JOB_DATA = jOB_DATA;
	}
}
