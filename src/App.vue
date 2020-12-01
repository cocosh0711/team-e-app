<template>
  <div id="app">
    <Header></Header>
    <router-link to="/posts">Post</router-link>
    <h1>YouTuber-Review</h1>

    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

export default {
  components: {
    Footer,
    Header,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-h {
  padding: 30px;

  a {
    font-weight: bold;
    color: #a07676;
    float: right;
    padding-right: 20px;

    &.router-link-exact-active {
      color: red;
    }
  }
}
#nav-f {
  a {
    font-weight: bold;
    color: #a07676;
    padding: 5px;

    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
