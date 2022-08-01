<template>
  <div class="homePage_container">
    <div class="homePage_header">头部</div>
    <div class="homePage_menu">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="homePage_content">右侧内容</div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less">

.homePage_container {
  //position: relative;
  height: 100%;

  .homePage_header {
    height: 70px;
    background-color: antiquewhite;
  }

  .homePage_menu {
    position: absolute;
    top: 70px;
    left: 0;
    bottom: 0;
    width: 250px;
    background-color: beige;
  }

  .homePage_content {
    position: absolute;
    top: 70px;
    right: 0;
    left: 250px;
    bottom: 0;
    background-color: skyblue;
  }
}
</style>