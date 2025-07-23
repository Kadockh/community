import Image, { StaticImageData } from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  imageUrl?: StaticImageData;

}

const TestimonialCard = ({
  name,
  role,
  text,
  imageUrl,


}: TestimonialCardProps) => {
  return (
    <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 max-w-md">
      <div className="flex items-center mb-6">
        <div className="mr-4">
          {imageUrl ? (
            <Image
              src={imageUrl}
              width={60}
              height={60}
              alt={`Foto de ${name}`}
              className="rounded-full border-2 border-rose-200 object-cover"
            />
          ) : (
            <Avatar className="w-[60px] h-[60px] border-2 border-rose-200">
              <AvatarImage src={imageUrl} alt={`Foto de ${name}`} />
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-rose-600 font-medium">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic leading-relaxed text-lg">“{text}”</p>
    </div>
  );
};

export default TestimonialCard;
