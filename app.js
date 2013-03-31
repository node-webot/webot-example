var express = require('express');
var webot = require('weixin-robot');

var log = require('debug')('webot:log');

//启动服务
var app = express();

//实际使用时，这里填写你在微信公共平台后台填写的 token
var WX_TOKEN ='keyboardcat123';

//启动机器人, 接管 web 服务请求
webot.monitor(WX_TOKEN, '/weixin', app);

// 载入路由规则
require('./rules.js')(webot);

// 在 3000 端口监听
app.listen(3000, '127.0.0.1', function(){
  log("Now you have a robot.");
});

// 微信后台只允许 80 端口，你可能需要自己做一层 proxy
app.enable('trust proxy');

// 当然，如果你的服务器允许，你也可以直接用 node 来 serve 80 端口
// app.listen(80);

if(!process.env.DEBUG){
  console.log("use `SET DEBUG=webot:*` to got debug info. current env is: %s ", process.env.DEBUG);
}
