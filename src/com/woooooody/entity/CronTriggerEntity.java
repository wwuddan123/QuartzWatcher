package com.woooooody.entity;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;

public class CronTriggerEntity{
	@JsonProperty(value="CRON_EXPRESSION")
    private String CRON_EXPRESSION;//cron表达式
	@JsonProperty(value="TIME_ZONE_ID")
    private String TIME_ZONE_ID;
	@JsonIgnore
	public String getCRON_EXPRESSION() {
		return CRON_EXPRESSION;
	}
	public void setCRON_EXPRESSION(String cRON_EXPRESSION) {
		CRON_EXPRESSION = cRON_EXPRESSION;
	}
	@JsonIgnore
	public String getTIME_ZONE_ID() {
		return TIME_ZONE_ID;
	}
	public void setTIME_ZONE_ID(String tIME_ZONE_ID) {
		TIME_ZONE_ID = tIME_ZONE_ID;
	}
    
}
