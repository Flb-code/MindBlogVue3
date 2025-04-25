<template>
  <div class="container mt-5">
    <n-space vertical :size="16">
      <n-card v-for="item in articles" :key="item.RecordID" :title="item.articleTitle" size="large"
        header-style="padding: 30px 30px 10px 30px;font-size:1.4rem;font-weight:bold;"
        content-style="padding: 0px 30px 30px 30px;font-size:1rem;"
        @click="$router.push({ path: '/article/reading', query: { articleId: item.articleID } })">
        <template #header-extra>
          <n-space align="center">
            <!-- 作者信息条 -->
            <div class="author-info">
              <div class="left">
                作者
              </div>
              <div class="right">
                阿斯蒂芬
              </div>
            </div>
            <n-divider vertical />
            <n-text depth="3" style="font-size: 0.9rem;">2025-04-24</n-text>
          </n-space>
        </template>
        {{ item.articleOverview }}
        <n-space :size="8" style="padding: 10px 0px;">
          <n-tag v-for="(tag, index) in JSON.parse(item.articleTag)" :key="index" size="small" type="info" round>
            {{ tag }}
          </n-tag>
        </n-space>
      </n-card>
    </n-space>
  </div>
</template>
<script lang="ts" setup name="BlogList">
import { NCard, NSpace, NTag } from "naive-ui";
import { useArticles } from "@/stores";
import { onMounted } from "vue";
import { ArticleListRequest } from "@/api";
import { storeToRefs } from "pinia";
const { articles } = storeToRefs(useArticles());
onMounted(() => {
  ArticleListRequest({ num: 10, category: 'all' });
});
</script>
<style scoped>
.author-info {
  display: flex;
  border: 1px solid var(--MySecondaryColor);
  border-radius: 6px;
  overflow: hidden;
}

.author-info .left {
  background-color: var(--MySecondaryColor);
  color: white;
  padding: 2px 5px;
  font-weight: bold;
}

.author-info .right {
  padding: 2px 5px;
}
</style>
