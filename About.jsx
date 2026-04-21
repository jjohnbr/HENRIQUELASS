function About({ nomeCompleto, descricao, area }) {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <p className="text-emerald-400 uppercase tracking-[0.2em] text-sm mb-3">
        Sobre Mim
      </p>
      <h2 className="text-3xl font-bold mb-4">{nomeCompleto}</h2>
      <p className="text-slate-300 leading-7 mb-3">{descricao}</p>
      <p className="text-slate-400">
        <strong className="text-white">Área de Interesse:</strong> {area}
      </p>
    </section>
  );
}

export default About;