<template>
  <div class="login">
    <h1>This is an login page</h1>
     <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="user" id="login" label="Login" name="login" prepend-icon="mdi-account" type="text"></v-text-field>
                  <v-text-field v-model="password" id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  </div>
</template>


<script>
export default {
    name: 'test',
    props: {
      source: String,
    },

    data: () => ({
        user: null,
        password: null,
        verify: false,
    }),

    methods: {
        async login () {
            this.user = await this.$http.post('http://localhost:4000/login', {headers: {'Content-Type': 'application/json'}, content: {user: {name: this.user, password: this.password}}
            }).then( response =>{
                console.log('tout est niquel');
                localStorage.setItem('user',JSON.stringify(response.data.user))
                localStorage.setItem('jwt',response.data.token)
                this.$emit('loggedIn')
                if (localStorage.getItem('jwt') != null){
                    if(this.$route.params.nextUrl != null){
                        this.$router.push(this.$route.params.nextUrl)
                    }
                    else {
                        this.$router.push({name: 'Logout', query: {redirect: '/Logout'}});
                    }
                }
            }).catch(() => {
                console.log('ntm');
            })
        }
    }
}
</script>


<style>

</style>