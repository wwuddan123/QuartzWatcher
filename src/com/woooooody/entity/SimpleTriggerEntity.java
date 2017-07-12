package com.woooooody.entity;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;

public class SimpleTriggerEntity{
	@JsonProperty(value="REPEAT_COUNT")
    private long REPEAT_COUNT;
	@JsonProperty(value="REPEAT_INTERVAL")
    private long REPEAT_INTERVAL;
	@JsonProperty(value="TIMES_TRIGGERED")
    private long TIMES_TRIGGERED;
	@JsonIgnore
	public long getREPEAT_COUNT() {
		return REPEAT_COUNT;
	}
	public void setREPEAT_COUNT(long rEPEAT_COUNT) {
		REPEAT_COUNT = rEPEAT_COUNT;
	}
	@JsonIgnore
	public long getREPEAT_INTERVAL() {
		return REPEAT_INTERVAL;
	}
	public void setREPEAT_INTERVAL(long rEPEAT_INTERVAL) {
		REPEAT_INTERVAL = rEPEAT_INTERVAL;
	}
	@JsonIgnore
	public long getTIMES_TRIGGERED() {
		return TIMES_TRIGGERED;
	}
	public void setTIMES_TRIGGERED(long tIMES_TRIGGERED) {
		TIMES_TRIGGERED = tIMES_TRIGGERED;
	}
}
