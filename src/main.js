import Vue from "vue";
import App from "./App.vue";
import "weui";
import VueCompositionApi from "@vue/composition-api";

import { Search, List, Cell, PullRefresh } from "vant";
//使用路由
import router from "./router/index.js";
window.console.log("router:",router);

//import router from "./router/index.js";
//window.console.log("router:",router);

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

Vue.use(Search);
Vue.use(List);
Vue.use(Cell);
Vue.use(PullRefresh);
//Vue.use(router);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
