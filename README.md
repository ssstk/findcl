### 项目简介
* 使用 nodejs 实现磁力链接爬虫 磁力链接解析成 torrent种子信息，保存到数据库，利用 Elasticsearch 实现中文检索。koa2 搭建磁力链接搜索引擎
* 前端站点 项目效果预览 http://findcl.com 命名 **傻逼吧**
* 源码地址 https://github.com/ssstk/findcl
* 后端脚本 磁力链接获取 磁力链接解析 入库 Mongodb 定时同步 Elasticsearch
* 源码地址 https://github.com/ssstk/manget2torrent
* 此项目仅用学习交流技术使用 不做商业用途。

### 上线
* 2018-06-01 网站正式上线。命名 **傻逼吧**。域名是 http://findcl.com ，
* 两台 VPS （都是某些云做活动买的 配置低）
* 第一台部署了 FindCl 站点本身（ koa2、nginx ）和单个节点的 Elasticsearch
* 第二台部署了磁力链接爬虫 hashinfo 解析 入库 Mongodb
* Mongodb 数据库在套路云（目前有 300W 数据库，每日新收录 3W+的数据）

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

### 存在的问题

#### manget2torrent
* 依赖的 dhtspider 爬虫 长时间使用一个端口的时，由于 P2P 网络的特性，越来越多的节点来访问 会导致带宽跑满（其主要是活动买的云主机 1M 的），如果活力全开不做闲置 大概稳定在 10M 左右。解决方案就是 每次采集 5000 条不重复的磁力 hashindo 就暂停爬虫，取解析获取信息。等小于 1000 条时候，再随机端口开启服务。
* 解析磁力链接缓慢且成功率很低， 失败的大概在 3 成左右且需要好几秒

### 其他
* 有其他问题请新建[issue](https://github.com/ssstk/findcl/issues)交流。

### 更新日志
* 2018-06-21 搜索列表增加 按照资源收录时间排序
