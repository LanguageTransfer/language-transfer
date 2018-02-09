<template>
  <div class="hello">
    <h1>Courses</h1>

    <ul>
      <li v-for="c in courses" :key="c.id">
        <router-link :to="'/courses/' + c.id">{{ c.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import SC from 'soundcloud'

export default {
  name: 'CoursesList',
  data () {
    return {
      courses: []
    }
  },
  created () {
    SC.initialize({
      client_id: ''
    })

    let that = this
    SC.get('/users/languagetransfer/playlists', {}).then(function (playlists) {
      that.courses = playlists
    })
  }
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
