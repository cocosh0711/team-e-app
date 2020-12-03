<template>
  <div class="posts-index">
    <!-- <img v-bind:src="imageUrl" /> -->
    <div class="container" v-for="(post, index) in posts" v-bind:key="index">
      <div>
        <p>title {{ post.title }}</p>
        <p>url {{ post.url }}</p>
        <p>imageUrl {{ post.imageUrl }}</p>
        <img v-bind:src="post.imageUrl" />
        <p>content {{ post.content }}</p>
        <p>createdAt {{ post.createdAt }}</p>
        <button v-on:click="likeButton">
          <font-awesome-icon icon="heart" />いいね！
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from "firebase"
import { db } from "@/firebase"
export default {
  data() {
    return {
      imageUrl: "",
      // titileはmethodsで送るときに参照するためのデータ
      title: "",
      // ②textareaの内容を持ってくるデータを作る
      content: "",
      // postsはfirestoreから取得したデータをしまうところ
      url: "",
      posts: [],
    }
  },
  mounted: function() {
    this.getVideos()
    this.getPost()
  },
  methods: {
    getPost: function() {
      // const ref = db.collection("posts").doc()
      // console.log(ref)
      // ref
      db.collection("posts")
        .orderBy("createdAt")
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            this.posts.push({ ...doc.data() })
          })
        })
    },
    getVideos: function() {
      const videoId = this.url.replace("https://www.youtube.com/watch?v=", "")
      const url =
        "https://www.googleapis.com/youtube/v3/videos?id=" +
        videoId +
        "&key=" +
        "AIzaSyDT1XQ-llw_zWtyIJRBH3g-bwKuEEWpJ0U" +
        "&part=snippet,contentDetails,statistics,status"
      fetch(url)
        .then(res => {
          return res.json([0])
        })
        .then(data => {
          console.dir(data)
          this.imageUrl = data.items[0].snippet.thumbnails.high.url // 画像を表示する
        })
    },
    likeButton: function() {},
  },
}
</script>

<style lang="scss">
.posts-index {
  min-height: 100vh;
  position: relative;
}
</style>
