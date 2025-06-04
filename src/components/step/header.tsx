import { Notification } from '../notification';

export function Header() {
  return (
    <div className="space-y-3">
      <Notification
        text="Veja como funciona"
        className="text-center lg:max-w-[200px]"
      />
      <div className="flex flex-col gap-2 items-center justify-center lg:flex-row lg:justify-between">
        <h2 className="text-2xl font-medium text-black-dark lg:text-[56px]">
          Sua tranquilidade não tem preço!
        </h2>
        <p className="text-center text-xs text-gray-dark font-normal lg:max-w-[826px] lg:text-left lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
}
