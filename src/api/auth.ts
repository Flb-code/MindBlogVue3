import type { LoginInfo, RegisterInfo } from "@/types";
import { Post } from "./request";
import { DataControl, Message } from "@/utils";
import { useUserInfo } from "@/stores";
import type { useRouter } from "vue-router";

const LoginRequest = async (router: ReturnType<typeof useRouter>) => {
  try {
    const userInfo = useUserInfo();
    const data: LoginInfo = {
      userEmail: userInfo.userEmail,
      userPw: userInfo.userPassword,
    };
    const response = await Post("/user/login", data);
    if (response.code === 10001) {
      userInfo.clearLoginInfo();
      DataControl.StorageUserInfo(response.data);
      router.push("/");
      Message.Success("欢迎，" + response.data.username);
      return;
    }
    Message.Error(response.message);
  } catch (error: any) {
    Message.Error(error);
  }
};

const RegisterRequest = async (data: RegisterInfo) => {
  try {
    const response = await Post("/user/register", data);
    if (response.code === 10000) {
      Message.Success(response.message);
      return;
    }
    Message.Error(response.message);
  } catch (error: any) {
    Message.Error(error);
  }
};
const VerificationRequest = async (data: object) => {
  try {
    const response = await Post("/user/SendVerificationCode", data);
    if (response.code === 10012) {
      Message.Success(response.message);
      return;
    }
    Message.Error(response.message);
  } catch (error: any) {
    Message.Error(error);
  }
};

export { LoginRequest, RegisterRequest, VerificationRequest };
