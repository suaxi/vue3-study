<template>
  <el-row>
    <el-col :span="6">
      <el-radio-group v-model="selectLabel">
        <el-radio-button label="sale_">销量</el-radio-button>
        <el-radio-button label="_money">销售额</el-radio-button>
      </el-radio-group>
    </el-col>

    <el-col :span="6"/>
    <el-col :span="6"/>

    <el-col :span="6">
      <el-select v-model="selectDay" placeholder="请选择" @change="dayChange">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.name"
            :value="item.value"
        />
      </el-select>
    </el-col>
  </el-row>
  <div id="pie" style="width: 100%; height: 350px"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import {defineProps, onMounted, reactive, toRefs, watch} from "vue";

const props = defineProps<{
  data: {}[]
}>();

const state = reactive({
  selectLabel: '_money',
  selectDay: 'today',
  options: [
    {name: '今天', value: 'today'},
    {name: '昨天', value: 'yesterday'},
    {name: '前三天', value: 'three_days'},
    {name: '前七天', value: 'seven_today'}
  ]
})

const {selectLabel, selectDay, options} = toRefs(state)

watch(() => props.data, () => {
  initPie();
})

const dayChange = () => {
  initPie();
}

let myChart: any;

const initPie = () => {
  let key = '';
  if (selectLabel.value === '_money') {
    key = selectDay.value + selectLabel.value
  } else {
    key = selectLabel.value + selectDay.value
  }

  const arr = props.data.map(item => ({value: item[key], name: item.name}));

  //初始化实例
  if (!myChart) {
    myChart = echarts.init(document.getElementById('pie') as HTMLElement)
  }

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      right: 10,
      top: 20,
      width: 300,
      height: 100,
      //对齐
      orient: 'vertical'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        avoidLabelOverlap: false,
        radius: ['40%', '70%'],
        center: ['25%', '45%'],
        // label: {
        //   show: true
        // },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: '40',
        //     fontWeight: 'bold'
        //   }
        // },
        // labelLine: {
        //   show: true
        // },
        data: arr
      }
    ]
  };

  myChart.setOption(option);
}

</script>

<style scoped>

</style>