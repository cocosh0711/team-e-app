<template>
  <div class="post-detail">
    <div class="container" v-for="(post, index) in posts" v-bind:key="index">
      <div>
        <p class="title">タイトル: {{ post.title }}</p>
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
        <p class="comments">コメント: {{ post.comments }}</p>
      </div>
      <textarea
        type="text"
        cols="30"
        rows="5"
        v-model="comment"
        placeholder="コメントを入力"
      >
      </textarea>
      <button v-on:click="comment">コメント</button>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase"
import firebase from "firebase"

export default {
  data: function() {
    return {
      // titileはmethodsで送るときに参照するためのデータ
      title: "",
      // ②textareaの内容を持ってくるデータを作る
      content: "",
      // postsはfirestoreから取得したデータをしまうところ
      url: "",
      imageUrl: "",
      posts: [],
    }
  },
  mounted() {
    console.log(this.$route.params["uid"])
    this.postDetail()
  },
  methods: {
    comment: function() {
      this.posts = []
        .set({
          comment: this.comment,
        })
        .then(
          firebase
            .firestore()
            .collection("posts")
            .orderBy("createdAt")
            .get()
            .then(snapshot => {
              snapshot.docs.forEach(doc => {
                this.posts.push({ ...doc.data() })
              })
            })
            .then(() => {
              this.$router.push("/my-page/" + this.$store.state.user.uid)
            }),
        )
    },
    postDetail: function() {
      const ref = db
        .collection("posts")
        .where("id", "==", this.$route.params["uid"])
      ref.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.posts.push({ ...doc.data() })
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

<style lang="scss">
.post-detail {
  min-height: 100vh;
  position: relative;
}
.container {
  display: flex;
  display: inline-block;
  flex-direction: column;
  padding: 10px 10px;
  border: solid 1px black;
  border-radius: 10px;
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
