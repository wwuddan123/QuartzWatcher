# QuartzWatcher
A simple tool to watch Job Details and Triggers. 
一个简单的调度任务监控工具，主要是在开发、测试过程中，出现问题时老是去看数据库一来麻烦，二来不够直观。故写了此小工具。

- 可切换中/英文
- 可仅查看绑定有触发器的任务
- 可点击“附件”查看JobDataMap
- 触发器目前只支持SimpleTrigger和CronTrigger
- 在applicationContext.xml中修改成你的数据库即可用

- 随便写的，所以没有用Maven，差包的就抱歉啦。有空我会更新成Maven版本

博客地址: <a>https://my.oschina.net/woooooody/blog</a>

