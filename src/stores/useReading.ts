import { defineStore } from "pinia";
import { ref } from "vue";

export const useReadingStore = defineStore("reading", () => {
  const articleString = ref<string>("");
  return { articleString };
});
