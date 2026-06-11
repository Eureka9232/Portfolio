export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Логотип */}
        <div className="text-xl font-bold tracking-tight text-gray-900 selection:bg-blue-500">
          Роман
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#about" className="transition-colors hover:text-blue-600">Обо мне</a>
          <a href="#skills" className="transition-colors hover:text-blue-600">Навыки</a>
          <a href="#projects" className="transition-colors hover:text-blue-600">Проекты</a>
          <a href="#contacts" className="transition-colors hover:text-blue-600">Контакты</a>
        </nav>

        {/* Кнопка действия */}
        <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow active:scale-98">
          Связаться
        </button>
      </div>
    </header>
  );
}
