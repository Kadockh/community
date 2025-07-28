import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";
import { sede } from "@/assets/images";

const HeroSection = () => {
  return (
    <main>
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50 py-20 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[90vw] rounded-full bg-rose-100/40 blur-3xl animate-pulse" />
          <div className="absolute -right-[200px] bottom-0 w-[600px] h-[600px] max-w-[90vw] rounded-full bg-purple-100/30 blur-3xl" />
        </div>
        <div className="relative z-10 container px-4 md:px-6 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8 animate-fade-in text-center lg:text-left">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Juntas, nos engrandecemos.{" "}
                <span className="text-rose-600 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  Juntas, transformamos o mundo.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Aliadas se propõe a acelerar projetos femininos. A promover
                transformação no universo das mulheres. A trazer conhecimento,
                inspiração e evolução.
              </p>
              <Button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Quero me Aliar
              </Button>
            </div>
            <div className="flex-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-purple-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <Image
                src={sede}
                width={600}
                height={600}
                alt="Mulheres aliadas celebrando conquistas"
                className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 text-rose-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
