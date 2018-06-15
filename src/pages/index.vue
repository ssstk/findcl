<template>
  <div>
    <div class="index-bg"></div>
    <div class="index-header">
        <div class="index-header-content">
          <a class="title" href="/">FindCl</a>
          <a class="right" href="/declare">声明</a>
          <a class="right" href="/help">帮助</a>
          <a class="right" href="https://github.com/ssstk/antcolony" target="_blank">Fork me on Github</a>
        </div>
    </div>
    <div class="index-main">
        <h1>FindCl.com</h1>
        <div class="index-search  justify-content align-items ub">
            <form id="form" class="ub ub-f1" method="GET" action="/list">
                <input class="ub-f1" id="input" type="text" name="q" autocomplete="off" maxlength="40">
                <button type="submit">搜 索</button>
            </form>
        </div>
    </div>
    <div class="index-foot">
        <p>
          <a class="J_Lang" href="javascript:;" data-lang="cn">中文（简体）</a>
          <a class="J_Lang" href="javascript:;" data-lang="tw">中文（繁體）</a>
          <a class="J_Lang" href="javascript:;" data-lang="en">English</a>
        </p>
        <p>Copyright © 2014 FindCl.com<a href="http://cn.mikecrm.com/7cjpxTA" target="_blank">联系我们</a></p>
    </div>
  </div>
  
</template>
<script>
import vFooter from '@/components/footer.vue'
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    vFooter
  }
}
</script>

<style scoped>
</style>