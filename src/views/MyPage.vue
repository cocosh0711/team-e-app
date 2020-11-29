<template>
  <div class="my-page">
    <div>{{ this.$store.state.user.displayName }} さんこんにちは</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "aaa",
      },
    }
  },
  mounted: function() {
    // $route.params.id  さんのデータをとってくるしょり
    // this.userData = user
  },
}
</script>

<style lang="scss" scoped></style>
