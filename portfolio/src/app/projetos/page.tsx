// src/app/projetos/page.tsx
import React from 'react';
import Link from 'next/link'; // Para links externos ou para páginas de detalhe do projeto

const Projetos = [
  {
    nome: 'Meu Portfólio Pessoal',
    descricao: 'Este próprio site, desenvolvido para apresentar minhas habilidades e projetos. Criado com Next.js, TypeScript e Tailwind CSS.',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    linkRepo: 'https://github.com/kaikibarros/portfolio', 
  },
  {
    nome: 'Jogo da Senha (Bulls and Cows)',
    descricao: 'Implementação do clássico jogo de lógica Bulls and Cows, onde o jogador tenta adivinhar uma senha numérica secreta.',
    tecnologias: ['React', 'TypeScript', 'CSS Modules'],
    linkRepo: 'https://github.com/kaikibarros/portfolio/tree/main/portfolio/src/app/jogo-da-senha',
    linkDemo: '/jogo-da-senha', // Link para a página do jogo dentro do seu app
  },
  {
    nome: 'Diogo Defante',
    descricao: 'O site do Diogo Defante apresenta sua trajetória no humor, desde o início na internet com o canal "Kaozada" e passagem pelo "Parafernalha", até o sucesso solo com o "Repórter Doidão" e shows de stand-up. Explora também sua carreira musical, incluindo o EP "Robson" e o álbum "Tifane", além de detalhar seu canal no YouTube, principal plataforma do seu humor nonsense e quadros virais.',
    tecnologias: ['JS', 'HTML', 'CSS'],
    linkRepo: 'https://github.com/kaikibarros/Projeto-Diogo-Defante', 
    linkDemo: 'https://projeto-diogo-defante.vercel.app/',
  },
   {
    nome: 'Live the At The O2',
    descricao: 'Meu primeiro web site!! Uma simulação de divulgação do evento Live At The O2, um filme show da Billie Eilish',
    tecnologias: ['JS', 'HTML', 'CSS'],
    linkRepo: 'https://github.com/kaikibarros/projeto-Live-At-The-O2', 
    linkDemo: 'https://projeto-live-at-the-o2.vercel.app/',
  },
  
];

const ProjetosPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Projetos Desenvolvidos</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projetos.map((projeto, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md bg-white flex flex-col">
            <h2 className="text-2xl font-semibold text--600 mb-2">{projeto.nome}</h2>
            <p className="text-gray-600 mb-3 flex-grow">{projeto.descricao}</p>
            <div className="mb-3">
              <h3 className="text-sm font-medium mb-1">Tecnologias:</h3>
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech) => (
                  <span key={tech} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex space-x-3">
              {projeto.linkRepo && (
                <Link href={projeto.linkRepo} target="_blank" rel="noopener noreferrer"
                   className="text-blue-500 hover:text-blue-700 hover:underline">
                  Ver Repositório
                </Link>
              )}
              {projeto.linkDemo && (
                <Link href={projeto.linkDemo}
                   className="text-green-500 hover:text-green-700 hover:underline">
                  Ver Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjetosPage;