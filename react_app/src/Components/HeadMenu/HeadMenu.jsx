import React, { useEffect, useState } from 'react';
import './HeadMenu.css';

const HeadMenu = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsFixed(scrollY > headerHeight); // Adjust this value based on your header's height
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerHeight]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      id="headMenu"
      className={`headMenu ${isFixed ? 'headmenu--fixed' : ''}`}
      style={isFixed ? { top: `${headerHeight}px` } : {}}
    >
      <div className="container">
        <ul className="leftFixedNav dataLayerL1">
          <li className="active">
            <a
              className=""
              href="https://www.hindustantimes.com"
              data-id="Home,1"
              data-value="Home"
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/latest-news"
              data-id="Latest News,1"
              data-value="Latest News"
            >
              Latest News
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/cricket"
              data-id="Cricket,1"
              data-value="Cricket"
            >
              <img
                src="https://www.hindustantimes.com/static-content/1y/ht-cric-logo2.png"
                alt="Crickit"
                title="Crickit"
              />
            </a>
          </li>
          <li className="newSubNav">
            <a
              data-google-interstitial="false"
              className=""
              href="https://www.hindustantimes.com/ht-exclusive"
              data-id="HT Premium,1"
              data-value="HT Premium"
            >
              HT Premium
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/htcity"
              data-id="HTCity,1"
              data-value="HTCity"
            >
              HTCity
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/india-news"
              data-id="India,1"
              data-value="India"
            >
              India
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/world-news"
              data-id="World,1"
              data-value="World"
            >
              World
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/entertainment"
              data-id="Entertainment,1"
              data-value="Entertainment"
            >
              Entertainment
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/trending"
              data-id="Trending,1"
              data-value="Trending"
            >
              Trending
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/astrology"
              data-id="Astrology,1"
              data-value="Astrology"
            >
              Astrology
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/lifestyle"
              data-id="Lifestyle,1"
              data-value="Lifestyle"
            >
              Lifestyle
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/real-estate"
              data-id="Real Estate,1"
              data-value="Real Estate"
            >
              Real Estate
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://www.hindustantimes.com/education"
              data-id="Education,1"
              data-value="Education"
            >
              Education
            </a>
          </li>
          <li className="">
            <a
              className="cityl1cohort"
              href="https://www.hindustantimes.com/cities/delhi"
              data-id="Cities,1"
              data-value="Cities"
            >
              Delhi
            </a>
          </li>
          <li className="">
            <a
              className=""
              rel="nofollow"
              target="_blank"
              href="https://shopnow.hindustantimes.com"
              data-id="Shop Now,1"
              data-value="Shop Now"
            >
              Shop Now
            </a>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default HeadMenu;
