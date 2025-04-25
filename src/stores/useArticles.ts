import { defineStore } from "pinia";
import type { ArticleItem } from "@/types";
import { ref } from "vue";
export const useArticles = defineStore("article", () => {
  const articles = ref<ArticleItem[]>([]);
  return { articles };
});
