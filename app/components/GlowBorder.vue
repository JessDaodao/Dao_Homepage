<template>
  <div ref="wrapper" class="glow-border" :style="{ borderRadius }">
    <div class="glow-ring" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

withDefaults(
  defineProps<{
    borderRadius?: string
  }>(),
  { borderRadius: '16px' },
)

const wrapper = ref<HTMLElement>()

let raf = 0
let lx = 0
let ly = 0

function tick() {
  raf = 0
  const el = wrapper.value
  if (!el) return
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', String((lx - r.left) / r.width))
  el.style.setProperty('--my', String((ly - r.top) / r.height))
}

function onWinMove(e: MouseEvent) {
  lx = e.clientX
  ly = e.clientY
  if (!raf) raf = requestAnimationFrame(tick)
}

onMounted(() => window.addEventListener('mousemove', onWinMove, { passive: true }))
onUnmounted(() => {
  window.removeEventListener('mousemove', onWinMove)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<style scoped>
.glow-border {
  position: relative;
  --mx: -114;
  --my: -114;
}

.glow-ring {
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  pointer-events: none;
  z-index: -1;

  background: radial-gradient(
    circle 200px at calc(var(--mx) * 100%) calc(var(--my) * 100%),
    rgb(255, 225, 144),
    rgba(230, 202, 110, 0.3) 35%,
    transparent 65%
  );
}
</style>
