<template>
  <div>
    <div>{{ $route.params.id }} さんこんにちは</div>
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
