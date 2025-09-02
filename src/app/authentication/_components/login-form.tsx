"use client";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Email inválido" }),
  password: z
    .string()
    .trim()
    .min(1, { message: "Senha é obrigatório" })
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
    .regex(/[A-Z]/, {
      message: "A senha deve conter pelo menos uma letra maiúscula",
    })
    .regex(/[0-9]/, {
      message: "A senha deve conter pelo menos um número",
    })
    .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/, {
      message: "A senha deve conter pelo menos um caractere especial",
    }),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof loginSchema>) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        callbackURL: "/profile",
      },
      {
        onSuccess: () => {
          router.push("/profile");
        },
        onError: () => {
          toast.error("Email ou senha inválidos");
        },
      }
    );
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Entrar
            </CardTitle>
            <CardDescription className="text-gray-600">
              Faça login para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu email"
                      type="email"
                      className="border-rose-200 focus:border-rose-400 focus:ring-rose-400 transition-colors"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-rose-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Senha
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua senha"
                      type="password"
                      className="border-rose-200 focus:border-rose-400 focus:ring-rose-400 transition-colors"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-rose-600" />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pt-6">
            <Button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 transition-all duration-200 shadow-lg hover:shadow-xl"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </Button>
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Não tem uma conta?{" "}
                <span className="text-rose-600 font-medium cursor-pointer hover:text-rose-700 transition-colors">
                  Criar conta
                </span>
              </p>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;
