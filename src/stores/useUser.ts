import { defineStore } from "pinia";
import { ref } from "vue";
import { Message } from "@/utils";
export const useUserInfo = defineStore("userInfo", () => {
  const userEmail = ref<string>("");
  const userPassword = ref<string>("");
  const clearLoginInfo = () => {
    userEmail.value = "";
    userPassword.value = "";
  };
  const checkLoginInfo = () => {
    if (!userEmail.value.trim() || !userPassword.value.trim()) {
      Message.Error("信息不能为空！");
      return false;
    }
    return true;
  };
  return { userEmail, userPassword, clearLoginInfo, checkLoginInfo };
});
