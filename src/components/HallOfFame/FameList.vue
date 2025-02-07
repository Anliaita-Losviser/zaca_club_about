<script setup>
import MainFooters from "@/components/MainFooters.vue";
import FameCards from "@/components/HallOfFame/FameCards.vue";
</script>

<template>
  <div class="container">
    <el-text class="title">名人堂</el-text>
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
  .title{
    color: black;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.75rem;
    text-align: center;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    place-items: center;

    width: 75%;
    height: 100%;
    min-height: 480px;

    padding: 24px;
    margin: 36px;

    backdrop-filter: blur(10px);
    border: 2px solid black;
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    .content{
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 480px) {
    .content{
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>