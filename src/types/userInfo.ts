interface LoginInfo {
  userEmail: string;
  userPw: string;
}
interface RegisterInfo {
  userEmail: string;
  userName: string;
  userPw: string;
  verification_code: string;
}
export type { LoginInfo, RegisterInfo };
