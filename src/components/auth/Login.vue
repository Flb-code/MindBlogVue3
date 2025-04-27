<template>
    <div class="login">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                v-model="userInfo.userEmail">
            <label for="floatingInput">邮箱</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                v-model="userInfo.userPassword">
            <label for="floatingPassword">密码</label>
        </div>
        <div class="handle">
            <button type="button" class="btn btn-primary w-100 btn-lg" @click="Login">登录</button>
            <!-- <button type="button" class="btn">忘记密码</button> -->
        </div>
    </div>
</template>

<script setup lang="ts" name="Login">
import { LoginRequest } from '@/api'
import {useUserInfo} from '@/stores'
import { useRouter } from 'vue-router'
const router = useRouter()
const userInfo = useUserInfo()
function Login() {
    if (userInfo.checkLoginInfo() ){ 
        LoginRequest(router)
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