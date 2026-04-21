function Header({ nome, titulo }) {
  return (
    <header className="border-b border-zinc-800 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">{nome}</h1>
          <p className="text-emerald-400 text-sm">{titulo}</p>
        </div>

        <nav className="flex gap-6 text-sm text-slate-300">
          <span>Sobre</span>
          <span>Habilidades</span>
          <span>Projetos</span>
          <span>Contato</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;