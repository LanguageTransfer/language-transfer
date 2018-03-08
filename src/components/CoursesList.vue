<template>
  <div>
    <a @click="$router.go(-1)">&lt; Back</a>
    <h1>Courses</h1>

    <ul>
      <li v-for="c in courses" :key="c.id">
        <router-link :to="'/courses/' + c.id">{{ c.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import SC from 'soundcloud'

export default {
  name: 'CoursesList',
  data () {
    return {
      courses: []
    }
  },
  created () {
    let that = this
    fetch('/static/course_list.json')
      .then(function (response) {
        return response.json()
      }).then(function (playlists) {
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
