// src/components/GitHubRepoCard.tsx
import React from 'react';
import { GitHubRepo } from '../types'; // Ajuste o caminho se 'types' estiver em outro lugar
// Se não tiver o alias @, use o caminho relativo: import { GitHubRepo } from '../types/github';

interface GitHubRepoCardProps {
  repo: GitHubRepo;
}

// Função para formatar a data
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const GitHubRepoCard: React.FC<GitHubRepoCardProps> = ({ repo }) => {
  return (
    <div className="border border-[var(--skill-tag-bg)] bg-[var(--section-background)] text-[var(--section-foreground)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <h3 className="text-xl md:text-2xl font-bold text-[var(--accent-purple)] mb-2">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {repo.name}
        </a>
      </h3>
      <p className="text-sm text-[var(--section-foreground)] opacity-80 mb-4 flex-grow min-h-[60px]">
        {repo.description || 'Sem descrição.'}
      </p>
      <div className="mt-auto">
        {repo.language && (
          <p className="text-xs mb-1">
            <strong className="font-semibold">Linguagem:</strong>
            <span className="ml-1 inline-block bg-[var(--skill-tag-bg)] text-[var(--skill-tag-text)] px-2 py-0.5 rounded-full">
              {repo.language}
            </span>
          </p>
        )}
        {repo.topics && repo.topics.length > 0 && (
          <div className="mb-3">
            <strong className="text-xs font-semibold">Tópicos:</strong>
            <div className="flex flex-wrap gap-1 mt-1">
              {repo.topics.map(topic => (
                <span key={topic} className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-between items-center text-xs text-[var(--section-foreground)] opacity-70 mb-2">
          <span>⭐ {repo.stargazers_count} Estrelas</span>
          <span>{repo.forks_count} Forks</span>
        </div>
        <p className="text-xs text-[var(--section-foreground)] opacity-60">
          Último push: {formatDate(repo.pushed_at)}
        </p>
      </div>
    </div>
  );
};

export default GitHubRepoCard;