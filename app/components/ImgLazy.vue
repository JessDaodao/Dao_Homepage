<template>
  <div ref="rootRef" class="lazy-img" :style="wrapperStyle">
    <Transition name="spinner-fade">
      <div v-if="!noSpinner && spinnerVisible && !loaded && !errored" class="lazy-img-spinner"></div>
    </Transition>

    <div v-if="errored" class="lazy-img-fallback">
      <span>?</span>
    </div>

    <img
      v-if="resolvedSrc && !errored"
      :src="resolvedSrc"
      :alt="alt"
      v-bind="$attrs"
      class="lazy-img-el"
      :class="[imgClass, { 'img-loaded': loaded }]"
      :style="imgStyle"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  src: string
  alt?: string
  imgClass?: string
  objectFit?: string
  rootMargin?: string
  timeout?: number
  fadeIn?: number
  noSpinner?: boolean
  wrapperStyle?: Record<string, string | number>
}>(), {
  alt: '',
  imgClass: '',
  objectFit: 'cover',
  rootMargin: '200px',
  timeout: 2000,
  fadeIn: 400,
  noSpinner: false,
  wrapperStyle: () => ({}),
})

defineOptions({ inheritAttrs: true })

const rootRef = ref<HTMLElement | null>(null)
const loaded = ref(false)
const errored = ref(false)
const spinnerVisible = ref(false)
const resolvedSrc = ref('')

const imgStyle = computed(() => ({ objectFit: props.objectFit } as Record<string, string>))

let observer: IntersectionObserver | null = null
let spinnerTimer: ReturnType<typeof setTimeout> | null = null

function startSpinnerTimer() {
  spinnerTimer = setTimeout(() => {
    if (!loaded.value && !errored.value) {
      spinnerVisible.value = true
    }
  }, props.timeout)
}

function clearSpinnerTimer() {
  if (spinnerTimer) {
    clearTimeout(spinnerTimer)
    spinnerTimer = null
  }
}

function onLoad() {
  loaded.value = true
  errored.value = false
  clearSpinnerTimer()
}

function onError() {
  errored.value = true
  loaded.value = false
  clearSpinnerTimer()
}

onMounted(() => {
  if (!rootRef.value) return

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return
      if (entry.isIntersecting) {
        resolvedSrc.value = props.src
        if (!props.noSpinner) startSpinnerTimer()
        observer?.unobserve(entry.target)
      }
    },
    { rootMargin: props.rootMargin },
  )

  observer.observe(rootRef.value)
})

onUnmounted(() => {
  clearSpinnerTimer()
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.lazy-img {
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.lazy-img-spinner {
  position: absolute;
  inset: 0;
  margin: auto;
  z-index: 1;
  width: 24px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, #f0c040 94%, #0000) top / 6px 6px no-repeat,
    conic-gradient(#0000 30%, #f0c040);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 6px), #000 0);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 6px), #000 0);
  animation: lazy-spin 1s infinite linear;
}

@keyframes lazy-spin {
  100% { transform: rotate(1turn); }
}

.spinner-fade-enter-active,
.spinner-fade-leave-active {
  transition: opacity 0.25s ease;
}
.spinner-fade-enter-from,
.spinner-fade-leave-to {
  opacity: 0;
}

.lazy-img-el {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  transition: opacity v-bind(fadeIn + 'ms') ease;
}
.lazy-img-el.img-loaded {
  opacity: 1;
}

.lazy-img-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 24px;
  font-weight: 700;
}
</style>
