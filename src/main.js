import Vue from 'vue'
import App from './App.vue'
import 'weui'
import VueCompositionApi from '@vue/composition-api'

import { Search } from "vant";

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

Vue.use(Search);

new Vue({
  render: h => h(App),
}).$mount('#app')
