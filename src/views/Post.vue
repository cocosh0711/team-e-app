<template>
  <div class="posts">
    <input type="text" v-model="title" />
    <!-- ①textareaでコメント内容を書けるようにする -->
    <textarea type="text" cols="30" rows="10" v-model="content"></textarea>
    <button v-on:click="post">投稿</button>
    <!-- ④for文でtextareaの内容も表示する -->
    <div v-for="(post, index) in posts" v-bind:key="index">
      <p>Post {{ post }}</p>
      <p>title {{ post.title }}</p>
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
      posts: [
        {
          title: "sample",
          content: "YouTubeめっちゃおもろいやん",
          createdAt: "2020/11/21",
        },
        { title: "smaple2", content: "ヒカキン最高！" },
      ],
    }
  },
  methods: {
    post: function() {
      this.posts = []
      firebase
        .firestore()
        .collection("posts")
        .add({
          // ③postsコレクションにtextareaの内容も追加できるようにする
          title: this.title,
          content: this.content,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
    },
  },
}
</script>
