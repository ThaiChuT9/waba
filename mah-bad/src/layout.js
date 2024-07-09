import React from 'react';
import NavBar from './component/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;