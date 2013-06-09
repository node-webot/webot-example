# [微信公共帐号机器人](https://github.com/node-webot/weixin-robot)示例 [![Build Status](https://api.travis-ci.org/node-webot/webot-example.png?branch=master)](https://travis-ci.org/node-webot/webot-example)

## 本地运行

```bash
git clone https://github.com/node-webot/webot-example.git
cd webot-example/
npm install
make start
```

其中，`make start` 命令会调用 `node app.js` 。
建议你 fork 一份自己的版本，这样你就可以任意做出更改和调试了。


## 消息调试

使用 `webot-cli` [命令行工具](https://github.com/node-webot/webot-cli)来发送测试消息。

```bash
npm install webot-cli -g
webot help            # 查看使用帮助
webot send Hello      # 发送一条叫「Hello」的消息
webot send image      # 调试图片消息
webot send location   # 调试地理位置
webot send event      # 调试事件消息
```

`npm install -g` 代表全局安装 npm 模块，你可能需要 `sudo` 权限。


## 在微信上试用此示例

- 微信账号：webot-test

![qrcode: webot-test](https://raw.github.com/node-webot/webot-example/master/qrcode.jpg)

# 搭建你自己的机器人

1. fork 本仓库，修改 package.json 里的各项属性
2. 修改你自己的 app.js ，填写你在微信后台输入的 token 
3. 参考 rules/index.js ，新建你自己的回复规则

## 发布到云平台

仓库中的 `Procfile` 为 [heroku](http://www.heroku.com/) 的配置文件。
`manifest.yml` 为 [cloudfoundry](http://www.cloudfoundry.com/) 的示例配置文件。

# Credit

[weixin-robot](https://github.com/node-webot/weixin-robot) 的[初始版本](https://github.com/node-webot/weixin-robot/tree/0.0.x)由[@ktmud](https://github.com/ktmud)实现，
[@atian](https://github.com/atian25)重构并扩展为 0.2 版本。目前的测试用例也大部分由他完成。

[weixin-robot] 使用了 [@JacksonTian](https://github.com/JacksonTian) 的 [wechat](https://github.com/node-webot/wechat) 组件。
