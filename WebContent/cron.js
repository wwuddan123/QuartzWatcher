//定义全局变量：时间策略表达式
var cron;
var second_str="*";
var minute_str="*";
var hour_str="*";
var day_str="*";
var month_str="*";
var week_str="?";
var year_str="*";
//根据子策略拼接,并显示
function updateCron() {
	cron=second_str+" "+minute_str+" "+hour_str+" "+day_str+" "+month_str+" "+week_str+" "+year_str;
	$("#jobPolicy").val(cron);
}
//秒策略
//方式一：每秒
function second_fun1() {
	if(!$("#second_radio1").prop('checked')){
		$("#second_radio1").prop('checked',true);
	}
	second_str="*";
	//alert($("#second_checkbox").prop('checked'));//jquery1.6后attr('checked')从加载开始就不会变，所以此处用prop
	if($("#second_checkbox").prop('checked')){//选中了秒间隔checkbox
		second_str="0/"+$("#second_per").val();
	}
	updateCron();
}
//方式二：从？秒开始
function second_fun2() {
	if(!$("#second_radio2").prop('checked')){
		$("#second_radio2").prop('checked',true);
	}
	second_str=$("#second_start").val();
	if($("#second_checkbox").prop('checked')){//选中了秒间隔checkbox
		second_str+="/"+$("#second_per").val();
	}
	updateCron();
}
//方式三：从？秒到？ 秒
function second_fun3() {
	if(!$("#second_radio3").prop('checked')){
		$("#second_radio3").prop('checked',true);
	}
	second_str=$("#second_from").val()+"-"+$("#second_to").val();
	if($("#second_checkbox").prop('checked')){//选中了秒间隔checkbox
		second_str+="/"+$("#second_per").val();
	}
	updateCron();
}
//方式四：指定
function second_fun4() {
	if(!$("#second_radio4").prop('checked')){
		$("#second_radio4").prop('checked',true);
	}
	second_str=$("#second_custom").val();
	if($("#second_checkbox").prop('checked')){//选中了秒间隔checkbox
		second_str+="/"+$("#second_per").val();
	}
	updateCron();
}
//选中间隔复选框
function second_checkbox_fun(){
	if ($("#second_checkbox").prop('checked')) {
		second_str+="/"+$("#second_per").val();
	}else{
		second_str=second_str.substring(0,second_str.indexOf("/"));
	}
	updateCron();
}
//修改间隔秒数
function second_per(){
	console.info(123);
	if (!$("#second_checkbox").prop('checked')) {
		$("#second_checkbox").prop('checked',true);
		if(second_str.indexOf("/")>=0){
			second_str=second_str.substring(0,second_str.indexOf("/")+1)+$("#second_per").val();
		}else{
			second_str+="/"+$("#second_per").val();
		}
	}else{
		second_str=second_str.substring(0,second_str.indexOf("/")+1)+$("#second_per").val();
	}
	updateCron();
}
//分策略
//方式一：每分
function minute_fun1() {
	if(!$("#minute_radio1").prop('checked')){
		$("#minute_radio1").prop('checked',true);
	}
	minute_str="*";
	//alert($("#minute_checkbox").prop('checked'));//jquery1.6后attr('checked')从加载开始就不会变，所以此处用prop
	if($("#minute_checkbox").prop('checked')){//选中了分间隔checkbox
		minute_str="0/"+$("#minute_per").val();
	}
	updateCron();
}
//方式二：从？分开始
function minute_fun2() {
	if(!$("#minute_radio2").prop('checked')){
		$("#minute_radio2").prop('checked',true);
	}
	minute_str=$("#minute_start").val();
	if($("#minute_checkbox").prop('checked')){//选中了分间隔checkbox
		minute_str+="/"+$("#minute_per").val();
	}
	updateCron();
}
//方式三：从？分到？ 分
function minute_fun3() {
	if(!$("#minute_radio3").prop('checked')){
		$("#minute_radio3").prop('checked',true);
	}
	minute_str=$("#minute_from").val()+"-"+$("#minute_to").val();
	if($("#minute_checkbox").prop('checked')){//选中了分间隔checkbox
		minute_str+="/"+$("#minute_per").val();
	}
	updateCron();
}
//方式四：指定
function minute_fun4() {
	if(!$("#minute_radio4").prop('checked')){
		$("#minute_radio4").prop('checked',true);
	}
	minute_str=$("#minute_custom").val();
	if($("#minute_checkbox").prop('checked')){//选中了分间隔checkbox
		minute_str+="/"+$("#minute_per").val();
	}
	updateCron();
}
//选中间隔复选框
function minute_checkbox_fun(){
	if ($("#minute_checkbox").prop('checked')) {
		minute_str+="/"+$("#minute_per").val();
	}else{
		minute_str=minute_str.substring(0,minute_str.indexOf("/"));
	}
	updateCron();
}
//修改间隔分数
function minute_per(){
	console.info(123);
	if (!$("#minute_checkbox").prop('checked')) {
		$("#minute_checkbox").prop('checked',true);
		if(minute_str.indexOf("/")>=0){
			minute_str=minute_str.substring(0,minute_str.indexOf("/")+1)+$("#minute_per").val();
		}else{
			minute_str+="/"+$("#minute_per").val();
		}
	}else{
		minute_str=minute_str.substring(0,minute_str.indexOf("/")+1)+$("#minute_per").val();
	}
	updateCron();
}
//时策略
//方式一：每时
function hour_fun1() {
	if(!$("#hour_radio1").prop('checked')){
		$("#hour_radio1").prop('checked',true);
	}
	hour_str="*";
	//alert($("#hour_checkbox").prop('checked'));//jquery1.6后attr('checked')从加载开始就不会变，所以此处用prop
	if($("#hour_checkbox").prop('checked')){//选中了时间隔checkbox
		hour_str="0/"+$("#hour_per").val();
	}
	updateCron();
}
//方式二：从？时开始
function hour_fun2() {
	if(!$("#hour_radio2").prop('checked')){
		$("#hour_radio2").prop('checked',true);
	}
	hour_str=$("#hour_start").val();
	if($("#hour_checkbox").prop('checked')){//选中了时间隔checkbox
		hour_str+="/"+$("#hour_per").val();
	}
	updateCron();
}
//方式三：从？时到？ 时
function hour_fun3() {
	if(!$("#hour_radio3").prop('checked')){
		$("#hour_radio3").prop('checked',true);
	}
	hour_str=$("#hour_from").val()+"-"+$("#hour_to").val();
	if($("#hour_checkbox").prop('checked')){//选中了时间隔checkbox
		hour_str+="/"+$("#hour_per").val();
	}
	updateCron();
}
//方式四：指定
function hour_fun4() {
	if(!$("#hour_radio4").prop('checked')){
		$("#hour_radio4").prop('checked',true);
	}
	hour_str=$("#hour_custom").val();
	if($("#hour_checkbox").prop('checked')){//选中了时间隔checkbox
		hour_str+="/"+$("#hour_per").val();
	}
	updateCron();
}
//选中间隔复选框
function hour_checkbox_fun(){
	if ($("#hour_checkbox").prop('checked')) {
		hour_str+="/"+$("#hour_per").val();
	}else{
		hour_str=hour_str.substring(0,hour_str.indexOf("/"));
	}
	updateCron();
}
//修改间隔时数
function hour_per(){
	console.info(123);
	if (!$("#hour_checkbox").prop('checked')) {
		$("#hour_checkbox").prop('checked',true);
		if(hour_str.indexOf("/")>=0){
			hour_str=hour_str.substring(0,hour_str.indexOf("/")+1)+$("#hour_per").val();
		}else{
			hour_str+="/"+$("#hour_per").val();
		}
	}else{
		hour_str=hour_str.substring(0,hour_str.indexOf("/")+1)+$("#hour_per").val();
	}
	updateCron();
}
//天策略
//方式一：每天
function day_fun1() {
	if(!$("#day_radio1").prop('checked')){
		$("#day_radio1").prop('checked',true);
	}
	day_str="*";
	//alert($("#day_checkbox").prop('checked'));//jquery1.6后attr('checked')从加载开始就不会变，所以此处用prop
	if($("#day_checkbox").prop('checked')){//选中了天间隔checkbox
		day_str="0/"+$("#day_per").val();
	}
	updateCron();
}
//方式二：从？天开始
function day_fun2() {
	if(!$("#day_radio2").prop('checked')){
		$("#day_radio2").prop('checked',true);
	}
	day_str=$("#day_start").val();
	if($("#day_checkbox").prop('checked')){//选中了天间隔checkbox
		day_str+="/"+$("#day_per").val();
	}
	updateCron();
}
//方式三：从？天到？ 天
function day_fun3() {
	if(!$("#day_radio3").prop('checked')){
		$("#day_radio3").prop('checked',true);
	}
	day_str=$("#day_from").val()+"-"+$("#day_to").val();
	if($("#day_checkbox").prop('checked')){//选中了天间隔checkbox
		day_str+="/"+$("#day_per").val();
	}
	updateCron();
}
//方式四：指定
function day_fun4() {
	if(!$("#day_radio4").prop('checked')){
		$("#day_radio4").prop('checked',true);
	}
	day_str=$("#day_custom").val();
	if($("#day_checkbox").prop('checked')){//选中了天间隔checkbox
		day_str+="/"+$("#day_per").val();
	}
	updateCron();
}
//方式五：月最后一天
function day_fun5() {
	if(!$("#day_radio5").prop('checked')){
		$("#day_radio5").prop('checked',true);
	}
	day_str="L";
	if($("#day_checkbox").prop('checked')){//选中了天间隔checkbox
		$("#day_radio5").prop('checked',false);
	}
	updateCron();
}
//选中间隔复选框
function day_checkbox_fun(){
	if ($("#day_checkbox").prop('checked')) {
		day_str+="/"+$("#day_per").val();
	}else{
		day_str=day_str.substring(0,day_str.indexOf("/"));
	}
	updateCron();
}
//修改间隔天数
function day_per(){
	console.info(123);
	if (!$("#day_checkbox").prop('checked')) {
		$("#day_checkbox").prop('checked',true);
		if(day_str.indexOf("/")>=0){
			day_str=day_str.substring(0,day_str.indexOf("/")+1)+$("#day_per").val();
		}else{
			day_str+="/"+$("#day_per").val();
		}
	}else{
		day_str=day_str.substring(0,day_str.indexOf("/")+1)+$("#day_per").val();
	}
	updateCron();
}
//月策略
//方式一：每月
function month_fun1() {
	if(!$("#month_radio1").prop('checked')){
		$("#month_radio1").prop('checked',true);
	}
	month_str="*";
	//alert($("#month_checkbox").prop('checked'));//jquery1.6后attr('checked')从加载开始就不会变，所以此处用prop
	if($("#month_checkbox").prop('checked')){//选中了月间隔checkbox
		month_str="0/"+$("#month_per").val();
	}
	updateCron();
}
//方式二：从？月开始
function month_fun2() {
	if(!$("#month_radio2").prop('checked')){
		$("#month_radio2").prop('checked',true);
	}
	month_str=$("#month_start").val();
	if($("#month_checkbox").prop('checked')){//选中了月间隔checkbox
		month_str+="/"+$("#month_per").val();
	}
	updateCron();
}
//方式三：从？月到？ 月
function month_fun3() {
	if(!$("#month_radio3").prop('checked')){
		$("#month_radio3").prop('checked',true);
	}
	month_str=$("#month_from").val()+"-"+$("#month_to").val();
	if($("#month_checkbox").prop('checked')){//选中了月间隔checkbox
		month_str+="/"+$("#month_per").val();
	}
	updateCron();
}
//方式四：指定
function month_fun4() {
	if(!$("#month_radio4").prop('checked')){
		$("#month_radio4").prop('checked',true);
	}
	month_str=$("#month_custom").val();
	if($("#month_checkbox").prop('checked')){//选中了月间隔checkbox
		month_str+="/"+$("#month_per").val();
	}
	updateCron();
}
//选中间隔复选框
function month_checkbox_fun(){
	if ($("#month_checkbox").prop('checked')) {
		month_str+="/"+$("#month_per").val();
	}else{
		month_str=month_str.substring(0,month_str.indexOf("/"));
	}
	updateCron();
}
//修改间隔月数
function month_per(){
	console.info(123);
	if (!$("#month_checkbox").prop('checked')) {
		$("#month_checkbox").prop('checked',true);
		if(month_str.indexOf("/")>=0){
			month_str=month_str.substring(0,month_str.indexOf("/")+1)+$("#month_per").val();
		}else{
			month_str+="/"+$("#month_per").val();
		}
	}else{
		month_str=month_str.substring(0,month_str.indexOf("/")+1)+$("#month_per").val();
	}
	updateCron();
}
//周策略
//方式一：每周
function week_fun1() {
	if(!$("#week_radio1").prop('checked')){
		$("#week_radio1").prop('checked',true);
	}
	week_str="?";
	//alert($("#week_checkbox").prop('checked'));//jquery1.6后attr('checked')从加载开始就不会变，所以此处用prop
	if($("#week_checkbox").prop('checked')){//选中了周间隔checkbox
		week_str="0/"+$("#week_per").val();
	}
	updateCron();
}
//方式二：从？周开始
function week_fun2() {
	if(!$("#week_radio2").prop('checked')){
		$("#week_radio2").prop('checked',true);
	}
	week_str=$("#week_start").val();
	if($("#week_checkbox").prop('checked')){//选中了周间隔checkbox
		week_str+="/"+$("#week_per").val();
	}
	updateCron();
}
//方式三：从？周到？ 周
function week_fun3() {
	if(!$("#week_radio3").prop('checked')){
		$("#week_radio3").prop('checked',true);
	}
	week_str=$("#week_from").val()+"-"+$("#week_to").val();
	if($("#week_checkbox").prop('checked')){//选中了周间隔checkbox
		week_str+="/"+$("#week_per").val();
	}
	updateCron();
}
//方式四：指定
function week_fun4() {
	if(!$("#week_radio4").prop('checked')){
		$("#week_radio4").prop('checked',true);
	}
	week_str=$("#week_custom").val();
	if($("#week_checkbox").prop('checked')){//选中了周间隔checkbox
		week_str+="/"+$("#week_per").val();
	}
	updateCron();
}
//选中间隔复选框
function week_checkbox_fun(){
	if ($("#week_checkbox").prop('checked')) {
		week_str+="/"+$("#week_per").val();
	}else{
		week_str=week_str.substring(0,week_str.indexOf("/"));
	}
	updateCron();
}
//修改间隔周数
function week_per(){
	console.info(123);
	if (!$("#week_checkbox").prop('checked')) {
		$("#week_checkbox").prop('checked',true);
		if(week_str.indexOf("/")>=0){
			week_str=week_str.substring(0,week_str.indexOf("/")+1)+$("#week_per").val();
		}else{
			week_str+="/"+$("#week_per").val();
		}
	}else{
		week_str=week_str.substring(0,week_str.indexOf("/")+1)+$("#week_per").val();
	}
	updateCron();
}
//年策略
//方式一：每年
function year_fun1() {
	if(!$("#year_radio1").prop('checked')){
		$("#year_radio1").prop('checked',true);
	}
	year_str="*";
	//alert($("#year_checkbox").prop('checked'));//jquery1.6后attr('checked')从加载开始就不会变，所以此处用prop
	if($("#year_checkbox").prop('checked')){//选中了年间隔checkbox
		year_str="0/"+$("#year_per").val();
	}
	updateCron();
}
//方式二：从？年开始
function year_fun2() {
	if(!$("#year_radio2").prop('checked')){
		$("#year_radio2").prop('checked',true);
	}
	year_str=$("#year_start").val();
	if($("#year_checkbox").prop('checked')){//选中了年间隔checkbox
		year_str+="/"+$("#year_per").val();
	}
	updateCron();
}
//方式三：从？年到？ 年
function year_fun3() {
	if(!$("#year_radio3").prop('checked')){
		$("#year_radio3").prop('checked',true);
	}
	year_str=$("#year_from").val()+"-"+$("#year_to").val();
	if($("#year_checkbox").prop('checked')){//选中了年间隔checkbox
		year_str+="/"+$("#year_per").val();
	}
	updateCron();
}
//方式四：指定
function year_fun4() {
	if(!$("#year_radio4").prop('checked')){
		$("#year_radio4").prop('checked',true);
	}
	year_str=$("#year_custom").val();
	if($("#year_checkbox").prop('checked')){//选中了年间隔checkbox
		year_str+="/"+$("#year_per").val();
	}
	updateCron();
}
//选中间隔复选框
function year_checkbox_fun(){
	if ($("#year_checkbox").prop('checked')) {
		year_str+="/"+$("#year_per").val();
	}else{
		year_str=year_str.substring(0,year_str.indexOf("/"));
	}
	updateCron();
}
//修改间隔年数
function year_per(){
	console.info(123);
	if (!$("#year_checkbox").prop('checked')) {
		$("#year_checkbox").prop('checked',true);
		if(year_str.indexOf("/")>=0){
			year_str=year_str.substring(0,year_str.indexOf("/")+1)+$("#year_per").val();
		}else{
			year_str+="/"+$("#year_per").val();
		}
	}else{
		year_str=year_str.substring(0,year_str.indexOf("/")+1)+$("#year_per").val();
	}
	updateCron();
}