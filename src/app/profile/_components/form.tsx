"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const ProfileFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(50, {
      message: "Nome deve ter no máximo 50 caracteres",
    }),
  title: z.string().trim().optional(),
  email: z.string().trim().email({ message: "Email inválido" }),
  phone: z.string().trim().min(1, { message: "Telefone é obrigatório" }),
  bio: z.string().trim().optional(),
});

interface ProfileFormProps {
  defaultValues?: {
    name: string;
    title?: string;
    email: string;
    phone: string;
    bio?: string;
  };
  onSubmit: (data: z.infer<typeof ProfileFormSchema>) => void;
}

const ProfileForm = ({ defaultValues, onSubmit }: ProfileFormProps) => {
  const form = useForm<z.infer<typeof ProfileFormSchema>>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: defaultValues || {
      name: "",
      title: "",
      email: "",
      phone: "",
      bio: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof ProfileFormSchema>) => {
    onSubmit(data);
  };

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Seu nome completo"
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Ex: empreendedor, empresário, etc."
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Ex: email@email.com"
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  placeholder="Ex: (11) 99999-9999"
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Descreva-se..."
                  className="w-full resize-none"
                  rows={3}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit" className="w-full sm:w-auto">
            Salvar Alterações
          </Button>
        </DialogFooter>
      </form>
    </Form>
    </>
  );
};

export default ProfileForm;
