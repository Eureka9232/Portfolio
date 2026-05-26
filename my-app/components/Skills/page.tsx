export default function Skills() {

  const blenderSkills = [
    {
      category: 'Моделирование',
      skills: ['Hard Surface', 'Low-Poly / High-Poly','Topology & Retopology']
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Навыки в Blender</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blenderSkills.map((item, index) => (
            <div key={index} className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-slate-800 border-b pb-2">
                {item.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md text-sm font-bold border border-slate-200/60 "
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