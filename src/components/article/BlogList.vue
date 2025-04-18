<template>
  <div class="panel container transition-style">
    <h3>{{ title }}</h3>
    <div class="row g-3">
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
    </div>
  </div>
</template>

<script setup lang="ts" name="BlogList">
import Blog from './Blog.vue';
defineProps({
  title: {
    type: String,
    default: 'Blog List',
  },
});
</script>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
}

.panel h3 {
  font-weight: bold;
}
</style>