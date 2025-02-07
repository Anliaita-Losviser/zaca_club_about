<script setup>
import cardImageUrl from "@/assets/example_card.jpg";
//const cardImageUrl = '@/assets/example_card.jpg'
</script>

<template>
  <div class="card">
    <el-image class="cardImage" :src="cardImageUrl" fit="cover"/>
    <div class="nameBoard">哎神人</div>
  </div>
</template>

<style lang="less" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 200px;
  height: 300px;
  overflow: hidden;
  border: 2px solid black;
  border-radius: 20px;
  .cardImage {
    z-index: 0;
    width: 100%;
    height: 100%;
  }
}
.nameBoard {
  position: absolute;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  backdrop-filter: blur(10px);
}
</style>