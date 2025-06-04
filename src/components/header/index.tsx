import { Navigation } from './navigation';

import Logo from '../../assets/images/logo.png';
import HeroSectionImagem from '../../assets/images/hero-section.png';
import ThumbVideo from '../../assets/images/thumb-video-hero.png';
import { Notification } from '../notification';

export function Header() {
  return (
    <header>
      <div className="hidden">
        <div>
          <Navigation />
        </div>

        <h1>Tire seu Visto conosco e não tenha nenhuma surpresa negativa!</h1>

        <hr />

        <div>
          <div>
            <p>
              Com uma equipe altamente treinada, nós temos todos os
              procedimentos para que seu processo seja o mais tranquilo e
              rápido. Uma consultoria completa para você e sua família não ter
              nenhuma preocupação na sua viagem.
            </p>
            <a href="">Saiba mais</a>
          </div>
          <div>
            <img src={ThumbVideo} alt="" />
            <div>
              <div>
                <span>Conheça a Bruna</span>
                <span>Ver Video</span>
              </div>
              <span>Icone</span>
            </div>
          </div>
        </div>

        <div>componente de numero</div>
      </div>
      <aside className="relative">
        <img src={HeroSectionImagem} alt="Tira visto" />
        <div className=" absolute top-0 right-0 w-full p-4 flex items-center justify-between">
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
