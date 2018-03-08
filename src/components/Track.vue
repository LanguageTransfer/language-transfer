<template>
  <div>
    <a @click="$router.go(-1)">&lt; Back</a>

    <div v-if="isPlaying">
      <a class="controlbutton" href="#" @click="pause">Pause</a>
    </div>
    <div v-else>
      <a class="controlbutton" href="#" @click="play">Play</a>
    </div>

    <section id="track_player_wrapper">
      <iframe id="track_player" width="100%" height="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F&amp;show_teaser=false"></iframe>
    </section>
  </div>
</template>

<script>
import SC from 'soundcloud'
import SCW from 'soundcloud-widget'

export default {
  name: 'Track',
  data () {
    return {
      isLoading: true,
      isPlaying: false,
      widget: null
    }
  },
  methods: {
    play: function (e) {
      this.widget.toggle()
      this.isPlaying = true
    },
    pause: function (e) {
      this.widget.toggle()
      this.isPlaying = false
    }
  },
  created () {
  },
  mounted () {
    this.widget = new SCW('track_player')

    this.widget.load('https://api.soundcloud.com/tracks/' + this.id, {
      auto_play: false,
      hide_related: true,
      show_comments: false,
      show_user: false,
      show_reposts: false,
      show_teaster: false,
      visual: false,
      download: false,
      show_artwork: false,
      // Only run when the widget is manually loaded.
      callback: () => {
        this.isLoading = false
      }
    })

    this.widget.bind(SC.Widget.Events.PLAY, () => {
      this.isPlaying = true
    })

    this.widget.bind(SC.Widget.Events.PAUSE, () => {
      this.isPlaying = false
    })
  },
  props: ['id']
}
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }

  .controlbutton {
      display: block;
      text-align: center;
      font-size: 4em;
  }

  #track_player_wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  a {
    color: #42b983;
  }
</style>
