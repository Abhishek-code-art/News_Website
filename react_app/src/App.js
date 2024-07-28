import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from './Components/MainLayout';
import ArticleMainLayout from './Components/ArticleLayout/ArticleMainLayout';
import CategoryArticle from './Components/CategoryArticleLayout/CategoryArticle';
import TagArticles from './Components/TagArticleLayout/TagArticles';

function App() {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/article/:id" element={<ArticleMainLayout />} />
              <Route path="/categories/:id/:category/articles" element={<CategoryArticle />} />
              <Route path="/tags/:tagID/:tagName/articles" element={<TagArticles />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;