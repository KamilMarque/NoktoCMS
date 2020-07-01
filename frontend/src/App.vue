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
  },

  methods: {
  }
}
</script>

<style lang="scss">
@import "./scss/style.scss";
</style>
