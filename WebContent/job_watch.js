$(function() {
	//alert("jquery!");
	//获得数据库地址
	$.post("/QuartzWatcher/data_source",function(data){
			console.info("data:"+data);
			$("#data_source").text(data);
		});
	//刷新任务表
	refreshTaskTable();
});
	function refreshTaskTable(){
		$.post("/QuartzWatcher/jobs", getJobList,"json");
	}
	//回调函数：获得所有任务
	function getJobList(jobs){
		//console.info(jobs);
		// 先清空除了表头外的所有tr
		$("#allTasksTable tr").not(".table-header").remove();
		// 再遍历任务列表，添加tr节点
		$.each(jobs, function(i,job) {
			//console.info(this);
			//添加任务
			$("#allTasksTable").append("<tr class='job'>"
					+ "<td>" + job.SCHED_NAME + "</td>"
					+ "<td>" + job.JOB_NAME + "</td>"
					+ "<td>" + job.JOB_GROUP + "</td>"
					+ "<td>" + checkNull(job.DESCRIPTION) + "</td>"
					+ "<td>" + job.JOB_CLASS_NAME + "</td>"
					+ "<td>" + job.IS_DURABLE + "</td>"
					+ "<td>" + job.IS_NONCONCURRENT + "</td>"
					+ "<td>" + job.IS_UPDATE_DATA +"</td>"
					+ "<td>" + job.REQUESTS_RECOVERY + "</td>"
					+ "<td><button class='btn btn-primary btn-sm' onclick='showJobData("+job.JOB_DATA+")'>附件</button></td>"
					+ "</tr>");
			//console.info("this.triggers.size:"+job.triggers.length);
			if (job.triggers.length>0) {
				var $triggerTable=$("<table class='table table-bordered table-hover small'></table>");
				var $triggerTableHead=$("<tr class='success'>"
						+ "<th class='SCHED_NAME'></th>"
						+ "<th class='TRIGGER_NAME'></th>"
						+ "<th class='TRIGGER_GROUP'></th>"
						+ "<th class='DESCRIPTION'></th>"
						+ "<th class='NEXT_FIRE_TIME'></th>"
						+ "<th class='PREV_FIRE_TIME'></th>"
						+ "<th class='TRIGGER_STATE'></th>"
						+ "<th class='START_TIME'></th>"
						+ "<th class='END_TIME'></th>"
						+ "<th class='CALENDAR_NAME'></th>"
						+ "<th class='MISFIRE_INSTR'></th>"
						+ "</tr>");
				$triggerTable.append($triggerTableHead);
						
				//添加触发器
				$.each(this.triggers, function(i,trigger) {
					//触发器基本信息
					$triggerTable.append("<tr>"
							+ "<td>" + trigger.SCHED_NAME + "</td>"
							+ "<td>" + trigger.TRIGGER_NAME + "</td>"
							+ "<td>" + trigger.TRIGGER_GROUP + "</td>"
							+ "<td>" + checkNull(trigger.DESCRIPTION) + "</td>"
							+ "<td>" + formateTimestamp(trigger.NEXT_FIRE_TIME) + "</td>"
							+ "<td>" + formateTimestamp(trigger.PREV_FIRE_TIME) + "</td>"
							+ "<td>" + trigger.TRIGGER_STATE + "</td>"
							+ "<td>" + formateTimestamp(trigger.START_TIME) + "</td>"
							+ "<td>" + formateTimestamp(trigger.END_TIME) + "</td>"
							+ "<td>" + checkNull(trigger.CALENDAR_NAME) + "</td>"
							+ "<td>" + trigger.MISFIRE_INSTR + "</td>"
							+ "</tr>");
					//触发器特性
					if (trigger.TRIGGER_TYPE=="SIMPLE") {
						$triggerTable.append("<tr>"
								+ "<td class='TRIGGER_TYPE'></td>"
								+ "<td>" + trigger.TRIGGER_TYPE + "</td>"
								+ "<td class='REPEAT_COUNT'></td>"
								+ "<td>" + trigger.realTrigger.REPEAT_COUNT + "</td>"
								+ "<td class='REPEAT_INTERVAL'></td>"
								+ "<td>" + trigger.realTrigger.REPEAT_INTERVAL/1000 + "</td>"
								+ "<td class='TIMES_TRIGGERED'></td>"
								+ "<td>" + trigger.realTrigger.TIMES_TRIGGERED + "</td>"
								+ "<td></td>"
								+ "<td></td>"
								+ "<td></td>"
								+ "</tr>");
					}else if (trigger.TRIGGER_TYPE=="CRON") {
						$triggerTable.append("<tr>"
								+ "<td class='TRIGGER_TYPE'></td>"
								+ "<td>" + trigger.TRIGGER_TYPE + "</td>"
								+ "<td class='CRON_EXPRESSION'></td>"
								+ "<td>" + trigger.realTrigger.CRON_EXPRESSION + "</td>"
								+ "<td class='TIME_ZONE_ID'></td>"
								+ "<td>" + trigger.realTrigger.TIME_ZONE_ID + "</td>"
								+ "<td></td>"
								+ "<td></td>"
								+ "<td></td>"
								+ "<td></td>"
								+ "<td></td>"
								+ "</tr>");
					}
				});
				
				$("#allTasksTable").append(
						$("<tr class='trigger'><td></td></tr>").append(
								$("<td colspan='9'></td>").append(
										$("<div></div>").append($triggerTable)	
								)
						)
				);
			}
		});
		i18n_CN();
		$("[data-toggle='popover']").popover();
	}
			
//jquery初始化函数结束

	
//时间戳转时间
function formateTimestamp(timestamp){
	if (timestamp==0||timestamp==-1) {
		return "-";
	}
	Date.prototype.pattern=function(fmt) {     
		var o = {     
			"M+" : this.getMonth()+1, //月份     
			"d+" : this.getDate(), //日     
			"h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时     
			"H+" : this.getHours(), //小时     
			"m+" : this.getMinutes(), //分     
			"s+" : this.getSeconds(), //秒     
			"S" : this.getMilliseconds() //毫秒     
		};     
		var week = {"0" : "\u65e5","1" : "\u4e00","2" : "\u4e8c", "3" : "\u4e09","4" : "\u56db","5" : "\u4e94","6" : "\u516d"};     
		if(/(y+)/.test(fmt)){     
			fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));     
		}     
		if(/(E+)/.test(fmt)){     
			fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);     
		}     
		for(var k in o){     
		  	if(new RegExp("("+ k +")").test(fmt)){     
		  		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));     
			}     
		}     
		  return fmt;     
	}    
	
	var date=new Date();
	date.setTime(timestamp);
	return date.pattern("yyyy-MM-dd HH:mm:ss");
	//return date.pattern("yyyy-MM-dd EEE HH:mm:ss");
}

function checkNull(data) {
	if (data==null||data.length==0) {
		return '-';
	}else{
		return data;
	}
}
function showJobData(data) {
	console.info(data);
	$("#modal_content").html(formatJson(data));
	$("#myModal").modal('show');
}
function changeStyleOfShowJobs() {
	var result=$("#changeStyleOfShowJobs_Checkbox").is(":checked");
	if (result) {
		$(".job").hide();
		$(".trigger").prev().show();
	}else{		
		$(".job").show();
	}
}