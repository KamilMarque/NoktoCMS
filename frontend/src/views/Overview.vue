<template>
  <div>
      <h1>coucou</h1>
      <lastPosts></lastPosts>
      <adherants></adherants>
  </div>
</template>

<script>
 import lastPosts from '@/components/LastPosts.vue'
 import adherants from '@/components/Users.vue'
export default {
    name: 'overview',
    components: {
    // HelloWorld
    // navigation,
    lastPosts,
    adherants
  },
}
</script>

<style>
body {
    height: 50px;
    width: 50px;
}
</style>