<template>
  <div id="app">
    <div>
      <textarea cols="50" rows="10" v-model="tsSrc"></textarea>
      <button @click="showVP">Show VP</button>
      <button @click="closeVP">Close VP</button>
      <video-player
        v-if="showVPlayer"
        :src="tsSrc"/>
    </div>
    <div>
      <input type="text" v-model="mName">
      <button @click="search">Search</button>
      <button @click="close">Close</button>
      <iframe
        v-if="showFrame"
        :src="vSrc"
        height=528
        width=850>
      </iframe>
    </div>
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
      tsSrc: null,
      showVPlayer: false
    }
  },
  methods: {
    showVP () {
      this.showVPlayer = true
    },
    closeVP () {
      this.showVPlayer = false
    },
    close () {
      this.showFrame = false
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
