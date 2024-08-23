import { vclsx } from '@portfolio/ui';
import * as React from 'react';

// import { Header } from './header/Header';
// import { SideBar } from './sidebar/SideBar';

export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={vclsx('relative', className)}>
      <div className={vclsx('min-h-screen bg-gray-50')}>{children}</div>
    </div>
  );
};
