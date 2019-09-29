<template>
  <div id="app">
    <el-container>
      <el-header>学习生活资料分享平台</el-header>
      <el-container>
        <el-aside width="200px">分类</el-aside>
        <el-main>展示区</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
