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
      <template #default="scope">
        {{ formatDate(scope.row.loginTime) }}
      </template>
    </el-table-column>
    <el-table-column label="是否启用">
      <template #default="scope">
        <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0"/>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="{ row }">
        <el-button type="text">分配角色</el-button>
        <el-button type="text" @click="edit(row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <EditUserInfo :visible="visible" @close="close" :form="rowData"/>
</template>

<script lang="ts" setup>
import {reactive, toRefs} from "vue";
import {userList} from '../../request/api'
import EditUserInfo from './components/EditUserInfo.vue'

const state = reactive<{
  tableData: {}[],
  visible: boolean,
  rowData: UserInfoObj
}>({
  tableData: [],
  visible: false,
  rowData: {}
})

const {tableData, visible, rowData} = toRefs(state)

const loadUserList = () => {
  userList({
    keywords: '',
    pageNum: 1,
    pageSize: 10
  }).then(res => {
    if (res.code === 200) {
      tableData.value = res.data.list
    }
  })
}

//第一次进入页面时加载
loadUserList();

//编辑
const edit = (row: UserInfoObj) => {
  visible.value = true;
  rowData.value = row;
}

//关闭弹框
const close = (reload?: 'reload') => {
  visible.value = false;
  if (reload === 'reload') {
    //修改用户信息后刷新表格数据
    loadUserList();
  }
}

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