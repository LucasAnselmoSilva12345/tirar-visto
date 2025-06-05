import { Section } from '../Section';
import { Header } from './header';

interface CardInformation {
  image: string;
  title: string;
  serviceForm: string;
  travelTime: string;
  price: string;
  hireLink: string;
  plans: {
    basic: string;
    premium: string;
  };
}

const cardInformations: CardInformation[] = [
  {
    image: 'https://live.staticflickr.com/65535/54568259954_62f5d174df_w.jpg',
    title: 'Passaporte',
    serviceForm: 'On-line',
    travelTime: '45 dias',
    price: '890,00',
    hireLink: 'https://tirarvisto.com.br/contratar-passaporte',
    plans: {
      basic: 'Basic',
      premium: 'Premium',
    },
  },
  {
    image: 'https://live.staticflickr.com/65535/54568078351_3ea1f7dd1a_w.jpg',
    title: 'Passaporte + Visto',
    serviceForm: 'On-line + Presencial',
    travelTime: '25 dias',
    price: '1.290,00',
    hireLink: 'https://tirarvisto.com.br/contratar-passaporte-mais-visto',
    plans: {
      basic: 'Basic',
      premium: 'Premium',
    },
  },
  {
    image: 'https://live.staticflickr.com/65535/54568408990_2c5017616b_w.jpg',
    title: 'Consultoria Completa',
    serviceForm: 'Presencial Completo',
    travelTime: '10 dias',
    price: '1.890,00',
    hireLink: 'https://tirarvisto.com.br/consultoria-completa',
    plans: {
      basic: 'Basic',
      premium: 'Premium',
    },
  },
];

export function Card() {
  return (
    <Section className="space-y-5 py-10 lg:py-[95px] lg:space-y-0 lg:flex lg:flex-col lg:gap-[60px]">
      <Header />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cardInformations.map((cardInformation, index) => (
          <div
            key={index}
            className="p-4 border border-white-medium rounded-2xl"
          >
            <img
              src={cardInformation.image}
              alt={cardInformation.title}
              className="w-full rounded-2xl"
            />
            <div className="flex items-center gap-4 mt-8">
              <p className="px-5 py-1.5 border border-black-dark text-black-dark text-xs font-semibold rounded-full lg:text-base">
                {cardInformation.plans.basic}
              </p>
              <p className="px-5 py-1.5 border border-gray-dark text-gray-dark text-xs font-semibold rounded-full lg:text-base">
                {cardInformation.plans.premium}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-xl font-semibold text-black lg:text-[28px]">
                {cardInformation.title}
              </h3>
              <div className="mt-4 flex items-center justify-between lg:justify-start lg:gap-20">
                <div className="flex flex-col gap-2">
                  <p className="text-black-dark text-sm font-medium lg:text-base">
                    Atendimento
                  </p>
                  <span className="text-gray-dark text-xs font-normal lg:text-base">
                    {cardInformation.serviceForm}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black-dark text-sm font-medium lg:text-base">
                    Tempo
                  </p>
                  <span className="text-gray-dark text-xs font-normal lg:text-base">
                    {cardInformation.travelTime}
                  </span>
                </div>
              </div>
              <hr className="my-5 text-gray-dark" />
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-dark lg:text-base">
                  A partir de{' '}
                  <span className="block text-base font-semibold text-black-dark lg:text-3xl">
                    R$ {cardInformation.price}
                  </span>
                </p>
                <a
                  href={cardInformation.hireLink}
                  className="bg-blue-dark text-white text-base font-semibold py-3 px-6 rounded-full"
                >
                  Contratar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
