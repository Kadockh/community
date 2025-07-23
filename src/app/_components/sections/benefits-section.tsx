import { Network, Lightbulb, Users, Calendar, Award, Star } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section
      id="beneficios"
      className="py-20 md:py-32 flex justify-center items-center bg-white">
      <div className="container px-4 md:px-6 max-w-full">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Benefícios
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Conheça as vantagens de fazer parte do nosso movimento e como
            podemos impulsionar sua jornada pessoal e profissional.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-10xl mx-auto text-lg">
          {[
            {
              icon: <Network className="h-6 w-6 text-rose-600" />,
              title: "Networking Estratégico",
              desc: "Conexões com mulheres influentes e empresas parceiras que podem impulsionar sua carreira e negócios.",
            },
            {
              icon: <Lightbulb className="h-8 w-8 text-rose-600" />,
              title: "Mentorias Exclusivas",
              desc: "Acesso a mentorias com profissionais experientes que compartilharão conhecimentos valiosos para seu crescimento.",
            },
            {
              icon: <Users className="h-8 w-8 text-rose-600" />,
              title: "Comunidade de Apoio",
              desc: "Um ambiente seguro onde você pode compartilhar desafios, celebrar conquistas e encontrar suporte.",
            },
            {
              icon: <Calendar className="h-8 w-8 text-rose-600" />,
              title: "Eventos Exclusivos",
              desc: "Participação em eventos fechados com palestrantes renomados e oportunidades de networking de alto nível.",
            },
            {
              icon: <Award className="h-8 w-8 text-rose-600" />,
              title: "Visibilidade e Autoridade",
              desc: "Oportunidades para destacar seu trabalho e construir autoridade em sua área de atuação.",
            },
            {
              icon: <Star className="h-8 w-8 text-rose-600" />,
              title: "Parcerias Estratégicas",
              desc: "Acesso a parcerias com empresas que valorizam a diversidade e buscam talentos femininos.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200 transform hover:-translate-y-2 w-full sm:w-[45%] lg:w-[30%] max-w-lg
          ">
              <div className="bg-rose-100 p-3 rounded-full w-fit mb-6 group-hover:bg-rose-200 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
