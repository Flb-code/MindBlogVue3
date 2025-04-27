import { defineStore } from "pinia";
import { ref } from "vue";
import { type UploadFileInfo } from "naive-ui";
export const useWriteStore = defineStore("write", () => {
  const articleTitle = ref<string>("");
  const articleID = ref<number>();
  const articleOverview = ref<string>("");
  const articleTag = ref<string[]>([]);
  const FileContent = ref<string>("");
  const fileList = ref<UploadFileInfo[]>([]);
  const clear = () => {
    articleTitle.value = "";
    articleID.value = undefined;
    articleOverview.value = "";
    articleTag.value = [];
    FileContent.value = "";
    fileList.value = [];
  };
  return {
    articleTitle,
    articleID,
    articleOverview,
    articleTag,
    FileContent,
    fileList,
    clear,
  };
});
