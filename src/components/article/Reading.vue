<template>
    <Breadcrumb />
    <div class="container mt-2">
        <n-card content-style="padding:50px">
            <div class="markdown-container" v-html="articleString"></div>
        </n-card>
    </div>
</template>

<script setup lang="ts" name="Reading">
import { onMounted, onUnmounted } from 'vue';
import Breadcrumb from '../nav/Breadcrumb.vue';
import { useBreadcrumbStore, useReadingStore} from '@/stores';
import { ArticleReadRequest } from '@/api';
import {storeToRefs} from 'pinia'
import { useRoute } from 'vue-router'
import "@/assets/markdown.css"
const breadcrumbStore = useBreadcrumbStore();
const {articleString} = storeToRefs(useReadingStore());
const route = useRoute()
const id = Number(route.query.articleId) || 0;
onMounted(() => {
    breadcrumbStore.addBreadcrumb('阅读', '/article/reading');
    ArticleReadRequest(id)
});
onUnmounted(() => {
    breadcrumbStore.clearBreadcrumb;
});
</script>

<style scoped></style>