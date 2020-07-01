<template>
  <div class="container">
    <nav class="navCMS">
        <a class="navCMS__logo" title="Nokto" href="#"></a>
        <div class="navCMS__menu">
            <router-link :to="{name: 'Pannel.Overview'}" class="navCMS__link navCMS__link--home">Vue d'ensemble</router-link>
            <router-link :to="{name: 'Pannel.HelloWorld'}" class="navCMS__link navCMS__link--adherant">Adhérants</router-link>
            <router-link :to="{name: ''}" class="navCMS__link navCMS__link--dons">Dons</router-link>
            <router-link :to="{name: ''}" class="navCMS__link navCMS__link--documents">Documents</router-link>
            <router-link :to="{name: 'Pannel.Articles'}" class="navCMS__link navCMS__link--articles">Articles</router-link>
        </div>
        <div class="navCMS__buttons">
            <a class="button button--second button--cms" @click="goBack">Retour au site</a>
            <a class="button button--first" @click="logout">Déconnexion</a>
        </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
  
</template>


<script>
// import navigation from '@/components/PannelNav.vue'
// import lastPosts from '@/components/LastPosts.vue'
// import adherants from '@/components/Users.vue'
import store from "@/store/index"
export default {
  name: 'pannel',
  components: {
    // HelloWorld
    // navigation,
    // lastPosts,
    // adherants
  },
  methods: {
    logout () {
      this.disconnect()
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('jwt')
      this.$router.push({name: 'Login', query: {redirect: '/login'}});
    },

    goBack () {
      this.$router.push({name: 'Home', query: {redirect: '/home'}});
    },
    async disconnect () {
            await store.dispatch('disconnect')
    }
  }
}
</script>