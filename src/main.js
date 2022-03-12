import Vue from 'vue'
import App from './App.vue'

import HelloRoach from './components/HelloRoach.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export default HelloRoach;

