<template>
    <div class="login">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                v-model="loginInfo.userEmail">
            <label for="floatingInput">邮箱</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                v-model="loginInfo.userPw">
            <label for="floatingPassword">密码</label>
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
import { LoginRequest } from '@/api'
const loginInfo = reactive<LoginInfo>({
    userEmail: "",
    userPw: ""
})

function Login() {
    if (LoginCheck(loginInfo)) {
        LoginRequest(loginInfo)
    }
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
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>