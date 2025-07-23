import { Button } from "@/components/ui/button";
import TestimonialCard from "../ui/TestimonialCard";
import { mariana } from "@/assets/images";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Empreendedora",
      text: "O Clube Aliadas me deu a confiança e as conexões que eu precisava para expandir meu negócio. Hoje, tenho uma rede de apoio incrível e minha empresa cresceu 200% em um ano.",
      imageUrl: mariana,
    },
    {
      name: "Camila Oliveira",
      role: "Executiva",
      text: "As mentorias e o networking do Clube foram fundamentais para minha promoção a um cargo de liderança. Aprendi estratégias que não encontraria em nenhum outro lugar.",
    },
    {
      name: "Fernanda Santos",
      role: "Profissional Liberal",
      text: "Encontrei no Clube Aliadas não apenas oportunidades profissionais, mas também amizades verdadeiras. É um espaço onde me sinto acolhida e inspirada a cada encontro.",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-20 md:py-32 bg-gradient-to-br from-rose-50 to-purple-50 "
    >
      <div className="container px-4 md:px-6 max-w-full">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Transformando Vidas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Conheça histórias de mulheres que tiveram suas vidas transformadas
            pelo Clube Aliadas.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16 mx-auto container">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>

        <div className="text-center bg-white p-12 rounded-3xl shadow-xl max-w-4xl mx-auto border border-rose-100">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
            Venha fazer parte dessa transformação
          </h3>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Junte-se a uma comunidade de mulheres extraordinárias e descubra
            todo o seu potencial.
          </p>
          <Button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-lg px-10 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Venha se Aliar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
