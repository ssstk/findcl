[![GitHub issues](https://img.shields.io/github/issues/ssstk/findcl.svg)](https://github.com/ssstk/findcl/issues)
[![GitHub forks](https://img.shields.io/github/forks/ssstk/findcl.svg?style=social&label=Fork)](https://github.com/ssstk/findcl/network)
[![GitHub stars](https://img.shields.io/github/stars/ssstk/findcl.svg?style=social&label=Stars)](https://github.com/ssstk/findcl/stargazers)
[![dependency status](https://img.shields.io/david/ssstk/findcl.svg?maxAge=3600&style=flat)](https://david-dm.org/ssstk/findcl/)





### 项目简介
* 此项目仅用学习交流技术使用 不做商业用途。
* 使用 nodejs 实现磁力链接爬虫 磁力链接解析成 torrent种子信息，保存到数据库，利用 Elasticsearch 实现中文检索。koa2 搭建磁力链接搜索引擎
* 后端脚本 磁力链接获取 磁力链接解析 入库 Mongodb 定时同步 Elasticsearch
* 前端站点 项目效果预览 http://findcl.co
* 源码地址 https://github.com/ssstk/findcl
* 后端脚本 磁力链接获取 磁力链接解析 入库Mongodb 定时同步 Elasticsearch
* 源码地址 https://github.com/ssstk/manget2torrent
* @keenwon的node磁力搜索引擎的文章，感觉非常有意思，同时也谢谢能把项目分享出来 @keenwon的项目地址antcolony 实现方式 还是有很大的不同 从获取磁力 到解析磁力


### 项目依赖
* Mongodb
* mongoose
* Elasticsearch
* nginx
* koa2
* vue
* DHT BT 资源爬虫 磁力链接解析 manget2torrent
* crontab 定时执行 Mongodb 与 Elasticsearch 的数据同步
* ...


### 其他
* 有其他问题请新建[issue](https://github.com/ssstk/findcl/issues)交流。

### 更新日志
* 2018-06-21 搜索列表 按照资源收录时间排序
* 2018-07-04 搜索列表 支持多关键字搜索
* 2018-07-05 支持ssl 证书
