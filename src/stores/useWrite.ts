import { defineStore } from "pinia";
import { ref } from "vue";
export const useWriteStore = defineStore("write", () => {
  const articleTitle = ref<string>("");
  const articleID = ref<number>();
  const articleOverview = ref<string>("");
  const articleTag = ref<string[]>([]);
  const FileContent = ref<string>("");
  const clear=  () => {
    articleTitle.value = "";  
    articleID.value = undefined;
    articleOverview.value = "";
    articleTag.value = [];
    FileContent.value = "";
  }
  return {  articleTitle, articleID, articleOverview, articleTag,FileContent,clear };
});
