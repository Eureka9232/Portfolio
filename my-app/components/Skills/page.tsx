export default function Skills() {
  const blenderSkills = [
    {
      category: 'Моделирование',
      skills: ['Hard Surface', 'Low-Poly / High-Poly', 'Topology & Retopology']
    },
    {
      category: 'Текстурирование и Шейдинг',
      skills: ['UV Unwrapping', 'Procedural Shading', 'PBR Texturing', 'Baking (Normals/AO)']
    },
    {
      category: 'Анимация и Рендеринг',
      skills: ['Rigging & Skinning', 'Keyframe Animation', 'Eevee / Cycles Engines', 'Lighting & Composition']
    }
  ];

  return (
    // Секция во всю ширину, использующая тот же мягкий фон для стыковки
    <section id="skills" className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-32 pb-32 overflow-hidden">
      
      {/* КОМПЛЕКСНЫЙ ФОН: Идеально отзеркаленные волны сверху и снизу */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Идеальная верхняя волна (заливка от верхнего края) */}
        <svg
          className="absolute left-0 top-0 w-full h-[25%] text-blue-600/[0.04] fill-current"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,0 L1440,160 C1320,144 1200,112 1080,122.7 C960,133 840,187 720,192 C600,197 480,155 360,122.7 C240,91 120,69 0,96 Z"></path>
        </svg>

        {/* Нижняя волна (заливка от нижнего края) */}
        <svg
          className="absolute left-0 bottom-0 w-full h-[30%] text-blue-600/10 fill-current"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,165.3C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Заголовок в общем стиле с плашкой-подчеркиванием */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center text-slate-900 mb-16 select-none">
          <span className="relative  text-slate-900 after:absolute after:bottom-1 after:left-0 after:h-2 after:w-full after:bg-blue-600/15 after:-z-10">
            Навыки в Blender
          </span>
        </h2>
        
        {/* Адаптивная сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blenderSkills.map((item, index) => (
            <div 
              key={index} 
              className="rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-md p-6 shadow-xl shadow-blue-600/[0.02] hover:shadow-blue-600/5 hover:border-blue-600/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Категория с акцентным цветом границ */}
              <h3 className="font-extrabold text-lg mb-5 text-slate-800 border-b border-slate-100 pb-3">
                {item.category}
              </h3>
              
              {/* Сетка тегов навыков внутри карточки */}
              <div className="flex flex-wrap gap-2.5">
                {item.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-slate-50 text-slate-700 px-3.5 py-2 rounded-xl text-sm font-bold border border-slate-200/50 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
