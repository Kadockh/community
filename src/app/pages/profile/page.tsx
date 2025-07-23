"use client";

import { useState } from "react";
import Image from "next/image";
import {
  User,
  Calendar,
  MessageSquare,
  Camera,
  Edit3,
  MapPin,
  Mail,
  Phone,
  Cake,
  Plus,
  Heart,
  MessageCircle,
  Share2,
  Menu,
  X,
  MoreHorizontal,
  Settings,
  Bell,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock data
const userProfile = {
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

const posts = [
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

const friends = [
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

const suggestions = [
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

const ProfilePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const sidebarItems = [
    { icon: User, label: "Perfil", href: "#", active: true },
    { icon: Calendar, label: "Eventos", href: "#" },
    { icon: Calendar, label: "Calendário", href: "#" },
    { icon: MessageSquare, label: "Reuniões", href: "#" },
    { icon: Users, label: "Comunidade", href: "#" },
    { icon: Bell, label: "Notificações", href: "#" },
    { icon: Settings, label: "Configurações", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-white shadow-md">
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">ALIADAS</h2>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start ${
                  item.active
                    ? "bg-rose-600 text-white hover:bg-rose-700"
                    : "text-gray-600 hover:text-rose-600 hover:bg-rose-50"
                }`}
                asChild>
                <a href={item.href}>
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.label}
                </a>
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Cover Photo Section */}
        <div className="relative">
          <div className="h-64 md:h-80 bg-gradient-to-r from-rose-400 via-purple-500 to-indigo-500 relative overflow-hidden">
            <Image
              src="/placeholder.svg?height=320&width=1200"
              alt="Cover Photo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  className="absolute top-4 right-4 gap-2">
                  <Camera className="h-4 w-4" />
                  <span className="hidden sm:inline">Editar Capa</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Editar Foto de Capa</DialogTitle>
                  <DialogDescription>
                    Escolha uma nova imagem para sua foto de capa.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button className="w-full">Escolher Arquivo</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Profile Info */}
          <div className="relative px-4 md:px-8 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 relative z-10">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage
                    src="/placeholder.svg?height=128&width=128"
                    alt={userProfile.name}
                  />
                  <AvatarFallback className="text-2xl">
                    {userProfile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 rounded-full">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 sm:ml-4 mt-4 sm:mt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {userProfile.name}
                    </h1>
                    <p className="text-lg text-gray-600 mt-1">
                      {userProfile.title}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>{userProfile.stats.posts} posts</span>
                      <span>{userProfile.stats.friends} amigos</span>
                      <span>{userProfile.stats.following} seguindo</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-rose-600 hover:bg-rose-700 gap-2">
                          <Edit3 className="h-4 w-4" />
                          Editar Perfil
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Editar Perfil</DialogTitle>
                          <DialogDescription>
                            Atualize suas informações pessoais.
                          </DialogDescription>
                        </DialogHeader>
                        <Tabs defaultValue="basic" className="w-full">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="basic">Básico</TabsTrigger>
                            <TabsTrigger value="contact">Contato</TabsTrigger>
                            <TabsTrigger value="professional">
                              Profissional
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="basic" className="space-y-4">
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right">Nome:</label>
                                <input
                                  className="col-span-3 p-2 border rounded"
                                  defaultValue={userProfile.name}
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right">Título:</label>
                                <input
                                  className="col-span-3 p-2 border rounded"
                                  defaultValue={userProfile.title}
                                />
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="contact" className="space-y-4">
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right">Email:</label>
                                <input
                                  className="col-span-3 p-2 border rounded"
                                  defaultValue={userProfile.email}
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right">Telefone:</label>
                                <input
                                  className="col-span-3 p-2 border rounded"
                                  defaultValue={userProfile.phone}
                                />
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent
                            value="professional"
                            className="space-y-4">
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right">Bio:</label>
                                <textarea
                                  className="col-span-3 p-2 border rounded"
                                  rows={3}
                                  defaultValue={userProfile.bio}
                                />
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="px-4 md:px-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - About Section */}
            <div className="lg:col-span-1 space-y-6">
              {/* About Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Sobre
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{userProfile.bio}</p>
                  <Separator />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <User className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Nome Completo</p>
                        <p className="font-medium text-gray-900">
                          {userProfile.fullName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Cake className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">
                          Data de Nascimento
                        </p>
                        <p className="font-medium text-gray-900">
                          {userProfile.birthDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Localização</p>
                        <p className="font-medium text-gray-900">
                          {userProfile.city}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="font-medium text-gray-900">
                          {userProfile.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Telefone</p>
                        <p className="font-medium text-gray-900">
                          {userProfile.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Habilidades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Habilidade
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Middle Column - Posts Section */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Posts da Comunidade
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {posts.map((post) => (
                    <div key={post.id} className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {post.author.name}
                              </h3>
                              <p className="text-xs text-gray-500">
                                {post.author.title} • {post.timestamp}
                              </p>
                            </div>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-gray-600 mt-2">{post.content}</p>
                          {post.image && (
                            <div className="mt-3">
                              <Image
                                src={post.image}
                                alt="Post image"
                                width={400}
                                height={200}
                                className="rounded-lg w-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex items-center gap-4 mt-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="gap-1 text-gray-500 hover:text-rose-600">
                              <Heart className="h-4 w-4" />
                              {post.likes}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="gap-1 text-gray-500 hover:text-rose-600">
                              <MessageCircle className="h-4 w-4" />
                              {post.comments}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="gap-1 text-gray-500 hover:text-rose-600">
                              <Share2 className="h-4 w-4" />
                              {post.shares}
                            </Button>
                          </div>
                        </div>
                      </div>
                      {post.id !== posts.length && <Separator />}
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Ver Mais Posts
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Friends and Suggestions */}
            <div className="lg:col-span-1 space-y-6">
              {/* Friends Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Amigos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {friends.map((friend) => (
                      <div
                        key={friend.name}
                        className="text-center group cursor-pointer">
                        <Avatar className="mx-auto mb-2 group-hover:ring-2 group-hover:ring-rose-200 transition-all">
                          <AvatarImage src={friend.avatar} />
                          <AvatarFallback>
                            {friend.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-medium text-gray-900">
                          {friend.name}
                        </p>
                        <p className="text-xs text-gray-500">{friend.title}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    Ver Todos os Amigos
                  </Button>
                </CardContent>
              </Card>

              {/* Suggestions Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Pessoas que Você Pode Conhecer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion.name}
                      className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={suggestion.avatar} />
                        <AvatarFallback>
                          {suggestion.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {suggestion.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {suggestion.title}
                        </p>
                        <p className="text-xs text-gray-400">
                          {suggestion.mutualFriends} amigos em comum
                        </p>
                      </div>
                      <Button
                        size="icon"
                        className="bg-rose-600 hover:bg-rose-700">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" size="sm">
                    Ver Mais Sugestões
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
