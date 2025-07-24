import { Users, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Friend {
  name: string;
  title: string;
  avatar: string;
}

interface Suggestion {
  name: string;
  title: string;
  avatar: string;
  mutualFriends: number;
}

interface ProfileSocialProps {
  friends: Friend[];
  suggestions: Suggestion[];
}

export function ProfileSocial({ friends, suggestions }: ProfileSocialProps) {
  return (
    <div className="space-y-6">
      {/* Friends Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Amigos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {friends.map((friend) => (
              <div
                key={friend.name}
                className="text-center group cursor-pointer">
                <Avatar className="mx-auto mb-2 group-hover:ring-2 group-hover:ring-rose-200 transition-all">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>
                    {friend.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium text-gray-900">
                  {friend.name}
                </p>
                <p className="text-xs text-gray-500">{friend.title}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4" size="sm">
            Ver Todos os Amigos
          </Button>
        </CardContent>
      </Card>

      {/* Suggestions Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Pessoas que Você Pode Conhecer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.name} className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={suggestion.avatar} />
                <AvatarFallback>
                  {suggestion.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{suggestion.name}</p>
                <p className="text-sm text-gray-500">{suggestion.title}</p>
                <p className="text-xs text-gray-400">
                  {suggestion.mutualFriends} amigos em comum
                </p>
              </div>
              <Button size="icon" className="bg-rose-600 hover:bg-rose-700">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button variant="outline" className="w-full" size="sm">
            Ver Mais Sugestões
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
