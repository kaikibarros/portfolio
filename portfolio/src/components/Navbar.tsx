import Link from "next/link";
import styles from "./Navbar.module.css"; 

const Navbar: React.FC = () => {

  return (
    <nav className={styles.navbar}> 
      <div className={styles.logo}>
        <Link href="/">
          Kaiki Barros
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/sobre"> 
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/experiencia-academica"> 
            Experiência Acadêmica
          </Link>
        </li>
        <li>
          <Link href="/experiencia-profissional"> 
            Experiência Profissional
          </Link>
        </li>
        <li>
          <Link href="/projetos">
            Projetos Desenvolvidos
          </Link>
        </li>
        <li>
          <Link href="/jogo-da-senha">
          Jogo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
