// src/app/experiencia-profissional/page.tsx
import React from 'react';

const Experiencias = [
  {
    cargo: 'Técnico de Suporte',
    empresa: 'Nome da Empresa Atual/Anterior',
    periodo: 'Mês/Ano de Início - Mês/Ano de Fim (ou "Atual")',
    responsabilidades: [
      'Atendimento e resolução de chamados técnicos Nível 1 e 2.',
      'Manutenção de hardware e software.',
      'Configuração de redes e sistemas.',
      'Treinamento de usuários.',
    ],
  },
  // Adicione outras experiências profissionais
];

const ExperienciaProfissionalPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Experiência Profissional</h1>
      </header>

      <section className="space-y-6">
        {Experiencias.map((exp, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-green-600">{exp.cargo}</h2>
            <p className="text-xl text-gray-700">{exp.empresa}</p>
            <p className="text-sm text-gray-500 mb-3">{exp.periodo}</p>
            <h3 className="text-lg font-medium mb-1">Principais Responsabilidades:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {exp.responsabilidades.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ExperienciaProfissionalPage;