// src/app/experiencia-academica/page.tsx
import React from 'react';

const Formacoes = [
  {
    curso: 'Sistemas para Internet',
    instituicao: 'Nome da Instituição de Ensino',
    periodo: 'Ano de Início - Ano de Conclusão (ou "Cursando")',
    descricao: 'Principais disciplinas e projetos desenvolvidos durante o curso. Habilidades adquiridas.',
  },
  // Adicione outras formações ou cursos relevantes
];

const ExperienciaAcademicaPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Experiência Acadêmica</h1>
      </header>

      <section className="space-y-6">
        {Formacoes.map((formacao, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-blue-600">{formacao.curso}</h2>
            <p className="text-xl text-gray-700">{formacao.instituicao}</p>
            <p className="text-sm text-gray-500 mb-2">{formacao.periodo}</p>
            <p className="text-gray-600">{formacao.descricao}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ExperienciaAcademicaPage;