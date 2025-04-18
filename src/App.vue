<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <RouterView></RouterView>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts" name="App">
import { NConfigProvider } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#144bb0',
  },
  Input: {
    borderRadius: '8px',
    color: '#f5f5f5',
    textColor: '#000',
    colorFocus: '#ffffff',
    border: 'none',
    borderHover: 'none',
    borderFocus: 'none',
    placeholderColor: '#777777',
  },
}
</script>

<style scoped></style>