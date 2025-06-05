import { forwardRef, type ComponentProps } from 'react';

type SectionProps = ComponentProps<'section'>;

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className = '', children, ...props },
  ref
) {
  const baseClasses = 'px-5';
  return (
    <section ref={ref} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </section>
  );
});
