import type { LoginInfo, RegisterInfo } from "@/types";
import { Message } from "./naiveUtils";

function LoginCheck(info: LoginInfo): boolean {
  if (!info.userEmail.trim() || !info.userPw.trim()) {
    Message.Error("信息不能为空！");
    return false;
  }
  return true;
}

function RegisterCheck(info: RegisterInfo): boolean {
  if (!info.userName.trim()) {
    Message.Error("用户名不能为空！");
    return false;
  } else if (!info.userEmail.trim()) {
    Message.Error("邮箱不能为空！");
    return false;
  } else if (!info.userPw.trim()) {
    Message.Error("密码不能为空！");
    return false;
  } else if (!info.verification_code.trim()) {
    Message.Error("验证码不能为空！");
    return false;
  } else {
    return true;
  }
}

function PasswordConfirm(pw1: string, pw2: string) {
  if (pw1.trim().length < 6) {
    Message.Error("密码为6位以上字母或数字！");
    return false;
  } else if (pw1.trim() == pw2) {
    return true;
  }
  Message.Error("两次密码不一致！");
  return false;
}
export { LoginCheck, RegisterCheck, PasswordConfirm };
