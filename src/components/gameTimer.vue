<template>
  <v-app>
    <div class="d-flex justify-content-center loginDiv">
      <div>
        <v-chip color="black" label large text-color="white">
          <p id="title">GAME WILL BEGIN SOON</p>
        </v-chip>
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
  background-color: white;
  padding-top: 100px;
}
#title {
  font-size: 20px;
  padding-top: 10%;
  font-weight: bold;
  flex: 0%;
}
</style>
