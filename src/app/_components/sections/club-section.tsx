import { entrevista } from "@/assets/images";
import Image from "next/image";

const ClubSection = () => {
  return (
    <section
      id="clube"
      className="py-20 md:py-32 flex justify-center items-center bg-gradient-to-br from-white via-rose-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            O Clube Aliadas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            O Clube Aliadas é uma curadora de relacionamentos, inspirado nas
            fraternidades americanas. Visa impulsionar mulheres no mercado,
            criar autoridade e fortalecer redes de apoio.
          </p>
        </div>

        <div className="relative group rounded-2xl overflow-hidden">
          <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300" />

          <Image
            src={entrevista}
            width={1200}
            height={600}
            alt="Encontro do Clube Aliadas"
            className="relative w-full h-auto object-cover rounded-2xl shadow-2xl"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl flex flex-col justify-end">
            <div className="p-6 md:p-12 text-white">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Um espaço de transformação
              </h3>
              <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
                Criamos um ambiente onde mulheres podem se conectar,
                compartilhar experiências e crescer juntas, formando uma rede
                poderosa de apoio e oportunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
