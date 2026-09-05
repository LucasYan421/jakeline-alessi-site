import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Servicos } from './components/Servicos';
import { Portfolio } from './components/Portfolio';
import { Diferenciais } from './components/Diferenciais';
import { Contato } from './components/Contato';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div id="landing-page-root" className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D2D2D]">
      {/* 1. Header Minimalista com Menu e CTA */}
      <Header />

      <main className="grow">
        {/* 2. Hero: Primeira dobra visual com fotografia e chamada de impacto */}
        <Hero />

        {/* 3. Sobre a Jakeline Alessi */}
        <Sobre />

        {/* 4. Eventos / Serviços (Planejamento, Organização, Assessoria, Cerimonial, Coordenação) */}
        <Servicos />

        {/* 5. Portfólio com Galeria e Lightbox Interativo */}
        <Portfolio />

        {/* 6. Diferenciais: Organização, Atendimento próximo, Tranquilidade */}
        <Diferenciais />

        {/* 7. Contato Direto & Canais Oficiais */}
        <Contato />

        {/* 8. CTA Final de Conversão */}
        <CtaFinal />
      </main>

      {/* 9. Footer Minimalista */}
      <Footer />

      {/* 10. WhatsApp Flutuante com Mensagem Pré-configurada */}
      <FloatingWhatsApp />
    </div>
  );
}
