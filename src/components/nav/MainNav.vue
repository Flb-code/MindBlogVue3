<template>
    <div class="w-100 head bg-white bg-lg-transparent">
        <div class="container transition-style">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand theme-text" href="#">MindBlog</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse  navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto text-center mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/" active-class="active">主页</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/article" active-class="active">博客</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                更多内容
                            </a>
                            <ul class="dropdown-menu text-center">
                                <li><a class="dropdown-item" href="#">资源分享</a></li>
                                <li><a class="dropdown-item" href="#">优质文章</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">联系作者</a></li>
                            </ul>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#" active-class="active">其他问题</a>
                        </li>
                        <li class="nav-item ">
                            <RouterLink class="nav-link" to="/write" active-class="active">发布博客</RouterLink>
                        </li>
                    </ul>
                    <RouterLink to="/auth" class="nav-link self-btn" v-if="!userInfo.username">登录 | 注册</RouterLink>
                    <n-tag round type="info" size="large" :bordered="false" v-if="userInfo.username">{{userInfo.username}}</n-tag>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts" name="MainNav">
import { DataControl } from '@/utils';
import { RouterLink } from 'vue-router';
const userInfo=DataControl.ReadUserInfo()
</script>

<style scoped>
.navbar-brand {
    color: var(--MyTheme);
    font-family: ZQK;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 2px;
}

.navbar-brand::first-letter {
    color: var(--MySecondaryColor);
}

.nav-item {
    margin: 0px 15px;
}

.nav-link {
    color: var(--MyText);
    font-weight: bold;
    transition: all 0.2s ease-in-out;
}

.nav-link:hover {
    color: var(--MySecondaryColor)!important;
    transform: scale(1.1);
}

.nav-link.active {
    color: var(--MySecondaryColor) !important;
    border-bottom: 2px solid var(--MyTheme);
    transform: scale(1.1);
}

.collapse {
    transition: height 0.3s ease-in-out;
}

@media (min-width: 992px) {
    .bg-lg-transparent {
        background-color: transparent !important;
    }
}
</style>