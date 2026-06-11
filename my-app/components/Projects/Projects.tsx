import ProjectCard from './ProjectCard';

export default function Projects() {
  const projectsData = [
    {
      title: 'Лавка в стиле средневековья',
      description: 'Детализированная модель лавки. Выполнена правильная топология, текстурирование в PBR и финальный рендер в Cycles.',
      imagePlaceholder: '/Лавака.png',
      tools: ['Blender', 'Cycles', 'PBR Textures', 'UV Editing']
    },
    {
      title: 'Текстурирование',
      description: 'Создание различных текстур в шейдинге.',
      imagePlaceholder: '/Шары.png',
      tools: ['Blender Shading', 'Procedural Nodes', 'Eevee']
    },
    {
      title: 'Low-Poly Локация',
      description: 'Локация изометрическая диорама лоу-поли дома.',
      imagePlaceholder: '/чезадом.png',
      tools: ['Blender', 'Low-Poly Modeling', 'Lighting']
    }
  ];

  return (
    // Секция во всю ширину, продолжающая мягкий фон для стыковки
    <section id="projects" className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-32 pb-32 overflow-hidden">
      
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
        {/* Заголовок с фирменной плашкой-подчеркиванием под стиль Hero блока */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center text-slate-900 mb-16 select-none">
          <span className="relative  text-slate-900 after:absolute after:bottom-1 after:left-0 after:h-2 after:w-full after:bg-blue-600/15 after:-z-10">
            Мои 3D Проекты
          </span>
        </h2>
        
        {/* Адаптивная сетка карточек: 1 на мобильных, 2 на планшетах, 3 на больших экранах */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imagePlaceholder={project.imagePlaceholder} // Передаем строковый путь
              tools={project.tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
