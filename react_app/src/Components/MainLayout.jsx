// src/Components/MainLayout/MainLayout.jsx

import React from 'react';
import Header from './Header/Header';
import LatestNews from './LatestNews/LatestNews';
import ItemsList from './ItemsList';
import Footer from './Footer/footer';
import './MainLayout.css';
import AdPlaceholder from './Ads/AdPlaceholder';
import HeadMenu from './HeadMenu/HeadMenu';
import BreakingNews from './BreakingNews/BreakingNews';
import Footer_ht from './Footer/Footer_ht';

const MainLayout = () => {
  return (
    <div>
      <AdPlaceholder/>
      <Header />
      <HeadMenu />
      <BreakingNews />
      <div id="articles-container">
        <LatestNews Name="Latest-Left"/>
        <ItemsList />
        <LatestNews Name="Latest-Right"/>
      </div>
      <Footer />
      <Footer_ht />
    </div>
  );
};

export default MainLayout;
