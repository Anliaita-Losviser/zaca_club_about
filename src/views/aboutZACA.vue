<script setup>
import MainHeader from "@/components/MainHeader.vue";
import "@/assets/global.css";
import MainContents from "@/components/aboutPage/MainContents.vue";
</script>

<template>
    <el-container class="common-layout">
        <el-header class="header">
            <MainHeader class="MainHeader"> </MainHeader>
        </el-header>
        <el-main class="main">
            <MainContents> </MainContents>
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
        background-image: linear-gradient(to bottom, rgba(255,255,255,0.4)75%, rgba(255,255,255,1)100%),
        url(../assets/background_about.jpg);
        background-size: cover;
        background-position: center;
    }
}
</style>