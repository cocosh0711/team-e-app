<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"
import firebase from "firebase"

export default {
  components: {
    Footer,
    Header,
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("setUser", user)
      }
    })
  },
  methods() {},
}
</script>

<style lang="scss">
#app {
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  // min-height: 100vh; /* ←コンテンツの高さの最小値＝ブラウザの高さに指定 */
  // padding-bottom: 60px; /* ←フッターの高さを指定 */
  box-sizing: border-box;
}
</style>
