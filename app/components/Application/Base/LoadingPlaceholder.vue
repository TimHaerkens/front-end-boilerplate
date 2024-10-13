<script setup lang="ts">
interface Props {
  height?: string
  width?: string
  borderRadius?: string
}

withDefaults(defineProps<Props>(), {
  height: '0.875rem',
  width: '4rem',
  borderRadius: '0.5rem',
})
</script>

<template>
  <div class="placeholder">
&nbsp;
  </div>
</template>

<style lang="scss" scoped>
.placeholder {
  height: v-bind(height);
  width: v-bind(width);
  border-radius: v-bind(borderRadius);
  background: linear-gradient(to right, #d6d7d8 0%, #e2e3e4 25%, #d6d7d8 50%);
  background-size: 200% 100%;
  animation: bgAnimate 0.8s linear infinite;
}

@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
</style>
