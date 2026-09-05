import React from 'react';
import { MapPin, MessageCircle, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { config, content, getWhatsAppLink, formatPhoneDisplay } from '../siteData';

export const Contato: React.FC = () => {
  const whatsappUrl = getWhatsAppLink();

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E5E1D8] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-[#E5E1D8] p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Detalhe decorativo sutil de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4C3A3]/15 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
            <span
              id="contato-subtitulo"
              className="text-xs font-semibold tracking-premium uppercase text-[#A68B5B] block mb-3"
            >
              {content.contato.subtitulo}
            </span>
            <h2
              id="contato-titulo-principal"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-tight mb-5"
            >
              {content.contato.titulo}
            </h2>
            <p
              id="contato-descricao"
              className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed"
            >
              {content.contato.descricao}
            </p>
            <div className="w-16 h-px bg-[#D4C3A3] mx-auto mt-6" />
          </div>

          {/* Grade de Canais de Contato */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Localização */}
            <div
              id="contato-card-localizacao"
              className="bg-[#FAF9F6] p-6 border border-[#E5E1D8] flex flex-col items-center text-center hover:border-[#D4C3A3] transition-colors"
            >
              <div className="w-12 h-12 bg-white border border-[#E5E1D8] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#A68B5B]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-premium text-[#A68B5B] mb-1">
                Atendimento
              </span>
              <span className="text-base font-medium text-[#1A1A1A]">
                {config.location}
              </span>
              <span className="text-xs text-[#7A7A7A] mt-1">Presencial & Online</span>
            </div>

            {/* WhatsApp */}
            <a
              id="contato-card-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FAF9F6] p-6 border border-[#E5E1D8] flex flex-col items-center text-center hover:border-[#D4C3A3] transition-colors"
            >
              <div className="w-12 h-12 bg-white border border-[#E5E1D8] flex items-center justify-center mb-4 group-hover:bg-[#F4EFE6] transition-colors">
                <MessageCircle className="w-5 h-5 text-[#A68B5B]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-premium text-[#A68B5B] mb-1">
                WhatsApp Direto
              </span>
              <span className="text-base font-medium text-[#1A1A1A] group-hover:text-[#A68B5B] transition-colors flex items-center">
                {formatPhoneDisplay(config.whatsapp)}
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
              </span>
              <span className="text-xs text-[#7A7A7A] mt-1">Resposta rápida</span>
            </a>

            {/* Instagram */}
            <a
              id="contato-card-instagram"
              href={config.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FAF9F6] p-6 border border-[#E5E1D8] flex flex-col items-center text-center hover:border-[#D4C3A3] transition-colors sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 bg-white border border-[#E5E1D8] flex items-center justify-center mb-4 group-hover:bg-[#F4EFE6] transition-colors">
                <Instagram className="w-5 h-5 text-[#A68B5B]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-premium text-[#A68B5B] mb-1">
                Instagram
              </span>
              <span className="text-base font-medium text-[#1A1A1A] group-hover:text-[#A68B5B] transition-colors flex items-center">
                @jakelinealessicerimonial
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
              </span>
              <span className="text-xs text-[#7A7A7A] mt-1">Acompanhe os bastidores</span>
            </a>

          </div>

          {/* E-mail opcional caso configurado */}
          {config.email && (
            <div className="text-center mb-10">
              <a
                id="contato-link-email"
                href={`mailto:${config.email}`}
                className="inline-flex items-center text-sm text-[#4A4A4A] hover:text-[#A68B5B] transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-[#A68B5B]" />
                {config.email}
              </a>
            </div>
          )}

          {/* Botão de Destaque para Solicitar Orçamento */}
          <div className="text-center">
            <a
              id="contato-btn-orcamento"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 sm:py-5 text-[11px] uppercase tracking-premium font-semibold bg-[#1A1A1A] text-white hover:bg-[#D4C3A3] hover:text-[#1A1A1A] transition-all duration-300 shadow-xs active:scale-98"
            >
              <MessageCircle className="w-4 h-4 mr-3 text-[#D4C3A3] group-hover:text-[#1A1A1A]" />
              {content.contato.botao}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
