<template>
    <div>
        <Header></Header>
        <div class="head-bg">
            <div class="head">
                <div class="head__infos">
                    <h1>Préventions et secours dans les pyrénées</h1>
                    <p class="head__infos--intro">Parce que la sécurité de chacun est notre préoccupation premiere, vous
                        pouvez compter sur nous.</p>
                    <button class="head__infos--btn">Découvrez-nous</button>
                </div>
                <div class="head__contact">
                    <h3>Nous contacter</h3>
                    <p class="head__contact--location"> 15 chemin des Camplans
                        <br>65400 Beaucens
                    </p>
                    <p class="head__contact--number">05 62 97 10 07</p>
                    <p class="head__contact--mail">hello@dps-65.fr</p>
                </div>
            </div>
        </div>
        <div class="mission">
            <h2 class="mission__title">Notre mission</h2>
            <section class="mission__secourisme">
                <h3 class="mission__secourisme--title">Secourisme</h3>
                <p>Parce que la sécurité de chacun est notre<br>préoccupation premiere, vous pouvez compter sur nous.
                </p>
            </section>
            <section class="mission__prevention">
                <h3 class="mission__prevention--title">Prévention</h3>
                <p>Parce que la sécurité de chacun est notre<br>préoccupation premiere, vous pouvez compter sur nous.
                </p>
            </section>
        </div>
        <div class="presentation">
            <div class="presentation__intro">
                <h3>Qui sommes nous ?</h3>
                <p>DPS65 est une association de loi 1901, agrémentée sécurité civile. Composée de secouristes, de pisteurs, d’infirmiers et de médecins. Nous sommes formés et apte à prodiguer des secours/soins de qualité sur nos dispositifs de premiers secours.</p>
            </div>
            <img class="presentation__photo1" src="@/assets/pictures/presentation1.jpg" alt="">
            <img class="presentation__photo2" src="@/assets/pictures/presentation2.jpg" alt="">
        </div>
        <div class="donation">
            <div class="donation__container">
                <p class="donation__container--intro">Parce que nous avons besoins de vous<br><span>FAIRE UN DON -></span></p>
            </div>
        </div>
        <div class="news">
            <h3>L'actualité</h3>
        </div>
        <div class="parteners">
            <h3>Nos partenaires</h3>
            <div class="parteners__logos">
                <img src="@/assets/parteners/zag.png" alt="zag logo">
                <img src="@/assets/parteners/bike.png" alt="Bike py logo">
                <img src="@/assets/parteners/pyr.png" alt="pyr epic logo">
                <img src="@/assets/parteners/nuage.png" alt="sans nuage logo">
                <img class="parteners__logos--nokto" src="@/assets/parteners/nokto.png" alt="nokto logo">
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'home',
        components: {
            Header,
            Footer
        }
    }
</script>
