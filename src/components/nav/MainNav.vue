<template>
    <div class="w-100 head">
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">MindBlog</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto text-center mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link" href="#">主页</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">文章</a>
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
                            <a class="nav-link" href="#">其他问题</a>
                        </li>
                    </ul>
                    <div class="d-flex justify-content-center">
                        <button class="btn theme-bg" type="button">登录/注册</button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts" name="MainNav">

</script>

<style scoped>
.head {
    margin-top: 50px;
}

.navbar-brand {
    font-family: ZQK;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 2px;
}

.nav-item {
    margin: 0px 15px;
}

.nav-link {
    color: black !important;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
}

.nav-link:hover {
    color: #ffaf24 !important;
    transform: scale(1.1);
}

.nav-link.active {
    color: #ffeb3b !important;
    border-bottom: 2px solid #ffeb3b;
}

.collapse {
    transition: height 0.3s ease-in-out;
}
</style>