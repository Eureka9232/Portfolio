'use client';

import { useState } from 'react';
import Image from "next/image";

interface ProjectCardProps {
  imagePlaceholder: string;
  title: string;
  description: string;
  tools: string[];
}

export default function ProjectCard({
  imagePlaceholder,
  title,
  description,
  tools,
}: ProjectCardProps) {
  const [showTools, setShowTools] = useState(false);

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-xl shadow-blue-600/[0.01] hover:shadow-blue-600/5 hover:border-blue-600/20 flex flex-col hover:-translate-y-1.5 transition-all duration-300 min-h-[460px]">
      
      {/* Контейнер для 3D-рендера без лишних серых рамок */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-50 border-b border-slate-100">
        <Image
          src={imagePlaceholder}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
        />
      </div>
      
      {/* Контентная часть */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-slate-500 font-medium text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        {/* Интерактивная зона инструментов */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <button 
            onClick={() => setShowTools(!showTools)}
            className="text-sm font-bold text-blue-600 hover:text-blue-700 focus:outline-none flex items-center gap-1.5 transition-colors"
          >
            <span>{showTools ? 'Скрыть инструменты' : 'Инструменты'}</span>
            {/* Плавный маркер-стрелочка */}
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${showTools ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showTools && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="bg-slate-50 text-slate-700 text-xs px-3 py-1.5 rounded-xl font-bold border border-slate-200/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
