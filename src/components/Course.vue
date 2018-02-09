<template>
  <div class="hello">
    <h1>Course: {{ title }}</h1>

    <ul>
      <li v-for="(t, i) in tracks" :key="t.id">
        Track {{ i+1 }}
      </li>
    </ul>
  </div>
</template>

<script>
import SC from 'soundcloud'

export default {
  name: 'Course',
  data () {
    return {
      title: '',
      tracks: []
    }
  },
  created () {
    SC.initialize({
      client_id: ''
    })

    let that = this
    SC.get('/playlists/' + this.id, {}).then(function (playlist) {
      that.title = playlist.title
      that.tracks = playlist.tracks
    })
  },
  props: ['id']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
