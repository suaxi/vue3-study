<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
    <el-form-item prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off"/>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {reactive, ref, toRefs} from "vue";
import {loginApi, currentUserInfoApi} from '../../request/api'
import Cookie from 'js-cookie'
import {useRouter} from "vue-router";

const state = reactive({
  ruleForm: {
    username: 'aaa',
    password: '123456'
  }
})
//获取el-form组件对象
let ruleFormRef = ref()
//获取路由对象
let router = useRouter();

const validatePwd = (rule: unknown, value: string | undefined, callback: (msg?: string) => void) => {
  if (!value) {
    callback('密码不能为空')
  } else {
    callback()
  }
}

//校验规则
const rules = reactive({
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
  ],
  password: [
    {validator: validatePwd, trigger: 'blur'}
  ]
})

let {ruleForm} = toRefs(state)

const login = () => {
  ruleFormRef.value.validate().then(() => {
    console.log('校验通过')
    loginApi({
      password: ruleForm.value.password,
      username: ruleForm.value.username
    }).then(res => {
      if (res.code === 200) {
        //存储token
        Cookie.set('token', res.data.tokenHead + res.data.token, {expires: 1})
        //获取用户信息
        currentUserInfoApi().then(res => {
          if (res.code === 200) {
            //首页跳转
            router.push('/homePage')
          }
        })
      }
    })
  }).catch(() => {
    console.log('校验不通过')
  })
}

</script>

<style scoped>

</style>