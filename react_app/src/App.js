import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/header';
// import Footer from './Components/Footer/footer';
// import Header from './Components/App';
// import ItemsList from './Components/ItemsList';
// import LatestNews from './Components/LatestNews/LatestNews';
import MainLayout from './Components/MainLayout';
import ArticleMainLayout from './Components/ArticleLayout/ArticleMainLayout';
// import DesktopAd from './Components/Ads/DesktopAd';


// import LeftNav from './components/LeftNav';
// import Login from './Components/auth/login';
// import Register from './Components/auth/register';
// import LatestArticles from './Components/LatestArticles';
// import NewsletterSignup from './Components/NewsletterSignup';

function App() {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/article/:id" element={<ArticleMainLayout />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;