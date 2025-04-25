interface ArticlePublishInfo {
  articleTitle: string;
  articleOverview: string;
  articleTag: string;
  articleID: number;
  authorId: number;
}
interface ArticleItem {
  RecordID: number;
  articleTitle: string;
  articleOverview: string;
  authorId: number;
  Author: object;
  articleTag: string;
  articleID: number;
  watchCount: number;
  likeCount: number;
  commentCount: number;
  favoriteCount: number;
  createTime: Date;
  updateTime: Date;
}
export type { ArticlePublishInfo, ArticleItem };
