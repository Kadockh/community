import { AppLayout } from "@/app/profile/layout";
import { MeetingsList } from "./_components/meetings-list";
import { CreateMeetingButton } from "./_components/create-meeting-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const MeetingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  // Verificar se o usuário é admin
  const isAdmin = session.user.email === "admin@aliadas.com"; // Ajustar conforme futura lógica de admin

  return (
    <AppLayout activeItem="reuniões">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Reuniões</h1>
            <p className="text-gray-600 mt-1">
              Acompanhe as reuniões da comunidade e acesse as gravações
            </p>
          </div>
          {isAdmin && <CreateMeetingButton />}
        </div>

        <MeetingsList isAdmin={isAdmin} />
      </div>
    </AppLayout>
  );
};

export default MeetingsPage;
