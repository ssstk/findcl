<template>
  <div>
    <div class="header ub align-items ">
      <div class="header-brand"><a href="/">FindCl</a></div>
      <div class="header-search ub-f1">
        <form id="form" method="GET" action="/list" class="ub">
          <input class="ub-f1" id="input" type="text" name="q" maxlength="40" autocomplete="off" :value="$route.query.q">
          <button type="submit">搜 索</button>
        </form>
      </div>
      <div class="header-right ub">
        <a href="/declare">声明</a>
        <a href="/help">帮助</a></div>
    </div>
    <div class="page-container">
      <div id="google_translate_element">
      </div>
      <h2>FindCl 帮助文档</h2>
      <ul>
        <li><a href="/help#1">什么是磁力链接?</a></li>
        <li><a href="/help#2">什么是DHT网络?</a></li>
        <li><a href="/help#3">如何通过infohash获取种子文件?</a></li>
        <li><a href="/help#4">更多</a></li>
        <li><a href="/help#5">参考文献</a></li>
      </ul>
      <h4 id="1">什么是磁力链接？</h4>
      <p>磁力链接（Magnet URI scheme），是对等网络中进行信息检索和下载文档的电脑程序。 和基于“位置”连接的统一资源定位符（URL）不同，磁力连结是基于元数据（metadata)-文件内容，属于统一资源名称（URN）。也就是说，磁力连结不基于文档的IP地址或定位符，而是在分布式数据库中，通过散列函数值来识别、搜索来下载文档。因为不依赖一个处于启动状态的主机来下载文档，所以特别适用没有中心服务器的对等网络。</p>
      <p>最简单的磁力链接，由magnet:?xt=urn:btih:和infohash组成。例如：</p><code>magnet:?xt=urn:btih:BBCDEFGHIJKLMNOPQRSTUVWXYZ12345678</code>
      <p>更多内容请查看：<a href="http://zh.wikipedia.org/zh-cn/%E7%A3%81%E5%8A%9B%E9%93%BE%E6%8E%A5" target="_blank">wikipedia</a></p>
      <h4 id="2">什么是DHT网络？</h4>
      <p>分散式散列表（英语：distributed hash table，缩写DHT）是分散式计算系统中的一类，用来将一个关键值（key）的集合分散到所有在分散式系统中的节点，并且可以有效地将消息转送到唯一一个拥有查询者提供的关键值的节点（Peers）。这里的节点类似散列表中的存储位置。分散式散列表通常是为了拥有极大节点数量的系统，而且在系统的节点常常会加入或离开（例如网络断线）而设计的。在一个结构性的延展网络（overlay network）中，参加的节点需要与系统中一小部份的节点沟通，这也需要使用分散式散列表。</p>
      <p>分散式散列表可以用以创建更复杂的服务，例如分散式文件系统、点对点技术文件分享系统、合作的网页缓存、多播、任播、域名名称系统以及实时通信等。</p>
      <h4 id="3">如何通过infohash获取种子文件</h4>
      <p>infohash前面已经提到过了，是组成磁力链接的一部分，同时本站的资源页网址也包含infohash。一般情况下，使用磁力链接是最方便快捷的，如果您需要下载种子文件，由于本站并没有存储，在此推荐几个专门存贮种子文件的站点：</p>
      <ul>
        <li><a href="http://torrage.com/" target="_blank">http://torrage.com</a></li>
        <li><a href="https://zoink.it/" target="_blank">https://zoink.it</a></li>
        <li><a href="http://torcache.net/" target="_blank">http://torcache.net</a></li>
      </ul>
      <p>那torrage为例，如果要下载infohash为BBCDEFGHIJKLMNOPQRSTUVWXYZ12345678的种子文件，可以使用如下链接：</p><code>http://torrage.com/torrent/BBCDEFGHIJKLMNOPQRSTUVWXYZ12345678.torrent</code>
      <p>每个站点存贮的种子数目不同，可以多试几个站点。</p>
      <h4 id="4">更多</h4>
      <p>有其他任何问题可以联系我们。填写<a href="http://www.mikecrm.com/f.php?t=hPd4wYQ" target="_blank">在线问卷</a>或发邮件至FindCl.com@outlook.com</p>
      <h4 id="5">参考文献</h4>
      <p>本文档部分内容来自：</p>
      <ul>
        <li><a href="http://zh.wikipedia.org/zh-cn/%E7%A3%81%E5%8A%9B%E9%93%BE%E6%8E%A5" target="_blank">wikipedia</a></li>
        <li><a href="http://baike.baidu.com/view/3116828.htm" target="_blank">百度百科</a></li>
        <li><a href="http://yangtai.xunlei.com/?p=593" target="_blank">迅雷开发者博客关于磁力链接（Magnet URI）的简单介绍</a></li>
        <li><a href="http://bittorrent.org/index.html" target="_blank">BitTorrent.org</a></li>
      </ul>
    </div>
  </div>
</template>
