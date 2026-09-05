import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { content, fotos, getWhatsAppLink } from '../siteData';

export const Hero: React.FC = () => {
  const whatsappUrl = getWhatsAppLink();

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-24 sm:pt-28 pb-0 bg-[#FAF9F6] border-b border-[#E5E1D8] overflow-hidden"
    >
      {/* Main Split Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[75vh] py-8 sm:py-12">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-6">
            {/* Eyebrow */}
            <div className="mb-4">
              <span
                id="hero-badge-text"
                className="text-[#A68B5B] text-xs uppercase tracking-premium font-semibold"
              >
                {content.hero.badge}
              </span>
            </div>

            {/* Display Headline */}
            <h1
              id="hero-main-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-[1.12] mb-6 tracking-tight"
            >
              {content.hero.titulo}
            </h1>

            {/* Subtitle / Description */}
            <p
              id="hero-description-text"
              className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg font-light"
            >
              {content.hero.descricao}
            </p>

            {/* CTA Buttons */}
            <div
              id="hero-cta-group"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                id="hero-primary-cta-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1A1A1A] text-white px-8 py-4 text-[11px] uppercase tracking-premium font-semibold hover:bg-[#D4C3A3] hover:text-[#1A1A1A] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 mr-2.5 text-[#D4C3A3] group-hover:text-[#1A1A1A]" />
                {content.hero.botaoPrincipal}
              </a>

              <a
                id="hero-secondary-cta-btn"
                href="#portfolio"
                onClick={handleScrollToPortfolio}
                className="inline-flex items-center justify-center border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 text-[11px] uppercase tracking-premium font-semibold hover:border-[#D4C3A3] hover:text-[#A68B5B] transition-colors"
              >
                <span>{content.hero.botaoSecundario}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Hero Image Frame */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Container with deep shadow */}
              <div className="relative aspect-4/5 sm:aspect-5/4 lg:aspect-4/5 overflow-hidden shadow-2xl bg-[#F3EFEA] border border-[#E5E1D8]">
                <img
                  id="hero-background-image"
                  src={fotos.hero}
                  alt="Casamento elegante em Brasília - Jakeline Alessi"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Quote Card with Gold Border */}
              <div
                id="hero-floating-quote"
                className="absolute bottom-6 sm:bottom-10 -left-3 sm:-left-8 bg-white p-5 sm:p-6 shadow-xl border-l-4 border-[#D4C3A3] max-w-[260px] sm:max-w-[300px]"
              >
                <p className="font-serif italic text-lg sm:text-xl text-[#1A1A1A] leading-snug">
                  "Momentos que contam histórias."
                </p>
                <span className="text-[10px] uppercase tracking-premium text-[#A68B5B] font-semibold mt-2 block">
                  Jakeline Alessi • Cerimonial
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Professional Polish Bottom Ticker / Feature Bar */}
      <div className="border-t border-[#E5E1D8] bg-white px-4 sm:px-8 lg:px-12 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] sm:text-[12px] uppercase tracking-premium text-[#4A4A4A]">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center">
            <span className="hover:text-[#1A1A1A] transition-colors">
              <strong className="text-[#A68B5B] font-medium mr-1.5">01 /</strong> Organização Completa
            </span>
            <span className="hover:text-[#1A1A1A] transition-colors">
              <strong className="text-[#A68B5B] font-medium mr-1.5">02 /</strong> Roteiro Personalizado
            </span>
            <span className="hover:text-[#1A1A1A] transition-colors">
              <strong className="text-[#A68B5B] font-medium mr-1.5">03 /</strong> Presença no Grande Dia
            </span>
          </div>
          <div className="text-[#A68B5B] font-semibold tracking-premium">
            Brasília — DF
          </div>
        </div>
      </div>
    </section>
  );
};

