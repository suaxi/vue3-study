<template>
  <MyPie :data="state.salePie"/>
</template>

<script lang="ts" setup>
import {adminStat} from '../../request/api'
import {reactive} from "vue";
import MyPie from './components/Pie.vue'

const state = reactive<{
  salePie: {}[]
}>({
  salePie: []
})

adminStat().then(res => {
  if (res.errno === 0) {
    state.salePie = res.data.salePie
  }
})

</script>

<style scoped>

</style>