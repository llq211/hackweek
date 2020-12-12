import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vant/lib/index.css';
import './plugins/element.js';
import './assets/reset.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
