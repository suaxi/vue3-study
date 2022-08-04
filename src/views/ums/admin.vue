<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="编号"/>
    <el-table-column prop="username" label="账号"/>
    <el-table-column prop="nickName" label="姓名"/>
    <el-table-column prop="email" label="邮箱"/>
    <el-table-column prop="createTime" label="创建时间">
      <template v-slot:default="scope">
        {{ formatDate(scope.row.createTime) }}
      </template>
    </el-table-column>
    <el-table-column prop="loginTime" label="最后登录">
      <template v-slot:default="scope">
        {{ formatDate(scope.row.loginTime) }}
      </template>
    </el-table-column>
    <el-table-column prop="status" label="是否启用"/>
    <el-table-column label="操作"/>
  </el-table>
</template>

<script lang="ts" setup>
import {reactive, toRefs} from "vue";
import {userList} from '../../request/api'

const state = reactive<{
  tableData: {}[]
}>({
  tableData: []
})

const {tableData} = toRefs(state)

userList({
  keywords: '',
  pageNum: 1,
  pageSize: 10
}).then(res => {
  if (res.code === 200) {
    tableData.value = res.data.list
  }
})

//格式化时间
const formatDate = (date: string | undefined) => {
  if (!date) {
    return ''
  }
  let time = new Date(date);
  let year = time.getFullYear();
  let month = addZero(time.getMonth() + 1);
  let day = addZero(time.getDay());
  let hour = addZero(time.getHours());
  let minutes = addZero(time.getMinutes());
  let seconds = addZero(time.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
}

const addZero = (num: number) => {
  return num > 9 ? num : '0' + num
}
</script>

<style scoped>

</style>