<template>
  <div class="posts-index">
    <!-- <img v-bind:src="imageUrl" /> -->
    <div class="container" v-for="(post, index) in posts" v-bind:key="index">
      <p class="post-items">タイトル： {{ post.title }}</p>
      <!-- <p class="post-items">投稿日時： {{ post.createdAt }}</p> -->
      <img
        class="img"
        v-bind:src="post.imageUrl"
        @click="linkToVideo(post.url)"
      />
      <p class="post-items">投稿内容： {{ post.content }}</p>
      <button class="btn" v-on:click="likeButton(index)">
        <font-awesome-icon icon="heart" />いいね！（{{ post.likesNumber }}）
      </button>
      <button class="btn" @click="postdetail(index)">コメントする</button>
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
    postdetail: function(index) {
      this.$router.push({
        name: "Postdetail",
        params: { uid: this.posts[index].id },
      })
    },
    linkToVideo: function(url) {
      window.open("https://www.youtube.com/watch?v=" + url, "_blank")
      console.log("https://www.youtube.com/watch?v=" + url)
    },
  },
}
</script>

<style lang="scss">
.posts-index {
  min-height: 100vh;
  position: relative;
  padding: 20px 0;
}
.container {
  display: flex;
  display: inline-block;
  flex-direction: column;
  padding: 10px 10px;
  border: solid 1px black;
  border-radius: 10px;
  padding: 5px 5px;
}
.img {
  width: 50%;
  margin: 0 auto;
  border: solid 2px black;
}
.btn {
  width: auto;
  margin: 3px 3px;
  padding: 2px;
}
.post-items {
  border: solid 1px black;
  border-radius: 5px;
}
</style>
