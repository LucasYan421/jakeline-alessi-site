import React from 'react';
import { Layers, HeartHandshake, ShieldCheck } from 'lucide-react';
import { content } from '../siteData';

export const Diferenciais: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    organizacao: <Layers className="w-6 h-6 text-[#A68B5B]" />,
    atendimento: <HeartHandshake className="w-6 h-6 text-[#A68B5B]" />,
    tranquilidade: <ShieldCheck className="w-6 h-6 text-[#A68B5B]" />,
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span
            id="diferenciais-subtitulo"
            className="text-xs font-semibold tracking-premium uppercase text-[#A68B5B] block mb-3"
          >
            {content.diferenciais.subtitulo}
          </span>
          <h2
            id="diferenciais-titulo-principal"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-tight mb-4"
          >
            {content.diferenciais.titulo}
          </h2>
          <div className="w-16 h-px bg-[#D4C3A3] mx-auto mt-6" />
        </div>

        {/* 3 Blocos de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {content.diferenciais.blocos.map((bloco) => (
            <div
              key={bloco.id}
              id={`diferencial-bloco-${bloco.id}`}
              className="bg-white p-8 sm:p-10 border border-[#E5E1D8] text-center flex flex-col items-center hover:border-[#D4C3A3] transition-all duration-300 hover:shadow-lg group"
            >
              {/* Ícone */}
              <div className="w-14 h-14 bg-[#FAF9F6] border border-[#E5E1D8] flex items-center justify-center mb-6 group-hover:bg-[#F4EFE6] transition-colors">
                {iconMap[bloco.id] || <ShieldCheck className="w-6 h-6 text-[#A68B5B]" />}
              </div>

              {/* Título do Diferencial */}
              <h3
                id={`diferencial-titulo-${bloco.id}`}
                className="font-serif text-2xl text-[#1A1A1A] font-normal mb-4 group-hover:text-[#A68B5B] transition-colors"
              >
                {bloco.titulo}
              </h3>

              {/* Descrição */}
              <p
                id={`diferencial-desc-${bloco.id}`}
                className="text-base text-[#4A4A4A] font-light leading-relaxed"
              >
                {bloco.descricao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
