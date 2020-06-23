<template>
  <div class="users">
      <h2>Adhérants</h2>
      <table>
            <tr>
                <td class="first bold">Nom</td>
                <td class="second bold">Prénom</td>
                <td class="third bold">Inscrit depuis</td>
            </tr>
            <tr>
                <td class="first">Bieber</td>
                <td class="second">Justin</td>
                <td class="third">17/12/19</td>
            </tr>
            <tr>
                <td class="first">Jelien</td>
                <td class="second">Barre</td>
                <td class="third">15/12/19</td>
            </tr>
            <tr>
                <td class="first">Appriou</td>
                <td class="second">Radek</td>
                <td class="third">23/11/19</td>
            </tr>
            <tr>
                <td class="first">Marque</td>
                <td class="second">Kamil</td>
                <td class="third">19/11/19</td>
            </tr>
      </table>
      <button class="see-more">Voir plus</button>
  </div>
</template>
<script>
export default {
    name: 'Users',
}
</script>

<style>
.users {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 24px;
    opacity: 1;
    height: 479px;
    width: 753px;
    padding-left: 32px;
}

.bold {
    font: Bold 16px Poppins;
}

h2 {
    text-align: left;
    font: Bold 24px Poppins;
    letter-spacing: 0px;
    color: #434343;
    opacity: 1;
}

table {
    width: 100%;
}

tr {
    display: flex;
}

.first {
    padding-bottom: 16px;
    padding-top: 16px;
}

.second {
    width: 70px;
    margin-right: 16px;
    margin-left: auto;
    text-align: left;
    padding-bottom: 16px;
    padding-top: 16px;
}

.third {
    width: 125px;
    margin-right: 32px;
    text-align: left;
    padding-bottom: 16px;
    padding-top: 16px;
}

.see-more {
    width: 175px;
    float: right;
    margin-top: 32px;
    margin-right: 32px;
}
</style>