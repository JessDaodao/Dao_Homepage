<template>
  <svg
    :viewBox="viewBox"
    :width="size"
    :height="size"
    fill="currentColor"
    aria-hidden="true"
  >
    <path :d="path" />
  </svg>
</template>

<script setup>
const props = defineProps({
  path: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
  viewBox: { type: String, default: '0 0 24 24' }
})
</script>
