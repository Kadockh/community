import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        <div className="flex flex-wrap justify-between gap-12">
          {/* Logo e descrição */}
          <div className="flex-1 min-w-[250px]">
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

          {/* Links rápidos */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {["Início", "Sobre", "Clube", "Benefícios", "Eventos"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Redes sociais */}
          <div className="flex-1 min-w-[200px]">
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

        {/* Direitos autorais e política */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg text-center md:text-left">
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
  );
};

export default Footer;
