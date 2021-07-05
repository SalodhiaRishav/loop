<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'VideoPlayer',
  props: {
    src: {
      type: String
    }
  },
  data () {
    return {
      player: null,
      options: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: null,
            type: 'application/x-mpegURL'
          }
        ]
      }
    }
  },
  watch: {
    src (newValue) {
      console.log(newValue)
      if (this.player) {
        this.player.dispose()
      }
      this.options.sources[0].src = newValue
      if (newValue && newValue !== '') {
        this.player = videojs(this.$refs.videoPlayer, this.options, null)
      }
    }
  },
  mounted () {
    if (this.src && this.src !== '') {
      this.options.sources[0].src = this.src
      this.player = videojs(this.$refs.videoPlayer, this.options, null)
    }
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
