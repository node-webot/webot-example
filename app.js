var express = require('express');
var webot = require('weixin-robot');

var log = require('debug')('webot-example:log');
var verbose = require('debug')('webot-example:verbose');

//启动服务
var app = express();

//实际使用时，这里填写你在微信公共平台后台填写的 token
var WX_TOKEN ='keyboardcat123';

//启动机器人, 接管 web 服务请求
webot.monitor(WX_TOKEN, '/weixin', app);

// 载入路由规则
require('./rules.js')(webot);

// 在环境变量提供的 $PORT 或 3000 端口监听
var port = process.env.PORT || 3000;
app.listen(port, function(){
  log("Listening on %s", port);
});

// 微信后台只允许 80 端口，你可能需要自己做一层 proxy
app.enable('trust proxy');

// 当然，如果你的服务器允许，你也可以直接用 node 来 serve 80 端口
// app.listen(80);

if(!process.env.DEBUG){
  console.log("set env variable `DEBUG=webot-example:*` to display debug info.");
}
