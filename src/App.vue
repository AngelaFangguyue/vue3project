<template>
  <div id="app">
    <!--<Test2 />-->
    <!-- <Test3 />-->
     <Header title="Vue小demo" color="blue" />
    <Search />
    <Panel />
    <Header1 />
    <Search1 />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Panel from "./components/Panel.vue";
import Header1 from "./components/Header1";
import Search1 from "./components/Search1.vue";
//import Test2 from "./components/Test2.vue";
//import Test3 from "./components/Test3.vue";
export default {
  name: "app",
  components: {
    Header,
    Search,
    Panel,
    Header1,
    Search1,
    //Test2,
    //Test3
  }
};
</script>
