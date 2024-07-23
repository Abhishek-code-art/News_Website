import React from "react";
import ArticleDetail from "../ArticleDetail/ArticleDetail";
import HeadMenu from "../HeadMenu/HeadMenu";
import LatestNews from "../LatestNews/LatestNews";
import AdPlaceholder from "../Ads/AdPlaceholder";
import Footer from "../Footer/footer";
import Footer_ht from "../Footer/Footer_ht";
import ItemsList from "../ItemsList";
import Header from "../Header/Header";

const ArticleMainLayout = () => {
    const apiUrl = 'http://127.0.0.1:8000/';
    return (
        <div>
          <AdPlaceholder/>
          <Header />
          <HeadMenu />
          <div id="article-layout-container">
            <LatestNews Name="Latest-Left"/>
            <ArticleDetail fetchUrl={`${apiUrl}`}/>
            {/* <ItemsList /> */}
            <LatestNews Name="Latest-Right"/>
          </div>
          <Footer />
          <Footer_ht />
        </div>
      );
};

export default ArticleMainLayout;