import { Clock } from '../assets/svg/clock';
import { Telephone } from '../assets/svg/telephone';
import { Section } from './Section';

export function Announcement() {
  return (
    <Section className="space-y-2 py-10 lg:pt-[70px] lg:pb-10">
      <div className="flex items-center lg:items-start lg:gap-28">
        <h2 className="text-base leading-[130.8%] max-w-[300px] font-medium text-black-dark lg:text-5xl uppercase lg:max-w-[854px]">
          Consultoria completa para tirar seu visto
        </h2>
        <div className="bg-white p-2.5 rounded-[10px]">
          <Telephone />
        </div>
      </div>
      <div className="flex items-center justify-end gap-6 lg:gap-40 lg:items-end">
        <div className="bg-white p-2.5 rounded-[10px]">
          <Clock />
        </div>
        <h3 className="text-base leading-[130.8%] font-medium text-black-dark lg:text-5xl uppercase">
          você esta em boas mãos!
        </h3>
      </div>
    </Section>
  );
}
