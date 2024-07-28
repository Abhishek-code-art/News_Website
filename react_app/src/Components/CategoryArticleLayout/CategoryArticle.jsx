import React from "react";
import HeadMenu from "../HeadMenu/HeadMenu";
import LatestNews from "../LatestNews/LatestNews";
import AdPlaceholder from "../Ads/AdPlaceholder";
import Footer from "../Footer/footer";
import Footer_ht from "../Footer/Footer_ht";
import Header from "../Header/Header";
import "./CategoryArticle.css"
import CategoryWiseArticles from "../CategoryWiseArticles/CategoryWiseArticles";

const CategoryArticle = () => {
    const apiUrl = 'http://localhost:8000/';
    return (
        <div>
          <AdPlaceholder/>
          <Header />
          <HeadMenu />
          <div id="category-wise-article-section">
            <LatestNews Name="Latest-Left"/>
            <CategoryWiseArticles fetchUrl={`${apiUrl}`}/>            
            <LatestNews Name="Latest-Right"/>
          </div> 
          <Footer />
          <Footer_ht />
        </div>
      );
};

export default CategoryArticle;