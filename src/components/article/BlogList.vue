<template>
  <div class="container mt-5">
    <n-space vertical :size="16">
      <n-card v-for="item in list" :key="item.id" :title="item.title" size="large" header-style="padding: 30px 30px 10px 30px;font-size:1.2rem;font-weight:bold;" content-style="padding: 0px 30px 30px 30px;">
        <template #header-extra> 发布日期 </template>
          {{ item.overview }}
        <n-space :size="8" style="padding: 10px 0px;">
          <n-tag v-for="(tag, index) in item.tags" :key="index" size="small" type="info" round>
            {{ tag }}
          </n-tag>
        </n-space>
      </n-card>
    </n-space>
  </div>
</template>
<script lang="ts" setup name="BlogList">
import { NCard, NSpace, NTag} from "naive-ui";

interface BlogItem {
  id: number;
  title: string;
  overview: string;
  tags: string[];
  createdAt: string;
}

const props = defineProps<{
  list: BlogItem[];
}>();

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
};
</script>
<style scoped></style>
