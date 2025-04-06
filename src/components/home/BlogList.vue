<template>
  <div class="panel container transition-style">
    <h3>最新博客</h3>
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