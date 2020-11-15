<template>
  <div class="home">
    <div>{{ $store.getters.userName }} さん、こんにちは！</div>
    <button @click="signIn">サインイン</button>
    <button @click="signOut">サインアウト</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    signIn: function() {
      this.$store.dispatch("signIn")
    },
    signOut: function() {
      this.$store.dispatch("signOut")
    },
  },
}
</script>
