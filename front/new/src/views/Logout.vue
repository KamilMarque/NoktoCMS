<template>
  <div class="logout">
    <h1>This is an logout page</h1>
        <v-btn color="red" @click="logout">logout</v-btn>
  </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('jwt')
            localStorage.removeItem('user')
            this.$router.push({name: 'Login', query: {redirect: '/Login'}});
        }
    }
}
</script>