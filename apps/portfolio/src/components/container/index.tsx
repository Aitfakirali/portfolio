import { vclsx } from '@portfolio/ui';
import { ReactNode } from 'react';

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={vclsx('max-w-6xl p-5 mx-auto md:p-10', className)}>
      {children}
    </div>
  );
};
