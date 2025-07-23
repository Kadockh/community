import { luizaeali } from "@/assets/images";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6 max-w-full">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Sobre o Clube
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed">
            &ldquo;Mais do que uma marca, somos um movimento forte de grandes
            mulheres fazendo a diferença. Ao se envolver com o nosso propósito,
            com o nosso time e com a nossa energia, ninguém sai igual.&rdquo;
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">
          <div className="flex flex-col gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-2xl border border-rose-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 max-w-2xl">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                Ali Kemt
              </h3>
              <p className="text-rose-600 font-medium mb-4">
                Apresentadora e empresária
              </p>
              <p className="text-gray-700 leading-relaxed">
                Visionária e líder apaixonada, Ali traz sua experiência em
                comunicação e negócios para criar um espaço onde mulheres possam
                florescer e se apoiar mutuamente.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 max-w-2xl">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                Luiza Fontonella
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                Doutora em design e especialista em criatividade
              </p>
              <p className="text-gray-700 leading-relaxed">
                Com seu conhecimento acadêmico e criativo, Luiza desenvolve
                metodologias inovadoras para impulsionar o potencial das
                mulheres no mercado.
              </p>
            </div>
          </div>
          <div className="relative group max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-rose-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
            <Image
              src={luizaeali}
              width={500}
              height={500}
              alt="Fundadoras do Clube Aliadas"
              className="relative rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-full shadow-lg">
              <Sparkles
                className="h-8 w-8 text-purple-500 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
