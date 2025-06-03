// src/app/experiencia-academica/page.tsx
import React from 'react';
import styles from "./expe.module.css";

const Formacoes = [
  {
    curso: 'Manutenção e Suporte em Informática',
    instituicao: 'Escola Técnica Estadual Professor Agamemnon Magalhães (ETEPAM)',
    periodo: '(2020 - 2022)',
    descricao: (
      <ul className={styles.activitiesList}>
        <li>Manutenção de computadores;</li>
        <li>Introdução à Microinformática;</li>
        <li>Componentes Eletrônicos;</li>
        <li>Redes de computadores.</li>
      </ul>
    ),
  },
  {
    curso: 'Sistemas para Internet',
    instituicao: 'Universidade Católica de Pernambuco (UNICAP)',
    periodo: '(2024 - Cursando)',
    descricao: (
      <ul className={styles.activitiesList}>
        <li>Desenvolvimento Web;</li>
        <li>Diagramas UML;</li>
        <li>Aplicações com Node.js;</li>
        <li>Engenharia de Software;</li>
        <li>Design para Web.</li>
      </ul>
    ),
  },
];

const ExperienciaAcademicaPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Experiência Acadêmica</h1>
      </header>
      <section className={styles.contentSection}>
        {Formacoes.map((formacao, index) => (
          <div key={index} className={styles.formationCard}>
            <h2 className={styles.courseTitle}>{formacao.curso}</h2>
            <p className={styles.institutionText}>{formacao.instituicao}</p>
            <p className={styles.periodText}>{formacao.periodo}</p>
            <div>
              <span className={styles.activitiesLabel}>Atividades:</span>
              {formacao.descricao}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ExperienciaAcademicaPage;