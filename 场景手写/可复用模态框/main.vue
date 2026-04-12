<template>
  <div class="main">
    <button @click="show = true">打开</button>
    <Modal v-model:visible="show" title="删除确认" @confirm="handleDelete">
      <p>确定删除吗？</p>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import Modal from './modal.vue'
</script>

<style lang="less" scoped></style>
