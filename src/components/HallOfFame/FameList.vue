<script setup>
import MainFooters from "@/components/MainFooters.vue";
import FameCards from "@/components/HallOfFame/FameCards.vue";
</script>

<template>
<div class="container">
    <div class="content">
        <FameCards></FameCards>
        <FameCards></FameCards>
        <FameCards></FameCards>
        <FameCards></FameCards>
        <FameCards></FameCards>
        <FameCards></FameCards>
        <FameCards></FameCards>
        <FameCards></FameCards>
        <FameCards></FameCards>
    </div>
    <MainFooters></MainFooters>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  overflow: auto;

  width: 100%;
  height: auto;

  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: start;
    justify-content: center;

    width: 75%;
    height: 100%;
    min-height: 480px;

    padding: 36px;
    margin: 36px;
    margin-top: 60px;

    backdrop-filter: blur(5px);
    border: 2px solid black;
    border-radius: 20px;
  }
}
</style>