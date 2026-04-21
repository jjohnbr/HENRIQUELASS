function Skills({ tecnologias }) {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <p className="text-emerald-400 uppercase tracking-[0.2em] text-sm mb-3">
        Habilidades
      </p>
      <h2 className="text-3xl font-bold mb-6">Tecnologias</h2>

      <div className="flex flex-wrap gap-3">
        {tecnologias.map((tech, index) => (
          <span
            key={index}
            className="bg-emerald-400 text-black font-semibold px-4 py-2 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;