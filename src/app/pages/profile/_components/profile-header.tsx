"use client";

import Image from "next/image";
import { Camera, Edit3, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProfileHeaderProps {
  userProfile: {
    name: string;
    title: string;
    email: string;
    phone: string;
    bio: string;
    stats: {
      posts: number;
      friends: number;
      following: number;
    };
  };
}

export function ProfileHeader({ userProfile }: ProfileHeaderProps) {
  return (
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

          <div className="flex-1 sm:ml-4 mt-4 sm:mt-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {userProfile.name}
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  {userProfile.title}
                </p>
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
                      <TabsContent value="professional" className="space-y-4">
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
  );
}
