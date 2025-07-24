import { User, Cake, MapPin, Mail, Phone, Briefcase, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ProfileAboutProps {
  userProfile: {
    fullName: string;
    birthDate: string;
    city: string;
    email: string;
    phone: string;
    bio: string;
    skills: string[];
  };
}

export function ProfileAbout({ userProfile }: ProfileAboutProps) {
  return (
    <div className="space-y-6">
      {/* About Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Sobre
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">{userProfile.bio}</p>
          <Separator />
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Nome Completo</p>
                <p className="font-medium text-gray-900">
                  {userProfile.fullName}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Cake className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Data de Nascimento</p>
                <p className="font-medium text-gray-900">
                  {userProfile.birthDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Localização</p>
                <p className="font-medium text-gray-900">{userProfile.city}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{userProfile.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Telefone</p>
                <p className="font-medium text-gray-900">{userProfile.phone}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Habilidades
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {userProfile.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Habilidade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
