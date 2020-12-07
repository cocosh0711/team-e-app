<template>
  <div class="background">
    <div class="about">
      <h1>YouTubers-Reviewとは</h1>
      <p>
        自分の好きなYouTuberを紹介できて、互いに講評しながらYouTube視聴者同士で繋がれるSNSです。
      </p>
      <h2>使い方</h2>
      <p>①ユーザーは自分のGoogleアカウントでログイン</p>
      <p>②NewPostで投稿（誹謗中傷ダメ ゼッタイ！！！）</p>
      <p>③Postsでみんなの投稿をチェック</p>
      <p>④動画のサムネイル画像をクリックしてすぐに動画をチェック</p>
      <p>⑤気にいった投稿、共感した投稿に「いいね！」</p>
      <p>
        ⑥コメントを投稿して他の視聴者と繋がる（誹謗中傷ダメ ゼッタイ！！！）
      </p>
      <p>⑦MyPostsで過去の投稿をチェック</p>
    </div>
  </div>
</template>

<style lang="scss">
.background {
  background-image: url("~@/assets/home-background-img.jpg");
  padding: 100px 0 100px;
  text-align: center;
  top: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  color: white;
  background-repeat: no-repeat;
  background-position: center 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about {
  background-color: rgba(128, 128, 128, 0.664);
  width: 70%;
  height: 10%;
}
</style>
