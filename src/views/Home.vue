<template>
  <div class="home">
    <div class="login-user">
      {{ $store.getters.userName }} さん、こんにちは！
    </div>
    <div>
      <h1 style="text-decoration: underline" class="home-logo">
        YouTubers-Review
      </h1>
      <h2 style="color=#FFF" class="toAbout">
        <router-link to="/about">YouTubers-Reviewとは</router-link>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style lang="scss">
.home {
  background-image: url("~@/assets/home-background-img.jpg");
  padding: 100px 0 100px;
  text-align: center;
  top: 0;
  width: 100%;
  // height: cover;
  min-height: 100%;
  color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.home-items {
  display: flex;
  display: inline-block;
}
.home-logo {
  font-size: 100px;
  font-family: cursive;
  font-style: italic;
  text-underline-position: below;
  height: 150px;
  padding: 0 0 40px;
}
.toAbout:link {
  color: white;
}
.signin {
  font-size: 30px;
}
.login-user {
  font-weight: bold;
  font-size: 20px;
  color: white;
}
</style>
