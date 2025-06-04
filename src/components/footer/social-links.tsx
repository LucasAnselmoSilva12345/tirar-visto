import { Section } from '../Section';

export function SocialLinks() {
  return (
    <Section className="pb-[70px] space-y-5 lg:space-y-0 grid grid-cols-1 lg:grid-cols-2 lg:items-end">
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-base text-black-dark">
          Siga em nossa redes:
        </p>
        <nav>
          <ul className="grid grid-cols-2 gap-5 lg:flex lg:items-center">
            <li>
              <a
                href=""
                className="text-sm lg:text-base text-black-dark font-semibold px-5 py-2 border border-black-dark rounded-full"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm lg:text-base text-black-dark font-semibold px-5 py-2 border border-black-dark rounded-full"
              >
                X
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm lg:text-base text-black-dark font-semibold px-5 py-2 border border-black-dark rounded-full"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm lg:text-base text-black-dark font-semibold px-5 py-2 border border-black-dark rounded-full"
              >
                Youtube
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-base text-black-dark font-medium mb-5">
            Empresa
          </h3>
          <nav>
            <ul className="space-y-3">
              <li>
                <a href="Home" className="text-base text-gray-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="Quem Somos" className="text-base text-gray-dark">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="Serviços" className="text-base text-gray-dark">
                  Serviços
                </a>
              </li>
              <li>
                <a href="Contato" className="text-base text-gray-dark">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="text-base text-black-dark font-medium mb-5">
            Novidades
          </h3>
          <nav>
            <ul className="space-y-3">
              <li>
                <a href="Home" className="text-base text-gray-dark">
                  Passaporte
                </a>
              </li>
              <li>
                <a href="Quem Somos" className="text-base text-gray-dark">
                  Visto
                </a>
              </li>
              <li>
                <a href="Serviços" className="text-base text-gray-dark">
                  Entrevista
                </a>
              </li>
              <li>
                <a href="Contato" className="text-base text-gray-dark">
                  Polícia Federal
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="text-base text-black-dark font-medium mb-5">
            Suporte
          </h3>
          <nav>
            <ul className="space-y-3">
              <li>
                <a href="Home" className="text-base text-gray-dark">
                  FAQ
                </a>
              </li>
              <li>
                <a href="Quem Somos" className="text-base text-gray-dark">
                  Contato
                </a>
              </li>
              <li>
                <a href="Serviços" className="text-base text-gray-dark">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Section>
  );
}
