<template>
  <div>
    <PageHeader title="项目" />

    <div class="projects-list">
      <ClickTilt v-for="p in projects" :key="p.name">
        <GlowBorder>
          <a
            :href="p.url"
            class="project-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="project-bg"
              :class="{ 'has-img': isImg(p.background) }"
              :style="!isImg(p.background) ? { background: p.background } : undefined"
            >
              <img
                v-if="isImg(p.background) && !failedImgs.has(p.name)"
                :src="p.background"
                alt=""
                @error="failedImgs.add(p.name)"
              />
              <MdiIcon v-else :path="mdiFolderOutline" :size="26" />
            </div>
            <div class="project-main">
              <span class="project-name">{{ p.name }}</span>
              <span class="project-desc">{{ p.desc }}</span>
            </div>
          </a>
        </GlowBorder>
      </ClickTilt>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { mdiFolderOutline } from '@mdi/js'
useHead({ title: '项目' })

const failedImgs = reactive(new Set())

function isImg(bg) {
  return typeof bg === 'string' && (bg.startsWith('/') || bg.startsWith('http'))
}

const projects = [
  {
    name: 'CSBC 官方网站（开发站）',
    desc: 'CSBC 华南马聚官网',
    url: 'https://csbc-web.csituka.top/',
    background: '/projects/csbc.webp',
  },
  {
    name: 'FimTale-Neo（开发站）',
    desc: '合作项目，主要参与视觉部分',
    url: 'https://fimtale.dev',
    background: '/projects/ft.webp',
  },
]
</script>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: #fdf5e6;
  text-decoration: none;
  transition: background-color 0.2s;
}

.project-item:hover {
  background-color: #f7e8c6;
}

.project-bg {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f0e6d0;
  color: #b0a080;
}

.project-bg.has-img {
  background-color: #fdf5e6;
}

.project-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-main {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.project-name {
  font-size: 15px;
  font-weight: 600;
  color: #7a6520;
}

.project-desc {
  font-size: 13px;
  color: #a09060;
  line-height: 1.5;
}
</style>
