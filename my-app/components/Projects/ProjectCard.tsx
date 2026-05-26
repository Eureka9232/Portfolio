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
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm flex flex-col">
      <div className="w-full bg-slate-200 flex items-center justify-center text-slate-400 text-sm  text-center">
        <Image
            src={imagePlaceholder}
            width={1000}
            height={1000}
            alt= "Avatar"
            className="w-full h-full block p-2 rounded-2xl"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto pt-4 border-t border-slate-100">
          <button 
            onClick={() => setShowTools(!showTools)}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none"
          >
            {showTools ? 'Скрыть инструменты' : 'Инструменты'}
          </button>
          {showTools && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded border border-slate-200"
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
