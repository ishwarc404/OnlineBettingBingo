<template>
  <div class="d-flex justify-content-center" style="padding-left:13px;">
    <v-chip class="ma-2" color="pink" label large text-color="white">
      <v-icon left>mdi-numeric-7-box</v-icon>
      <p id="bets">EARLY 7</p>
    </v-chip>
    <div >
      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>
      <v-chip class="ma-2" outlined large>NO BETS</v-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: "early7",
  components: {}
};
</script>

<style  scoped>
#title {
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
}
#bets {
  font-size: 20px;
  padding-top: 20%;
  font-weight: bold;
  flex: 0%;
}
</style>

