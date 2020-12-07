<template>
  <div id="nav-h">
    <h1 class="header-logo">YouTubers-Review</h1>
  <div v-if="!$store.state.user" >
    <u  @click="signIn" class="header-items">signIn</u>
  </div>
  <div v-else>
    <u @click="signOut" class="header-items">SignOut</u>
    <u @click="toMypage" class="header-items">MyPosts</u>
    <router-link to=/post class="header-items">NewPost</router-link>
    <router-link to="/posts-index" class="header-items">Posts</router-link>
  </div>
    <router-link to="/about" class="header-items">About</router-link>
    <router-link to="/" class="header-items">Home</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    toMypage: function() {
      this.$router.push("/my-posts/" + this.$store.state.user.uid)
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
  color: white;
  padding-right: 20px;
  padding-top: 30px;
  text-decoration: none;
  &.router-link-exact-active {
      color: red;
    }
}
.header-logo {
  float: left;
  padding-left: 45px;
  color: white;
  font-size: 25px;
  line-height: 10px;
  padding-top: 20px;
}
#nav-h {
  margin: 0px;
  padding: 0px;
  height: 80px;
  z-index: 1;
  width: 100%;
  background-color: #393e46;
    a {
    font-weight: bold;
    color: white;
    float: right;
    padding-right: 20px;
    &.router-link-exact-active {
      color: red;
    }
}
}
</style>