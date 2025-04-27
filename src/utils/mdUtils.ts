//@ts-ignore
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-light.css'
// 初始化 markdown-it 实例
const markdown = new MarkdownIt({
  html: true, // 是否允许渲染 HTML 标签
  breaks: true, // 是否将换行符转换为 <br>
  linkify: true, // 自动识别 URL 并转换为链接
  // typographer: true, // 启用排版功能
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return "";
  },
});
const renderMarkdown = (content: string): string => {
  if (!content) return ""; // 如果内容为空，返回空字符串
  return markdown.render(content); // 使用 markdown-it 渲染 Markdown
};

export { renderMarkdown };
