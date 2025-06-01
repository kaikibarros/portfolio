// import Image from "next/image";

export default function Home() {
  return (
    // Envolvemos tudo em um fragmento ou div se necessário,
    // mas a Navbar geralmente fica fora do grid principal da página
    // ou o grid é ajustado para acomodá-la.
    // Para este exemplo, colocarei a Navbar acima do div principal.
    <>
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
       
      </div>
    </>
  );
}