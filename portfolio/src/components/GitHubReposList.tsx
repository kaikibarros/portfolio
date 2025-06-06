import React from 'react';
import { GitHubRepo } from '../types'; 
import GitHubRepoCard from './GitHubRepoCard';

interface GitHubReposListProps {
  username: string;
}

async function fetchGitHubRepos(username: string): Promise<GitHubRepo[] | null> {
  try {
   
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=9`, {
      
      next: { revalidate: 3600 } // Revalida os dados a cada 1 hora (3600 segundos)
    });

    if (!response.ok) {
      console.error(`Failed to fetch repos for ${username}: ${response.status} ${response.statusText}`);
      
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      return null;
    }
    const data: GitHubRepo[] = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching GitHub repos for ${username}:`, error);
    return null;
  }
}

const GitHubReposList: React.FC<GitHubReposListProps> = async ({ username }) => {
  const repos = await fetchGitHubRepos(username);

  if (!repos) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-red-500">Oops! Não foi possível carregar os repositórios do GitHub.</p>
        <p className="text-gray-600 mt-2">Por favor, tente novamente mais tarde ou verifique o nome de usuário.</p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-700">Nenhum repositório público encontrado para este usuário.</p>
      </div>
    );
  }

  return (
    <section className="py-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {repos.map((repo) => (
          <GitHubRepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default GitHubReposList;