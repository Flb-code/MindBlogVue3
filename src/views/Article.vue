<template>
  <MainNav></MainNav>
  <RouterView></RouterView>
</template>

<script setup lang="ts" name="Article">
import MainNav from '@/components/nav/MainNav.vue';
import { useBreadcrumbStore } from '@/stores';
import { onMounted } from 'vue';
const breadcrumbStore = useBreadcrumbStore();
onMounted(() => {
  breadcrumbStore.addBreadcrumb('博客', '/article');
});
</script>

<style scoped></style>