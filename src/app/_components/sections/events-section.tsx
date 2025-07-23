import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cafe } from "@/assets/images";
import EventCard from "../ui/eventCard";

const EventsSection = () => {
  return (
    <section
      id="eventos"
      className="py-20 md:py-32 bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <div className="container px-4 md:px-6 max-w-full">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Eventos e Ações
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Confira nossos próximos eventos e participe de experiências
            transformadoras com o Clube Aliadas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 container mx-auto">
          <EventCard
            data="25 Ago"
            titulo="Café com Networking"
            descricao="Um encontro descontraído para expandir sua rede de contatos e trocar experiências com outras mulheres inspiradoras."
            horario="09:00 - 11:00"
            imagem={cafe}
            alt="Evento de networking"
          />
          <EventCard
            data="10 Set"
            titulo="Workshop de Liderança Feminina"
            descricao="Desenvolva habilidades essenciais para se destacar como líder e inspirar outras mulheres."
            horario="14:00 - 18:00"
            imagem={cafe}
            alt="Workshop de liderança"
          />
          <EventCard
            data="30 Set"
            titulo="Conferência Anual Aliadas"
            descricao="O maior evento do ano com palestras inspiradoras, painéis de discussão e oportunidades únicas de networking."
            horario="09:00 - 18:00"
            imagem={cafe}
            alt="Conferência de empreendedorismo"
          />
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Ver Agenda Completa <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
