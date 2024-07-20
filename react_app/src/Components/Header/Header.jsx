import React, { useEffect, useState } from 'react';
import ExploreSearch from './ExploreSearch';
import Logo from './Logo';
import RightLinks from './RightLinks';
import DateWeather from './DateWeather';
import './Header.css';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const headerHeight = header.offsetHeight;
      const scrollY = window.scrollY;
      setIsFixed(scrollY > headerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    console.log("Sidebar toggled"); // Add a log to verify the function execution
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header id="header" className={`header ${isFixed ? 'header--fixed' : ''}`}>
        <div className="container">
          <div className="lftEl">
            <ExploreSearch toggleSidebar={toggleSidebar} />
            <DateWeather />
          </div>
          <Logo />
          <RightLinks />
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
