<template>
  <div class="container">
        <div class="menu">
          <img src="../assets/noktoLogo.png" alt="Nokto Logo" class="logo">
          <div class="nav">
              <router-link :to="{name: 'Pannel.Overview'}" class='list'><img src="../assets/grid.svg" class="img" alt="user icon">Vu d'ensemble</router-link>
              <router-link :to="{name: 'Pannel.HelloWorld'}" class='list'><img src="../assets/user.svg" class="img" alt="user icon">Adhérants</router-link>
              <router-link :to="{name: ''}" class='list'><img src="../assets/heart.svg" class="img" alt="donation icon">Dons</router-link>
              <router-link :to="{name: ''}" class='list'><img src="../assets/upload.svg" class="img" alt="documents icon">Documents</router-link>
          </div>
          <div class="buttons">
              <button class="go-back" @click="goBack">Retour au site</button>
              <button class="logout" @click="logout">Déconnexion</button>
          </div>
        </div>
        <div class="main">
          <router-view></router-view>
        </div>
  </div>
</template>


<script>
// import navigation from '@/components/PannelNav.vue'
// import lastPosts from '@/components/LastPosts.vue'
// import adherants from '@/components/Users.vue'

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
      console.log('ccss');
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('jwt')
      this.$router.push({name: 'Login', query: {redirect: '/login'}});
    },

    goBack () {
      this.$router.push({name: 'About', query: {redirect: '/about'}});
    }
  }
}
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 282px auto;
  column-gap: 32px;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

textarea:focus, input:focus{
    outline: none;
}

.content-components {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  justify-content: space-evenly;
}

.menu {
    display: grid;
    grid-template-rows: 20vh 60vh 20vh;
    background-color: #FFFFFF;
}


.nav {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.list{
    padding-left: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
    text-align: left;
    font: 16px Poppins;
    text-decoration: none;
    color: black;

    &:hover {
        box-sizing: border-box;
        background-color: #D9D9D9;
    }

}

.router-link-active {
  font-weight: bold;
}

.img {
    margin-right: 16px;
    height: 26px;
    vertical-align: middle;
}

.logo {
    align-self: center;
    margin: auto;
    height: 52px;
    width: auto;
}

// .logout {
//     background: #55D0C5 0% 0% no-repeat padding-box;
//     border: none;
//     border-radius: 26px;
//     opacity: 1;
//     letter-spacing: 0px;
//     color: #FFFFFF;
// }

.logout{
    border: 1px solid #55D0C5;
    border-radius: 26px;
    opacity: 1;
    letter-spacing: 0px;
    color: #55D0C5;
    background-color: transparent;

    &:hover {
      background-color: #55D0C5;
      color: white;
    }
}
</style>