<template>
    <MainNav></MainNav>
    <BlogList :list="blogList"></BlogList>
</template>

<script setup lang="ts" name="Article">
import MainNav from '@/components/nav/MainNav.vue';
import BlogList from '@/components/article/BlogList.vue';
const blogList = [
  {
    id: 1,
    title: 'Vue 3 入门到进阶',
    overview: '这是一篇介绍 Vue 3 的文章，从基础语法到组件开发逐步讲解。',
    tags: ['Vue', '前端', '框架'],
    createdAt: '2025-04-21'
  },
  {
    id: 2,
    title: 'Golang 构建 RESTful API',
    overview: '用 Gin 快速构建 Go 后端接口，适合中后台项目。',
    tags: ['Go', '后端', 'API'],
    createdAt: '2025-04-20'
  },
  {
    id: 3,
    title: 'Vue 3 的设计思想与实战',
    overview: '深入理解 Vue 3 的响应式原理，并通过实战掌握组合式 API 的运用。',
    tags: ['Vue3', '前端'],
    createdAt: '2025-04-20',
    cover: 'https://picsum.photos/seed/vue/600/300'
  },
  {
    id: 4,
    title: '使用 Go 构建简洁高效的博客系统',
    overview: '探索使用 Go + Gin + GORM 构建一个现代博客系统的全过程。',
    tags: ['Golang', '后端'],
    createdAt: '2025-04-18',
    cover: 'https://picsum.photos/seed/go/600/300'
  }
]
</script>

<style scoped></style>