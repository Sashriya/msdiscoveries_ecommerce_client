import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import BackToTop from '../common/BackToTop';
import ScrollToBottom from '../common/ScrollToBottom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <ScrollToBottom />
    </div>
  );
};

export default Layout;