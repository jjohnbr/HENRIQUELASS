import Header from "./COMPONENTES/Header";
import About from "./COMPONENTES/About";
import Skills from "./COMPONENTES/Skills";
import Projects from "./COMPONENTES/Projects";
import Button from "./COMPONENTES/Button";

function App() {
  const tecnologias = [
    "Adobe Photoshop",
    "Graphic Design",
    "Design de aplicativos web",
    "Ferramentas de projeto",
    "Estruturas de design",
    "Sistemas de gerenciamento de conteúdo",
    "Experiência do usuário (UX)",
    "Interface do Usuário (UI)",
    "Comunicação",
    "Trabalho em equipe",
    "Cooperação"
  ];

  const projetos = [
    {
      nome: "Portfólio Pessoal",
      descricao: "Uma página para apresentar minhas informações e habilidades.",
      tecnologias: "React, Tailwind CSS"
    },
    {
      nome: "Lista de Tarefas",
      descricao: "Aplicação simples para organizar tarefas do dia a dia.",
      tecnologias: "JavaScript, CSS"
    },
    {
      nome: "Página de Produto",
      descricao: "Projeto visual para apresentação de um produto.",
      tecnologias: "HTML, CSS"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <Header nome="John Lennon" titulo="Desenvolvedor Frontend" />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* ESQUERDA */}
        <div>
          <p className="text-emerald-400 uppercase tracking-[0.2em] text-sm mb-4">
            Meu Portfólio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            WEB
            <br />
            DESIGNER
          </h1>

          <p className="text-slate-300 mt-6 max-w-xl text-lg leading-7">
            Sou um jovem dedicado e em constante aprendizado, atualmente cursando Análise e Desenvolvimento de Sistemas.
            Tenho experiência em design gráfico e competências técnicas que me permitem unir criatividade e habilidades práticas para alcançar resultados de qualidade.
            Estou sempre em busca de novas oportunidades para crescer, superar desafios e contribuir de forma significativa.
          </p>

          <div className="mt-8">
            <Button texto="Entrar em Contato" />
          </div>
        </div>

        {/* DIREITA */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">
            Apresentação
          </h2>

          <p className="text-slate-300 leading-7">
            Este portfólio foi desenvolvido com React e Tailwind CSS para
            apresentar minhas informações profissionais, habilidades e projetos
            de forma organizada e visualmente agradável.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-black rounded-2xl p-4 border border-zinc-800">
              <h3 className="text-3xl font-bold text-emerald-400">10+</h3>
              <p className="text-slate-400 text-sm mt-1">Habilidades</p>
            </div>

            <div className="bg-black rounded-2xl p-4 border border-zinc-800">
              <h3 className="text-3xl font-bold text-emerald-400">2</h3>
              <p className="text-slate-400 text-sm mt-1">Projetos</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 pb-16 space-y-12">

        <About
          nomeCompleto="John Lennon"
          descricao="Sou estudante de ADS e designer com foco em interfaces modernas, experiência do usuário e desenvolvimento web."
          area="Frontend / UX / UI Design"
        />

        <Skills tecnologias={tecnologias} />

        <Projects projetos={projetos} />

      </main>

    </div>
  );
}

export default App;