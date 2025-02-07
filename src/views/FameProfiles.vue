<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainFooters from "@/components/MainFooters.vue";
import "@/assets/global.css";
import avatar from "@/assets/example_Avatar2.jpg"
</script>

<template>
    <el-container class="common-layout">
        <el-header class="header">
            <MainHeader class="MainHeader"> </MainHeader>
        </el-header>
        <el-main class="main">
            <div class="container">
                <div class="content">
                    <el-avatar :size="100" :src="avatar" class="avatar"/>
                </div>
                <MainFooters></MainFooters>
            </div>
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
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.4)75%, rgba(255, 255, 255, 1)100%),
            url(../assets/example_personal_background.png);
        background-size: cover;
        background-position: center;

        .container {
            display: flex;
            flex-direction: column;

            width: 100%;
            height: auto;

            justify-content: center;
            align-items: center;

            .content {
                display:flex;
                flex-direction: column;
                position: relative;

                width: 80%;
                height: 100%;
                min-height: 480px;

                padding: 36px;
                margin: 36px;
                margin-top: 60px;

                align-content: center;
                align-items: center;
                text-align: center;

                backdrop-filter: blur(10px);
                border: 2px solid black;
                border-radius: 20px;
                .avatar{
                    position: absolute;
                    top: -50px; /* 向上偏移一半的高度（假设头像高度为50px） */
                    left: 50%; /* 左边距离50% */
                    transform: translateX(-50%); /* 向左移动自身宽度的一半 */
                }
            }
        }
    }
}
</style>