<template>
  <div id="myMap" style="width: 100%;height:700px"></div>
</template>

<script lang="ts" setup>
import {defineProps, watch} from "vue";
import * as echarts from 'echarts';
import china from '../../../data/china.json';

//注册地图
echarts.registerMap('china', china as any)

const props = defineProps<{
  data: {}[]
}>()

let myMap: echarts.ECharts;

watch(() => props.data, () => {
  if (!myMap) {
    myMap = echarts.init(document.getElementById('myMap') as HTMLElement);
    const option = {
      series: {
        type: 'map',
        map: 'china'
      }
    };
    myMap.setOption(option);
  }
})
</script>

<style scoped>

</style>