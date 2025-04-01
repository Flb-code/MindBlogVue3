<template>
    <div class="register">
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-add"></i></span>
            <input type="text" class="form-control" v-model="registerInfo.userName" placeholder="用户名"
                aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
            <input type="text" class="form-control" v-model="registerInfo.userEmail" placeholder="邮箱"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
            <input type="password" class="form-control" v-model="registerInfo.userPw" placeholder="密码"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
            <input type="password" class="form-control" v-model="pwConfirm" placeholder="确认密码"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 input-group-lg">
            <input type="text" class="form-control col-8" v-model="registerInfo.verification_code" placeholder="输入验证码"
                aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary col-4" type="button" id="button-addon2" @click="Send">发送</button>
        </div>
        <div class="handle">
            <button type="button" class="btn btn-primary w-100 btn-lg" @click="Register">注册账号</button>
        </div>
    </div>
</template>

<script setup lang="ts" name="Register">
import type { RegisterInfo } from '@/types';
import { PasswordConfirm, RegisterCheck, CheckEmail } from '@/utils';
import { reactive, ref } from 'vue';
import { RegisterRequest, VerificationRequest } from '@/api'

const registerInfo = reactive<RegisterInfo>({
    userName: '',
    userEmail: '',
    userPw: '',
    verification_code: ''
})
const pwConfirm = ref("")

function Register() {
    if (RegisterCheck(registerInfo) && PasswordConfirm(registerInfo.userPw, pwConfirm.value)) {
        RegisterRequest(registerInfo)
    }
}
function Send() {
    if (CheckEmail(registerInfo.userEmail)) {
        VerificationRequest({
            "email": registerInfo.userEmail
        })
    }

}
</script>

<style scoped>
.register {
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