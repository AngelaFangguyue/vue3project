import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Search from "@/views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/search", name: "Search", component: Search },
  {
    path: "/*",
    name: "NotFound",
    redirect: "/Search",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
