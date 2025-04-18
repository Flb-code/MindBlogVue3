<template>
    <div class="col-12 col-md-6">
        <div class="blog">
            <a href="#" class="d-flex align-items-center gap-2 text-decoration-none text-dark">
                <img src="@/assets/images/user.jpg" alt="avatar" class="rounded-circle avatar" width="40" height="40">
                <span class="fw-bold fs-5 username">阿斯蒂芬特普</span>
            </a>
            <h4 class="fw-bold">MindBlog项目</h4>
            <p>MindBlog 是一个专注于技术分享与思想表达的个人博客平台。在这里，你可以阅读到关于编程、学习、思考与创意的文章。我们相信，每一段文字，都是思想的延伸；每一次分享，都是成长的足迹。</p>
            <Interactive></Interactive>
        </div>
    </div>
</template>

<script setup lang="ts" name="Blog">
import Interactive from './Interactive.vue';
</script>

<style scoped>
.blog {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
}

.blog .username:hover {
    color: var(--MyTheme) !important;
}

.blog h4 {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    margin-bottom: 0px;
    color: var(--MyText);
}

.blog h4:hover {
    transform: translateX(20px);
    color: var(--MyTheme);
}

.blog p {
    margin-bottom: 0px;
}
</style>