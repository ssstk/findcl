<template>
  <div id="app" class="ub flex-column">
    <keep-alive>
        <router-view class="ub-f1" v-wechat-title="$route.meta.title" v-if="$route.meta.notKeepAlive"></router-view>
    </keep-alive>
    
    <router-view class="ub-f1" v-wechat-title="$route.meta.title" v-if="!$route.meta.notKeepAlive"></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from '@/components/footer.vue'
export default {
  name: 'App',
  components: {
    vFooter
  }
}
</script>

<style>
#app{
  min-height: 100vh;
}
</style>
