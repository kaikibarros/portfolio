
import React from 'react';
import styles from './exp.module.css';

const Experiencias = [
  {
    cargo: 'Estagiário Técnico',
    empresa: 'Rede Tribuna',
    periodo: '2024 - Atual',
    responsabilidades: [
      'Atendimento e resolução de chamados técnicos Nível 1 e 2.',
      'Manutenção de hardware e software.',
      'Configuração de redes e sistemas.',
    ],
  },
];

const ExperienciaProfissionalPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Experiência Profissional</h1>
      </header>
      <section className={styles.contentSection}>
        {Experiencias.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
            <h2 className={styles.jobTitle}>{exp.cargo}</h2>
            <p className={styles.companyText}>{exp.empresa}</p>
            <p className={styles.periodText}>{exp.periodo}</p>
            <h3 className={styles.responsibilitiesLabel}>Principais Responsabilidades:</h3>
            <ul className={styles.responsibilitiesList}>
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