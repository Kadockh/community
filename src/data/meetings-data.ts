export interface Meeting {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string; // Duração estimada
  platform: string; // Plataforma onde será realizada (Zoom, Google Meet, etc.)
  meetingLink?: string; // Link para participar da reunião (apenas para reuniões futuras)
  videoLink?: string; // Link para a gravação (YouTube, Google Drive, etc.)
  videoPlatform?: "youtube" | "google-drive" | "other";
  isUserRegistered: boolean; // Se o usuário se inscreveu para participar
  maxParticipants: number;
  currentParticipants: number;
  createdBy: string;
  category?: string;
  agenda?: string[]; // Lista de tópicos da reunião
}

export const mockMeetings: Meeting[] = [
  {
    id: "1",
    title: "Reunião Mensal - Janeiro 2025",
    description:
      "Reunião mensal da comunidade ALIADAS para discutir projetos, novidades e networking entre as participantes.",
    date: "2025-10-15",
    time: "19:00",
    duration: "2 horas",
    platform: "Google Meet",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    isUserRegistered: false,
    maxParticipants: 50,
    currentParticipants: 23,
    createdBy: "admin@aliadas.com",
    category: "Mensal",
    agenda: [
      "Boas-vindas e apresentações",
      "Relatório de atividades do mês",
      "Novos projetos e oportunidades",
      "Networking e troca de experiências",
      "Próximos passos e encerramento",
    ],
  },
  {
    id: "2",
    title: "Workshop: Marketing Digital para Empreendedoras",
    description:
      "Workshop prático sobre estratégias de marketing digital, redes sociais e branding pessoal.",
    date: "2025-10-22",
    time: "14:00",
    duration: "3 horas",
    platform: "Zoom",
    meetingLink: "https://zoom.us/j/123456789",
    isUserRegistered: true,
    maxParticipants: 30,
    currentParticipants: 18,
    createdBy: "admin@aliadas.com",
    category: "Workshop",
    agenda: [
      "Introdução ao marketing digital",
      "Estratégias para redes sociais",
      "Branding pessoal e profissional",
      "Ferramentas gratuitas e pagas",
      "Q&A e networking",
    ],
  },
  {
    id: "3",
    title: "Reunião de Mentoria - Liderança Feminina",
    description:
      "Sessão de mentoria sobre desenvolvimento de liderança, tomada de decisões e gestão de equipes.",
    date: "2025-11-05",
    time: "18:30",
    duration: "1.5 horas",
    platform: "Google Meet",
    meetingLink: "https://meet.google.com/xyz-uvwx-rst",
    isUserRegistered: false,
    maxParticipants: 20,
    currentParticipants: 12,
    createdBy: "admin@aliadas.com",
    category: "Mentoria",
    agenda: [
      "Conceitos de liderança feminina",
      "Desafios e oportunidades",
      "Cases de sucesso",
      "Mentoria em grupo",
      "Plano de desenvolvimento pessoal",
    ],
  },
  {
    id: "4",
    title: "Reunião Mensal - Dezembro 2024",
    description:
      "Reunião mensal de encerramento do ano com retrospectiva e planejamento para 2025.",
    date: "2024-12-20",
    time: "19:00",
    duration: "2.5 horas",
    platform: "Google Meet",
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoPlatform: "youtube",
    isUserRegistered: true,
    maxParticipants: 50,
    currentParticipants: 35,
    createdBy: "admin@aliadas.com",
    category: "Mensal",
    agenda: [
      "Retrospectiva 2024",
      "Conquistas e desafios",
      "Planejamento 2025",
      "Novas integrantes",
      "Confraternização virtual",
    ],
  },
  {
    id: "5",
    title: "Workshop: Finanças Pessoais",
    description:
      "Workshop sobre organização financeira, investimentos e planejamento para empreendedoras.",
    date: "2024-11-15",
    time: "14:00",
    duration: "2 horas",
    platform: "Zoom",
    videoLink: "https://drive.google.com/file/d/1ABC123DEF456/view",
    videoPlatform: "google-drive",
    isUserRegistered: false,
    maxParticipants: 25,
    currentParticipants: 20,
    createdBy: "admin@aliadas.com",
    category: "Workshop",
    agenda: [
      "Organização financeira básica",
      "Investimentos para iniciantes",
      "Planejamento de aposentadoria",
      "Ferramentas de controle financeiro",
      "Dicas práticas e Q&A",
    ],
  },
];

export const meetingCategories = [
  "Mensal",
  "Workshop",
  "Mentoria",
  "Networking",
  "Treinamento",
  "Apresentação",
  "Outros",
];

export const videoPlatforms = [
  { value: "youtube", label: "YouTube" },
  { value: "google-drive", label: "Google Drive" },
  { value: "other", label: "Outro" },
];
