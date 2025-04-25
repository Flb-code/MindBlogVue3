import type { Response } from "@/types";
import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 2000,
});

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
  return await service.get(url, {params});
};
export { Post, Get };
