import { useState } from 'react';
import { Section } from '../Section';
import { Header } from './header';

import stepimage from '../../assets/images/step.png';

type AccordionItem = {
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  {
    title: 'Processo de Entrevista',
    content: 'Conteúdo detalhado do processo de entrevista...',
  },
  {
    title: 'Entrega de Documentos',
    content: 'Cconteúdo sobre a entrega de documentos...',
  },
];

export function Step() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="space-y-5 py-10 lg:py-[95px] lg:space-y-0 lg:flex lg:flex-col lg:gap-20 ">
      <Header />
      <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-9">
        <div className="w-full md:w-1/2">
          <img
            src={stepimage}
            alt="Família no aeroporto"
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h3 className="text-2xl font-medium text-black-dark lg:text-[44px]">
              Etapa Inicial
            </h3>
            <p className="text-gray-dark text-xs lg:text-base mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div key={index} className="border-t border-gray-200 pt-4">
                <button
                  className="w-full text-left flex flex-col justify-between gap-3"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-2xl font-medium text-black-dark lg:text-[44px]">
                    {item.title}
                  </span>
                  <span className="text-black-dark font-medium text-sm lg:text-base">
                    {openIndex === index ? '- Fechar' : '+ Leia mais'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-gray-dark text-xs lg:text-base transition-all duration-300">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
