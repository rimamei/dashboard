import { Navbar, Sidebar } from '@/components/atoms';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative w-full h-full overflow-y-hidden">
      <Navbar />
      <div className="w-full min-h-screen relative flex">
        <Sidebar />
        <div className="w-full">
          <div className="p-4 md:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
