<template>
    <div class="editor container">
        <n-form size="large" :rules="rules">
            <n-form-item label="文章标题" path="title">
                <n-input placeholder="请输入文章标题" />
            </n-form-item>
            <n-form-item label="内容简介" path="overview">
                <n-input type="textarea" rows="5" placeholder="请输入文章简介" />
            </n-form-item>
            <n-form-item label="文章标签">
                <n-dynamic-tags v-model:value="model.tags" />
            </n-form-item>
            <n-form-item label="上传文章" path="file">
                <n-upload multiple directory-dnd action="#" :max="5">
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
        <n-space align="center" justify="center">
            <n-button ghost color="#144bb0">
                预览
            </n-button>
            <n-button color="#144bb0">
                发布博客
            </n-button>
        </n-space>
    </div>
</template>

<script setup lang="ts" name="Editor">
import { Document as DocumentIcon } from '@vicons/ionicons5'
import { ref } from 'vue'
const model = ref({
    tags: ['vue', 'javascript', 'css']
})
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
    },
    file: {
        required: true,
        trigger: 'blur',
        message: '请上传文章'
    },
}
</script>

<style scoped>
.editor {
    box-sizing: border-box;
    width: 80%;
    height: auto;
    margin-top: 30px;
    padding: 35px 25px;
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

n-input {
    transition: border-color 0.3s ease;
    /* 鼠标悬停和焦点都有平滑过渡 */
}
</style>