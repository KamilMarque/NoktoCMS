<template>
  <div class="header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!connected" to="/login">Login</router-link>
      <router-link v-else to="/Pannel">Pannel</router-link>
  </div>
</template>

<script>
import store from "@/store/index"
export default {
    store: store,
    name: "Header",
    data: () => {
        return {
            connected: false,
        }
    },

    mounted () {
        this.connected = store.getters.isConnected;
    },

    methods: {
    }
}
</script>

<style>

</style>