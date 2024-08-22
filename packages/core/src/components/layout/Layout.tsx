import { vclsx } from '@portfolio/ui';
import * as React from 'react';

// import { Header } from './header/Header';
// import { SideBar } from './sidebar/SideBar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <div className={vclsx('min-h-screen')}>{children}</div>
    </div>
  );
};
