import React from 'react';
import { MessageCircle } from 'lucide-react';
import { content, fotos, getWhatsAppLink } from '../siteData';

export const Sobre: React.FC = () => {
  const whatsappUrl = getWhatsAppLink("Olá, Jakeline! Vi o seu trabalho de cerimonial e gostaria de conversar.");

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E5E1D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Imagem: Jakeline Alessi */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura decorativa arquitetônica */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#D4C3A3]/40 pointer-events-none translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />
              
              <div className="relative overflow-hidden shadow-xl aspect-4/5 bg-[#F3EFEA] border border-[#E5E1D8]">
                <img
                  id="sobre-foto-jakeline"
                  src={fotos.sobre}
                  alt="Jakeline Alessi - Cerimonialista de Casamentos"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Tag com nome no rodapé da foto com borda de acento dourado */}
              <div className="absolute -bottom-4 left-6 bg-white py-2.5 px-6 shadow-md border-l-4 border-[#D4C3A3]">
                <span className="text-[11px] font-semibold uppercase tracking-premium text-[#1A1A1A]">
                  Jakeline Alessi
                </span>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo / Apresentação */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Subtítulo discreto */}
            <div className="mb-3">
              <span
                id="sobre-subtitulo"
                className="text-xs font-semibold tracking-premium uppercase text-[#A68B5B]"
              >
                {content.sobre.subtitulo}
              </span>
            </div>

            {/* Título da Seção */}
            <h2
              id="sobre-titulo-principal"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-[1.2] mb-8"
            >
              {content.sobre.titulo}
            </h2>

            {/* Parágrafos de Apresentação */}
            <div id="sobre-paragrafos" className="space-y-4 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed mb-10">
              {content.sobre.paragrafos.map((paragrafo, idx) => (
                <p key={idx}>{paragrafo}</p>
              ))}
            </div>

            {/* Botão de Contato Direto */}
            <div>
              <a
                id="sobre-botao-contato"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-premium font-semibold bg-[#1A1A1A] text-white hover:bg-[#D4C3A3] hover:text-[#1A1A1A] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 mr-2.5 text-[#D4C3A3] group-hover:text-[#1A1A1A]" />
                {content.sobre.botao}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
