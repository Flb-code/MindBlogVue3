<template>
    <div class="editor container">
        <n-space vertical :size="30">
            <n-form size="large" :rules="rules" :model="formModel">
                <n-form-item label="文章标题" path="title">
                    <n-input v-model:value="writeStore.articleTitle" placeholder="请输入文章标题" />
                </n-form-item>
                <n-form-item label="内容简介" path="overview">
                    <n-input v-model:value="writeStore.articleOverview" type="textarea" rows="2"
                        placeholder="请输入文章简介" />
                </n-form-item>
                <n-form-item label="文章标签">
                    <n-dynamic-tags v-model:value="writeStore.articleTag" :max="3" />
                </n-form-item>
                <n-form-item label="上传文章">
                    <n-upload accept=".md" action="http://localhost:8000/upload/article" :headers="uploadHeaders"
                        :before-upload="beforeUpload" :on-finish="upLoadFinish" :on-error="upLoadFail" :max="1"
                        v-model:file-list="writeStore.fileList">
                        <n-upload-dragger>
                            <div style="margin-bottom: 12px">
                                <n-icon size="48" :depth="3">
                                    <DocumentIcon />
                                </n-icon>
                            </div>
                            <n-text style="font-size: 16px">
                                点击或者拖动文件到该区域来上传
                            </n-text>
                            <n-p depth="3" style="margin: 8px 0 0 0">
                                请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
                            </n-p>
                        </n-upload-dragger>
                    </n-upload>
                </n-form-item>
            </n-form>
            <n-card title="文章预览">
                <div class="markdown-container" v-html="writeStore.FileContent"></div>
            </n-card>
            <n-space align="center" justify="center">
                <n-button color="#144bb0" @click="publish">
                    发布博客
                </n-button>
            </n-space>
        </n-space>

    </div>
</template>

<script setup lang="ts" name="Editor">
import { Document as DocumentIcon } from '@vicons/ionicons5'
import { ref, computed } from 'vue'
//@ts-ignore
import MarkdownIt from 'markdown-it'
import "@/assets/markdown.css"
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import { type UploadFileInfo } from "naive-ui";
import { Message } from '@/utils'
import { useWriteStore } from '@/stores'
import { ArticlePublishRequest } from '@/api'
import { DataControl } from "@/utils";
const writeStore = useWriteStore()
const formModel = computed(() => ({
    title: writeStore.articleTitle,
    overview: writeStore.articleOverview,
}))

const rules = {
    title: {
        required: true,
        trigger: 'blur',
        message: '请输入文章标题'
    },
    overview: {
        required: true,
        trigger: 'blur',
        message: '请输入文章简介'
    }
}

const md = new MarkdownIt({
    html: true, // 是否允许渲染 HTML 标签
    breaks: true, // 是否将换行符转换为 <br>
    linkify: true, // 自动识别 URL 并转换为链接
    // typographer: true, // 启用排版功能
    highlight: function (str: string, lang: string) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) { }
        }
        return "";
    },
});

//上传完成后回调
const upLoadFinish = (options: { file: UploadFileInfo, event?: ProgressEvent }) => {
    const rawFile = options.file.file
    if (!rawFile) return
    const responseText = (options.event?.target as XMLHttpRequest)?.responseText
    console.log(responseText);

    if (responseText) {
        const response = JSON.parse(responseText)
        if (response.code !== 20000) {
            Message.Error(response.message)
            return
        }
        writeStore.articleID = response.data
        Message.Success('上传成功')
    }
    const reader = new FileReader()
    reader.onload = (e) => {
        const content = e.target?.result as string
        writeStore.FileContent = md(content)
    }
    reader.readAsText(rawFile)
}
//上传失败回调
const upLoadFail = () => {
    Message.Error('上传失败')
}

//发布事件
const publish = () => {
    const { articleTitle, articleOverview, articleTag, articleID } = writeStore
    if (!articleTitle || !articleOverview || !articleTag || !articleID) {
        Message.Error('请填写完整信息')
        return
    }
    const data = {
        articleTitle,
        articleOverview,
        articleTag: JSON.stringify(articleTag),
        articleID,
        authorId: 1
    }
    ArticlePublishRequest(data)
}

// 配置上传请求头
const uploadHeaders = ref({
    "Authorization": DataControl.ReadUserInfo()?.token,
    "Content-Type": "multipart/form-data", // 确保是文件上传
});
// `beforeUpload` 用于在上传前进行处理，返回 `false` 阻止默认上传
const beforeUpload = (file: File) => {
    // 这里你可以进行文件的检查等操作
    console.log(file);
    return true; // 返回 true 继续上传
};
</script>

<style scoped>
.editor {
    box-sizing: border-box;
    width: 80%;
    height: auto;
    margin-top: 30px;
    padding: 35px 25px;
    border-radius: 20px;
    background-color: white;
}

.editor .title {
    width: 100%;
    height: 50px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;
}

.editor .preview {
    width: 100%;
    height: auto;
    padding: 20px;
    border-radius: 10px;
}
</style>