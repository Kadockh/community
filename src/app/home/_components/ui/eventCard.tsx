import Image, { StaticImageData } from "next/image";
import { Calendar } from "lucide-react";

interface EventCardProps {
  data: string;
  titulo: string;
  descricao: string;
  horario: string;
  imagem: StaticImageData;
  alt: string;
}

const EventCard = ({
  data,
  titulo,
  descricao,
  horario,
  imagem,
  alt,
}: EventCardProps) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col max-w-md">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imagem}
          fill
          alt={alt}
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {data}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{titulo}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed flex-1">{descricao}</p>
        <div className="flex items-center text-sm text-gray-500 mt-auto">
          <Calendar className="h-4 w-4 mr-2 text-rose-500" />
          <span>{horario}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
