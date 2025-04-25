import { defineStore } from "pinia";
import { ref } from "vue";
export const useBreadcrumbStore = defineStore("breadcrumb", () => {
  const breadcrumb = ref<{ name: string; path: string }[]>([]);
  const addBreadcrumb = (name: string, path: string) => {
    breadcrumb.value.push({ name, path });
  };
  const removeBreadcrumb = (path: string) => {
    const index = breadcrumb.value.findIndex((item) => item.path === path);
    breadcrumb.value.splice(index);
  };
  const clearBreadcrumb = () => {
    breadcrumb.value = [];
  };
  return { breadcrumb, addBreadcrumb, removeBreadcrumb, clearBreadcrumb };
});
