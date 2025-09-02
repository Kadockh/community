import { AppLayout } from "@/app/profile/layout";
import { ProfileHeader } from "./_components/profile-header";
import { ProfileAbout } from "./_components/profile-about";
import { ProfilePosts } from "./_components/profile-posts";
import { ProfileSocial } from "./_components/profile-social";
import { posts, friends, suggestions } from "@/data/profile-data";
import { auth } from "@/lib/auth";
import { getProfile } from "@/actions/get-profile";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  // Buscar perfil real do banco de dados
  const profileResult = await getProfile();

  if (!profileResult.success) {
    // Em caso de erro, usar dados básicos da sessão
    const fallbackProfile = {
      name: session.user.name || "Usuário",
      title: "",
      email: session.user.email || "",
      phone: "",
      bio: "",
      stats: {
        posts: 0,
        friends: 0,
        following: 0,
      },
    };

    return (
      <AppLayout activeItem="perfil">
        <ProfileHeader userProfile={fallbackProfile} />
        <div className="px-4 md:px-8 pb-8">
          <div className="text-center py-8">
            <p className="text-gray-600">
              Erro ao carregar perfil. Tente novamente.
            </p>
          </div>
        </div>
      </AppLayout>
    );
  }

  const userProfile = {
    name: profileResult.profile.name || "Usuário",
    title: profileResult.profile.title || "",
    email: profileResult.profile.email || "",
    phone: profileResult.profile.phone || "",
    bio: profileResult.profile.bio || "",
    stats: {
      posts: 0, // TODO: Implementar contagem real de posts
      friends: 0, // TODO: Implementar contagem real de amigos
      following: 0, // TODO: Implementar contagem real de seguindo
    },
  };

  // Dados para o componente ProfileAbout
  const aboutData = {
    fullName: profileResult.profile.name || "Usuário",
    birthDate: "Não informado", // TODO: Adicionar campo de data de nascimento
    city: "Não informado", // TODO: Adicionar campo de cidade
    email: profileResult.profile.email || "",
    phone: profileResult.profile.phone || "",
    bio: profileResult.profile.bio || "",
    skills: [], // TODO: Implementar sistema de habilidades
  };

  return (
    <AppLayout activeItem="perfil">
      <ProfileHeader userProfile={userProfile} />

      <div className="px-4 md:px-8 pb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4">
            <ProfileAbout userProfile={aboutData} />
          </div>

          <div className="w-full lg:w-2/3">
            <ProfilePosts posts={posts} />
          </div>

          <div className="w-full lg:w-1/5">
            <ProfileSocial friends={friends} suggestions={suggestions} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
