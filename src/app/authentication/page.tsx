import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginForm from "./_components/login-form";
import SignUpForm from "./_components/sign-up-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/profile");
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-white to-rose-100 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-rose-600 mb-2">ALIADAS</h1>
          <p className="text-gray-600">Bem-vinda à nossa comunidade</p>
        </div>

        {/* Auth Tabs */}
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/80 backdrop-blur-sm border border-rose-200 shadow-lg">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-rose-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 hover:bg-rose-50"
            >
              Entrar
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-rose-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 hover:bg-rose-50"
            >
              Criar conta
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-6">
            <LoginForm />
          </TabsContent>

          <TabsContent value="register" className="mt-6">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthenticationPage;
