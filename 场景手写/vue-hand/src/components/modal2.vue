<template>
  <teleport to="body">
    <div class="modal" v-if="visible">
      <div class="title">
        <slot name="title">默认标题</slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="footer">
        <button class="confirm" @click="handleConfirm">确认</button>
        <button class="cancel" @click="handleCancel">取消</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
let visible = defineModel('visible', { type: Boolean, default: false })
const emit = defineEmits(['confirm'])
function handleConfirm() {
  visible.value = false
  emit('confirm')
}
function handleCancel() {
  visible.value = false
  alert('点击了取消')
}
</script>

<style lang="less" scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 400px;
  height: 200px;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  border: 1px solid #000000;
}
.title {
  padding: 12px 16px;
  border-bottom: 1px solid #000000;
  font-weight: 600;
}
.content {
  padding: 16px;
  border-bottom: 1px solid #000000;
}
.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .confirm {
    margin-right: 8px;
  }
}
</style>
