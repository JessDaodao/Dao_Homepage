<template>
  <div>
    <PageHeader title="项目" />

    <div v-if="pending" class="status-msg">
      <LoadingSpinner />
    </div>

    <div v-else-if="error" class="status-msg status-error">
      获取项目列表失败，请稍后重试
    </div>

    <div v-else class="projects-list">
      <a
        v-for="repo in repos"
        :key="repo.id"
        :href="repo.html_url"
        class="project-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="project-main">
          <span class="project-name">{{ repo.name }}</span>
          <span v-if="repo.description" class="project-desc">{{ repo.description }}</span>
        </div>
        <div class="project-meta">
          <span v-if="repo.language" class="meta-lang">
            <span class="lang-dot" :style="{ background: langColor(repo.language) }"></span>
            {{ repo.language }}
          </span>
          <span v-if="repo.stargazers_count > 0" class="meta-stars">
            <MdiIcon :path="mdiStarOutline" :size="14" />
            {{ repo.stargazers_count }}
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiStarOutline } from '@mdi/js'

interface GitHubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
}

const langColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Vue: '#41b883',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Dart: '#00B4AB',
  Ruby: '#701516',
  PHP: '#4F5D95',
}

function langColor(lang: string): string {
  return langColors[lang] || '#888'
}

const { data: repos, pending, error } = useFetch<GitHubRepo[]>(
  'https://api.github.com/users/JessDaodao/repos?per_page=100&sort=updated',
  { server: false },
)
</script>

<style scoped>
.status-msg {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-size: 14px;
  padding: 40px 0;
}

.status-error {
  color: #c06060;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: #fdf5e6;
  text-decoration: none;
  transition: background-color 0.2s;
}

.project-item:hover {
  background-color: #f7e8c6;
}

.project-main {
  display: flex;
  flex-direction: column;
  gap: 3px;
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

.project-meta {
  display: flex;
  align-items: center;
  gap: 14px;
}

.meta-lang {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #999;
}

.lang-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.meta-stars {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  color: #999;
}
</style>
