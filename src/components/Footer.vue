<template>
  <div id="nav-f">
    <p class="footer-logo">2020@チーム他人任せ</p>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-logo {
  color: white;
  display: inline-block;
}
#nav-f {
  width: 100%;
  background-color: #393e46;
  position: relative;
  bottom: 0;

  /* 以下 背景色やテキストカラーなどはお好みで指定してください */

  text-align: center;
  a {
    font-weight: bold;
    color: white;
    padding: 5px;
    text-decoration: none;

    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
