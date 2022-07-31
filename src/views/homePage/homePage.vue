<template>
  <div class="homePage_container">
    <div class="homePage_header">头部</div>
    <div class="homePage_menu">菜单</div>
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