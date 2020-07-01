<template>
    <div class="header">
        <a class="header__logo" title="Nokto" href="/"></a>
        <nav class="header__nav">
            <router-link class="header__nav--router" to="/">Accueil</router-link>
            <router-link class="header__nav--router" to="/about">Notre mission</router-link>
            <router-link class="header__nav--router" to="/about">Faire un don</router-link>
            <router-link class="header__nav--router" to="/about">Tarifs</router-link>
            <router-link class="header__nav--router" to="/about">Actualitées</router-link>
            <router-link class="header__nav--router" to="/about">Contact</router-link>
        </nav>
        <div class="header__link">
            <a class="header__link--facebook" title="Nokto" href="https://www.facebook.com/DPS65" target="_blank"
               rel="noopener"></a>
            <a class="header__link--instagram" title="Nokto" href="#"></a>
            <router-link to="/login" class="header__link--user"></router-link>
        </div>

        <div id="wrap">
            <input type="checkbox" id="overlay-input"/>
            <label for="overlay-input" id="overlay-button" @click="hideScroll"><span></span></label>
            <div id="overlay">
                <ul>
                    <router-link  to="/">Accueil</router-link>
                    <router-link  to="/about">Notre mission</router-link>
                    <router-link  to="/about">Faire un don</router-link>
                    <router-link  to="/about">Tarifs</router-link>
                    <router-link  to="/about">Actualitées</router-link>
                    <router-link  to="/about">Contact</router-link>
                    <router-link to="/login">Connection</router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import store from "@/store/index"

    export default {
        store: store,
        name: "Header",
        data: () => {
            return {
                scroll: true,
            }
        },
        methods: {
            hideScroll() {
                if (this.scroll) {
                    document.body.classList.add("stop-scrolling")
                } else {
                    document.body.classList.remove("stop-scrolling")
                }
            this.scroll = this.scroll ? false : true;
            }
        }
    }
</script>

<style>

</style>