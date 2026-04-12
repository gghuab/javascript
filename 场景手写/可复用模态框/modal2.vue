<template>
  <Teleport to="body">
    <div v-if="visible" class="overlay" @click.self="visible = false">
      <div class="modal" :style="{ width }">
        <div class="header">
          <span>{{ title }}</span>
          <button class="close" @click="visible = false">&times;</button>
        </div>
        <div class="body">
          <slot />
        </div>
        <div class="footer">
          <slot name="footer">
            <button @click="visible = false">取消</button>
            <button class="confirm" @click="$emit('confirm')">确定</button>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const visible = defineModel({ type: Boolean, default: false })

defineProps({
  title: { type: String, default: '提示' },
  width: { type: String, default: '400px' },
})

defineEmits(['confirm'])
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: #fff;
  border-radius: 8px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  font-weight: 600;
}
.close {
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}
.body {
  padding: 16px;
}
.footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid #eee;
}
.confirm {
  background: #1677ff;
  color: #fff;
  border: none;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
