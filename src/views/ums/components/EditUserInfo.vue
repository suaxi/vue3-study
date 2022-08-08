<template>
  <el-dialog v-model="visible" title="Shipping address" :before-close="close">
    <el-form :model="newForm" :label-width="formLabelWidth">
      <el-form-item label="Promotion name">
        <el-input v-model="newForm.username" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="newForm.username" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai"/>
          <el-option label="Zone No.2" value="beijing"/>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="modify"
        >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>

import {defineProps, reactive, toRefs, watch} from "vue";

const props = defineProps<{
  visible: boolean,
  form: { username: string }
}>()

const state = reactive<{
  formLabelWidth: string,
  newForm: { username?: string }
}>({
  formLabelWidth: '120px',
  newForm: {}
})

const {formLabelWidth, newForm} = toRefs(state)

const emit = defineEmits<{
  //调用父组件close方法
  (event: 'close'): void
}>()

//拷贝form
//父组件传过来的普通数据类型无法监听，可以改为箭头函数返回的形式
watch(() => props.form, () => {
  newForm.value = {...props.form}
})

//关闭弹窗
const close = () => {
  emit('close');
}

//确定提交
const modify = () => {
  close();
}

</script>

<style scoped>

</style>