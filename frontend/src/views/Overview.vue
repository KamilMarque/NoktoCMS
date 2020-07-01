<template>
  <div class="overview">
      <!-- <lastPosts class="bloc1"></lastPosts>
      <adherants class="bloc2"></adherants> -->
      <shortcuts class="preview"></shortcuts>
  </div>
</template>

<script>
// import lastPosts from '@/components/LastPosts.vue'
// import adherants from '@/components/Users.vue'
import shortcuts from '@/components/preview/Shortcuts.vue'
export default {
    name: 'overview',
    components: {
    // HelloWorld
    // navigation,
    // lastPosts,
    // adherants,
    shortcuts
  },
}
</script>