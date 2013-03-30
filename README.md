# 微信公共帐号机器人(Weixin Robot) 示例

## 本地运行

```bash
  git clone https://github.com/ktmud/weixin-robot-example
  npm install -d
  make start
```

## 消息调试

```bash
  # 将当前目录的 npm 可执行文件添加到 $PATH 环境变量中
  export PATH=./node_modules/.bin:$PATH
  # 执行 webot 调试命令，默认发送文字消息
  webot 

  # 使用 -h 或 --help 查看使用帮助
  webot -h
```

## 本地测试

```bash
  npm install mocha -g
  npm test
```

## 部署到cloudfoundry

1. cd ./weixin-robot/example (仅需发布example目录,而不需要整个weixin-robot)
2. npm install -d  (很多错误就是因为没安装依赖模块)
3. 修改manifest.yml (可选)
4. vmc push
5. vmc logs 可以看执行日志
