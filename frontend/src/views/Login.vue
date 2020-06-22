<template>
    <div class="login">
        <div class="login-content">
            <img class="logoDPS" alt="Vue logo" src="../assets/logoDPS.png">
            <form @submit="checkForm">
                <div id="email">
                    <label for="email">Email</label>
                    <input type="email" name="useremail" v-model="email" placeholder="email"> 
                </div>
                <div id="password">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" v-model="password" placeholder="password">
                    <p id="password-forgot">Mot de passe oublié ?</p>
                </div>
                <div>
                    <input type="submit" class="btn" value="Submit">
                </div>
                <div id="line"></div>
                <p id="new-account">Pas encore de compte ? Créez en un !</p>
            </form>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: null,
            password: null,  
        }
    },
    methods: {
        async checkForm (e) {
            e.preventDefault();
            if (this.email && this.password) {
                this.user = await this.$http.post('http://localhost:4000/login', {headers: {'Content-Type': 'application/json'}, user: {mail: this.email, password: this.password}
                }).then( response => {
                    localStorage.setItem('user',JSON.stringify(response.data.user))
                    localStorage.setItem('jwt',response.data.token)
                     this.$emit('loggedIn')
                    if (localStorage.getItem('jwt') != null){
                        if(this.$route.params.nextUrl != null){
                            console.log("okok");
                            //this.$router.push(this.$route.params.nextUrl)
                            this.$router.push({name: 'About', query: {redirect: '/about'}});
                        }
                        else {
                        console.log('sasasa');
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

<style lang="scss">
.mt32 {margin-top: 32px}
.mb32 {margin-bottom: 32px}
.mt64 {margin-top: 64px}
.mb64 {margin-bottom: 64px}
.mt16 {margin-top: 16px}
.mb16 {margin-bottom: 16px}

body{
    margin: 0px;
    height:100%;
    background-color: #D9D9D9;
}

.login {
    display: grid;
    grid-template-columns: repeat(12, 82px);
    grid-template-rows: 10vh;
    column-gap: 32px;
    justify-content: center;

}

.login-content {
    grid-column: 4 / 10;
    grid-row: 2;
    background-color:#FFFFFF;
    padding-left: 82px + 32px;
    padding-right: 82px + 32px;
    box-shadow: 0px 3px 30px #00000029;
}

.logoDPS {
    @extend .mt64;
    height: 7em;
    width: 7em;
}


#email, #password {
    @extend .mt32;
    @extend .mb32;
    font-size: bold;

    label {
        @extend .mb16;
        float: left;
        font: Bold 20px/30px Poppins;

    }

    input {
        width: 100%;
        height: 52px;
        border: none;
        background-color: #E9E9E9;
        padding-left: 16px;
        box-sizing: border-box; 
    }
}

#password-forgot {
    @extend .mt16;
    float: left;
    font-weight: regular;
    font-size: 14px;
    color: #9D9D9D;
    text-decoration: underline;
}

.btn {
    width: 100%;
    height: 64px;
    border: none;
    background-color: #55D0C5;
    @extend .mt32, .mb32;
    color:  #FFFFFF;
    font-weight: Bold;
    font-size: 20px;
}

#line {
    @extend .mb32;
    height: 10px;
    width: 100%;
    border-bottom: 1px solid #9D9D9D;
}

#new-account {
    padding-bottom: 64px;
}

@media screen and (max-width: 800px) {
    .login {
    grid-template-columns: 1fr 8fr 1fr;
    grid-template-rows: 10vh 80vh 10vh; 
    column-gap: 23px;
    }

    .login-content {
        grid-column: 2;
        grid-row: 2;
        padding-left: 70px + 23px !important;
        padding-right: 70px + 23px;
    }
}

@media screen and (max-width: 600px) {
    .login {
    grid-template-columns: 1fr;
    grid-template-rows: 100vh;
    }

    .login-content {
        grid-column: auto;
        margin: auto;
        grid-row: 1;
        padding-left: 47px + 13px !important;
        padding-right: 47px + 13px;
    }
}

</style>