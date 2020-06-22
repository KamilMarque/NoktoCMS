<template>
  <div id="header" class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>
#header {
    width: 100%;
    height: 25px;
    background-color: yellow;
}
</style>