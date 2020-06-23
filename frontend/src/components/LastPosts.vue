<template>
  <div class="last-post">
      <h2>Derniers articles</h2>
      <table>
            <tr>
                <td class="first bold">Titre</td>
                <td class="second bold">Vues</td>
                <td class="third bold">Commentaires</td>
            </tr>
            <tr>
                <td class="first">Qui a tué Kennedy</td>
                <td class="second">200</td>
                <td class="third">7</td>
            </tr>
            <tr>
                <td class="first">Où sont mes chausettes</td>
                <td class="second">125</td>
                <td class="third">32</td>
            </tr>
            <tr>
                <td class="first">CORNO ? VRAIMENT FINI ?!</td>
                <td class="second">3251</td>
                <td class="third">231</td>
            </tr>
      </table>
      <button class="see-more">Voir plus</button>
  </div>
</template>
<script>
export default {
    name: 'LastPosts',
}
</script>

<style>
.last-post {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 24px;
    opacity: 1;
    height: 428px;
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