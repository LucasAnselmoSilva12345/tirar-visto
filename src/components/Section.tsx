import { forwardRef, type ComponentProps } from 'react';

type SectionProps = ComponentProps<'section'>;

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className = '', children, ...props },
  ref
) {
  const baseClasses = 'w-full lg:max-w-[1330px] lg:my-0 lg:mx-auto';
  return (
    <section ref={ref} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </section>
  );
});
