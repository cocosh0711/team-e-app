<template>
  <div class="posts">
    <input type="text" v-model="title" placeholder="タイトルを入力" />
    <input type="text" v-model="url" placeholder="動画URLを入力" />
    <!-- ①textareaでコメント内容を書けるようにする -->
    <textarea
      type="text"
      cols="30"
      rows="10"
      v-model="content"
      placeholder="コメントを入力"
    ></textarea>
    <button v-on:click="post">投稿</button>
    <!-- ④for文でtextareaの内容も表示する -->

    <hr />
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
  methods: {
    post: function() {
      this.posts = []
      // this.urlから末尾だけ抽出する（正規表現）
      if (!this.url.match(/https:\/\/www.youtube.com\/watch\?v=/)) {
        alert("URLが正しくありません")
        return
      }
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
          const ref = db.collection("posts").doc()
          this.imageUrl = data.items[0].snippet.thumbnails.high.url
          ref
            .set({
              // ③postsコレクションにtextareaの内容も追加できるようにする
              title: this.title,
              content: this.content,
              url: videoId,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              imageUrl: this.imageUrl,
              likesNumber: 0,
              id: ref.id,
              uid: this.$store.state.user.uid,
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
            .error(() => {
              alert("正しく投稿できませんでした。")
            })
        })
    },
  },
}
</script>

<style lang="scss">
.posts {
  height: 300px;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}
</style>
