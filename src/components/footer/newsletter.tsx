import { Arrow } from '../../assets/svg/arrow';
import { Section } from '../Section';

export function Newsletter() {
  return (
    <Section className="pb-10 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:flex lg:items-center lg:justify-between">
      <div className="space-y-3 lg:max-w-[500px]">
        <h2 className="text-2xl lg:text-6xl font-medium text-black-dark">
          Está com alguma dúvida?
        </h2>
        <p className="text-base font-normal text-gray-dark">
          Entre em contato através do nosso canal direto ao cliente através do
          botão abaixo
        </p>
        <a
          href="https://tirarvisto.com.br"
          className="block mt-7 px-5 py-2.5 bg-blue-dark text-white text-center rounded-full text-base font-semibold lg:max-w-[225px]"
        >
          Central de Atendimento
        </a>
      </div>
      <div>
        <a
          href="https://tirarvisto.com.br"
          className="flex items-center justify-between lg:justify-normal text-2xl lg:text-4xl lg:gap-10 underline"
        >
          Recebe novidades
          <Arrow />
        </a>
      </div>
    </Section>
  );
}
