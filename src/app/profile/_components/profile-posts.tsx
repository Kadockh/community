import Image from "next/image";
import {
  MessageSquare,
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

interface ProfilePostsProps {
  posts: Post[];
}

export function ProfilePosts({ posts }: ProfilePostsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Posts da Comunidade
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="space-y-3">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {post.author.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {post.author.title} • {post.timestamp}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-gray-600 mt-2">{post.content}</p>
                {post.image && (
                  <div className="mt-3">
                    <Image
                      src={post.image}
                      alt="Post image"
                      width={400}
                      height={200}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-gray-500 hover:text-rose-600">
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-gray-500 hover:text-rose-600">
                    <MessageCircle className="h-4 w-4" />
                    {post.comments}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-gray-500 hover:text-rose-600">
                    <Share2 className="h-4 w-4" />
                    {post.shares}
                  </Button>
                </div>
              </div>
            </div>
            {post.id !== posts.length && <Separator />}
          </div>
        ))}
        <Button variant="outline" className="w-full">
          Ver Mais Posts
        </Button>
      </CardContent>
    </Card>
  );
}
