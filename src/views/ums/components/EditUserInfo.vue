<template>
  <el-dialog v-model="visible" title="Shipping address" :before-close="close">
    <el-form :model="newForm" :label-width="formLabelWidth">
      <el-form-item label="账号：">
        <el-input v-model="newForm.username" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-model="newForm.nickName" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input v-model="newForm.email" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="newForm.password" type="password" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="备注：">
        <el-input v-model="newForm.note" type="textarea" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="是否启用：">
        <el-radio v-model="newForm.status" :label="1">是</el-radio>
        <el-radio v-model="newForm.status" :label="0">否</el-radio>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="update"
        >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import {defineProps, reactive, toRefs, watch} from "vue";
import {updateUserInfo} from '../../../request/api';

const props = defineProps<{
  visible: boolean,
  form: UserInfoObj
}>()

const state = reactive<{
  formLabelWidth: string,
  newForm: UserInfoObj
}>({
  formLabelWidth: '120px',
  newForm: {}
})

const {formLabelWidth, newForm} = toRefs(state)

const emit = defineEmits<{
  //调用父组件close方法
  (event: 'close', reload?: 'reload'): void
}>()

//拷贝form
//父组件传过来的普通数据类型无法监听，可以改为箭头函数返回的形式
watch(() => props.form, () => {
  newForm.value = {...props.form}
})

//关闭弹窗
const close = (reload?: 'reload') => {
  emit('close', reload);
}

//确定提交
const update = () => {
  if (newForm.value.id) {
    updateUserInfo(newForm.value.id, newForm.value).then(res => {
      if (res.code === 200) {
        close('reload');
      }
    })
  }
}

</script>

<style scoped>

</style>