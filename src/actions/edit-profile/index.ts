"use server";

import { db } from "@/db";
import { userProfilesTable, usersTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";

interface ProfileUpdateData {
  name: string;
  title?: string;
  email: string;
  phone?: string;
  bio?: string;
}

export const editProfile = async (data: ProfileUpdateData) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return { error: "Usuário não autenticado" };
  }

  try {
    // Atualizar dados básicos do usuário
    await db
      .update(usersTable)
      .set({
        name: data.name,
        email: data.email,
        updatedAt: new Date(),
      })
      .where(eq(usersTable.id, session.user.id));

    // Atualizar ou criar perfil do usuário
    const existingProfile = await db
      .select()
      .from(userProfilesTable)
      .where(eq(userProfilesTable.userId, session.user.id))
      .limit(1);

    if (existingProfile.length > 0) {
      // Atualizar perfil existente
      await db
        .update(userProfilesTable)
        .set({
          title: data.title || null,
          phone: data.phone || null,
          bio: data.bio || null,
          updatedAt: new Date(),
        })
        .where(eq(userProfilesTable.userId, session.user.id));
    } else {
      // Criar novo perfil
      await db.insert(userProfilesTable).values({
        userId: session.user.id,
        title: data.title || null,
        phone: data.phone || null,
        bio: data.bio || null,
      });
    }

    return { success: "Perfil atualizado com sucesso" };
  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    return { error: "Erro ao atualizar perfil" };
  }
};
