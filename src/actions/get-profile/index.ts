"use server";

import { db } from "@/db";
import { userProfilesTable, usersTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";

export const getProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return { error: "Usuário não autenticado" };
  }

  try {
    const profile = await db
      .select({
        id: userProfilesTable.id,
        userId: userProfilesTable.userId,
        title: userProfilesTable.title,
        bio: userProfilesTable.bio,
        phone: userProfilesTable.phone,
        coverImage: userProfilesTable.coverImage,
        createdAt: userProfilesTable.createdAt,
        updatedAt: userProfilesTable.updatedAt,
        // Dados do usuário
        name: usersTable.name,
        email: usersTable.email,
        image: usersTable.image,
        phoneNumber: usersTable.phoneNumber,
      })
      .from(userProfilesTable)
      .leftJoin(usersTable, eq(userProfilesTable.userId, usersTable.id))
      .where(eq(userProfilesTable.userId, session.user.id))
      .limit(1);

    if (profile.length === 0) {
      // Se não existe perfil, criar um básico
      const newProfile = await db
        .insert(userProfilesTable)
        .values({
          userId: session.user.id,
          title: null,
          bio: null,
          phone: null,
          coverImage: null,
        })
        .returning();

      return {
        success: true,
        profile: {
          id: newProfile[0].id,
          userId: newProfile[0].userId,
          title: newProfile[0].title,
          bio: newProfile[0].bio,
          phone: newProfile[0].phone,
          coverImage: newProfile[0].coverImage,
          createdAt: newProfile[0].createdAt,
          updatedAt: newProfile[0].updatedAt,
          name: session.user.name || "Usuário",
          email: session.user.email || "",
          image: session.user.image || null,
        },
      };
    }

    return {
      success: true,
      profile: profile[0],
    };
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    return { error: "Erro ao buscar perfil" };
  }
};
