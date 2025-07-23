import { Mail, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Texto e Informações de Contato */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Entre em Contato
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Estamos ansiosas para ouvir você e responder a todas as suas
              perguntas sobre o Clube Aliadas.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center group transition-transform duration-200 hover:translate-x-2">
                <div className="bg-rose-100 p-3 rounded-full mr-6 group-hover:bg-rose-200 transition-colors">
                  <Mail className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                  <p className="text-gray-600">contato@clubealiadas.com.br</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center group transition-transform duration-200 hover:translate-x-2">
                <div className="bg-rose-100 p-3 rounded-full mr-6 group-hover:bg-rose-200 transition-colors">
                  <Instagram className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Instagram
                  </h3>
                  <p className="text-gray-600">@clubealiadas</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center group transition-transform duration-200 hover:translate-x-2">
                <div className="bg-rose-100 p-3 rounded-full mr-6 group-hover:bg-rose-200 transition-colors">
                  <Linkedin className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    LinkedIn
                  </h3>
                  <p className="text-gray-600">Clube Aliadas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl border border-rose-100">
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-900">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
