// src/app/page.tsx
// import Image from "next/image"; // Descomente se usar o componente Image do Next.js para ícones, etc.

export default function Home() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'GIT', 'Github', 'Next.js', 'Python','Java','Terminal', 'Manutenção de PCs'
  ];
  return (
    <>
      {/* Seu Navbar estaria aqui ou no layout.tsx */}
      <div className="min-h-screen bg-[var(--background)] p-8 pb-20 sm:p-20 font-sans text-[var(--foreground)]">
        {/* O grid original foi removido para simplificar o layout desta seção específica.
            Se precisar dele para outros elementos na Home, pode reincorporar.
            Este container centraliza o conteúdo da seção "Sobre Mim".
        */}
        <main className="max-w-5xl mx-auto"> {/* Container para centralizar e limitar largura */}
          
          {/* SEÇÃO "SOBRE MIM" - TÍTULO E SUBTÍTULO */}
          <section className="text-center mb-12 md:mb-16 py-8 bg-[var(--section-background)] text-[var(--section-foreground)] rounded-lg shadow-lg"> {/* Fundo branco para esta seção */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 relative inline-block px-4">
                Kaiki Barros 
              <span className="block h-1 w-16 bg-[var(--accent-purple)] mx-auto mt-2"></span> {/* Linha de destaque roxa */}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--section-foreground)] opacity-80 max-w-3xl mx-auto px-4">
              Aqui você encontrará mais informações sobre mim, o que faço, e minhas habilidades atuais principalmente em termos de programação e tecnologia.
            </p>
          </section>

          {/* CONTEÚDO PRINCIPAL - DUAS COLUNAS */}
          <section className="bg-[var(--section-background)] text-[var(--section-foreground)] p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              {/* COLUNA DA ESQUERDA (Get to know me!) */}
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--section-foreground)]">
                  Conheça-me!
                </h2>
                <p className="text-base sm:text-lg leading-relaxed opacity-90">
                  Eu sou um <strong className="font-medium text-[var(--accent-purple)]">Desenvolvedor Focado em Frontend</strong>, construindo e gerenciando o front-end de Sites e Aplicações Web que levam ao sucesso do produto geral. Confira alguns dos meus trabalhos na seção <a href="/projetos" className="font-medium text-[var(--accent-purple)] hover:underline">Projetos</a>.
                </p>
                <p className="text-base sm:text-lg leading-relaxed opacity-90">
                  Também gosto de outras áreas da tecnologia e acompanho conteúdos relacionado ao que aprendi ao longo dos anos em <strong className="font-medium text-[var(--accent-purple)]">Redes, Desenvolvimento Web e Manutenção de computadores</strong>  Sinta-se à vontade para se conectar ou me seguir no meu <a href="https://linkedin.com/in/kaikibarros" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--accent-purple)] hover:underline">LinkedIn</a> e <a href="https://instagram.com/_kaikibarros" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--accent-purple)] hover:underline">Instagram</a>, onde posto conteúdo útil relacionado a Desenvolvimento Web e Tecnologias diversas.
                </p>
                <p className="text-base sm:text-lg leading-relaxed opacity-90">
                  Estou aberto a oportunidades de <strong className="font-medium text-[var(--accent-purple)]">Trabalho</strong> onde powsso contribuir, aprender e crescer. Se você tem uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em me contatar {/* Mudado para link de página */}
                </p>
                {/* Seu texto original integrado aqui */}
                <p className="text-base sm:text-lg leading-relaxed opacity-90">
                  Atualmente cursando Sistemas para Internet e atuando com Suporte Técnico na Tv Tribuna Band. Dedicado a aprimorar minhas habilidades em informática e linguagens de programação com o objetivo de construir uma carreira como Desenvolvedor de Software.
                </p>
              
              </div>

              {/* COLUNA DA DIREITA (My Skills) */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--section-foreground)]">
                  Minhas Habilidades
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[var(--skill-tag-bg)] text-[var(--skill-tag-text)] py-2 px-4 rounded-md text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}