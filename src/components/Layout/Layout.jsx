import React from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Layout;
