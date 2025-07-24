"use client";

import { AppLayout } from "@/components/layout";
import { ProfileHeader } from "./_components/profile-header";
import { ProfileAbout } from "./_components/profile-about";
import { ProfilePosts } from "./_components/profile-posts";
import { ProfileSocial } from "./_components/profile-social";
import { userProfile, posts, friends, suggestions } from "@/data/profile-data";

const ProfilePage = () => {
  return (
    <AppLayout activeItem="perfil">
      {/* Profile Header with Cover Photo */}
      <ProfileHeader userProfile={userProfile} />

      {/* Main Content Grid */}
      <div className="px-4 md:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - About Section */}
          <div className="lg:col-span-1">
            <ProfileAbout userProfile={userProfile} />
          </div>

          {/* Middle Column - Posts Section */}
          <div className="lg:col-span-1">
            <ProfilePosts posts={posts} />
          </div>

          {/* Right Column - Friends and Suggestions */}
          <div className="lg:col-span-1">
            <ProfileSocial friends={friends} suggestions={suggestions} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
