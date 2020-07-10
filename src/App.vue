<template>
  <div id="app">
    <Header title="Cnode客户端" color="red" />
    <Search />
    <Panel />
    <Header1 />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Panel from "./components/Panel.vue";
import Header1 from "./components/Header1";
export default {
  name: "app",
  components: {
    Header,
    Search,
    Panel,
    Header1
  }
};
</script>
