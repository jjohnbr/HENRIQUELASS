function Projects({ projetos }) {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <p className="text-emerald-400 uppercase tracking-[0.2em] text-sm mb-3">
        Projetos
      </p>
      <h2 className="text-3xl font-bold mb-6">Meus Trabalhos</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="bg-black border border-zinc-800 rounded-2xl p-5"
          >
            <h3 className="text-xl font-bold mb-3">{projeto.nome}</h3>
            <p className="text-slate-300 text-sm leading-6 mb-4">
              {projeto.descricao}
            </p>
            <p className="text-emerald-400 text-sm font-medium">
              {projeto.tecnologias}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;