<template>
  <div style="padding-top:10px;">
    <div class="d-flex justify-content-center">
      <p id="title">CHOSE YOUR BET</p>
    </div>
    <early7 />
    <corners />
    <fullHouse />
  </div>
</template>

<script>
import early7 from "./early7";
import corners from "./4corners";
import fullHouse from "./fullHouse";
export default {
  name: "placeBets",
  components: {
    early7,
    corners,
    fullHouse
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

