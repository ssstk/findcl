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
        <h2>使用FindCl前必读</h2>
        <p style="text-indent: 0">FindCl提醒您：在使用FindCl磁力搜索引擎（以下简称FindCl）前，请您务必仔细阅读并透彻理解本声明。您可以选择不使用FindCl，但如果您使用FindCl，您的使用行为将被视为对本声明全部内容的认可。</p>
        <ul>
            <li>鉴于FindCl以非人工检索方式、根据您键入的关键字自动生成到第三方资源的磁力链接，一切因使用FindCl而可能遭致的意外、疏忽、侵权及其造成的损失（包括因下载资源而感染电脑病毒等），FindCl对其概不负责，亦不承担任何法律责任。任何通过使用FindCl而搜索链接到的资源均系他人制作或提供，您可能从该资源中获得资讯及享用服务，FindCl对其合法性概不负责，亦不承担任何法律责任。</li>
            <li>FindCl搜索结果是根据您键入的关键字自动搜索并生成的，不代表FindCl赞成搜索到的资源中的内容或立场。</li>
            <li>您应该对使用搜索引擎的结果自行承担风险。FindCl不做任何形式的保证：不保证搜索结果满足您的要求，不保证搜索服务不中断，不保证搜索结果的安全性、正确性、及时性、合法性。因网络状况、通讯线路、第三方网站等任何原因而导致您不能正常使用FindCl，FindCl不承担任何法律责任。</li>
            <li>FindCl尊重并保护所有使用FindCl用户的个人隐私权，未保存任何个人资料。FindCl提醒您：您在使用搜索引擎时输入的关键字将不被认为是您的个人隐私资料。</li>
            <li>FindCl没有存储任何种子文件，下载链接由第三方存储站点提供。但是如果任何单位或个人认为通过FindCl搜索链接到的资源可能涉嫌侵犯其信息网络传播权等合法权利，应该及时向FindCl提出权利通知，并提供身份证明、权属证明及详细侵权情况证明。FindCl在收到上述文件后，将会尽快协助屏蔽本站的相关内容。</li>
            <li>FindCl在努力屏蔽一切不良信息，但是DHT网络中的资源是实时变化的，请您在发现不良信息时及时反馈给我们。反馈方式：填写<a href="http://cn.mikecrm.com/7cjpxTA" target="_blank">在线问卷</a>或发邮件至FindCl.com@outlook.com，谢谢！</li>
        </ul>
    </div>
  </div>
</template>
