<script setup>
import MainFooters from "@/components/MainFooters.vue";
import FameCards from "@/components/HallOfFame/FameCards.vue";
</script>

<template>
<div class="container">
    <div class="content" direction="vertical">
        <FameCards></FameCards>
    </div>
    <MainFooters></MainFooters>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100%;
    min-height: 480px;
    padding: 36px;
    margin: 36px;
    align-content: center;
    align-items: center;
    text-align: center;
    backdrop-filter: blur(5px);
    border: 2px solid black;
    border-radius: 20px;
  }
}
</style>