<template>
  <v-app>
    <div class="d-flex justify-content-center loginDiv">
      <div>
        <v-chip color="black" label large text-color="white">
          <p id="bets">BINGO!</p>
        </v-chip>
        <br />
        <br />
        <h1><b>LOGIN</b></h1>
        <v-text-field label="USERNAME" outlined></v-text-field>
        <v-btn large color="black" style="color:white;" @click="this.enterGame"
          >ENTER GAME</v-btn
        >
        <br />
         <br />
        <hr>
        <h1><b>CREATE USER</b></h1>
        <v-text-field label="USERNAME" outlined></v-text-field>
        <v-btn large color="black" style="color:white;" @click="this.createUser"
          >CREATE USER</v-btn
        >
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  methods: {
    enterGame() {
      this.$router.push("home");
    },
        createUser() {
      this.$router.push("home");
    },
  },
};
</script>

<style scoped>
.loginDiv {
  flex: 0%;
  background-color: yellow;
  padding-top: 100px;
}
#bets {
  font-size: 50px;
  padding-top: 10%;
  font-weight: bold;
  flex: 0%;
}
</style>
