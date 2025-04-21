import type { ArticlePublishInfo } from "@/types";
import { Post } from "./request";
import { Message } from "@/utils";
import { useWriteStore } from "@/stores";
const writeStore = useWriteStore();
const ArticlePublishRequest = async (data: ArticlePublishInfo) => {
    try {
      const response = await Post("/article/publish", data);
      if (response.code === 20000) {
        Message.Success("发布成功！");
        writeStore.clear(); // 清空数据
        return;
      }
      Message.Error(response.message);
      return;
    } catch (error: any) {
      Message.Error(error);
      return ;
    }
  };
  


  export { ArticlePublishRequest};
