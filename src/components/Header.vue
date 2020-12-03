<template>
  <div id="nav-h">
    <h1 class="header-logo">YouTuber-Review</h1>
    <u class="header-items" @click="toMypage">MyPage</u>
    <router-link to=/post>NewPost</router-link>
    <u class="header-items" @click="signOut">signOut</u>
    <u class="header-items" @click="signIn">signIn</u>
    <router-link to="/posts-index">Posts</router-link>
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
    },
    signOut: function() {
      this.$store.dispatch("signOut")
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
