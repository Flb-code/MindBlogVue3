import type { LoginInfo, RegisterInfo } from "@/types";
import { Post } from "./request";
import { DataControl, Message } from "@/utils";

const LoginRequest = async (data: LoginInfo) => {
  try {
    const response = await Post("/user/login", data);
    if (response.code === 10001) {
      DataControl.StorageUserInfo(response.data);
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
