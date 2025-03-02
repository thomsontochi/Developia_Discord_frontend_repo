import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="site-wrap">
      <Header />
      <main>
        <Outlet /> {/* This is where your page content will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;