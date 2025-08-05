"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      let currentSection = "inicio";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#clube", label: "Clube" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#eventos", label: "Eventos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      const headerHeight = 64;
      const sectionTop = section.offsetTop - headerHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const renderNavLinks = (onClick?: () => void) =>
    links.map(({ href, label }) => {
      const sectionId = href.replace("#", "");
      const isActive = activeSection === sectionId;

      return (
        <button
          key={href}
          onClick={() => {
            handleNavClick(href);
            onClick?.();
          }}
          className={cn(
            "text-sm font-medium transition-all duration-300 hover:scale-105",
            isActive
              ? "text-rose-600 font-semibold border-b-2 border-rose-600 pb-1"
              : "text-gray-700 hover:text-rose-600 hover:font-medium"
          )}>
          {label}
        </button>
      );
    });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-rose-100 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <button
          onClick={() => handleNavClick("#inicio")}
          className="flex items-center transition-transform hover:scale-105">
          <span className="text-2xl font-bold tracking-tight text-rose-600">
            ALIADAS
          </span>
        </button>

        <nav className="hidden md:flex gap-8 items-center">
          {renderNavLinks()}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden md:flex border-rose-200 bg-transparent hover:bg-rose-50 hover:text-rose-700 transition-all duration-200">
            <Link href="/authentication">Entrar</Link>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden bg-transparent hover:bg-rose-50 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Abrir menu</span>
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden bg-white/95 backdrop-blur-lg border-t border-rose-100 shadow-inner transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}>
        <nav className="flex flex-col px-4 py-4 gap-4">{renderNavLinks()}</nav>
      </div>
    </header>
  );
};

export default Header;
