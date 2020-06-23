<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import store from "@/store/index"
// import Vuex from 'vuex'

export default {
  store: store,
  mounted () {
    store.dispatch('connect')
  },

  methods: {
    connect () {
      //store.dispatch('connect')
    }
  }
}
</script>

<style lang="scss">
.mt32 {margin-top: 32px}
.mb32 {margin-bottom: 32px}
.mt64 {margin-top: 64px}
.mb64 {margin-bottom: 64px}
.mt16 {margin-top: 16px}
.mb16 {margin-bottom: 16px}

.header {
    width: 100%;
    height: 25px;
    background-color: yellow;
}

button {
    height: 42px;
    width: 200px;
    margin: auto;
    margin-top: 16px;
    font: Bold 16px Poppins;
    background: #55D0C5 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 26px;
    opacity: 1;
    letter-spacing: 0px;
    color: #FFFFFF;

    &:hover {
      background: #FFFFFF;
      color: #55D0C5;
      border: 1px solid #55D0C5;
    }
}

body{
    margin: 0px;
    height:100vh;
    background-color: #D9D9D9;
}

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
