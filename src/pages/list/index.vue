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
    <div class="list-container">
      <p class="list-info">FindCl 为您找到相关结果约 {{total}} 个，耗时 {{rqTime}} 秒</p>
      <div class="ub">
        <div class="list-main ub-f1">
          <ul class="list">
            <li v-for="item in data" :key="item._id">
              <router-link :to="item._id" append class="ub">
                <div class="ub-f1">
                  <p class="name" v-html="replaceName(item._source.name)"></p>
                </div>
                <div class="info ub space-between">
                  <div>类型：<strong>{{item._source.type}}</strong></div>
                  <div>大小：<strong>{{bytesToSize(item._source.size)}}</strong></div>
                  <div>收录时间：<strong>{{moment(item._source.createdAt).format('YYYY-DD-MM')}}</strong></div>
                </div>
              </router-link>
            </li>
            <div class="loader" v-if="loading">
              <p></p>
            </div>
            <div class="no-data" v-if="!loading && !data.length">
              <p>没有找到您要搜索的资源，请使用英文名称搜索重试！！！</p>
            </div>
          </ul>
          <div class="page">
            <ul class="pagination" v-if="data.length">
              <li class="prev disabled" @click="prev"><span>上一页</span></li>
              <li class="page-num" v-if="parseInt(page) - 2 > 0" @click="changePage(parseInt(page) - 2)"><a href="javascript:;">{{parseInt(page) - 2}}</a></li>
              <li class="page-num" v-if="parseInt(page) - 1 > 0" @click="changePage(parseInt(page) - 1)"><a href="javascript:;">{{parseInt(page) - 1}}</a></li>
              <li class="active page-num"><a href="javascript:;">{{page || 1}}</a></li>
              <li class="page-num" v-if="(parseInt(page) + 0) * 10 < total" @click="changePage(parseInt(page) + 1)"><a href="javascript:;">{{parseInt(page) + 1}}</a></li>
              <li class="page-num" v-if="(parseInt(page) + 1) * 10 < total" @click="changePage(parseInt(page) + 2)"><a href="javascript:;">{{parseInt(page) + 2}}</a></li>
              <li class="next" @click="next"><a href="javascript:;">下一页</a></li>
            </ul>
          </div>
        </div>
        <div class="list-sidebar">
          <div class="list-declare box">本站是一个磁力链接搜索引擎，可以从DHT网络获取到当前的活跃资源，用于DHT网络的学习，分析和研究。内容是本站根据您的指令自动搜索的结果，不代表本站赞成资源的内容或立场，资源的版权归种子制作者所有。
            <br>更多内容请查看<a href="/declare" target="_blank">声明</a>。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getProducts } from '@/api/api'
import moment from 'moment'

export default {

  data() {
    return {
      loading: true,
      page: this.$route.query.page || 1,
      params: this.$route.query,
      moment: moment,
      rqTime: 0,
      total: 0,
      data: [],
      size: 10,
    }
  },
  created() {
    this.fetchProducts()
  },


  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    replaceName(name) {
      name = name.replace(new RegExp(this.$route.query.q, "ig"), "<em>" + this.$route.query.q + "</em>")
      return name
    },
    bytesToSize(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
      if (bytes === 0) return 'n/a'
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
      if (i === 0) return `${bytes} ${sizes[i]})`
      return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    },

    objectToParams(obj) {
      var p = [];
      for (var key in obj) {
        if (obj[key]) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
      }
      return p.join('&');
    },

    async fetchProducts() {
      this.loading = true
      let params = Object.assign({}, this.params, {
        size: this.size,
        page: this.page
      })

      let start = new Date().getTime()
      getProducts(params).then(res => {
        let end = new Date().getTime()
        this.rqTime = (end - start) / 1000
        this.data = res.data
        this.total = res.count
        this.loading = false
      })
    },

    async prev() {
      const page = this.page;
      if (page <= 1) {
        return false;
      }
      this.changePage(page - 1);
    },

    async next() {
      const page = parseInt(this.page);
      if (page * 10 >= this.total) {
        return false;
      }
      this.changePage(page + 1);
    },

    async changePage(page) {
      this.page = page
      this.data = []
      window.scrollTo(0, 0);
      let query = {
        page,
        q: this.params.q
      }
      this.$router.push({
        path: '/list',
        query: query
      })

    }
  },
  beforeRouteUpdate(to, from, next) {
    this.params = to.query
    this.page = this.params.page || 1
    this.fetchProducts()
    window.scrollTo(0, 0)
    next()

  }
}

</script>
<style scoped>
.pagination {
  width: 100%;
  text-align: center;
  padding-top: 56px;
  cursor: pointer
}

.pagination li {
  font-size: 14px;
  font-family: "黑体";
  margin-right: 8px;
  line-height: 10px;
  border: 1px solid #e5e5e5;
  display: inline-block
}

.pagination li a {
  display: inline-block;
  padding: 12px 14px
}

.pagination li:hover {
  background-color: #e7e7e7
}

.pagination li:hover a {
  color: #f77373
}

.prev span:hover {
  color: #f77373
}

.pagination .prev span {
  padding: 12px 9px;
  display: inline-block
}

.pagination .next,
.pagination .prev {
  border: 1px solid #e5e5e5
}

.pagination .active {
  border: 0;
  background-color: #f77373
}

.pagination .active a {
  color: #fff
}

.category {
  width: 1030px
}

.loader {
  width: 100px;
  height: 101px;

  border: 8px solid;
  border-top-color: hsl(154, 100%, 31%);
  border-left-color: hsl(216, 87%, 52%);
  border-bottom-color: hsl(8, 66%, 50%);
  border-right-color: hsl(42, 100%, 51%);
  border-radius: 50%;
  transform: rotate(45deg);
  margin: 150px auto 250px;
}

.loader p {
  display: inline-block;
  width: 107px;
  height: 107px;
  /* The background is used to specify the border background */
  background: linear-gradient(90deg, hsla(212, 67%, 36%, 0) 0%,
  hsla(207, 69%, 51%, 0) 76%,
  hsla(0, 0%, 100%, 1) 85%,
  hsla(0, 0%, 100%, 1) 100%);
  /* W3C */
  /* Background origin is the padding box by default.
  Override to make the background cover the border as well. */
  -moz-background-origin: border;
  background-origin: border-box;
  /* A transparent border determines the width */
  border: 6px solid transparent;
  border-radius: 50%;
  box-shadow: inset -999px 0 0 #fff;
  /* The background color */
  transform: translate(-8px, 55px);
  animation: loading 1s linear infinite;
}

@keyframes loading {
  0% {
    transform: translate(-9px, -25px) rotate(0deg);
  }
  100% {
    transform: translate(-9px, -25px) rotate(360deg);
  }
}

</style>
