<template>
    <div class="d-flex justify-content-center">
      <v-chip class="ma-2" color="yellow" label large text-color="black">
        <p id="bets">FULL HOUSE</p>
      </v-chip>
      <div>
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
  line-height: 25px;
}
#bets {
  font-size: 20px;
  padding-top: 12%;
  font-weight: bold;
  flex: 0%;
}
</style>

