<template>
  <div class="layout">
    <div class="card" ref="cardRef">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const cardRef = ref<HTMLElement | null>(null)

let animId = 0

watch(
  () => route.path,
  async (_to, from) => {
    if (!from) return

    const myId = ++animId

    const card = cardRef.value
    if (!card) return

    card.style.transition = 'none'
    card.style.width = ''
    card.style.height = ''
    card.style.overflow = ''

    const oldRect = card.getBoundingClientRect()
    const oldW = oldRect.width
    const oldH = oldRect.height

    card.style.width = oldW + 'px'
    card.style.height = oldH + 'px'
    card.style.transition = 'none'
    card.style.overflow = 'hidden'

    await new Promise((r) => setTimeout(r, 320))
    if (myId !== animId) return
    await nextTick()
    if (myId !== animId) return

    card.style.width = ''
    card.style.height = ''
    card.style.transition = 'none'
    const newRect = card.getBoundingClientRect()
    const newW = newRect.width
    const newH = newRect.height

    if (myId !== animId) {
      card.style.width = ''
      card.style.height = ''
      card.style.transition = ''
      card.style.overflow = ''
      return
    }

    if (Math.abs(newW - oldW) < 1 && Math.abs(newH - oldH) < 1) {
      card.style.width = ''
      card.style.height = ''
      card.style.transition = ''
      card.style.overflow = ''
      return
    }

    card.style.width = oldW + 'px'
    card.style.height = oldH + 'px'
    card.style.transition = 'none'

    requestAnimationFrame(() => {
      if (myId !== animId) return

      card.style.transition =
        'width 0.35s cubic-bezier(0.4, 0, 0.2, 1), height 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
      card.style.width = newW + 'px'
      card.style.height = newH + 'px'

      let remaining = 0
      if (Math.abs(newW - oldW) >= 1) remaining++
      if (Math.abs(newH - oldH) >= 1) remaining++

      let settled = false
      const settle = () => {
        if (settled || myId !== animId) return
        settled = true
        card.style.width = ''
        card.style.height = ''
        card.style.transition = ''
        card.style.overflow = ''
      }

      const onTransitionEnd = (e: TransitionEvent) => {
        if (e.propertyName === 'width' || e.propertyName === 'height') {
          remaining--
          if (remaining <= 0) settle()
        }
      }

      card.addEventListener('transitionend', onTransitionEnd)
      setTimeout(() => {
        card.removeEventListener('transitionend', onTransitionEnd)
        settle()
      }, 500)
    })
  },
)
</script>

<style>
.page-enter-active {
  transition: opacity 0.3s ease 0.4s;
}
.page-leave-active {
  transition: opacity 0.25s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}
</style>

<style scoped>
.layout {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/wallpaper.webp') center / cover no-repeat;
  overflow: hidden;
}

.layout::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 0;
}

.card {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  max-height: calc(100vh - 44px);
  padding: 22px 22px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: none;
  overflow-y: auto;
  scrollbar-width: none;
}

.card::-webkit-scrollbar {
  display: none;
}
</style>
