<script setup lang="ts">
import { useRoute, useRouter, RouterView } from 'vue-router'
const route = useRoute();
const router = useRouter()
console.log(route.meta.title);
</script>

<template>
  <van-nav-bar v-if="!!route.meta.title" :title="route.meta.title" left-arrow @click-left="() => router.back()"/>
  <RouterView />
</template>

<style scoped>

</style>
