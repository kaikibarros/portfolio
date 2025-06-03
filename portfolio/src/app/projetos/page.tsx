// src/app/projetos/page.tsx
import React from 'react';
import Link from 'next/link';
import styles from "./projetos.module.css"; // Seu CSS Module para o container da página
import GitHubReposList from '@/components/GitHubReposList'; // Componente para listar repos do GitHub (ajuste o caminho se necessário)

// SEU USERNAME DO GITHUB - SUBSTITUA!
const GITHUB_USERNAME = "kaikibarros";

// Seus projetos manuais
const ProjetosManuais = [
  {
    nome: 'Jogo da Senha (Bulls and Cows)',
    descricao: 'Implementação do clássico jogo de lógica Bulls and Cows, onde o jogador tenta adivinhar uma senha numérica secreta.',
    tecnologias: ['React', 'TypeScript', 'CSS Modules'],
    linkRepo: 'https://github.com/kaikibarros/portfolio/tree/main/portfolio/src/app/jogo-da-senha',
    linkDemo: '/jogo-da-senha',
  },
];

const ProjetosPage: React.FC = () => {
  return (
    // Mantém o seu container principal da página
    <div className={styles.container}>
      {/* Container interno para conteúdo com padding e centralização do Tailwind */}
      <div className="container mx-auto p-4 min-h-screen"> {/* Adicionei min-h-screen para ocupar a tela */}
        
        {/* Cabeçalho principal da página de projetos */}
        <header className="mb-10 md:mb-16 text-center">
          
        </header>

        {/* Seção para Projetos do GitHub */}
        <section id="github-projects" className="mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold text-center text-[var(--section-foreground)] mb-8">
            Meus Repositórios no GitHub
          </h2>
          <GitHubReposList username={GITHUB_USERNAME} />
        </section>

        {/* Seção para Projetos Manuais / Destacados */}
        <section id="manual-projects">
          <h2 className="text-3xl font-semibold text-center text-[var(--section-foreground)] mb-8">
            Outros Projetos e Estudos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ProjetosManuais.map((projeto, index) => (
              <div key={index} className="bg-[var(--section-background)] text-[var(--section-foreground)] p-6 border border-gray-700/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                {/* Corrigi text--600 para uma cor válida, ex: text-[var(--accent-purple)] ou text-purple-600 */}
                <h3 className="text-2xl font-semibold text-[var(--accent-purple)] mb-3">{projeto.nome}</h3>
                <p className="text-sm opacity-80 mb-4 flex-grow min-h-[60px]">{projeto.descricao}</p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700 text-gray-200 px-2.5 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex items-center space-x-4 pt-3 border-t border-gray-700/20">
                  {projeto.linkRepo && (
                    <Link href={projeto.linkRepo} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
                      Ver Repositório
                    </Link>
                  )}
                  {projeto.linkDemo && (
                    <Link href={projeto.linkDemo} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-green-400 hover:text-green-300 hover:underline">
                      Ver Demo
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjetosPage;