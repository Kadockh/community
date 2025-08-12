import { AppLayout } from "@/app/profile/layout";
import { ProfileHeader } from "./_components/profile-header";
import { ProfileAbout } from "./_components/profile-about";
import { ProfilePosts } from "./_components/profile-posts";
import { ProfileSocial } from "./_components/profile-social";
import { userProfile, posts, friends, suggestions } from "@/data/profile-data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  return (
    <AppLayout activeItem="perfil">
      <ProfileHeader userProfile={userProfile} />

      <div className="px-4 md:px-8 pb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4">
            <ProfileAbout userProfile={userProfile} />
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
