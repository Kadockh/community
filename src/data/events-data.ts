export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  isUserConfirmed: boolean;
  createdBy: string;
  category?: string;
  imageUrl?: string;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Workshop de Empreendedorismo Feminino",
    description:
      "Aprenda os fundamentos do empreendedorismo e como começar seu próprio negócio. Este workshop abordará temas como planejamento financeiro, marketing digital e networking.",
    date: "2025-11-15",
    time: "14:00",
    location: "Centro de Convenções - Sala A",
    maxParticipants: 50,
    currentParticipants: 23,
    isUserConfirmed: false,
    createdBy: "admin@aliadas.com",
    category: "Empreendedorismo",
  },
  {
    id: "2",
    title: "Networking e Mentoria",
    description:
      "Conecte-se com outras mulheres empreendedoras e receba mentoria de especialistas da área. Uma oportunidade única para expandir sua rede de contatos.",
    date: "2025-11-20",
    time: "18:30",
    location: "Café Central - 2º andar",
    maxParticipants: 30,
    currentParticipants: 18,
    isUserConfirmed: true,
    createdBy: "admin@aliadas.com",
    category: "Networking",
  },
  {
    id: "3",
    title: "Palestra: Liderança Feminina",
    description:
      "Descubra como desenvolver suas habilidades de liderança e inspirar outras mulheres. Com cases reais e dicas práticas para o dia a dia.",
    date: "2025-11-25",
    time: "19:00",
    location: "Auditório Principal",
    maxParticipants: 100,
    currentParticipants: 67,
    isUserConfirmed: false,
    createdBy: "admin@aliadas.com",
    category: "Liderança",
  },
  {
    id: "4",
    title: "Workshop de Marketing Digital",
    description:
      "Aprenda estratégias de marketing digital para impulsionar seu negócio. Redes sociais, SEO, Google Ads e muito mais.",
    date: "2025-12-05",
    time: "09:00",
    location: "Sala de Treinamento - 3º andar",
    maxParticipants: 40,
    currentParticipants: 35,
    isUserConfirmed: false,
    createdBy: "admin@aliadas.com",
    category: "Marketing",
  },
  {
    id: "5",
    title: "Café da Manhã Empresarial",
    description:
      "Um encontro descontraído para networking e troca de experiências. Venha conhecer outras empreendedoras e compartilhar suas histórias.",
    date: "2025-12-10",
    time: "08:00",
    location: "Restaurante Jardim - Centro",
    maxParticipants: 25,
    currentParticipants: 20,
    isUserConfirmed: true,
    createdBy: "admin@aliadas.com",
    category: "Networking",
  },
  {
    id: "6",
    title: "Workshop de Finanças Pessoais",
    description:
      "Aprenda a organizar suas finanças pessoais e empresariais. Planejamento, investimentos e controle de gastos.",
    date: "2025-10-20",
    time: "10:00",
    location: "Sala de Reuniões - 1º andar",
    maxParticipants: 35,
    currentParticipants: 12,
    isUserConfirmed: false,
    createdBy: "admin@aliadas.com",
    category: "Finanças",
  },
  {
    id: "7",
    title: "Encontro de Networking",
    description:
      "Um encontro casual para conhecer outras empreendedoras e trocar experiências sobre negócios.",
    date: "2025-6-25",
    time: "19:00",
    location: "Café da Esquina - Centro",
    maxParticipants: 20,
    currentParticipants: 15,
    isUserConfirmed: true,
    createdBy: "admin@aliadas.com",
    category: "Networking",
  },
  {
    id: "8",
    title: "Evento de Teste - Próxima Semana",
    description:
      "Este é um evento de teste para verificar se os botões de confirmação estão funcionando corretamente.",
    date: "2025-05-10",
    time: "15:00",
    location: "Sala de Teste - 2º andar",
    maxParticipants: 15,
    currentParticipants: 5,
    isUserConfirmed: false,
    createdBy: "admin@aliadas.com",
    category: "Outros",
  },
];

export const eventCategories = [
  "Empreendedorismo",
  "Networking",
  "Liderança",
  "Marketing",
  "Finanças",
  "Tecnologia",
  "Vendas",
  "Outros",
];
