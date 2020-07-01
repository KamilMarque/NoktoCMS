<template>
  <div class="shortcuts">
      <h3 class="shortcuts__title">Raccourcis</h3>
      <div class="shortcuts__link">
        <router-link v-bind:to="'articles'" class="shortcuts__link--articles shortcuts__link--hover">Ecrire un article</router-link>
        <router-link v-bind:to="'documents'" class="shortcuts__link--documents shortcuts__link--hover">Upload</router-link>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>