<template>
  <el-dialog v-model="visible" title="Shipping address" :before-close="close">
    <el-form :model="form" :label-width="formLabelWidth">
      <el-form-item label="Promotion name">
        <el-input v-model="form.name" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.name" placeholder="Please select a zone">
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

import {defineProps, reactive, toRefs} from "vue";

const props = defineProps<{
  visible: boolean
}>()

const state = reactive({
  form: {
    name: ''
  },
  formLabelWidth: '120px'
})

const {form, formLabelWidth} = toRefs(state)

const emit = defineEmits<{
  //调用父组件close方法
  (event: 'close'): void
}>()

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