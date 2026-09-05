/**
 * TEXTOS E FOTOS DO SITE
 * Jakeline Alessi Cerimonial
 * 
 * ============================================================================
 * COMO EDITAR:
 * - Para trocar textos: basta alterar as palavras dentro das aspas (" ").
 * - Para trocar fotos: coloque suas imagens na pasta "EditionPanel/fotos/" com
 *   os mesmos nomes de arquivo (hero.jpg, sobre.jpg, portfolio-1.jpg, etc).
 * ============================================================================
 */

// Importação automática das imagens da pasta fotos
import heroImg from './fotos/hero.jpg';
import sobreImg from './fotos/sobre.jpg';
import port1 from './fotos/portfolio-1.jpg';
import port2 from './fotos/portfolio-2.jpg';
import port3 from './fotos/portfolio-3.jpg';
import port4 from './fotos/portfolio-4.jpg';
import port5 from './fotos/portfolio-5.jpg';
import port6 from './fotos/portfolio-6.jpg';

export const fotos = {
  hero: heroImg,
  sobre: sobreImg,
  portfolio: [
    {
      id: 1,
      src: port1,
      titulo: "Cerimônia dos Sonhos",
      categoria: "Altar & Celebração"
    },
    {
      id: 2,
      src: port2,
      titulo: "Momentos de Emoção",
      categoria: "Entrada & Votos"
    },
    {
      id: 3,
      src: port3,
      titulo: "Recepção Elegante",
      categoria: "Mesa Posta & Decoração"
    },
    {
      id: 4,
      src: port4,
      titulo: "Detalhes Memoráveis",
      categoria: "Papelaria & Identidade"
    },
    {
      id: 5,
      src: port5,
      titulo: "Conexão e Amor",
      categoria: "Ensaio dos Noivos"
    },
    {
      id: 6,
      src: port6,
      titulo: "Celebração Inesquecível",
      categoria: "Festa & Brinde"
    }
  ]
};

export const content = {
  // ==========================================================================
  // HEADER
  // ==========================================================================
  header: {
    menu: [
      { label: "Sobre", href: "#sobre" },
      { label: "Casamentos", href: "#casamentos" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Contato", href: "#contato" }
    ],
    ctaButton: "Solicitar orçamento"
  },

  // ==========================================================================
  // HERO
  // ==========================================================================
  hero: {
    badge: "CERIMONIAL & ASSESSORIA",
    titulo: "Seu casamento, cuidado em cada detalhe.",
    descricao: "Assessoria e cerimonial para casais que desejam viver esse momento com tranquilidade, organização e segurança.",
    botaoPrincipal: "Solicitar orçamento",
    botaoSecundario: "Conheça meu trabalho"
  },

  // ==========================================================================
  // SOBRE A JAKELINE
  // ==========================================================================
  sobre: {
    subtitulo: "SOBRE A JAKELINE",
    titulo: "Por trás de cada evento, existe alguém cuidando de cada detalhe.",
    // Você pode editar ou adicionar parágrafos facilmente abaixo:
    paragrafos: [
      "Olá, sou a Jakeline Alessi. Acredito que o casamento é um dos capítulos mais significativos na história de um casal, e planejar esse dia deve ser uma jornada leve, segura e memorável.",
      "Minha atuação como cerimonialista e assessora é voltada para traduzir o estilo e os desejos de vocês em um cronograma impecável, alinhando fornecedores com rigor e garantindo que tudo flua com harmonia.",
      "Com um atendimento próximo e personalizado, estou presente para antecipar necessidades, gerenciar o tempo com discrição e assegurar que no dia vocês apenas celebrem e aproveitem cada segundo com quem amam."
    ],
    botao: "Falar com a Jakeline"
  },

  // ==========================================================================
  // CASAMENTOS / SERVIÇOS
  // ==========================================================================
  servicos: {
    subtitulo: "SERVIÇOS EXCLUSIVOS",
    titulo: "Casamentos",
    descricao: "Do planejamento à execução, cada detalhe pensado para que vocês aproveitem o momento.",
    cards: [
      {
        id: "planejamento",
        titulo: "Planejamento",
        descricao: "Estruturação de todas as etapas do casamento, definição de prazos, alinhamento de estilo e orientação estratégica inicial."
      },
      {
        id: "organizacao",
        titulo: "Organização",
        descricao: "Gestão do cronograma, controle de orçamentos, organização de contratos e montagem da pasta detalhada do evento."
      },
      {
        id: "assessoria",
        titulo: "Assessoria",
        descricao: "Indicação, alinhamento e curadoria de fornecedores ideais para o perfil do casal, com suporte nas decisões."
      },
      {
        id: "cerimonial",
        titulo: "Cerimonial",
        descricao: "Direção do cortejo, protocolos da celebração religiosa/ecumênica e condução refinada de cada instante solene."
      },
      {
        id: "coordenacao",
        titulo: "Coordenação do evento",
        descricao: "Supervisão integral no dia do casamento, montagem, cumprimento do roteiro, suporte aos noivos e resolução discreta de imprevistos."
      }
    ]
  },

  // ==========================================================================
  // PORTFÓLIO
  // ==========================================================================
  portfolio: {
    subtitulo: "GALERIA",
    titulo: "Momentos que contam histórias.",
    descricao: "Um vislumbre da delicadeza, estética e cuidado dedicados a cada celebração."
  },

  // ==========================================================================
  // DIFERENCIAIS
  // ==========================================================================
  diferenciais: {
    subtitulo: "POR QUE ESCOLHER",
    titulo: "Cuidado que vai além do planejamento.",
    blocos: [
      {
        id: "organizacao",
        titulo: "Organização",
        descricao: "Atenção aos detalhes para que cada etapa aconteça como planejado, com planilhas, checklists e alinhamento minucioso."
      },
      {
        id: "atendimento",
        titulo: "Atendimento próximo",
        descricao: "Acompanhamento profissional durante todo o processo, garantindo que o casal sinta segurança, acolhimento e escuta ativa."
      },
      {
        id: "tranquilidade",
        titulo: "Tranquilidade",
        descricao: "Pontualidade, organização e preparo para lidar com imprevistos nos bastidores, permitindo que os noivos desfrutem plenamente."
      }
    ]
  },

  // ==========================================================================
  // CONTATO
  // ==========================================================================
  contato: {
    subtitulo: "INICIE SEU PROJETO",
    titulo: "Vamos conversar sobre o seu casamento?",
    descricao: "Será um prazer conhecer a história de vocês, entender as expectativas para o grande dia e preparar uma proposta personalizada.",
    botao: "Solicitar orçamento"
  },

  // ==========================================================================
  // CTA FINAL
  // ==========================================================================
  ctaFinal: {
    titulo: "Seu grande dia merece ser vivido por inteiro.",
    descricao: "Deixe a organização com quem cuida de cada detalhe.",
    botao: "Solicitar orçamento"
  },

  // ==========================================================================
  // FOOTER
  // ==========================================================================
  footer: {
    copyright: "Todos os direitos reservados."
  }
};
