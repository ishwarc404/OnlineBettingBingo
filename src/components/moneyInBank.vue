<template>
  <div class="d-flex justify-content-center" style="padding-top:10px;">
      <v-chip
      class="ma-2"
      color="yellow"
      text-color="black"
      large
    >
     <div id="moneyLeft">₹200</div>
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "moneyInBank"
};
</script>

<style  scoped>
#moneyLeft {
  font-size: 40px;
  padding: 8px;
  font-weight: bold;
  flex: 0%;
}

</style>

