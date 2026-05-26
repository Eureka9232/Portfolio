export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto flex flex-col sm:flex-row h-20 items-center justify-between px-4 text-sm text-slate-500">
        <div>© {new Date().getFullYear()} MyPortfolio. Все права защищены.</div>
        <div className="flex space-x-6 mt-2 sm:mt-0">
          <a href="https://github.com/Eureka9232" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
}