import Vue from 'vue'
import App from './App.vue'

// element-ui：1.引入
import ElementUI from "element-ui";
// element-ui: 2.引入样式
import 'element-ui/lib/theme-chalk/index.css';

// 引入axios
import axios from "axios";

// element-ui: 3.注册插件
Vue.use(ElementUI)

Vue.config.productionTip = false

// 把axios绑定到vue实例的属性￥axios
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
