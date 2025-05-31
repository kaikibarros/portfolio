// src/app/sobre/page.tsx
import React from 'react';

const TecnologiasUtilizadas = [
  { nome: 'Next.js', descricao: 'Framework React para renderização no servidor e sites estáticos.' },
  { nome: 'React', descricao: 'Biblioteca JavaScript para construir interfaces de usuário.' },
  { nome: 'TypeScript', descricao: 'Superset do JavaScript que adiciona tipagem estática.' },
  { nome: 'Tailwind CSS', descricao: 'Framework CSS utility-first para estilização rápida.' },
  // Adicione outras tecnologias, módulos, APIs, etc.
];

const SobrePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Sobre o Projeto</h1>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tecnologias e Módulos Utilizados</h2>
        <p className="mb-6">
          Este projeto foi desenvolvido utilizando um conjunto moderno de tecnologias e ferramentas
          para garantir uma experiência de usuário robusta, performática e agradável. Abaixo estão
          listadas as principais tecnologias empregadas:
        </p>
        <ul className="list-disc pl-5 space-y-3">
          {TecnologiasUtilizadas.map((tech) => (
            <li key={tech.nome}>
              <strong className="font-medium">{tech.nome}:</strong> {tech.descricao}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Objetivo do Projeto</h2>
        <p>
          {/* Descreva aqui o objetivo principal do seu portfólio/aplicação */}
          Este portfólio digital foi criado com o intuito de apresentar minhas habilidades,
          projetos e experiências na área de desenvolvimento de software, servindo como uma
          plataforma centralizada para demonstrar minha trajetória e aspirações profissionais.
        </p>
      </section>
    </div>
  );
};

export default SobrePage;