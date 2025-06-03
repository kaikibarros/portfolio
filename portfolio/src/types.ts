// src/types/github.ts (ou similar)
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  watchers_count: number; // Similar a stars, mas pode ser útil
  forks_count: number;
  language: string | null; // Linguagem principal
  pushed_at: string; // Data do último push
  topics: string[]; // Tópicos do repositório
}