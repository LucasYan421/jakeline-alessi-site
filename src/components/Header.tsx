import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { config, content, getWhatsAppLink } from '../siteData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppLink();

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#E5E1D8]'
          : 'bg-[#FAF9F6]/70 backdrop-blur-xs py-5 border-b border-[#E5E1D8]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="header-brand-logo"
          className="group flex flex-col items-start focus:outline-hidden"
        >
          <span className="font-serif text-xl sm:text-2xl tracking-wide font-normal text-[#1A1A1A] group-hover:text-[#A68B5B] transition-colors">
            {config.businessName}
          </span>
          <span className="text-[10px] tracking-premium uppercase text-[#A68B5B] font-semibold -mt-0.5">
            Assessoria & Cerimonial
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-navigation" className="hidden md:flex items-center space-x-8">
          {content.header.menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              id={`nav-link-${item.label.toLowerCase()}`}
              className="text-[11px] uppercase tracking-premium font-medium text-[#1A1A1A] hover:text-[#A68B5B] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            id="header-cta-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 text-[11px] uppercase tracking-premium font-semibold bg-[#1A1A1A] text-white hover:bg-[#D4C3A3] hover:text-[#1A1A1A] transition-all duration-200 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-2 text-[#D4C3A3] group-hover:text-[#1A1A1A]" />
            {content.header.ctaButton}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-[#1A1A1A] hover:text-[#A68B5B] focus:outline-hidden"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#FAF9F6] border-b border-[#E5E1D8] px-6 pt-4 pb-8 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-3 pt-2">
            {content.header.menu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                id={`mobile-nav-link-${item.label.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-premium font-medium text-[#1A1A1A] hover:text-[#A68B5B] transition-colors py-2 border-b border-[#E5E1D8]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              id="mobile-drawer-cta-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-6 py-3.5 text-[11px] uppercase tracking-premium font-semibold bg-[#1A1A1A] text-white hover:bg-[#D4C3A3] hover:text-[#1A1A1A] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-[#D4C3A3]" />
              {content.header.ctaButton}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
