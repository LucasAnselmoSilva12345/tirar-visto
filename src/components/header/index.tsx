import { Navigation } from './navigation';

import Logo from '../../assets/images/logo.png';
import HeroSectionImagem from '../../assets/images/hero-section.png';
import ThumbVideo from '../../assets/images/thumb-video-hero.png';
import { Notification } from '../notification';
import { ArrowRight } from '../../assets/svg/arrow-right';
import { Stats } from './stats';

export function Header() {
  return (
    <header className="grid mb-5 grid-cols-1 lg:pt-8 lg:grid-cols-2 lg:gap-16">
      <div className="hidden lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" />
          <Navigation />
        </div>
        <div className="">
          <h1 className="text-6xl font-medium text-black-dark">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>

          <hr className="my-8 text-white-medium" />

          <div className="grid grid-cols-[327px_1fr] items-end gap-5">
            <div className="flex flex-col gap-10">
              <p className="text-base font-normal text-gray-dark">
                Com uma equipe altamente treinada, nós temos todos os
                procedimentos para que seu processo seja o mais tranquilo e
                rápido. Uma consultoria completa para você e sua família não ter
                nenhuma preocupação na sua viagem.
              </p>
              <a
                href="https://tirarvisto.com.br"
                className="py-2.5 px-5 max-w-[160px] flex items-center gap-3 bg-blue-dark text-white text-base font-semibold rounded-full"
              >
                Saiba mais
                <ArrowRight />
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <img src={ThumbVideo} alt="" className="rounded-2xl " />
              <div className="flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-base text-black-dark font-semibold">
                    Conheça a Bruna
                  </span>
                  <span className="text-xs font-normal text-gray-dark">
                    Ver Video
                  </span>
                </div>
                <span className="bg-blue-dark p-1.5 rounded-full">
                  <ArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Stats />
      </div>
      <aside className="relative">
        <img
          src={HeroSectionImagem}
          alt="Tira visto"
          className="lg:rounded-3xl"
        />
        <div className=" absolute top-0 right-0 w-full p-4 flex items-center justify-between lg:justify-end">
          <img src={Logo} alt="" className="lg:hidden" />
          <Notification text="Tirar meu visto agora!" />
        </div>
        <div className="absolute bottom-0 left-0 px-4 pb-6 space-y-4">
          <h2 className="text-5xl font-semibold text-white">
            Realize o seu sonho com a ajuda da Tirar Visto!
          </h2>
          <p className="text-base font-normal text-white">
            Com um serviço profissional, você não terá dor de cabeça para todo o
            processo do visto e entrevistas no consulado.
          </p>
        </div>
      </aside>
    </header>
  );
}
