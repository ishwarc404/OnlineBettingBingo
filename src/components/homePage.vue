<template>
  <v-app>
    <gameTimer v-if="gameWillStart==true"/>
    <v-container v-if="gameWillStart==false"> 
    <moneyInBank />
    <activeNumber />
    <placeBets />
    </v-container>
  </v-app>
</template>

<script>
import gameTimer from "./gameTimer";
import moneyInBank from "./moneyInBank";
import activeNumber from "./activeNumber";
import placeBets from "./placeBets";

export default {
  name: "App",
  data: () => ({
    gameWillStart: false
  }),
  components: {
    moneyInBank,
    activeNumber,
    placeBets,
    gameTimer
  },
};
</script>
