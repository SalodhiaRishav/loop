<template>
  <div id="app">
    <video-player :options="videoOptions"/>
    <input type="text" v-model="mName">
    <button @click="search">Search</button>
    <button @click="download">Download</button>
    <iframe v-if="this.showFrame" :src="vSrc" height=528 width=850></iframe>
    <span v-else> Search </span>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
import 'video.js/dist/video-js.css'

export default {
  name: 'App',
  components: {
    VideoPlayer
  },
  data () {
    return {
      mName: null,
      showFrame: false,
      vSrc: null,
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: 'https://edge267.stream.highwebmedia.com/live-hls/amlst:emilia_bailey-sd-5dd59c2bbf56ce7bcbf2741cd9d76cf09668fedea400eb484ce580559510d422_trns_h264/chunklist_w745435110_b1148000_t64RlBTOjMwLjA=.m3u8',
            type: 'application/x-mpegURL'
          }
        ]
      }
    }
  },
  methods: {
    download () {
      const url = 'https://edge267.stream.highwebmedia.com/live-hls/amlst:emilia_bailey-sd-5dd59c2bbf56ce7bcbf2741cd9d76cf09668fedea400eb484ce580559510d422_trns_h264/chunklist_w745435110_b1148000_t64RlBTOjMwLjA=.m3u8'

      this.axios.get(url).then((response) => {
        console.log(response.data)
      })
    },
    search () {
      this.showFrame = false
      this.vSrc = 'https://chaturbate.com/in/?tour=9oGW&amp;campaign=WQeC8&amp;&amp;room=' + this.mName + '&amp;bgcolor=transparent&disable_sound=1&embed_video_only=1'
      this.showFrame = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
