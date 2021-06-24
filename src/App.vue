<template>
  <div id="app">
    <img
      :src="imgLink1"
      height="100"
      width="100">
      <img
      :src="imgLink2"
      height="100"
      width="100">
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      imgLink1: null,
      imgLink2: null
    }
  },
  mounted () {
    const self = this
    setInterval(() => {
      const rndm = Math.random()
      self.imgLink1 = 'https://cbjpeg.stream.highwebmedia.com/stream?room=layanaqueen&f=' + rndm
      self.imgLink2 = 'https://cbjpeg.stream.highwebmedia.com/stream?room=kim__possible&f=' + rndm
    }, 500)
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
