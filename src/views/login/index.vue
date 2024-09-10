<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到ZJK管理系统</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" :loading="loading" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { getWelcomeMessage } from '@/utils/time'
let useStore = useUserStore() 
let $router = useRouter()
let loading = ref(false)
let loginForms = ref()
let loginForm = reactive({username: '', password: ''})
const login = async () => {
  await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `Hi,${getWelcomeMessage()}好`
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
  }
}

const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('username length at least 5'))
  }
}

const rules = {
  username: [
    // {required: true, min: 6, max: 10, message: 'at lease 6 length', trigger: 'blur'}
    {trigger: 'blur', validator: validatorUsername}
  ],
  password: [
    {required: true, min:6, max:15, message: 'password length at least 6', trigger:'change'}
  ]
}

</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
//   position: relative;

  .login_form {
    position: relative;
    /* margin-top: 100px; */
    width: 80%;
    top: 30vh;
    padding: 40px;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;

    h1 {
      color: white;
      font-size: 30px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }
    .login_btn {
        width: 100%;
    }
  }
}
</style>
