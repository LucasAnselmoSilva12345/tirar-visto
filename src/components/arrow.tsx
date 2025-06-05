import { twMerge } from 'tailwind-merge';

interface ArrowProps {
  svg: React.ReactNode;
  className?: string;
}

export function Arrow({ svg, className }: ArrowProps) {
  return (
    <span className={twMerge('p-1.5 rounded-full', className)}>{svg}</span>
  );
}
