import Image from "next/image";
import Avatar from '@/public/Avatar2.png';

export default function About() {
  return (
    // Секция растянута на всю ширину. Важно: добавлен padding-top (pt-32), чтобы текст не налезал на верхнюю волну
    <section id="about" className="relative w-full  -50 pt-32 pb-24 overflow-hidden">
      
      {/* ФОНОВАЯ ВЕРХНЯЯ ВОЛНА (ОТЗЕРКАЛЕННАЯ) */}
      <div className="absolute inset-x-0 top-0 -z-10 h-full overflow-hidden pointer-events-none">
<svg
  className="absolute left-0 top-0 w-full h-[25%] text-blue-600/[0.04] fill-current"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
>
  {/* Этот путь плавно изгибается и заливает пространство ДО самого верха экрана */}
  <path d="M0,0 L1440,0 L1440,160 C1320,144 1200,112 1080,122.7 C960,133 840,187 720,192 C600,197 480,155 360,122.7 C240,91 120,69 0,96 Z"></path>
</svg>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Заголовок в стиле Hero секции с легким синим подчеркиванием */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center text-slate-900 mb-16 select-none">
          <span className="relative  text-slate-900 after:absolute after:bottom-1 after:left-0 after:h-2 after:w-full after:bg-blue-600/15 after:-z-10">
            Обо мне
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Левая колонка: Аватар / Изображение */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-square w-full max-w-[400px] rounded-3xl bg-white border border-slate-200/60 p-3 shadow-xl shadow-blue-600/5 transition-all duration-300 hover:scale-[1.02]">
              <Image
                src={Avatar}
                alt="Avatar"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-2xl bg-slate-50"
                priority
              />
            </div>
          </div>

          {/* Правая колонка: Текст и Навыки */}
          <div className="lg:col-span-7 space-y-6 text-slate-700">
            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
              Привет! Я — <span className="text-blue-600">3D-моделлер</span>. За первый год обучения в колледже 
              я освоил полный базовый цикл создания трёхмерной графики.
            </p>
            
            <div className="space-y-3 pt-2">
              <p className="text-base font-extrabold uppercase tracking-wider text-blue-600">Мои навыки:</p>
              
              {/* Сетка навыков в виде аккуратных тегов/карточек */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Моделирование", desc: "создание геометрии объектов с нуля" },
                  { title: "Текстурирование", desc: "работа с материалами и цветом" },
                  { title: "Освещение", desc: "настройка правильного света в сцене" },
                  { title: "Анимация", desc: "оживление объектов и камер" },
                  { title: "Рендеринг", desc: "финальная визуализация кадров" }
                ].map((skill, index) => (
                  <div key={index} className="flex flex-col p-4 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl shadow-sm hover:border-blue-600/30 transition-colors">
                    <span className="font-bold text-slate-900 text-base">{skill.title}</span>
                    <span className="text-sm text-slate-500 font-medium mt-0.5">{skill.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base md:text-lg font-medium text-slate-600 leading-relaxed pt-2">
              Свободно владею основными инструментами индустрии. Быстро учусь, развиваю пространственное мышление и хочу расти в сфере 3D дальше. Открыт к интересным проектам и практике.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
