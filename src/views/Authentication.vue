<template>
  <RouterLink to="/" class="d-inline-flex align-items-center text-decoration-none mt-3 ms-3 ">
    <i class="bi bi-arrow-left-square-fill fs-1 theme-text-theme self-return"></i>
  </RouterLink>

  <div class="auth">
    <h1>MindBlog</h1>
    <div class="option">
      <RouterLink to="/auth/login" active-class="active-style">账户登录</RouterLink>
      <RouterLink to="/auth/register" active-class="active-style">注册账号</RouterLink>
    </div>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts" name="Authentication">
import { RouterLink } from 'vue-router';


</script>

<style scoped>
.self-return {
  transition: all 0.2s ease-in-out;
}

.self-return:hover {
  color: #ffaf24 !important;
  transform: scale(1.1);
}

.auth {
  width: 400px;
  height: auto;
  margin: 50px auto;
}

.auth h1 {
  margin: 0px;
  font-family: ZQK;
  font-size: 50px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  color: var(--MyTheme);
}

.auth .option {
  display: flex;
  width: 100%;
  height: 50px;
  margin: 20px 0px;
  justify-content: space-around;
  align-items: center;
}

.auth .option a {
  width: 90px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}

.auth .option a:hover {
  transform: translateY(-5px);
  border-bottom: 2px solid var(--MyTheme);
}

.active-style {
  color: var(--MyTheme) !important;
  transform: translateY(-5px);
}

/* 进入的动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>