import type { Response } from "@/types";
import { DataControl } from "@/utils";
import axios from "axios";

const service = axios.create({
  baseURL: "http://8.152.221.142:8000",
  timeout: 2000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 从本地存储中取出 token
    const token = DataControl.ReadUserInfo()?.token;
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Post = async (url: string, data?: object): Promise<Response> => {
  return await service.post(url, data);
};

const Get = async (url: string, params?: object): Promise<Response> => {
  return await service.get(url, { params });
};
export { Post, Get };
