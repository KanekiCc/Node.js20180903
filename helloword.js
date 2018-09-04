//引入http模块   require 加载
var http=require("http");
//console.log(http)
var server=http.createServer(function(req,res){
    //console.log(arguments);
    //req  request   请求
    //res  response  响应
    //页面一直在转圈 但是加载不出   由于请求了 但是没有响应
    res.end("hello world"); //让有响应   但 修改了服务器相关就需要先重启服务器
});
server.listen(3000,"localhost");