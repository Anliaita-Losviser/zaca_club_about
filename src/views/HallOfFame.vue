<script setup>
import MainHeader from "@/components/MainHeader.vue";
import "@/assets/global.css";
import FameList from "@/components/HallOfFame/FameList.vue";
</script>

<template>
    <el-container class="common-layout">
        <el-header class="header">
            <MainHeader class="MainHeader"> </MainHeader>
        </el-header>
        <el-main class="main">
            <FameList></FameList>
        </el-main>
    </el-container>
</template>

<style lang="less" scoped>
.common-layout {
    height: 100%;
    margin: 0;

    .header {
        --tw-bg-opacity: 1;
        background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));
        height: 64px;
        align-content: center;
    }

    .main {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(255,255,255,0)75%, rgba(255,255,255,1)100%),
        url(../assets/background_hallOfFame.jpg);
        background-size: cover;
        background-position: center;
    }
}
</style>