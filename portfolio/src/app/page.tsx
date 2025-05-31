import Image from "next/image";
import Navbar from "../components/Navbar"; // 1. Importe a Navbar

export default function Home() {
  return (
    // Envolvemos tudo em um fragmento ou div se necessário,
    // mas a Navbar geralmente fica fora do grid principal da página
    // ou o grid é ajustado para acomodá-la.
    // Para este exemplo, colocarei a Navbar acima do div principal.
    <>
      <Navbar /> {/* 2. Adicione o componente Navbar aqui */}
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* Ajustei grid-rows para 'auto' para a navbar e footer, se a navbar estivesse dentro deste grid.
            Como está fora, o grid original pode ser mantido, mas pode precisar de ajustes
            para que a navbar não sobreponha o conteúdo ou para que o min-h-screen funcione como esperado.
            Uma abordagem comum é a Navbar estar no layout.tsx para ser global.
            Se for específica da página, pode ser assim, ou o layout da página precisa ser pensado
            para acomodá-la bem.
        */}
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          {/* Conteúdo do seu <main> aqui.
              Você pode adicionar títulos, parágrafos, etc.
              Exemplo:
          */}
          <h1 className="text-4xl font-bold">Sim, eu sou Kaiki Barros</h1>
          <p>Atualmente cursando Sistemas para Internet e atuando com Suporte Técnico. <br></br>Dedicado a aprimorar minhas habilidades em programação com o objetivo <br></br> de construir uma carreira como Desenvolvedor de Software.</p>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          ©Kaiki Barros. All right reserved.
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg" // Certifique-se que esses SVGs estão na pasta /public
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
              src="/window.svg" // Certifique-se que esses SVGs estão na pasta /public
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/kaikibarros"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.png" // Certifique-se que esses SVGs estão na pasta /public
        
              alt="Globe icon"
              width={16}
              height={16}
              
            />
            Github
          </a>
        </footer>
      </div>
    </>
  );
}