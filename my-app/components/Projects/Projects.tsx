import Image from 'next/image';
import Lavka from "@/public/Лавака.png"
import Lowpoly from '@/public/чезадом.png'
import Sfer from '@/public/Шары.png'
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
      description: 'Создание различных текструр в шейдинге',
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
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Мои 3D Проекты</h2>
        
        <div className="grid grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imagePlaceholder={project.imagePlaceholder}
              tools={project.tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
