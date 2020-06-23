<template>
  <div class="">
    <Header></Header>
    <h1>About</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'about',
  components: {
    // HelloWorld
    Header
  }
}
</script>
