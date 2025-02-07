<script setup>
import cardImageUrl from "@/assets/example_card.jpg";
import { useRouter } from "vue-router";

const router = useRouter()
const pushToProfile = () =>{
  router.push({name: 'FameProfile'});
}
</script>

<template>
  <div class="card" @click="pushToProfile">
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

  max-width: 200px;
  max-height: 300px;

  margin:8px;
  overflow: hidden;

  border: 2px solid black;
  border-radius: 20px;
  .cardImage {
    z-index:1;
    width: 100%;
    height: 100%;
  }
}
.nameBoard {
  position: absolute;
  font-size: medium;

  display: flex;
  z-index:2;

  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 20%;
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 20px 20px;
}
</style>