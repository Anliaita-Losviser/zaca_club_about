<script setup>
import MainHeader from '@/components/MainHeader.vue';
import "@/assets/global.css";
import MainFooters from '@/components/MainFooters.vue';
import MainContents from '@/components/MainContents.vue';

</script>

<template>
    <el-container class="common-layout">
        <el-header class="header">
            <MainHeader class="MainHeader">
            </MainHeader>
        </el-header>
        <el-main class="main">
            <MainContents>
            </MainContents>
        </el-main>
        <el-footer class="footer">
            <MainFooters>
            </MainFooters>
        </el-footer>
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
    .main{
        background-image: url(../assets/background.png);
        background-size:cover;
        background-position: center;
    }
    .footer {
        align-content: center;
        text-align: center;
        --tw-bg-opacity: 1;
        background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));
    }
}
</style>