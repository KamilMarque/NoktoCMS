<template>
  <div class="menu">
        <img src="../assets/noktoLogo.png" alt="Nokto Logo" class="logo">
        <div class="nav">
            <a><img src="../assets/grid.svg" class="img" alt="user icon"> Vu d'ensemble</a>
            <a><img src="../assets/user.svg" class="img" alt="user icon">Adhérants</a>
            <a><img src="../assets/heart.svg" class="img" alt="donation icon">Dons</a>
            <a><img src="../assets/upload.svg" class="img" alt="documents icon">Documents</a>
        </div>
        <div class="buttons">
            <button class="go-back">Retour au site</button>
            <button class="logout">Déconnexion</button>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
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

a {
    // margin-top: 70px;
    padding-left: 32px;
    text-align: left;
    font: 16px Poppins;

    &:hover {
        box-sizing: border-box;
    }

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

.logout {
    background: #55D0C5 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 26px;
    opacity: 1;
    letter-spacing: 0px;
    color: #FFFFFF;
}

.go-back{
    border: 1px solid #55D0C5;
    border-radius: 26px;
    opacity: 1;
    letter-spacing: 0px;
    color: #55D0C5;
    background-color: transparent;
}

</style>