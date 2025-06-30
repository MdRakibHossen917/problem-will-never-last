import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <section className="min-h-[calc(100vh-104px-124px)]">
          <Outlet></Outlet>
        </section>

        <Footer></Footer>
      </div>
    );
};

export default RootLayout;