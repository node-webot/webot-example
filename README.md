# 微信公共帐号机器人示例 [![Build Status](https://api.travis-ci.org/ktmud/weixin-robot-example.png?branch=master)](https://travis-ci.org/ktmud/weixin-robot-example)

## 本地运行

```bash
git clone https://github.com/ktmud/weixin-robot-example
npm install
make start
```

## 消息调试

```bash
# 将当前目录的 npm 可执行文件添加到 $PATH 环境变量中
export PATH=./node_modules/.bin:$PATH
# 执行 webot 调试命令，默认发送文字消息
webot 
webot -h # 使用 -h 或 --help 查看使用帮助
webot -i # 调试图片消息
webot -l # 调试地理位置
webot -e # 调试事件消息
```

## 本地测试

```bash
npm test
```

## 在微信上试用此示例

- 微信账号：webot-test

![qrcode: webot-test](https://raw.github.com/ktmud/weixin-robot-example/master/qrcode.jpg)

# 搭建你自己的机器人

1. copy 本仓库文件或使用 `npm init` 新建一个 package.json
2. 修改你自己的 app.js ，填写你在微信后台输入的 token 
3. 参考 rules.js ，新建你自己的回复规则

## 发布到云平台

仓库中的 `Procfile` 为 [heroku](http://www.heroku.com/) 的配置文件。
`manifest.yml` 为 [cloudfoundry](http://www.cloudfoundry.com/) 的示例配置文件。


# Credit

[weixin-robot](https://github.com/ktmud/weixin-robot) 的[初始版本](https://github.com/ktmud/weixin-robot/tree/0.0.x)由[@ktmud](://github.com/ktmud)实现，
[@atian](https://github.com/atian25)重构并扩展为 0.2 版本，目前的大部分测试用例与文档也是由他完成。
