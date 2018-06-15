#### 项目简介
* 此项目仅用学习交流技术使用 不做商业用途。
* 项目效果预览 [http://findcl.com](http://findcl.com)
* 源码地址  https://github.com/ssstk/findcl 
*  无意读到@keenwon的node磁力搜索引擎的文章，感觉非常有意思，同时也谢谢能把项目分享出来 @keenwon的项目地址[antcolony](https://github.com/keenwon/antcolony) 实现方式 还是有很大的不同 从获取磁力 到解析磁力 

#### 上线
* 2018-06-01 网站正式上线。域名是 [http://findcl.com](http://findcl.com)，
* 两台VPS （都是某些云做活动买的 配置低）
* 第一台部署了FindCl站点本身（koa2、nginx）和单个节点的 Elasticsearch
* 第二台部署了磁力链接爬虫（后面细说）
* Mongodb数据库在阿里云（目前有300W数据库，每日新收录3W+的数据）
#### 项目依赖 
* DHT BT资源爬虫  [dhtspider](https://github.com/alanyang/dhtspider)
* 磁力链接解析 [ torrent-stream ]( https://github.com/mafintosh/torrent-stream)
* Mongodb数据库
* 中文搜索 Elasticsearch.js  
* 定时执行Mongodb 与Elasticsearch 的数据同步
* koa2 
* ...
#### 存在的问题
*  torrent-stream 解析磁力链接缓慢 需要好几秒  P2P网络没有资源时还有可能解析不到
*  dhtspider 爬虫 由于服务器带宽是1m 所以跑到时间长就把带宽跑慢了 现在的做法就是搜集一些磁力链接暂停爬虫 解析完毕之后再启动爬虫
