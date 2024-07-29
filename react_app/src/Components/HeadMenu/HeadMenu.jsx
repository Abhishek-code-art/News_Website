import React, { useEffect, useState } from 'react';
import './HeadMenu.css';
import axios from 'axios';

const HeadMenu = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

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



  useEffect(() => {
    axios.get(`http://localhost:8000/categories/`)
    .then(response => {
        console.log('Fetched articles:', response.data);
        setArticles(response.data);
    })
    .catch(error => {
        console.error('Error fetching articles:', error);
        setError(error);
    });
  }, []);

  if (error) {
      return <div>Error: {error.message}</div>;
  }

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
                href="/"
                data-id="Home,1"
                data-value="Home"
              >
                Home
              </a>
          </li>

          <li className="">
            <a
              className=""
              href="#"
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

          {articles.map((article, index) => (
            <li className={`${article.name}`}>
              <a
                className=""
                href={`/categories/${article.categoryID}/${article.name}/articles`}
                data-id={`${article.name},1`}
                data-value={`${article.name}`}
              >
                {article.name}
              </a>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default HeadMenu;
