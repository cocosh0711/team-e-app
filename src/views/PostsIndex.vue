<template>
  <div class="posts-index">
    <img v-bind:src="imageUrl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
    }
  },
  mounted: function() {
    this.getVideos()
  },
  methods: {
    getVideos: function() {
      const url =
        "https://www.googleapis.com/youtube/v3/videos?id=ydfD1qCxA7I&key=" +
        process.env.VUE_APP_YOUTUBE_API_KEY +
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
  },
}
</script>

<style lang="scss"></style>
