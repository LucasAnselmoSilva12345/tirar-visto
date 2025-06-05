import { Notification } from '../notification';

export function Header() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 lg:w-96 h-20 border-r border-b border-gray-dark/15 rounded-br-[80px]" />
      <div className="absolute top-0 right-0 w-48 lg:w-96 h-20 border-l border-b border-gray-dark/15 rounded-bl-[80px]" />
      <div className="absolute bottom-0 right-0 w-48 h-20 border-l border-t border-gray-dark/15 rounded-tl-[80px]" />
      <div className="absolute bottom-0 left-0 w-48 h-20 border-r border-t border-gray-dark/15 rounded-tr-[80px]" />

      {/* Conteúdo */}
      <div className="relative z-10 pt-10 pb-16 text-center flex flex-col items-center gap-3 lg:gap-0">
        <Notification text="Top Destinos" />
        <h2 className="text-2xl lg:mt-2 lg:mb-3 font-medium text-black-dark lg:text-[56px]">
          Destinos mais procurados
        </h2>
        <p className="text-center text-xs text-gray-dark font-normal lg:text-base">
          Confira os destinos mais procurados por nossos clientes nos últimos
          meses, qual seria o seu novo destino?
        </p>
        <a
          href="https://tirarvisto.com.br"
          className="bg-blue-dark text-white lg:mt-10 px-5 py-2 lg:py-3 rounded-full"
        >
          Conheça mais
        </a>
      </div>
    </div>
  );
}
