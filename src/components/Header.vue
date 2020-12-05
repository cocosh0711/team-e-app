<template>
  <div id="nav-h">
    <h1 class="header-logo">YouTuber-Review</h1>
  <div v-if="!$store.state.user">
    <u class="header-items" @click="signIn">signIn</u>
  </div>
  <div v-else>
    <u class="header-items" @click="signOut">signOut</u>
    <u class="header-items" @click="toMypage">MyPage</u>
    <router-link to=/post>NewPost</router-link>
    <router-link to="/posts-index">Posts</router-link>
  </div>
    <router-link to="/about">About</router-link>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    toMypage: function() {
      this.$router.push("/my-page/" + this.$store.state.user.uid)
    },
    signIn: function() {
      this.$store.dispatch("signIn")
      this.$router.push("/")
    },
    signOut: function() {
      this.$store.dispatch("signOut")
      this.$router.push("/")
    },
  },
}
</script>

<style lang="scss" scoped>
.header-items {
  float: right;
  font-weight: bold;
  color: #a07676;
  padding-right: 20px;
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
