<script>
</script>

<template>
  <div class="container">
    <div class="content">
      <el-text class="introduction">欢迎来到ZACA二次元小屋</el-text>
    </div>
  </div>
</template>

<style lang="less" scope>
.container {
    width: 100%;
    height: 100%;
    overflow: hidden; /* 确保溢出的部分被剪裁 */
    
  
}
.content {
    width: 100%;
    height: 100%;
    align-content: center;
    text-align: center;
    backdrop-filter: blur(5px);
    .introduction {
      color: black;
      font-size: larger;
    }
  }
</style>