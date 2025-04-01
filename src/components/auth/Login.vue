<template>
    <div class="login">
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
            <input type="text" class="form-control" v-model="loginInfo.userEmail" placeholder="邮箱" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
            <input type="password" class="form-control" v-model="loginInfo.userPw" placeholder="密码"
                aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="handle">
            <button type="button" class="btn btn-primary w-100 btn-lg" @click="Login">登录</button>
            <!-- <button type="button" class="btn">忘记密码</button> -->
        </div>
    </div>
</template>

<script setup lang="ts" name="Login">
import { reactive } from 'vue'
import { LoginCheck } from '@/utils'
import type { LoginInfo } from '@/types'
const loginInfo = reactive<LoginInfo>({
    userEmail: "",
    userPw: ""
})

function Login() {
    LoginCheck(loginInfo)
}
</script>

<style scoped>
.login {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 50px;
}

.login .handle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>