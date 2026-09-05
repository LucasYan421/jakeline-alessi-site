import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { config, content, getWhatsAppLink } from '../siteData';

export const Footer: React.FC = () => {
  const whatsappUrl = getWhatsAppLink();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#141414] text-[#FAF8F5] border-t border-[#2D2D2D] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#262626]">
          {/* Marca / Identidade */}
          <div className="text-center md:text-left">
            <h3
              id="footer-brand-name"
              className="font-serif text-2xl font-normal tracking-wide text-white mb-1"
            >
              {config.businessName}
            </h3>
            <p
              id="footer-tagline"
              className="text-[10px] tracking-premium uppercase text-[#D4C3A3] font-semibold"
            >
              {config.tagline}
            </p>
          </div>

          {/* Links e Contatos Rápidos */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs uppercase tracking-premium text-[#B3B3B3]">
            {/* Localização */}
            <div id="footer-location" className="inline-flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#D4C3A3]" />
              <span>{config.location}</span>
            </div>

            {/* WhatsApp */}
            <a
              id="footer-whatsapp-link"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-[#D4C3A3] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-[#D4C3A3]" />
              <span>WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              id="footer-instagram-link"
              href={config.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-[#D4C3A3] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 mr-1.5 text-[#D4C3A3]" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7A7A] gap-4">
          <p id="footer-copyright">
            © {currentYear} {config.businessName}. {content.footer.copyright}
          </p>
          <p className="text-[11px] tracking-wider uppercase text-[#5A5A5A]">
            Casamentos em Brasília & Região
          </p>
        </div>

      </div>
    </footer>
  );
};
