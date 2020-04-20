<template>
    <div class="d-flex justify-content-center">
      <v-chip class="ma-2" color="pink" label large text-color="white">
        <v-icon left>mdi-numeric-4-box</v-icon>
        <p id="bets">CORNERS</p>
      </v-chip>
      <div style="padding-top:2%;">
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
  name: "4corners",
  components:{
   
  }
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

