import { ArrowLeft } from '../../assets/svg/arrow-left';
import { ArrowRight } from '../../assets/svg/arrow-right';
import { Arrow } from '../arrow';
import { Notification } from '../notification';

export function Header() {
  return (
    <div className="space-y-2">
      <Notification text="Pacotes" className="text-center lg:max-w-[200px]" />
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-black-dark lg:text-[56px]">
          Confira nossos pacotes
        </h2>
        <div className="flex items-center gap-3">
          <Arrow svg={<ArrowLeft />} className="border border-blue-dark" />
          <Arrow svg={<ArrowRight />} className="bg-blue-dark" />
        </div>
      </div>
    </div>
  );
}
