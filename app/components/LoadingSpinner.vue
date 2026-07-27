<template>
  <div class="loading-spinner"></div>
</template>

<style scoped>
.loading-spinner {
  width: 22px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, #f0c040 94%, #0000) top / 4px 4px no-repeat,
    conic-gradient(#0000 30%, #f0c040);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
  animation: loading-144 1s infinite linear;
}

@keyframes loading-144 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
