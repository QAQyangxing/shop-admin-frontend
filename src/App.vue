<template>
  <div id="app">
    <template-login></template-login>
  </div>
</template>

<script>
import Login from "./components/Login.vue"

export default {
  name: "app",
  components:{
    "template-login":Login
  }
  //  mounted(){
    // 请求数据
    // this.$axios.get('https://api.github.com/users').then(res => {
    //   console.log(res.data)
    // })
  // }
};
</script>

<style>
</style>
