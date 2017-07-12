/**
 * 
 */
var SCHED_NAME={
	"EN":"SCHED_NAME",
	"CN":"调度器"
};
var JOB_NAME={
		"EN":"JOB_NAME",
		"CN":"任务名称"
};
var JOB_GROUP={
		"EN":"JOB_GROUP",
		"CN":"任务分组"
};
var DESCRIPTION={
		"EN":"DESCRIPTION",
		"CN":"描述"
};
var JOB_CLASS_NAME={
		"EN":"JOB_CLASS_NAME",
		"CN":"任务类"
};
var IS_DURABLE={
		"EN":"IS_DURABLE",
		"CN":"持久化"
};
var IS_NONCONCURRENT={
		"EN":"IS_NONCONCURRENT",
		"CN":"禁止并发"
};
var IS_UPDATE_DATA={
		"EN":"IS_UPDATE_DATA",
		"CN":"更新数据"
};
var REQUESTS_RECOVERY={
		"EN":"REQUESTS_RECOVERY",
		"CN":"哑火处理"
};
var JOB_DATA={
		"EN":"JOB_DATA",
		"CN":"BLOB参数"
};
var operate={
		"EN":"operate",
		"CN":"操作"
};
var TRIGGER_NAME={
		"EN":"TRIGGER_NAME",
		"CN":"触发器名"
};
var TRIGGER_GROUP={
		"EN":"TRIGGER_GROUP",
		"CN":"触发器分组"
};
var NEXT_FIRE_TIME={
		"EN":"NEXT_FIRE_TIME",
		"CN":"下次执行时间"
};
var PREV_FIRE_TIME={
		"EN":"PREV_FIRE_TIME",
		"CN":"上次执行时间"
};
var TRIGGER_STATE={
		"EN":"TRIGGER_STATE",
		"CN":"触发器状态"
};
var TRIGGER_TYPE={
		"EN":"TRIGGER_TYPE：",
		"CN":"触发器类型："
};
var START_TIME={
		"EN":"START_TIME",
		"CN":"开始时间"
};
var END_TIME={
		"EN":"END_TIME",
		"CN":"结束时间"
};
var CALENDAR_NAME={
		"EN":"CALENDAR_NAME",
		"CN":"日历名称"
};
var MISFIRE_INSTR={
		"EN":"MISFIRE_INSTR",
		"CN":"哑火处理"
};
var REPEAT_COUNT={
		"EN":"REPEAT_COUNT：",
		"CN":"重复次数："
};
var REPEAT_INTERVAL={
		"EN":"REPEAT_INTERVAL：",
		"CN":"重复间隔(s)："
};
var TIMES_TRIGGERED={
		"EN":"TIMES_TRIGGERED：",
		"CN":"触发次数："
};
var CRON_EXPRESSION={
		"EN":"CRON_EXPRESSION：",
		"CN":"Cron表达式："
};
var TIME_ZONE_ID={
		"EN":"TIME_ZONE_ID：",
		"CN":"时区ID："
};

function i18n_CN() {
	console.info("CN");
	$(".SCHED_NAME").html(SCHED_NAME.CN);
	$(".JOB_NAME").html(JOB_NAME.CN);
	$(".JOB_GROUP").html(JOB_GROUP.CN);
	$(".DESCRIPTION").html(DESCRIPTION.CN);
	$(".JOB_CLASS_NAME").html(JOB_CLASS_NAME.CN);
	$(".IS_DURABLE").html(IS_DURABLE.CN);
	$(".IS_NONCONCURRENT").html(IS_NONCONCURRENT.CN);
	$(".IS_UPDATE_DATA").html(IS_UPDATE_DATA.CN);
	$(".REQUESTS_RECOVERY").html(REQUESTS_RECOVERY.CN);
	$(".JOB_DATA").html(JOB_DATA.CN);
	$(".operate").html(operate.CN);
	$(".TRIGGER_NAME").html(TRIGGER_NAME.CN);
	$(".TRIGGER_GROUP").html(TRIGGER_GROUP.CN);
	$(".NEXT_FIRE_TIME").html(NEXT_FIRE_TIME.CN);
	$(".PREV_FIRE_TIME").html(PREV_FIRE_TIME.CN);
	$(".TRIGGER_STATE").html(TRIGGER_STATE.CN);
	$(".TRIGGER_TYPE").html(TRIGGER_TYPE.CN);
	$(".START_TIME").html(START_TIME.CN);
	$(".END_TIME").html(END_TIME.CN);
	$(".CALENDAR_NAME").html(CALENDAR_NAME.CN);
	$(".MISFIRE_INSTR").html(MISFIRE_INSTR.CN);
	//触发器详情
	$(".REPEAT_COUNT").html(REPEAT_COUNT.CN);
	$(".REPEAT_INTERVAL").html(REPEAT_INTERVAL.CN);
	$(".TIMES_TRIGGERED").html(TIMES_TRIGGERED.CN);
	$(".CRON_EXPRESSION").html(CRON_EXPRESSION.CN);
	$(".TIME_ZONE_ID").html(TIME_ZONE_ID.CN);
	
	$("#i18n_EN").prop("disabled",false);
	$("#i18n_CN").prop("disabled",true);
}

function i18n_EN() {
	console.info("EN");
	$(".SCHED_NAME").html(SCHED_NAME.EN);
	$(".JOB_NAME").html(JOB_NAME.EN);
	$(".JOB_GROUP").html(JOB_GROUP.EN);
	$(".DESCRIPTION").html(DESCRIPTION.EN);
	$(".JOB_CLASS_NAME").html(JOB_CLASS_NAME.EN);
	$(".IS_DURABLE").html(IS_DURABLE.EN);
	$(".IS_NONCONCURRENT").html(IS_NONCONCURRENT.EN);
	$(".IS_UPDATE_DATA").html(IS_UPDATE_DATA.EN);
	$(".REQUESTS_RECOVERY").html(REQUESTS_RECOVERY.EN);
	$(".JOB_DATA").html(JOB_DATA.EN);
	$(".operate").html(operate.EN);
	$(".TRIGGER_NAME").html(TRIGGER_NAME.EN);
	$(".TRIGGER_GROUP").html(TRIGGER_GROUP.EN);
	$(".NEXT_FIRE_TIME").html(NEXT_FIRE_TIME.EN);
	$(".PREV_FIRE_TIME").html(PREV_FIRE_TIME.EN);
	$(".TRIGGER_STATE").html(TRIGGER_STATE.EN);
	$(".TRIGGER_TYPE").html(TRIGGER_TYPE.EN);
	$(".START_TIME").html(START_TIME.EN);
	$(".END_TIME").html(END_TIME.EN);
	$(".CALENDAR_NAME").html(CALENDAR_NAME.EN);
	$(".MISFIRE_INSTR").html(MISFIRE_INSTR.EN);
	//触发器详情
	$(".REPEAT_COUNT").html(REPEAT_COUNT.EN);
	$(".REPEAT_INTERVAL").html(REPEAT_INTERVAL.EN);
	$(".TIMES_TRIGGERED").html(TIMES_TRIGGERED.CNEN);
	$(".CRON_EXPRESSION").html(CRON_EXPRESSION.CNEN);
	$(".TIME_ZONE_ID").html(TIME_ZONE_ID.EN);
	
	$("#i18n_EN").prop("disabled",true);
	$("#i18n_CN").prop("disabled",false);
}