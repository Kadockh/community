// Mock data for profile page
export const userProfile = {
  name: "Mariana Silva",
  title: "Empreendedora & Mentora",
  fullName: "Mariana Silva Santos",
  birthDate: "15 de Março, 1988",
  city: "São Paulo, SP",
  email: "mariana@exemplo.com",
  phone: "+55 11 99999-9999",
  bio: "Apaixonada por empoderar mulheres no empreendedorismo. Fundadora de 3 startups e mentora de mais de 100 empreendedoras.",
  skills: ["Empreendedorismo", "Mentoria", "Liderança", "Marketing Digital"],
  stats: {
    posts: 127,
    friends: 341,
    following: 189,
  },
};

export const posts = [
  {
    id: 1,
    author: {
      name: "Ana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "CEO & Fundadora",
    },
    content:
      "Excited to share that our mentorship program has helped 50+ women launch their businesses this year! 🚀",
    image: "/placeholder.svg?height=200&width=400",
    timestamp: "2 horas atrás",
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    author: {
      name: "Carla Mendes",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Tech Leader",
    },
    content:
      "Join us for our monthly networking event this Friday! Great opportunity to connect with amazing women in tech.",
    timestamp: "1 dia atrás",
    likes: 18,
    comments: 5,
    shares: 2,
  },
  {
    id: 3,
    author: {
      name: "Lucia Fernandes",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Product Manager",
    },
    content:
      "Grateful for the support from this incredible community. Your encouragement means everything! 💜",
    timestamp: "3 dias atrás",
    likes: 32,
    comments: 12,
    shares: 5,
  },
];

export const friends = [
  {
    name: "Sofia Lima",
    title: "UX Designer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Julia Santos",
    title: "Full Stack Developer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Beatriz Costa",
    title: "Marketing Director",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Camila Rocha",
    title: "CEO & Founder",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export const suggestions = [
  {
    name: "Patricia Alves",
    title: "Serial Entrepreneur",
    avatar: "/placeholder.svg?height=50&width=50",
    mutualFriends: 5,
  },
  {
    name: "Renata Oliveira",
    title: "Business Consultant",
    avatar: "/placeholder.svg?height=50&width=50",
    mutualFriends: 3,
  },
  {
    name: "Fernanda Dias",
    title: "Angel Investor",
    avatar: "/placeholder.svg?height=50&width=50",
    mutualFriends: 8,
  },
];
