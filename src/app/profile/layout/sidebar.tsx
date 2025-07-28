"use client";

import { useState } from "react";
import {
  User,
  Calendar,
  MessageSquare,
  Menu,
  X,
  Settings,
  Bell,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  active?: boolean;
}

interface SidebarProps {
  activeItem?: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: User, label: "Perfil", href: "/profile" },
  { icon: Calendar, label: "Eventos", href: "/events" },
  { icon: Calendar, label: "Calendário", href: "/calendar" },
  { icon: MessageSquare, label: "Reuniões", href: "/meetings" },
  { icon: Users, label: "Comunidade", href: "/community" },
  { icon: Bell, label: "Notificações", href: "/notifications" },
  { icon: Settings, label: "Configurações", href: "/settings" },
];

export function Sidebar({ activeItem = "perfil" }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-white shadow-md">
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">ALIADAS</h2>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive =
                item.label.toLowerCase() === activeItem.toLowerCase();
              return (
                <Button
                  key={item.label}
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    isActive
                      ? "bg-rose-600 text-white hover:bg-rose-700"
                      : "text-gray-600 hover:text-rose-600 hover:bg-rose-50"
                  }`}
                  asChild>
                  <a href={item.href}>
                    <item.icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </a>
                </Button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
