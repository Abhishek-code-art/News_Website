// src/Components/MainLayout/MainLayout.jsx

import React from 'react';
import Header from './Header/Header';
import LatestNews from './LatestNews/LatestNews';
import ItemsList from './ItemsList';
import Footer from './Footer/footer';
import './MainLayout.css';
import AdPlaceholder from './Ads/AdPlaceholder';
import HeadMenu from './HeadMenu/HeadMenu';

const MainLayout = () => {
  return (
    <div>
      <AdPlaceholder/>
      <Header />
      <HeadMenu />
      <div id="articles-container">
        <LatestNews />
        <ItemsList />
        <LatestNews />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
