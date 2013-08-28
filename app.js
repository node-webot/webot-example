var express = require('express');
var webot = require('weixin-robot');

var log = require('debug')('webot-example:log');
var verbose = require('debug')('webot-example:verbose');

// 启动服务
var app = express();

// 实际使用时，这里填写你在微信公共平台后台填写的 token
var wx_token = process.env.WX_TOKEN || 'keyboardcat123';
var wx_token2 = process.env.WX_TOKEN_2 || 'weixinToken2';

// remove this test code in production environment
try {
  // for submodulized repository only
  webot = require('../');
} catch (e) {}

// app.use(express.query());
app.use(express.cookieParser());
// 为了使用 waitRule 功能，需要增加 session 支持
// 你应该将此处的 store 换为某种永久存储。请参考 http://expressjs.com/2x/guide.html#session-support
app.use(express.session({ secret: 'abced111', store: new express.session.MemoryStore() }));

// 启动机器人, 接管 web 服务请求
webot.watch(app, { token: wx_token, path: '/wechat' });

// 载入路由规则
require('./rules')(webot);

// 若省略 path 参数，会监听到根目录
// webot.watch(app, { token: wx_token });

// 建立多个实例，并监听到不同 path ，
// 后面指定的 path 不可为前面实例的子目录
var webot2 = new webot.Webot();

webot2.set('hello', 'hi.');

webot2.watch(app, { token: wx_token2, path: '/wechat_2' });

// 在环境变量提供的 $PORT 或 3000 端口监听
var port = process.env.PORT || 3000;
app.listen(port, function(){
  log("Listening on %s", port);
});

// 微信接口地址只允许服务放在 80 端口
// 所以需要做一层 proxy
app.enable('trust proxy');

// 当然，如果你的服务器允许，你也可以直接用 node 来 serve 80 端口
// app.listen(80);

if(!process.env.DEBUG){
  console.log("set env variable `DEBUG=webot-example:*` to display debug info.");
}
