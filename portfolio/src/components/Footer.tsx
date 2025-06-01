// src/components/Footer.tsx
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Para obter o ano dinamicamente

  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-4 text-center text-sm text-gray-600 border-t mt-8" > {/* Adicionei padding, text-center, text-sm, text-gray-600, border-t, mt-8 para um estilo base */}
      <p>&copy; {currentYear} Kaiki Barros. All rights reserved.</p> {/* Adicionado o ano dinâmico e envolto em <p> */}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg" // Certifique-se que este SVG está na pasta /public
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg" // Certifique-se que este SVG está na pasta /public
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/kaikibarros" // Seu link do GitHub
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.png" // Certifique-se que este PNG (ou SVG) está na pasta /public e o nome está correto
          alt="GitHub icon" // Alterado o alt text para ser mais descritivo
          width={16}
          height={16}
        />
        GitHub
      </a>
    </footer>
  );
};

export default Footer;