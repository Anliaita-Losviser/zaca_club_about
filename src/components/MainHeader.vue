<template>
    <div class="container">
        <el-icon size="24" color="rgb(255 255 255)">
            <ArrowLeftBold />
        </el-icon>
        <div class="title">
            ZACA二次元小屋
        </div>
        <el-icon>
        </el-icon>
    </div>

</template>

<script setup>
import { ArrowLeftBold } from '@element-plus/icons-vue';
</script>

<style lang="less" scoped>
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.title {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
}
</style>