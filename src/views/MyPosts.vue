<template>
  <div class="my-page">
    <div>{{ this.$store.state.user.displayName }} さんこんにちは</div>
    <div>
      <div
        class="container"
        v-for="(post, index) in MyPosts"
        v-bind:key="index"
      >
        <p class="title">タイトル： {{ post.title }}</p>
        <p class="url">
          動画URL： https://www.youtube.com/watch?v={{ post.url }}
        </p>
        <img
          class="img"
          v-bind:src="post.imageUrl"
          @click="linkToVideo(post.url)"
        />
        <p class="content">投稿内容： {{ post.content }}</p>
        <p class="time">投稿日時： {{ post.createdAt }}</p>
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

<style lang="scss" scoped></style>
