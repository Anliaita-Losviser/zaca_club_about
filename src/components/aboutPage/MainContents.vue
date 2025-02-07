<script setup>
import MainFooters from "@/components/MainFooters.vue";
import { useRouter } from 'vue-router'

const router = useRouter()
const push_to_hallOfFame = () => { 
  router.push('/hallOfFame')  // 跳转到hallOfFame 页面
}
</script>

<template>
  <div class="container">
    <div class="content" direction="vertical">
      <el-text class="introduction">欢迎来到ZACA二次元小屋</el-text>
    </div>
    <div class="entry_hallOfFame">
      <el-text class="title">ZACA名人堂</el-text>
      <el-button type="danger" size="large" class="button" @click="push_to_hallOfFame">由此进入</el-button>
    </div>
    <MainFooters></MainFooters>
  </div>
</template>

<style lang="less" scope>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .content {
    width: 80%;
    height: 100%;
    min-height: 480px;
    padding: 36px;
    margin: 36px;
    margin-top: 240px;
    align-content: center;
    align-items: center;
    text-align: center;
    backdrop-filter: blur(5px);
    border: 2px solid black;
    border-radius: 20px;
    .introduction {
      color: black;
      font-size: 2rem;
    }
  }
  .entry_hallOfFame {
    width: 80%;
    max-width: 800px;
    height: 360px;
    padding: 36px;
    margin: 36px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    backdrop-filter: blur(5px);
    border: 2px solid black;
    border-radius: 20px;
    .title {
      --tw-text-opacity: 1;
      color: rgb(91 122 232 / var(--tw-text-opacity, 1));
      font-weight: 700;
      font-size: 2rem;
      line-height: 1.75rem;
      text-align: center;
    }
    .button{
      width: 100px;
      margin: 36px;
    }
  }
}
</style>