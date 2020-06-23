import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    meta: {
      isConnected: true
    },
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue'),
    meta: {
      isConnected: true
    },
  },
  {
    path: '/pannel',
    name: 'Pannel',
    component: () => import(/* webpackChunkName: "Pannel" */ '../views/Pannel.vue'),
    children: [{
      path: 'Overview',
      component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue'),
      name: 'Pannel.Overview'
    },
    {
      path: '/helloWorld',
      component: () => import(/* webpackChunkName: "HelloWorld" */ '../components/HelloWorld.vue'),
      name: 'Pannel.HelloWorld'
    }],
    meta: {
      requiresAuth: true
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (sessionStorage.getItem('jwt') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(sessionStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.is_admin == 1){
                  next()
              }
              else{
                  next({ name: 'userboard'})
              }
          }else {
              next()
          }
      }
  } else if (to.matched.some(record => record.meta.isConnected)) {
      if (sessionStorage.getItem('jwt') != null) {
        console.log("ccccc");
        next({ name: 'Pannel'})
      } else {
        next()
      }
  } else {
      next()
  }
})

export default router
