import type { ArticleListRequestInfo, ArticlePublishInfo } from "@/types";
import { Get, Post } from "./request";
import { Message, renderMarkdown } from "@/utils";
import { useWriteStore, useArticles, useReadingStore } from "@/stores";
const writeStore = useWriteStore();
const articleStore = useArticles();
const articleString = useReadingStore();
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
    return;
  }
};

const ArticleListRequest = async (info: ArticleListRequestInfo) => {
  try {
    const response = await Post("/article/data", info);
    if (response.code === 20006) {
      articleStore.articles = response.data;
    }
    return;
  } catch (error: any) {
    Message.Error(error);
    return;
  }
};

const ArticleReadRequest = async (id: number) => {
  try {
    const response = await Get("/article/read", { id });
    if (response.code === 20006) {
      // 渲染markdownString
      articleString.articleString = renderMarkdown(response.data);
    }
    return;
  } catch (error: any) {
    Message.Error(error);
    return;
  }
};

export { ArticlePublishRequest, ArticleListRequest, ArticleReadRequest };
