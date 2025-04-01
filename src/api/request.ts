import type { LoginResponse } from "@/types/response";
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

const Post = async (url: string, data?: object): Promise<LoginResponse> => {
  return await service.post(url, data);
};

export { Post };
