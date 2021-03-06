import Vue from "vue";

// 通过Vue.observable创建一个可响应的对象
export const store = Vue.observable({
  //   userInfo: {},
  //   roleIds: []
  searchData: "",
  resultData: [],
});

// 定义 mutations, 修改属性
export const mutations = {
  setsearchData(searchInfo) {
    store.searchData = searchInfo;
  },
  setresultData(resultInfo) {
    //store.resultData = JSON.parse(JSON.stringify(resultInfo));
    store.resultData = [...resultInfo];
  },
};
