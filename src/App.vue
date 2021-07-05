<template>
  <div id="app">
    <input type="text" v-model="mName">
    <button @click="search">Search</button>
    <iframe v-if="this.showFrame" :src="vSrc" height=528 width=850 scrolling="no" id="cb_iframe"></iframe>
    <span v-else> Search </span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      mName: null,
      showFrame: false,
      vSrc: null
    }
  },
  methods: {
    search () {
      this.showFrame = false
      this.vSrc = 'https://chaturbate.com/in/?tour=9oGW&amp;campaign=WQeC8&amp;track=88565448475&amp;room=' + this.mName + '&amp;bgcolor=transparent&disable_sound=1&embed_video_only=1&target=_parent'
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
