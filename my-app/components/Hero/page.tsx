export default function Hero() {
  return (
    // Секция теперь занимает 100% ширины экрана от края до края
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Полнокранный фон: растянут абсолютно на всю доступную площадь */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-100/50">
        {/* Первая волна */}
        <svg
          className="absolute left-0 bottom-0 w-full h-[40%] text-blue-600/10 fill-current"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,165.3C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        {/* Вторая волна */}
        <svg
          className="absolute left-0 bottom-0 w-full h-[45%] text-blue-600/[0.04] fill-current"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,96L80,112C160,128,320,160,480,181.3C640,203,800,213,960,202.7C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* Ограничивающий контейнер только для текста и кнопок */}
      <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-tight">
          Привет это - <span className="text-blue-600">Мое портфолио</span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-slate-600 text-xl font-bold leading-relaxed">
          Я начинающий 3д модельер в блендере
        </p>
        
        {/* Кнопки */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a 
            href="#projects" 
            className="rounded-md bg-blue-600 px-6 py-3.5 text-white hover:bg-blue-700 font-bold shadow-md shadow-blue-600/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Смотреть работы
          </a>
          <a 
            href="#contacts" 
            className="rounded-md border border-slate-300 bg-white/90 backdrop-blur-sm px-6 py-3.5 text-slate-800 hover:bg-slate-50 font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Контакты
          </a>
        </div>
      </div>
    </section>
  );
}
