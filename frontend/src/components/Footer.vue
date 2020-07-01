<template>
    <div class="footer">
        <div class="footer__infos">
            <div class="footer__infos--text">
                <img src="@/assets/logoDPS-fullblack.svg" alt="DPS logo">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea</p>
            </div>
            <div class="footer__infos--navigation">

                <div>
                    <h4>Navigation</h4>
                    <router-link to="/">Accueil</router-link>
                    <router-link to="/about">Notre mission</router-link>
                    <router-link to="/about">Faire un don</router-link>
                </div>
                <div class="suit">
                    <router-link to="/about">Tarifs</router-link>
                    <router-link to="/about">Actualitées</router-link>
                    <router-link to="/about">Tarifs</router-link>
                </div>

                <div>
                    <h4>Liens utiles</h4>
                    <router-link to="/about">Mentions legales</router-link>
                    <router-link to="/about">Politique de confidentialité</router-link>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>15 Chemin des Camplas,</p>
                    <p>65400 Beaucens</p>
                    <p>05 62 97 10 07</p>
                    <p>hello@dps-65.fr</p>
                </div>
            </div>
            <div class="footer__infos--social">
                <img src="@/assets/facebook.svg" alt="facebook logo">
                <img src="@/assets/instagram.svg" alt="instagram logo">
            </div>
            <div class="footer__infos--sign">
                <p>Site designé & coté par <span>Nokto</span></p>
            </div>
        </div>
    </div>
</template>