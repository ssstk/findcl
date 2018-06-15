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
    <div class="list-container des ub">
        <div class="list-main">
            <div class="content">
                <h3>基础信息<a href="http://cn.mikecrm.com/7cjpxTA" target="_blank">[举报]</a></h3>
                <div class="content-body base-info">
                    <div class="ub item">
                        <div class="tit">资源名称</div>
                        <div class="info">{{currentProduct.name}}</div>
                    </div>
                    <div class="ub item">
                        <div class="tit">文件大小</div>
                        <div class="info">{{currentProduct.size}}</div>
                    </div>
                    <div class="ub item">
                        <div class="tit">文件类型</div>
                        <div class="info">{{currentProduct.type}}</div>
                    </div>
                    <div class="ub item">
                        <div class="tit">收录时间</div>
                        <div class="info">{{moment(currentProduct.meta.createdAt).format('YYYY-DD-MM')}}</div>
                    </div>
                    <div class="ub item">
                        <div class="tit">更新时间</div>
                        <div class="info">{{moment(currentProduct.meta.updatedAt).format('YYYY-DD-MM')}}</div>
                    </div>
                    <div class="ub item">
                        <div class="tit">infohash</div>
                        <div class="info">{{currentProduct.infohash}}</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <h3>磁力链接 <div class="code-btn" :data-clipboard-text="`magnet:?xt=urn:btih:${currentProduct.infohash.toLocaleLowerCase()}`">[复制]</div></h3> 
                <div class="content-body">
                    <code class="break-word">magnet:?xt=urn:btih:{{currentProduct.infohash.toLocaleLowerCase()}}</code>
                </div>
            </div>
            <div class="content">
                <h3>文件列表</h3>
                <div class="content-body">
                    <div class="ub file-info" v-for="item in  currentProduct.subList" :key="item._id">
                        <div class="ub-f1 name break-word">{{item.name}}</div>
                        <div class="size">{{bytesToSize(item.size)}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="list-sidebar">
            <div class="list-declare box">本站是一个磁力链接搜索引擎，可以从DHT网络获取到当前的活跃资源，用于DHT网络的学习，分析和研究。内容是本站根据您的指令自动搜索的结果，不代表本站赞成资源的内容或立场，资源的版权归种子制作者所有。
                <br>更多内容请查看<a href="/declare" target="_blank">声明</a>。</div>
        </div>
    </div>
  </div>
</template>
<script>

import vFooter from '@/components/footer.vue'
import { getProduct } from '@/api/api'
import { Toast } from '@/common/common'
import moment from 'moment'
import ClipboardJS from 'clipboard'

export default {
  asyncData(context) {
    return axios.get(context.store.state.baseUrl + '/api/products/' + context.params.id)
      .then((res) => {
        return { currentProduct: res.data.data }
      })
  },

  data() {
    return {
        id: this.$route.params.id,
        moment: moment,
        currentProduct: {
            infohash: '',
            meta: {}
        } 
    }
  },
  mounted: function () {
    this.$nextTick(function () {
        console.log(11)
        let clipboard = new ClipboardJS('.code-btn')
        clipboard.on('success', function(e) {
            Toast.info('复制成功')
            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    })
  },
  created() {
    this.fetchProduct()
    let codeBtn = this.$refs.codeBtn
  },

  methods: {
    fetchProduct(){
        let params = {
            _id: this.id
        }
        getProduct(params).then(res => {
            this.currentProduct = res.data
        })
    },
    bytesToSize(bytes) {
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
      if (bytes === 0) return 'n/a'
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
      if (i === 0) return `${bytes} ${sizes[i]}`
      return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    }
  },
  components: {
    vFooter
  }
}
</script>

<style scoped>
</style>