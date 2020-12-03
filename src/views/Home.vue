<template>
  <div class="home">
    <div>{{ $store.getters.userName }} さん、こんにちは！</div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  position: relative;
}
</style>
