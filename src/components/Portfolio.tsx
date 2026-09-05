import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Maximize2 } from 'lucide-react';
import { content, fotos, getWhatsAppLink } from '../siteData';

export const Portfolio: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photoList = fotos.portfolio;

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : photoList.length - 1));
  }, [selectedPhotoIndex, photoList.length]);

  const handleNextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < photoList.length - 1 ? prev! + 1 : 0));
  }, [selectedPhotoIndex, photoList.length]);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handlePrevPhoto, handleNextPhoto]);

  const currentPhoto = selectedPhotoIndex !== null ? photoList[selectedPhotoIndex] : null;
  const whatsappUrl = currentPhoto
    ? getWhatsAppLink(`Olá, Jakeline! Adorei a foto de "${currentPhoto.titulo}" do portfólio e gostaria de um orçamento parecido.`)
    : getWhatsAppLink();

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span
            id="portfolio-subtitulo"
            className="text-xs font-semibold tracking-premium uppercase text-[#A68B5B] block mb-3"
          >
            {content.portfolio.subtitulo}
          </span>
          <h2
            id="portfolio-titulo-principal"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-tight mb-4"
          >
            {content.portfolio.titulo}
          </h2>
          <p
            id="portfolio-descricao"
            className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed"
          >
            {content.portfolio.descricao}
          </p>
          <div className="w-16 h-px bg-[#D4C3A3] mx-auto mt-6" />
        </div>

        {/* Galeria de Fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {photoList.map((photo, index) => (
            <div
              key={photo.id}
              id={`portfolio-item-${photo.id}`}
              onClick={() => handleOpenLightbox(index)}
              className="group relative cursor-pointer overflow-hidden bg-white aspect-4/5 shadow-xs hover:shadow-2xl transition-all duration-500 border border-[#E5E1D8]"
            >
              {/* Imagem do Casamento */}
              <img
                src={photo.src}
                alt={photo.titulo}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay Escuro Elegante no Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

              {/* Botão de Ampliação Flutuante no Topo */}
              <div className="absolute top-4 right-4 w-9 h-9 bg-black/50 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Textos da Foto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] tracking-premium uppercase font-semibold text-[#D4C3A3] block mb-1">
                  {photo.categoria}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal drop-shadow-xs">
                  {photo.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Elegante */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div
          id="portfolio-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Botão Fechar */}
          <button
            id="lightbox-close-btn"
            type="button"
            onClick={handleCloseLightbox}
            aria-label="Fechar visualização"
            className="absolute top-5 right-5 z-20 p-3 bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Botão Anterior */}
          <button
            id="lightbox-prev-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevPhoto();
            }}
            aria-label="Foto anterior"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-hidden"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Próximo */}
          <button
            id="lightbox-next-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNextPhoto();
            }}
            aria-label="Próxima foto"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-hidden"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Conteúdo Central do Lightbox */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              id="lightbox-active-image"
              src={currentPhoto.src}
              alt={currentPhoto.titulo}
              className="max-h-[70vh] w-auto max-w-full shadow-2xl object-contain border border-white/10"
            />

            {/* Rodapé do Lightbox com detalhes e botão de WhatsApp */}
            <div className="mt-4 text-center text-white flex flex-col sm:flex-row items-center justify-between w-full px-2 gap-3">
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-premium text-[#D4C3A3] font-semibold">
                  {currentPhoto.categoria} • {selectedPhotoIndex + 1} de {photoList.length}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-white">
                  {currentPhoto.titulo}
                </h4>
              </div>

              <a
                id="lightbox-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-[11px] uppercase tracking-premium font-semibold bg-white text-[#1A1A1A] hover:bg-[#D4C3A3] hover:text-[#1A1A1A] transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-2 text-[#1A1A1A]" />
                Pedir orçamento com este estilo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
