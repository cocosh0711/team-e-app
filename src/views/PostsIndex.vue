<template>
  <div class="posts-index">
    <!-- <img v-bind:src="imageUrl" /> -->
    <div class="container" v-for="(post, index) in posts" v-bind:key="index">
      <p class="title">タイトル： {{ post.title }}</p>
      <p class="url">
        動画URL： https://www.youtube.com/watch?v={{ post.url }}
      </p>
      <img class="img" v-bind:src="post.imageUrl" />
      <p class="content">投稿内容： {{ post.content }}</p>
      <p class="time">投稿日時： {{ post.createdAt }}</p>
      <button class="btn" v-on:click="likeButton(index)">
        <font-awesome-icon icon="heart" />いいね！（{{ post.likesNumber }}）
      </button>
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
    likeButton: function(index) {
      // firebaseのlikesNumberに+1する
      db.collection("posts")
        .doc(this.posts[index].id)
        .update({
          likesNumber: this.posts[index].likesNumber++,
        })
    },
  },
}
</script>

<style lang="scss">
.posts-index {
  min-height: 100vh;
  position: relative;
}
.container {
  display: flex;
  display: inline-block;
  flex-direction: column;
  padding: 10px 10px;
  border: solid 1px black; /*線*/
  border-radius: 10px; /*角の丸み*/
}
.img {
  width: 50%;
  margin: 0 auto;
}
.btn {
  width: auto;
  margin: 0 auto;
}
.title {
  border: solid 1px black; /*線*/
  border-radius: 10px;
}
</style>
