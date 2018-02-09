import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CoursesList from '@/components/CoursesList'
import Course from '@/components/Course'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/courses/',
      name: 'CoursesList',
      component: CoursesList
    },
    {
      path: '/courses/:id',
      name: 'Course',
      component: Course,
      props: true
    }
  ]
})
