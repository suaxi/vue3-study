<template>
  <el-dialog v-model="visible" title="Shipping address" :before-close="close">
    <el-form :model="form">
      <el-form-item>
        <el-select multiple v-model="roles" placeholder="请选择">
          <el-option v-for="role in form.roleList" :key="role.id" :label="role.name" :value="role.id"/>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="update">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import {updateUserRole} from '../../../request/api'

import {ref, watch} from "vue";

const roles = ref<number[]>([])

const props = defineProps<{
  visible?: boolean,
  form: UserRoleFormData
}>();

watch(() => props.form.userRoles, () => {
  roles.value = props.form.userRoles.map(item => item.id)
})

const emits = defineEmits<{
  (event: 'close'): void
}>();

const close = () => {
  emits('close');
};

const update = () => {
  updateUserRole({adminId: props.form.adminId, roleIds: roles.value.join(',')}).then(res => {
    if (res.code === 200) {
      close();
    }
  })
};

</script>

<style scoped>

</style>