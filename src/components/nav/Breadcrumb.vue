<template>
    <div class="container mt-5">
        <n-breadcrumb separator=">">
            <n-breadcrumb-item v-for="(item, index) in breadcrumbStore.breadcrumb" :key="index"
                @click="HandleClick(item.path)">
                {{ item.name }}
            </n-breadcrumb-item>
        </n-breadcrumb>
    </div>
</template>

<script setup lang="ts" name="Breadcrumb">
import { useRouter } from 'vue-router'
import { useBreadcrumbStore } from '@/stores';
const breadcrumbStore = useBreadcrumbStore()
const router = useRouter()
const HandleClick = (path: string) => {
    router.push(path)
}
</script>

<style scoped></style>