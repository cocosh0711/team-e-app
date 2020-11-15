import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// Home.vue -> dispatch actions -> commit mutations -> state change -> Home.vue / App.vue

export default new Vuex.Store({
  state: {
    user: null,
    items: [], //Vueのどこからでもとってこれる
  },
  mutations: {
    PUT_USER: function(state, user) {
      state.user = user
    },
    ADD_ITEM: function(state, item) {
      state.items.push(item)
    },
    DELETE_ITEMS: function(state) {
      state.items = []
    },
  },
  actions: {
    signIn: function(store) {
      // signIn の処理
      const user = {
        name: "ゆーじん",
        email: "yuyuyu@gmail.com",
      }
      store.commit("PUT_USER", user)
    },
    signOut: function(store) {
      // signOut の処理
      store.commit("PUT_USER", null)
    },
    addItem: function(store, item) {
      // サーバーと通信する（非同期）
      // 終了したらデータを追加する
      store.commit("ADD_ITEM", item)
    },
    deleteItems: function(store) {
      // サーバーと通信する（非同期）
      store.commit("DELETE_ITEMS")
    },
  },
  modules: {},
})
