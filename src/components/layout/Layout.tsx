import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;