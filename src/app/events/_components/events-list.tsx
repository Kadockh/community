"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { Event, mockEvents } from "@/data/events-data";

interface EventsListProps {
  isAdmin: boolean;
}

export function EventsList({ isAdmin }: EventsListProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  const handleConfirmPresence = async (eventId: string) => {
    try {
      // Simular chamada à API
      await new Promise((resolve) => setTimeout(resolve, 500));

      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === eventId
            ? {
                ...event,
                isUserConfirmed: !event.isUserConfirmed,
                currentParticipants: event.isUserConfirmed
                  ? event.currentParticipants - 1
                  : event.currentParticipants + 1,
              }
            : event
        )
      );

      const event = events.find((e) => e.id === eventId);
      if (event) {
        toast.success(
          event.isUserConfirmed
            ? "Presença cancelada com sucesso!"
            : "Presença confirmada com sucesso!"
        );
      }
    } catch {
      toast.error("Erro ao confirmar presença. Tente novamente.");
    }
  };

  const handleDeleteEvent = async (eventId: string) => {
    try {
      // Simular chamada à API
      await new Promise((resolve) => setTimeout(resolve, 500));

      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
      );
      toast.success("Evento excluído com sucesso!");
    } catch {
      toast.error("Erro ao excluir evento. Tente novamente.");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isEventPast = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate < today;
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Separar eventos futuros e passados
  const futureEvents = events.filter((event) => !isEventPast(event.date));
  const pastEvents = events.filter((event) => isEventPast(event.date));

  const renderEventCard = (event: Event, isPast: boolean) => {
    return (
      <Card
        key={event.id}
        className={`transition-all duration-300 ${
          isPast
            ? "bg-gray-50/50 border-gray-200 opacity-75 hover:opacity-90"
            : "bg-white hover:shadow-lg border-rose-200"
        }`}
      >
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <CardTitle
                className={`text-xl mb-2 ${
                  isPast ? "text-gray-500 line-through" : "text-gray-800"
                }`}
              >
                {event.title}
                {isPast && (
                  <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    Realizado
                  </span>
                )}
              </CardTitle>
              <CardDescription
                className={`${isPast ? "text-gray-400" : "text-gray-600"}`}
              >
                {event.description}
              </CardDescription>
            </div>
            {isAdmin && (
              <div className="flex gap-2 ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={isPast ? "opacity-50" : ""}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteEvent(event.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div
              className={`flex items-center ${
                isPast ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <Calendar
                className={`h-4 w-4 mr-2 ${
                  isPast ? "text-gray-400" : "text-rose-600"
                }`}
              />
              <span className="capitalize">{formatDate(event.date)}</span>
            </div>
            <div
              className={`flex items-center ${
                isPast ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <Clock
                className={`h-4 w-4 mr-2 ${
                  isPast ? "text-gray-400" : "text-rose-600"
                }`}
              />
              <span>{event.time}</span>
            </div>
            <div
              className={`flex items-center ${
                isPast ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <MapPin
                className={`h-4 w-4 mr-2 ${
                  isPast ? "text-gray-400" : "text-rose-600"
                }`}
              />
              <span>{event.location}</span>
            </div>
            <div
              className={`flex items-center ${
                isPast ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <Users
                className={`h-4 w-4 mr-2 ${
                  isPast ? "text-gray-400" : "text-rose-600"
                }`}
              />
              <span>
                {event.currentParticipants}/{event.maxParticipants}{" "}
                participantes
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {event.category && (
                <Badge
                  variant="outline"
                  className={`${
                    isPast
                      ? "text-gray-400 border-gray-300 bg-gray-100"
                      : "text-rose-600 border-rose-200"
                  }`}
                >
                  {event.category}
                </Badge>
              )}
              <Badge
                variant={event.isUserConfirmed ? "default" : "secondary"}
                className={
                  event.isUserConfirmed
                    ? isPast
                      ? "bg-green-200 text-green-700"
                      : "bg-green-100 text-green-800"
                    : isPast
                    ? "bg-gray-200 text-gray-600"
                    : "bg-gray-100 text-gray-800"
                }
              >
                {event.isUserConfirmed ? (
                  <>
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {isPast ? "Participou" : "Confirmado"}
                  </>
                ) : (
                  <>
                    <XCircle className="h-3 w-3 mr-1" />
                    {isPast ? "Não participou" : "Não confirmado"}
                  </>
                )}
              </Badge>
              {isPast && (
                <Badge
                  variant="outline"
                  className="bg-gray-100 text-gray-500 border-gray-300"
                >
                  <Clock className="h-3 w-3 mr-1" />
                  Realizado
                </Badge>
              )}
            </div>

            {!isPast && (
              <Button
                onClick={() => handleConfirmPresence(event.id)}
                variant={event.isUserConfirmed ? "outline" : "default"}
                className={
                  event.isUserConfirmed
                    ? "border-red-300 text-red-600 hover:bg-red-50"
                    : "bg-rose-600 hover:bg-rose-700"
                }
                disabled={
                  event.currentParticipants >= event.maxParticipants &&
                  !event.isUserConfirmed
                }
              >
                {event.isUserConfirmed ? (
                  <>
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancelar Presença
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirmar Presença
                  </>
                )}
              </Button>
            )}

            {isPast && (
              <div className="text-right">
                <p className="text-sm text-gray-500 italic">
                  Este evento já foi realizado
                </p>
              </div>
            )}
          </div>

          {!isPast &&
            event.currentParticipants >= event.maxParticipants &&
            !event.isUserConfirmed && (
              <p className="text-sm text-amber-600 mt-2">
                ⚠️ Evento lotado. Entre na lista de espera.
              </p>
            )}

          {isPast && (
            <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Resumo do evento:</strong> {event.currentParticipants}{" "}
                de {event.maxParticipants} participantes confirmaram presença.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      {/* Eventos Futuros */}
      {futureEvents.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-rose-600" />
            Próximos Eventos
          </h2>
          <div className="space-y-6">
            {futureEvents.map((event) => renderEventCard(event, false))}
          </div>
        </div>
      )}

      {/* Eventos Passados */}
      {pastEvents.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-600 mb-4 flex items-center">
            <Clock className="h-6 w-6 mr-2 text-gray-500" />
            Eventos Realizados
          </h2>
          <div className="space-y-4">
            {pastEvents.map((event) => renderEventCard(event, true))}
          </div>
        </div>
      )}

      {/* Mensagem quando não há eventos */}
      {events.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Nenhum evento encontrado
            </h3>
            <p className="text-gray-500">
              Novos eventos serão adicionados em breve. Fique atenta!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
