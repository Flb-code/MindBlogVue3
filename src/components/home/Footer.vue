<template>
    <div class="w-100 self-h bg-white mt-5">
        <div class="container">
            <div class="row g-3">
                <div class="col-12 col-md-6 d-flex justify-content-center ">
                    <div class="d-flex theme-bg-light  rounded-3 self-w">
                        <span class="fw-bold theme-bg p-2 fs-5 text-white">Version</span>
                        <span class="fw-bold  p-2 fs-5 text-dark">1.0.0</span>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center gap-5">
                    <n-popover trigger="hover">
                        <template #trigger>
                            <i class="bi bi-github fs-2"></i>
                        </template>
                        <a href="https://github.com/Flb-code" target="_blank"
                            class="link-dark text-decoration-none self-hover">Flb-code</a>
                    </n-popover>
                    <n-popover trigger="hover">
                        <template #trigger>
                            <i class="bi bi-tencent-qq fs-2"></i>
                        </template>
                        <n-image width="100" :src="QqImg" />
                    </n-popover>
                    <n-popover trigger="hover">
                        <template #trigger>
                            <i class="bi bi-wechat fs-2"></i>
                        </template>
                        <n-image width="100" :src="WechatImg" />
                    </n-popover>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="Footer">
import WechatImg from "@/assets/images/Wechat.jpg"
import QqImg from "@/assets/images/qq.jpg"
</script>

<style scoped>
.self-h {
    display: flex;
    align-items: center;
    height: 165px;
}

.self-w {
    overflow: hidden;
}

.self-hover:hover {
    color: var(--MyTheme) !important;
}
</style>