export default function Hero() {
  return (
    <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">
        Привет это - <span className="text-blue-600">Мое портфолио</span>
      </h1>
      <p className="mt-6 max-w-2xl text-slate-600 text-xl font-bold">
        Краткий вдохновляющий подзаголовок или описание вашей ключевой специализации.
      </p>
      <div className="mt-10 flex gap-4">
        <a href="#projects" className="rounded-md bg-blue-600 px-5 py-3   text-white hover:bg-blue-700 font-bold">
          Смотреть работы
        </a>
        <a href="#contacts" className="rounded-md border border-slate-300 bg-white px-5 py-3  hover:bg-slate-50 font-bold">
          Контакты
        </a>
      </div>
    </section>
  );
}