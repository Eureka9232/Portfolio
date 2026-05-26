export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="font-bold text-xl">Роман</div>
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
          <a href="#about" className="hover:text-blue-600 text-xl font-bold">О мне</a>
          <a href="#skills" className="hover:text-blue-600 text-xl font-bold">Навыки</a>
          <a href="#projects" className="hover:text-blue-600 text-xl font-bold">Проекты</a>
          <a href="#contacts" className="hover:text-blue-600 text-xl font-bold">Контакты</a>
        </nav>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 ">
          <p className="text-xl font-bold">Связь</p>
        </button>
      </div>
    </header>
  );
}