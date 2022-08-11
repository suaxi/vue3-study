<template>
  <MyPie :data="state.salePie"/>
  <MyMap :data="state.saleMap"/>
</template>

<script lang="ts" setup>
import {adminStat} from '../../request/api'
import {reactive} from "vue";
import MyPie from './components/Pie.vue'
import MyMap from './components/Map.vue'

const state = reactive<{
  salePie: {}[],
  saleMap: {}[]
}>({
  salePie: [],
  saleMap: []
})

adminStat().then(res => {
  if (res.errno === 0) {
    state.salePie = res.data.salePie;
    state.saleMap = res.data.saleMap;
  }
})

</script>

<style scoped>

</style>