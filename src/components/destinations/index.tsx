import { Section } from '../Section';
import { Header } from './header';

type Destination = {
  name: string;
  location: string;
  imageUrl: string;
};

const destinations: Destination[] = [
  {
    name: 'Bali',
    location: 'Indonésia',
    imageUrl:
      'https://live.staticflickr.com/65535/54568475662_11429775f4_n.jpg',
  },
  {
    name: 'Nova York',
    location: 'Estados Unidos',
    imageUrl:
      'https://live.staticflickr.com/65535/54569527199_32224343c4_n.jpg',
  },
  {
    name: 'Santorini',
    location: 'Grecial',
    imageUrl:
      'https://live.staticflickr.com/65535/54569527214_e04e72dc98_n.jpg',
  },
  {
    name: 'Paris',
    location: 'França',
    imageUrl:
      'https://live.staticflickr.com/65535/54569527209_500d958e86_n.jpg',
  },

  {
    name: 'Cidade do Cabo',
    location: 'Africa do Sul',
    imageUrl:
      'https://live.staticflickr.com/65535/54569527219_abaa0303a8_n.jpg',
  },

  {
    name: 'Mumbai',
    location: 'Índia',
    imageUrl:
      'https://live.staticflickr.com/65535/54568475637_eb0cff8262_n.jpg',
  },
];

export function Destinations() {
  return (
    <Section>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-md group"
          >
            <img
              src={dest.imageUrl}
              alt={`${dest.name}, ${dest.location}`}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 text-white p-4 text-sm w-full flex items-center justify-center">
              <p className="py-1.5 px-5 rounded-full font-medium backdrop-blur-sm bg-white/40 text-center text-sm lg:text-base">
                {dest.name}, {dest.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
