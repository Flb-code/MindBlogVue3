<template>
    <div class="register">
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-add"></i></span>
            <input type="text" class="form-control" placeholder="用户名" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
            <input type="text" class="form-control" placeholder="邮箱" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
            <input type="password" class="form-control" placeholder="密码" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 input-group-lg">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
            <input type="password" class="form-control" placeholder="确认密码" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 input-group-lg">
            <input type="text" class="form-control col-8" placeholder="输入验证码" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary col-4" type="button" id="button-addon2">发送</button>
        </div>
        <div class="handle">
            <button type="button" class="btn btn-primary w-100 btn-lg">注册账号</button>
            <!-- <button type="button" class="btn">忘记密码</button> -->
        </div>
    </div>
</template>

<script setup lang="ts" name="Register">

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