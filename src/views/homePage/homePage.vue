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
          :unique-opened="true"
          :router="true"
      >
        <el-sub-menu :index="menu.id + ''" v-for="menu in newMenus" :key="menu.id">
          <template #title>
            <span>{{ menu.title }}</span>
          </template>
          <template v-for="subMenu in menu.children">
            <el-menu-item :index="subMenu.id + ''" v-if="subMenu.hidden" :key="subMenu.id">
              {{ subMenu.title }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="homePage_content">右侧内容</div>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex';
import {computed} from "vue";

const store = useStore();

interface MenuObj {
  id: number,
  parentId: number,
  title: string,
  hidden: 0 | 1,
  children?: MenuObj[]
}

interface NewMenus {
  [key: number]: MenuObj
}

//请求成功，vuex中没有菜单信息使用computed计算属性重新计算
const newMenus = computed<NewMenus>(() => store.getters.getNewMenus);

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