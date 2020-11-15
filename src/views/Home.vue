<template>
  <div class="home">
    <button @click="addItemToCart('りんご')">カートに入れる</button>
    <button @click="addItemToCart('ゴリラン')">カートにゴリラを追加</button>
    <button @click="deleteItemFromCart">カートの中身を削除</button>
    <div>
      <button @click="signIn">サインイン</button>
      <button @click="signOut">サインアウト</button>
      <div v-if="$store.state.user">
        サインインしています。{{ $store.state.user.name }} さん！
      </div>
      <div v-else>
        サインインしていません！
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    addItemToCart: function(item) {
      this.$store.dispatch("addItem", item)
    },
    deleteItemFromCart: function() {
      // this.$store.state.items = []
      this.$store.dispatch("deleteItems")
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
