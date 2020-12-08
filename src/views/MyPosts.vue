<template>
  <div class="my-page">
    <div>{{ this.$store.state.user.displayName }} さんこんにちは</div>
    <div>
      <div
        class="container"
        v-for="(post, index) in MyPosts"
        v-bind:key="index"
      >
        <p class="post-items">タイトル： {{ post.title }}</p>
        <img
          class="img"
          v-bind:src="post.imageUrl"
          @click="linkToVideo(post.url)"
        />
        <p class="post-items">投稿内容： {{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase"
export default {
  data() {
    return {
      MyPosts: [],
    }
  },
  mounted: function() {
    this.getMyPosts()
  },
  methods: {
    getMyPosts: function() {
      if (!this.$store.state.user.uid) {
        return
      }
      const ref = db
        .collection("posts")
        .where("uid", "==", this.$store.state.user.uid)
      ref.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.MyPosts.push({ ...doc.data() })
        })
      })
    },
    linkToVideo: function(url) {
      window.open("https://www.youtube.com/watch?v=" + url, "_blank")
      console.log("https://www.youtube.com/watch?v=" + url)
    },
  },
}
</script>

<style lang="scss" scoped>
.post-items {
  border: solid 1px black;
  border-radius: 5px;
}
</style>
