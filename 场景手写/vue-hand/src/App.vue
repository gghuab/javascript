<template>
  <div class="main">
    <button @click="show = true">打开</button>
    <Modal v-model:visible="show" title="删除确认" @confirm="handleDelete">
      <p>确定删除吗？</p>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import Modal from './components/modal.vue'
import { ref } from 'vue'
const show = ref(false)
function handleDelete() {
  alert('删除成功')
}
</script>

<style lang="less" scoped></style>
