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
    <div v-for="(post, index) in posts" v-bind:key="index">
      <p>Post {{ post }}</p>
      <p>title {{ post.title }}</p>
      <p>url {{ post.url }}</p>
      <p>content {{ post.content }}</p>
      <p>createdAt {{ post.createdAt }}</p>
    </div>
    <hr />
    <div>{{ $data }}</div>
  </div>
</template>

<script>
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
      posts: [
        {
          title: "sample",
          content: "YouTubeめっちゃおもろいやん",
          url: "",
          createdAt: "2020/11/21",
        },
        { title: "smaple2", content: "ヒカキン最高！" },
      ],
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
        process.env.VUE_APP_YOUTUBE_API_KEY +
        "&part=snippet,contentDetails,statistics,status"
      fetch(url)
        .then(res => {
          return res.json([0])
        })
        .then(data => {
          console.dir(data)
          this.imageUrl = data.items[0].snippet.thumbnails.high.url
          firebase
            .firestore()
            .collection("posts")
            .add({
              // ③postsコレクションにtextareaの内容も追加できるようにする
              title: this.title,
              content: this.content,
              url: videoId,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              imageUrl: this.imageUrl,
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
                }),
            )
        })
    },
  },
}
</script>
