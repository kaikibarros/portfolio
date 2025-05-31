import Link from "next/link";
import styles from "./Navbar.module.css"; // Opcional: para CSS Modules

const Navbar: React.FC = () => {
  // Adicionando o tipo React.FC (Functional Component)
  return (
    <nav className={styles.navbar}> {/* Opcional: classe do CSS Module */}
      <div className={styles.logo}>
        <Link href="/">
          Kaiki Barros
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/"> {/* Corrigido: link para a página inicial */}
            Home
          </Link>
        </li>
        <li>
          <Link href="/sobre"> {/* Corrigido */}
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/experiencia-academica"> {/* Corrigido */}
            Experiência Acadêmica
          </Link>
        </li>
        <li>
          <Link href="/experiencia-profissional"> {/* Corrigido */}
            Experiência Profissional
          </Link>
        </li>
        <li>
          <Link href="/projetos"> {/* Corrigido */}
            Projetos Desenvolvidos
          </Link>
        </li>
        <li>
          {/* Ajuste este link conforme o nome da pasta do seu jogo.
              Se a pasta for 'jogo-da-senha', use '/jogo-da-senha'.
              Se a pasta for 'jogo', use '/jogo'.
          */}
          <Link href="/jogo-da-senha">
          Jogo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
