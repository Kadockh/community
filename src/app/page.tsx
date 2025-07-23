import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Calendar,
  Users,
  Sparkles,
  ArrowRight,
  Star,
  Network,
  Lightbulb,
  Award,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-full">
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105">
            <span className="text-2xl font-bold tracking-tight text-rose-600">
              ALIADAS
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#inicio"
              className="text-sm font-medium hover:text-rose-600 transition-colors duration-200">
              Início
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium hover:text-rose-600 transition-colors duration-200">
              Sobre
            </Link>
            <Link
              href="#clube"
              className="text-sm font-medium hover:text-rose-600 transition-colors duration-200">
              Clube
            </Link>
            <Link
              href="#beneficios"
              className="text-sm font-medium hover:text-rose-600 transition-colors duration-200">
              Benefícios
            </Link>
            <Link
              href="#eventos"
              className="text-sm font-medium hover:text-rose-600 transition-colors duration-200">
              Eventos
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium hover:text-rose-600 transition-colors duration-200">
              Contato
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex border-rose-200 hover:bg-rose-50 hover:text-rose-700 bg-transparent transition-all duration-200">
            Entrar
          </Button>
          <Button
            variant="outline"
            size="icon"
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
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[90vw] rounded-full bg-rose-100/40 blur-3xl animate-pulse"></div>
            <div className="absolute -right-[200px] bottom-0 w-[600px] h-[600px] max-w-[90vw] rounded-full bg-purple-100/30 blur-3xl"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6 max-w-full">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                  Juntas, nos engrandecemos.{" "}
                  <span className="text-rose-600 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                    Juntas, transformamos o mundo.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                  @aliadascompany se propõe a acelerar projetos femininos. A
                  promover transformação no universo das mulheres. A trazer
                  conhecimento, inspiração e evolução.
                </p>
                <Button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Quero me Aliar
                </Button>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-purple-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
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

        {/* Sobre o Clube */}
        <section id="sobre" className="py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-full">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Sobre o Clube
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed">
                &ldquo;Mais do que uma marca, somos um movimento forte de
                grandes mulheres fazendo a diferença. Ao se envolver com o nosso
                propósito, com o nosso time e com a nossa energia, ninguém sai
                igual.&rdquo;
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-8 rounded-2xl border border-rose-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    Ali Kemt
                  </h3>
                  <p className="text-rose-600 font-medium mb-4">
                    Apresentadora e empresária
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Visionária e líder apaixonada, Ali traz sua experiência em
                    comunicação e negócios para criar um espaço onde mulheres
                    possam florescer e se apoiar mutuamente.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
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

              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-rose-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
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

        {/* Clube */}
        <section
          id="clube"
          className="py-20 md:py-32 bg-gradient-to-br from-white via-rose-50 to-purple-50">
          <div className="container px-4 md:px-6 max-w-full">
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

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <Image
                src="/placeholder.svg?height=600&width=1200"
                width={1200}
                height={600}
                alt="Encontro do Clube Aliadas"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl flex items-end">
                <div className="p-8 md:p-12 text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-6">
                    Um espaço de transformação
                  </h3>
                  <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
                    Criamos um ambiente onde mulheres podem se conectar,
                    compartilhar experiências e crescer juntas, formando uma
                    rede poderosa de apoio e oportunidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-20 md:py-32 bg-white">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200 transform hover:-translate-y-2">
                <div className="bg-rose-100 p-3 rounded-full w-fit mb-6 group-hover:bg-rose-200 transition-colors">
                  <Network className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Networking Estratégico
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Conexões com mulheres influentes e empresas parceiras que
                  podem impulsionar sua carreira e negócios.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200 transform hover:-translate-y-2">
                <div className="bg-rose-100 p-3 rounded-full w-fit mb-6 group-hover:bg-rose-200 transition-colors">
                  <Lightbulb className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Mentorias Exclusivas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Acesso a mentorias com profissionais experientes que
                  compartilharão conhecimentos valiosos para seu crescimento.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200 transform hover:-translate-y-2">
                <div className="bg-rose-100 p-3 rounded-full w-fit mb-6 group-hover:bg-rose-200 transition-colors">
                  <Users className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Comunidade de Apoio
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Um ambiente seguro onde você pode compartilhar desafios,
                  celebrar conquistas e encontrar suporte.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200 transform hover:-translate-y-2">
                <div className="bg-rose-100 p-3 rounded-full w-fit mb-6 group-hover:bg-rose-200 transition-colors">
                  <Calendar className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Eventos Exclusivos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Participação em eventos fechados com palestrantes renomados e
                  oportunidades de networking de alto nível.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200 transform hover:-translate-y-2">
                <div className="bg-rose-100 p-3 rounded-full w-fit mb-6 group-hover:bg-rose-200 transition-colors">
                  <Award className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Visibilidade e Autoridade
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Oportunidades para destacar seu trabalho e construir
                  autoridade em sua área de atuação.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200 transform hover:-translate-y-2">
                <div className="bg-rose-100 p-3 rounded-full w-fit mb-6 group-hover:bg-rose-200 transition-colors">
                  <Star className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Parcerias Estratégicas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Acesso a parcerias com empresas que valorizam a diversidade e
                  buscam talentos femininos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eventos */}
        <section
          id="eventos"
          className="py-20 md:py-32 bg-gradient-to-br from-rose-50 via-white to-purple-50">
          <div className="container px-4 md:px-6 max-w-full">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Eventos e Ações
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Confira nossos próximos eventos e participe de experiências
                transformadoras com o Clube Aliadas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    fill
                    alt="Evento de networking"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    25 Ago
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Café com Networking
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Um encontro descontraído para expandir sua rede de contatos
                    e trocar experiências com outras mulheres inspiradoras.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 text-rose-500" />
                    <span>09:00 - 11:00</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    fill
                    alt="Workshop de liderança"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    10 Set
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Workshop de Liderança Feminina
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Desenvolva habilidades essenciais para se destacar como
                    líder e inspirar outras mulheres.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 text-rose-500" />
                    <span>14:00 - 18:00</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    fill
                    alt="Conferência de empreendedorismo"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    30 Set
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Conferência Anual Aliadas
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    O maior evento do ano com palestras inspiradoras, painéis de
                    discussão e oportunidades únicas de networking.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 text-rose-500" />
                    <span>09:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Ver Agenda Completa <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Depoimentos/CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-rose-50 to-purple-50">
          <div className="container px-4 md:px-6 max-w-full">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Transformando Vidas
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Conheça histórias de mulheres que tiveram suas vidas
                transformadas pelo Clube Aliadas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Depoimento"
                      className="rounded-full border-2 border-rose-200"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Mariana Silva
                    </h3>
                    <p className="text-sm text-rose-600 font-medium">
                      Empreendedora
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;O Clube Aliadas me deu a confiança e as conexões que eu
                  precisava para expandir meu negócio. Hoje, tenho uma rede de
                  apoio incrível e minha empresa cresceu 200% em um ano.&rdquo;
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Depoimento"
                      className="rounded-full border-2 border-rose-200"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Camila Oliveira
                    </h3>
                    <p className="text-sm text-rose-600 font-medium">
                      Executiva
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;As mentorias e o networking do Clube foram fundamentais
                  para minha promoção a um cargo de liderança. Aprendi
                  estratégias que não encontraria em nenhum outro lugar.&rdquo;
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Depoimento"
                      className="rounded-full border-2 border-rose-200"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Fernanda Santos
                    </h3>
                    <p className="text-sm text-rose-600 font-medium">
                      Profissional Liberal
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;Encontrei no Clube Aliadas não apenas oportunidades
                  profissionais, mas também amizades verdadeiras. É um espaço
                  onde me sinto acolhida e inspirada a cada encontro.&rdquo;
                </p>
              </div>
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

        {/* Contato */}
        <section id="contato" className="py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-full">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Entre em Contato
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Estamos ansiosas para ouvir você e responder a todas as suas
                  perguntas sobre o Clube Aliadas.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-transform duration-200">
                    <div className="bg-rose-100 p-3 rounded-full mr-6 group-hover:bg-rose-200 transition-colors">
                      <Mail className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        contato@clubealiadas.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-transform duration-200">
                    <div className="bg-rose-100 p-3 rounded-full mr-6 group-hover:bg-rose-200 transition-colors">
                      <Instagram className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        Instagram
                      </h3>
                      <p className="text-gray-600">@aliadascompany</p>
                    </div>
                  </div>

                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-transform duration-200">
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

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-rose-100">
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
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                      placeholder="Seu nome"
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
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                      placeholder="seu.email@exemplo.com"
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
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Como podemos ajudar?"></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Enviar mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6 max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Link href="/" className="flex items-center mb-6 group">
                <span className="text-3xl font-bold tracking-tight text-rose-400 group-hover:text-rose-300 transition-colors">
                  ALIADAS
                </span>
              </Link>
              <p className="text-gray-400 leading-relaxed text-lg">
                Um movimento feminino de impacto, transformando vidas e
                fortalecendo mulheres.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#inicio"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sobre"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#clube"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
                    Clube
                  </Link>
                </li>
                <li>
                  <Link
                    href="#beneficios"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
                    Benefícios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#eventos"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
                    Eventos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Siga-nos</h3>
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
                  <Instagram className="h-8 w-8" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              &copy; {new Date().getFullYear()} Clube Aliadas. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-lg transition-colors duration-200">
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-lg transition-colors duration-200">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
