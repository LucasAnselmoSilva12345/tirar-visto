import { twMerge } from 'tailwind-merge';

interface NotificationProps {
  text: string;
  className?: string;
}

export function Notification({ text, className }: NotificationProps) {
  return (
    <span
      className={twMerge(
        'block bg-yellow-dark text-black-medium font-semibold py-2 px-5 lg:py-3 rounded-full',
        className
      )}
    >
      {text}
    </span>
  );
}
