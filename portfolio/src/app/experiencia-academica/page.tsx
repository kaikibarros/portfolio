// src/app/experiencia-academica/page.tsx
import React from 'react';
import styles from "./expe.module.css"
const Formacoes = [
  {
    curso: 'Manutenção e Suporte em Informática',
    instituicao: 'Escola Técnica Estadual Professor Agamemnom Magalhães (ETEPAM)',
    periodo: '(2020 - 2022)',
    descricao: 
      <ul className="list-disc list-outside pl-5">
      <li> Manutenção de computadores;</li>
      <li>Introdução à Microinformática;</li>
      <li>Componentes Eletrônicos; </li>
      <li>Redes de computadores.</li>   
      </ul>
  },
  {
    curso: 'Sistemas para Internet',
    instituicao: 'Universidade Católica de Pernambuco (UNICAP)',
    periodo: '(2024 - Cursando)',
    descricao: 
      <ul className="list-disc list-outside pl-5">
      <li> Desenvolvimento Web;</li>
      <li> Diagramas UML;</li>
      <li>Aplicações com Node.js; </li>
      <li>Engenharia de Software;</li>   
      <li>Design para Web.</li> 
      </ul>
  },
   
];

const ExperienciaAcademicaPage: React.FC = () => {
  return (

    <div className={styles.container}>
       <div className="container mx-auto p-4 space-y">
      <header className="mb-8">
        <h1 className="p-10 text-4xl font-bold text-center">Experiência Acadêmica</h1>
      </header>

      <section className="space-y-6">
        {Formacoes.map((formacao, index) => (
          <div key={index} className="p-6  rounded-lg shadow-md bg-transparent">
            <h2 className="text-2xl font-semibold text--600">{formacao.curso}</h2>
            <p className="text-xl ">{formacao.instituicao}</p>
            <p className="text-sm mb-2">{formacao.periodo}</p>
            <p className="text-600">Atividades: {formacao.descricao}</p>
          </div>
        ))}
      </section>
    </div>

    </div>
   
  );
};

export default ExperienciaAcademicaPage;