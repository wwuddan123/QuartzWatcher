<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>定时任务监控</title>
<link rel="stylesheet"	href="/QuartzWatcher/resources/bootstrap-3.3.7-dist/css/bootstrap.css" />
<style type="text/css">
div {
/*
	background-color: #aaa;
	width: 100%;
	height: 100%;
	position: absolute;
	*/
}
td{
	break-word:all
}
</style>


</head>
<body>
	<div class="center-block" style="width:200px;" id="top">
	<a href="#bottom"> Go to bottom </a>
	</div>
	<div class="container-fluid" id="content">
		<div class="row">
			<!--右部内容开始-->
			<div class="col-md-12 column" id="taskListDiv" style="padding-top: 0">
				<div class="row">
					<div class="col-md-4" ><h2>定时任务列表<small><button disabled="disabled" onclick="i18n_CN()" id="i18n_CN">中文</button> / <button onclick="i18n_EN()" id="i18n_EN">English</button></small></h2></div>
					<div class="col-md-4" ><h1></h1><input type="checkbox" id="changeStyleOfShowJobs_Checkbox" onchange="changeStyleOfShowJobs()" />只显示有触发器的任务</div>
					<div class="col-md-4" ><h1></h1>当前数据库：<span id="data_source"></span></div>
				</div>
				<table class="table table-bordered table-hover table-striped">
					<thead>
					<tr class="table-header">
						<th class="text-center alert-info SCHED_NAME"></th>
						<th class="text-center alert-info JOB_NAME"></th>
						<th class="text-center alert-info JOB_GROUP"></th>
						<th class="text-center alert-info DESCRIPTION"></th>
						<th class="text-center alert-info JOB_CLASS_NAME"></th>
						<th class="text-center alert-info IS_DURABLE"></th>
						<th class="text-center alert-info IS_NONCONCURRENT"></th>
						<th class="text-center alert-info IS_UPDATE_DATA"></th>
						<th class="text-center alert-info REQUESTS_RECOVERY"></th>
						<th class="text-center alert-info JOB_DATA"></th>
					</tr>
					</thead>
					<tbody id="allTasksTable"></tbody>
				</table>
				<!-- 分页
				<button style="width: 30px" id="homePage" class="pageBtn">
					<span class="glyphicon glyphicon-step-backward"></span>
				</button>
				<button style="width: 30px" id="prevPage" class="pageBtn">
					<span class="glyphicon glyphicon-chevron-left"></span>
				</button>
				<span id="pageStatus">1/1</span>
				<button style="width: 30px" id="nextPage" class="pageBtn">
					<span class="glyphicon glyphicon-chevron-right"></span>
				</button>
				<button style="width: 30px" id="maxPage" class="pageBtn">
					<span class="glyphicon glyphicon-step-forward"></span>
				</button>
				<input type="number" placeholder="输入页数" style="width: 75px"
					id="inputPage">
				<button id="jumpPage">前往</button>
				 -->
			</div>
		</div>
	</div>
	<!-- 附件模态框（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
	                <h4 class="modal-title" id="myModalLabel">附件</h4>
	            </div>
	            <div class="modal-body"><pre id="modal_content"></pre></div>
	            <div class="modal-footer">
	                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	            </div>
	        </div><!-- /.modal-content -->
	   </div><!-- /.modal-dialog -->
	</div>
	<!-- /.modal -->
	
	<div class="center-block" style="width:200px;" id="bottom">
	<a href="#top"> Back to top </a>
	</div>
</body>
<script src="/QuartzWatcher/resources/js/jquery.js"></script>
<script src="/QuartzWatcher/resources/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
<script src="/QuartzWatcher/format_json.js"></script>
<script src="/QuartzWatcher/job_watch.js"></script>
<script src="/QuartzWatcher/cron.js"></script>
<script src="/QuartzWatcher/i18n.js"></script>
</html>
