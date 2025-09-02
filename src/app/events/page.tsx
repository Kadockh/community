import { AppLayout } from "@/app/profile/layout";
import { EventsList } from "./_components/events-list";
import { CreateEventButton } from "./_components/create-event-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const EventsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  // Verificar se o usuário é admin
  const isAdmin = session.user.email === "admin@aliadas.com"; // Ajustar conforme sua lógica de admin

  return (
    <AppLayout activeItem="eventos">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Eventos</h1>
            <p className="text-gray-600 mt-1">
              Confirme sua presença nos próximos eventos da comunidade
            </p>
          </div>
          {isAdmin && <CreateEventButton />}
        </div>

        <EventsList userId={session.user.id} isAdmin={isAdmin} />
      </div>
    </AppLayout>
  );
};

export default EventsPage;
