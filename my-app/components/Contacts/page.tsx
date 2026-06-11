export default function Contacts() {
  return (
    // Финальная секция во всю ширину с плавным фоном и отступом под верхнюю волну
    <section id="contacts" className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-32 pb-24 overflow-hidden">
      
      {/* ИДЕАЛЬНАЯ ВЕРХНЯЯ ЗЕРКАЛЬНАЯ ВОЛНА */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          className="absolute left-0 top-0 w-full h-[25%] text-blue-600/[0.04] fill-current"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,0 L1440,160 C1320,144 1200,112 1080,122.7 C960,133 840,187 720,192 C600,197 480,155 360,122.7 C240,91 120,69 0,96 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-3xl text-center z-10 relative">
        {/* Заголовок с фирменной плашкой-подчеркиванием */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 select-none">
          <span className="relative  text-slate-900 after:absolute after:bottom-1 after:left-0 after:h-2 after:w-full after:bg-blue-600/15 after:-z-10">
            Контакты
          </span>
        </h2>
        
        <p className="text-slate-600 text-lg font-medium mb-12 max-w-md mx-auto leading-relaxed">
          Свяжитесь со мной любым удобным способом для обсуждения проектов или практики.
        </p>
        
        {/* Карточки контактов, стилизованные под кликабельные ссылки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto text-left">
          
          {/* Email */}
          <a 
            href="mailto:gagoh@gmail.com" 
            className="group p-5 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-xl shadow-blue-600/[0.01] hover:shadow-blue-600/5 hover:border-blue-600/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email</div>
            <div className="font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors break-all">
              gagoh@gmail.com
            </div>
          </a>

          {/* Telegram */}
          <a 
            href="https://t.me" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-5 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-xl shadow-blue-600/[0.01] hover:shadow-blue-600/5 hover:border-blue-600/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Telegram</div>
            <div className="font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
              @Eureka555
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
