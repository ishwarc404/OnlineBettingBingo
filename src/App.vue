<template>
  <v-app>
    <moneyInBank/>
    <activeNumber/>
    <placeBets/>
  </v-app>
</template>

<script>
import moneyInBank from './components/moneyInBank';
import activeNumber from './components/activeNumber';
import placeBets from "./components/placeBets"

export default {
  name: 'App',

  components: {
    moneyInBank,
    activeNumber,
    placeBets,
  },

  data: () => ({
    //
  }),
};
</script>
