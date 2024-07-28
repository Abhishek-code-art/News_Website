import React from "react";
import HeadMenu from "../HeadMenu/HeadMenu";
import LatestNews from "../LatestNews/LatestNews";
import AdPlaceholder from "../Ads/AdPlaceholder";
import Footer from "../Footer/footer";
import Footer_ht from "../Footer/Footer_ht";
import Header from "../Header/Header";
import "./TagArticles.css"
import TagWiseArticles from "../TagWiseArticles/TagWiseArticles";

const TagArticles = () => {
    const apiUrl = 'http://localhost:8000/';
    return (
        <div>
          <AdPlaceholder/>
          <Header />
          <HeadMenu />
          <div id="tag-wise-article-section">
            <LatestNews Name="Latest-Left"/>
            <TagWiseArticles fetchUrl={`${apiUrl}`}/>            
            <LatestNews Name="Latest-Right"/>
          </div> 
          <Footer />
          <Footer_ht />
        </div>
      );
};

export default TagArticles;