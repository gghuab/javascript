<template>
  <modal v-model:visible="show" @confirm="handleConfirm">
    <template #title>这是一个标题</template>
    <template #content>
      <p>这是一些内容</p>
    </template>
  </modal>
  <button @click="show = true">打开</button>
</template>

<script setup lang="ts">
import Modal from './components/modal2.vue'
import { ref } from 'vue'

let show = ref<boolean>(false)

function handleConfirm() {
  alert('子组件点击了确认')
}
</script>

<style lang="less" scoped></style>
