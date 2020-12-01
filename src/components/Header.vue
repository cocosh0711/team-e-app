<template>
  <div id="nav-h">
    <h1 class="header-logo">YouTuber-Review</h1>
    <a class="my-page" @click="toMypage">MyPage</a>
    <router-link to="/about">About</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/posts-index"></router-link>
  </div>
</template>

<script>
export default {
  methods: {
    toMypage: function() {
      this.$router.push("/my-page/" + this.$store.state.user.uid)
    },
  },
}
</script>

<style lang="scss" scoped>
.my-page {
  color: #a07676;
}

.header-logo {
  float: left;
  padding-left: 0px;
  color: white;
  font-size: 25px;
  line-height: 10px;
}

#nav-h {
  height: 30px;
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: #393e46;
}
</style>
