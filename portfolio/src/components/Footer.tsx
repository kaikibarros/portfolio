// src/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link'; // Certifique-se de importar o Link
import React from 'react';
import styles from './Footer.module.css'; // Usaremos este para o estilo principal

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerContainer}> {/* Container principal do footer */}
      <div className={styles.topSection}>   {/* Seção superior com infos e social */}
        <div className={styles.infoColumn}>
          <h1 className={styles.infoName}>Kaiki Barros</h1>
          <p className={styles.infoDescription}>
            Um desenvolvedor web focado em frontend que constrói o frontend de sites e aplicativos da web.
          </p>
        </div>
        <div className={styles.socialColumn}>
          <h2 className={styles.socialTitle}>SOCIAL</h2>
          <div className={styles.socialLinksContainer}>
            <a
              href="https://www.linkedin.com/in/seu-perfil/" // SUBSTITUA PELO SEU LINKEDIN
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Image
                src="/linkedin.png" // Ícone do LinkedIn na pasta /public
                alt="LinkedIn"
                width={24} // Ajuste o tamanho conforme necessário
                height={24}
                className={styles.socialIcon}
              />
            </a>
            <a
              href="mailto:kaikibarros2004@gmail.com" 
              className={styles.socialLink}
              aria-label="Email"
            >
              <Image
                src="/gmail.png" // fazer troca do ico 
                alt="Email"
                width={24}
                height={24}
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://github.com/kaikibarros" // Seu link do GitHub
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Image
                src="/github.png" 
                alt="GitHub"
                width={24}
                height={24}
                className={styles.socialIcon}
              />
            </a>
            {/* Adicione mais links sociais aqui se desejar, seguindo o mesmo padrão */}
          </div>
        </div>
      </div>

      <hr className={styles.separator} /> {/* Linha separadora */}

      <div className={styles.bottomSection}> {/* Seção inferior com copyright */}
        <p>
          &copy; Copyright {currentYear}. Made by{' '}
          <Link href="/" className={styles.copyrightLink}> {/* Link para seu portfólio/home */}
            Kaiki Barros
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;