<template>
  <div
    class="glow-border"
    :style="{ '--glow-radius': borderRadius }"
    @mousemove="onMove"
    @mouseenter="active = true"
    @mouseleave="active = false"
  >
    <div
      class="glow-ring"
      :class="{ 'is-active': active }"
      :style="{ '--mx': mx, '--my': my }"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    /** 圆角，需与包裹的按钮一致 */
    borderRadius?: string
  }>(),
  { borderRadius: '12px' },
)

const mx = ref(0.5)
const my = ref(0.5)
const active = ref(false)

function onMove(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const r = el.getBoundingClientRect()
  mx.value = (e.clientX - r.left) / r.width
  my.value = (e.clientY - r.top) / r.height
}
</script>

<style scoped>
.glow-border {
  position: relative;
}

.glow-ring {
  position: absolute;
  inset: -4px;
  border-radius: 16px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: -1;

  background: radial-gradient(
    circle 200px at calc(var(--mx) * 100%) calc(var(--my) * 100%),
    rgb(255, 225, 144),
    rgba(230, 202, 110, 0.3) 35%,
    transparent 65%
  );
}

.glow-ring.is-active {
  opacity: 1;
}
</style>
