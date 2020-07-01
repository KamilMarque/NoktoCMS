<template>
    <div class="login_container">
        <i class="login_container--back"></i>
        <div class="login">
            <router-link class="login--back" to="/"></router-link>
            <img class="login__logo" alt="Vue logo" src="../assets/logoDPS-black.svg">
            <p class="login__intro">Si vous etes un memebre de DPS vous pouvez vous connecter pour avoir accées a votre espace personnel</p>
            <form @submit="checkForm" class="login__form">
                <label for="email">Email</label>
                <input class="login__form--input" type="email" id="email" name="useremail" v-model="email" placeholder="email">
                <label for="password">Mot de passe</label>
                <i class="login__form--icon"></i>
                <input class="login__form--input" type="password" id="password" name="password" v-model="password" placeholder="password">
                <p class="login__form--forgot">Mot de passe oublié ?</p>
                <input type="submit" class="login__form--submit" value="Connection">
                <div id="line"></div>
            </form>
        </div>
    </div>
</template>

<script>
    import store from "@/store/index"

    export default {
        data() {
            return {
                email: null,
                password: null,
            }
        },
        methods: {
            goHome() {
                this.$router.push({name: 'Home', query: {redirect: '/home'}});
            },
            async checkForm(e) {
                e.preventDefault();
                if (this.email && this.password) {
                    this.user = await this.$http.post('http://localhost:4000/login', {
                        headers: {'Content-Type': 'application/json'}, user: {mail: this.email, password: this.password}
                    }).then(response => {
                        sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        sessionStorage.setItem('jwt', response.data.token)
                        this.$emit('loggedIn')
                        if (sessionStorage.getItem('jwt') != null) {
                            if (this.$route.params.nextUrl != null) {
                                console.log("okok");
                                //this.$router.push(this.$route.params.nextUrl)
                                this.$router.push({name: 'About', query: {redirect: '/about'}});
                            } else {
                                console.log('sasasa');
                                store.dispatch('connect')
                                this.$router.push({name: 'Pannel', query: {redirect: '/pannel'}});
                            }
                        }
                    }).catch(() => {
                        console.log('ntm');
                    })
                }

            }
        }

    }
</script>