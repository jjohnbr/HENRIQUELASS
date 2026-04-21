function Button({ texto }) {
  return (
    <a
      href="https://wa.me/5521997419392"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-emerald-500 transition"
    >
      {texto}
    </a>
  );
}

export default Button;