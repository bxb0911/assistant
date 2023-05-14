<script setup lang="ts">
import { menu } from '@/constants'
import { getImageUrl } from '@/utils'
</script>

<template>
  <main>
    <van-grid v-for="(item, i) in menu" :key="i" clickable :border="false" :column-num="menu[i].length" :center="false" :gutter="20">
      <van-grid-item v-for="(iItem, ii) in item" :key="ii" :url="iItem.url">
        <img
          :src="getImageUrl(iItem.icon)"
        />
        <div class="title">{{ iItem.title }}</div>
      </van-grid-item>
    </van-grid>
  </main>
</template>

<style lang="less" scoped>
main {
  background: #F3F5F5;
  padding: 12px;
  height: 100vh;

  :deep(.van-grid-item) {
    margin: 10px 0;
  }
  :deep(.van-grid-item__content) {
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  img {
    width: 60px;
  }

  .title {
    color: #00001D;
    font-size: 16px;
    margin-top: 48px;
    font-weight: 600;
  }
}
</style>
