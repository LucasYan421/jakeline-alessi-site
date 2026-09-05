import React from 'react';
import { Calendar, ClipboardCheck, Sparkles, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { content, getWhatsAppLink } from '../siteData';

export const Servicos: React.FC = () => {
  const whatsappUrl = getWhatsAppLink();

  // Mapeamento de ícones elegantes para cada serviço
  const iconMap: Record<string, React.ReactNode> = {
    planejamento: <Calendar className="w-5 h-5 text-[#A68B5B]" />,
    organizacao: <ClipboardCheck className="w-5 h-5 text-[#A68B5B]" />,
    assessoria: <Sparkles className="w-5 h-5 text-[#A68B5B]" />,
    cerimonial: <HeartHandshake className="w-5 h-5 text-[#A68B5B]" />,
    coordenacao: <ShieldCheck className="w-5 h-5 text-[#A68B5B]" />,
  };

  return (
    <section id="casamentos" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span
            id="servicos-subtitulo"
            className="text-xs font-semibold tracking-premium uppercase text-[#A68B5B] block mb-3"
          >
            {content.servicos.subtitulo}
          </span>
          <h2
            id="servicos-titulo-principal"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-tight mb-5"
          >
            {content.servicos.titulo}
          </h2>
          <p
            id="servicos-descricao"
            className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed"
          >
            {content.servicos.descricao}
          </p>
          <div className="w-16 h-px bg-[#D4C3A3] mx-auto mt-6" />
        </div>

        {/* Grade de 5 Cards no estilo Professional Polish */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.servicos.cards.map((card, index) => (
            <div
              key={card.id}
              id={`servico-card-${card.id}`}
              className={`bg-white p-8 sm:p-9 border border-[#E5E1D8] hover:border-[#D4C3A3] transition-all duration-300 hover:shadow-lg flex flex-col justify-between group ${
                index === 3 ? 'lg:col-start-1 lg:ml-auto lg:w-full' : ''
              } ${index === 4 ? 'lg:col-start-2 lg:w-full' : ''}`}
            >
              <div>
                {/* Ícone e Número de Sequência sutil */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E5E1D8] flex items-center justify-center group-hover:bg-[#F4EFE6] transition-colors">
                    {iconMap[card.id] || <Sparkles className="w-5 h-5 text-[#A68B5B]" />}
                  </div>
                  <span className="text-[11px] font-mono tracking-premium text-[#A68B5B] font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Título do Card */}
                <h3
                  id={`servico-titulo-${card.id}`}
                  className="font-serif text-2xl text-[#1A1A1A] font-normal mb-3 group-hover:text-[#A68B5B] transition-colors"
                >
                  {card.titulo}
                </h3>

                {/* Descrição do Serviço */}
                <p
                  id={`servico-desc-${card.id}`}
                  className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed mb-6"
                >
                  {card.descricao}
                </p>
              </div>

              {/* Link para tirar dúvidas */}
              <div className="pt-4 border-t border-[#E5E1D8]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11px] font-semibold uppercase tracking-premium text-[#1A1A1A] group-hover:text-[#A68B5B] transition-colors"
                >
                  <span>Saber mais</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
