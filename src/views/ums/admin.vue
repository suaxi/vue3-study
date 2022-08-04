<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="编号"/>
    <el-table-column prop="username" label="账号"/>
    <el-table-column prop="nikName" label="姓名"/>
    <el-table-column prop="email" label="邮箱"/>
    <el-table-column prop="createTime" label="创建时间"/>
    <el-table-column prop="loginTime" label="最后登录"/>
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
</script>

<style scoped>

</style>