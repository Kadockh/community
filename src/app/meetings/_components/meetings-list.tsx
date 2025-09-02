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
  Clock,
  Users,
  Video,
  ExternalLink,
  Play,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  UserPlus,
  UserMinus,
} from "lucide-react";
import { toast } from "sonner";
import { Meeting, mockMeetings } from "@/data/meetings-data";

interface MeetingsListProps {
  isAdmin: boolean;
}

export function MeetingsList({ isAdmin }: MeetingsListProps) {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setMeetings(mockMeetings);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRegisterForMeeting = async (meetingId: string) => {
    try {
      // Simular chamada à API
      await new Promise((resolve) => setTimeout(resolve, 500));

      setMeetings((prevMeetings) =>
        prevMeetings.map((meeting) =>
          meeting.id === meetingId
            ? {
                ...meeting,
                isUserRegistered: !meeting.isUserRegistered,
                currentParticipants: meeting.isUserRegistered
                  ? meeting.currentParticipants - 1
                  : meeting.currentParticipants + 1,
              }
            : meeting
        )
      );

      const meeting = meetings.find((m) => m.id === meetingId);
      if (meeting) {
        toast.success(
          meeting.isUserRegistered
            ? "Inscrição cancelada com sucesso!"
            : "Inscrição realizada com sucesso!"
        );
      }
    } catch {
      toast.error("Erro ao processar inscrição. Tente novamente.");
    }
  };

  const handleDeleteMeeting = async (meetingId: string) => {
    try {
      // Simular chamada à API
      await new Promise((resolve) => setTimeout(resolve, 500));

      setMeetings((prevMeetings) =>
        prevMeetings.filter((meeting) => meeting.id !== meetingId)
      );
      toast.success("Reunião excluída com sucesso!");
    } catch {
      toast.error("Erro ao excluir reunião. Tente novamente.");
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

  const isMeetingPast = (dateString: string) => {
    const meetingDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return meetingDate < today;
  };

  const getVideoPlatformIcon = (platform?: string) => {
    switch (platform) {
      case "youtube":
        return "📺";
      case "google-drive":
        return "📁";
      default:
        return "🎥";
    }
  };

  const getVideoPlatformName = (platform?: string) => {
    switch (platform) {
      case "youtube":
        return "YouTube";
      case "google-drive":
        return "Google Drive";
      default:
        return "Vídeo";
    }
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

  // Separar reuniões futuras e passadas
  const futureMeetings = meetings.filter(
    (meeting) => !isMeetingPast(meeting.date)
  );
  const pastMeetings = meetings.filter((meeting) =>
    isMeetingPast(meeting.date)
  );

  const renderMeetingCard = (meeting: Meeting, isPast: boolean) => {
    return (
      <Card
        key={meeting.id}
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
                {meeting.title}
                {isPast && (
                  <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    Realizada
                  </span>
                )}
              </CardTitle>
              <CardDescription
                className={`${isPast ? "text-gray-400" : "text-gray-600"}`}
              >
                {meeting.description}
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
                  onClick={() => handleDeleteMeeting(meeting.id)}
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
              <span className="capitalize">{formatDate(meeting.date)}</span>
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
              <span>
                {meeting.time} • {meeting.duration}
              </span>
            </div>
            <div
              className={`flex items-center ${
                isPast ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <Video
                className={`h-4 w-4 mr-2 ${
                  isPast ? "text-gray-400" : "text-rose-600"
                }`}
              />
              <span>{meeting.platform}</span>
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
                {meeting.currentParticipants}/{meeting.maxParticipants}{" "}
                participantes
              </span>
            </div>
          </div>

          {/* Agenda da reunião */}
          {meeting.agenda && meeting.agenda.length > 0 && (
            <div className="mb-4">
              <h4
                className={`text-sm font-medium mb-2 ${
                  isPast ? "text-gray-500" : "text-gray-700"
                }`}
              >
                Agenda:
              </h4>
              <ul
                className={`text-sm space-y-1 ${
                  isPast ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {meeting.agenda.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {meeting.category && (
                <Badge
                  variant="outline"
                  className={`${
                    isPast
                      ? "text-gray-400 border-gray-300 bg-gray-100"
                      : "text-rose-600 border-rose-200"
                  }`}
                >
                  {meeting.category}
                </Badge>
              )}
              <Badge
                variant={meeting.isUserRegistered ? "default" : "secondary"}
                className={
                  meeting.isUserRegistered
                    ? isPast
                      ? "bg-green-200 text-green-700"
                      : "bg-green-100 text-green-800"
                    : isPast
                    ? "bg-gray-200 text-gray-600"
                    : "bg-gray-100 text-gray-800"
                }
              >
                {meeting.isUserRegistered ? (
                  <>
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {isPast ? "Participou" : "Inscrito"}
                  </>
                ) : (
                  <>
                    <XCircle className="h-3 w-3 mr-1" />
                    {isPast ? "Não participou" : "Não inscrito"}
                  </>
                )}
              </Badge>
              {isPast && (
                <Badge
                  variant="outline"
                  className="bg-gray-100 text-gray-500 border-gray-300"
                >
                  <Clock className="h-3 w-3 mr-1" />
                  Realizada
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Botões para reuniões futuras */}
              {!isPast && (
                <>
                  {meeting.meetingLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      onClick={() => window.open(meeting.meetingLink, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Participar
                    </Button>
                  )}
                  <Button
                    onClick={() => handleRegisterForMeeting(meeting.id)}
                    variant={meeting.isUserRegistered ? "outline" : "default"}
                    className={
                      meeting.isUserRegistered
                        ? "border-red-300 text-red-600 hover:bg-red-50"
                        : "bg-rose-600 hover:bg-rose-700"
                    }
                    disabled={
                      meeting.currentParticipants >= meeting.maxParticipants &&
                      !meeting.isUserRegistered
                    }
                  >
                    {meeting.isUserRegistered ? (
                      <>
                        <UserMinus className="h-4 w-4 mr-2" />
                        Cancelar Inscrição
                      </>
                    ) : (
                      <>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Inscrever-se
                      </>
                    )}
                  </Button>
                </>
              )}

              {/* Botão para acessar gravação de reuniões passadas */}
              {isPast && meeting.videoLink && (
                <Button
                  variant="default"
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(meeting.videoLink, "_blank")}
                >
                  <Play className="h-4 w-4 mr-2" />
                  {getVideoPlatformIcon(meeting.videoPlatform)} Assistir
                  Gravação
                </Button>
              )}

              {isPast && !meeting.videoLink && (
                <div className="text-right">
                  <p className="text-sm text-gray-500 italic">
                    Gravação não disponível
                  </p>
                </div>
              )}
            </div>
          </div>

          {!isPast &&
            meeting.currentParticipants >= meeting.maxParticipants &&
            !meeting.isUserRegistered && (
              <p className="text-sm text-amber-600 mt-2">
                ⚠️ Reunião lotada. Entre na lista de espera.
              </p>
            )}

          {isPast && (
            <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Resumo da reunião:</strong>{" "}
                {meeting.currentParticipants} de {meeting.maxParticipants}{" "}
                participantes se inscreveram.
                {meeting.videoLink && (
                  <span className="block mt-1">
                    📹 Gravação disponível no{" "}
                    {getVideoPlatformName(meeting.videoPlatform)}
                  </span>
                )}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      {/* Reuniões Futuras */}
      {futureMeetings.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-rose-600" />
            Próximas Reuniões
          </h2>
          <div className="space-y-6">
            {futureMeetings.map((meeting) => renderMeetingCard(meeting, false))}
          </div>
        </div>
      )}

      {/* Reuniões Passadas */}
      {pastMeetings.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-600 mb-4 flex items-center">
            <Clock className="h-6 w-6 mr-2 text-gray-500" />
            Reuniões Realizadas
          </h2>
          <div className="space-y-4">
            {pastMeetings.map((meeting) => renderMeetingCard(meeting, true))}
          </div>
        </div>
      )}

      {/* Mensagem quando não há reuniões */}
      {meetings.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Nenhuma reunião encontrada
            </h3>
            <p className="text-gray-500">
              Novas reuniões serão agendadas em breve. Fique atenta!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
