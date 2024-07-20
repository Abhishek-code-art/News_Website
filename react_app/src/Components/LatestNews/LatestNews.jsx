import React, { useEffect, useState } from 'react';
import LatestNewsItem from './LatestNewsItem';
import ViewAllLink from './ViewAllLink';
import './LatestNews.css';

const LatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/articles/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched articles:', data);
        console.log('article id = ', data.articleID);
        setArticles(data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="leftNav">
      <div id="divLatestNews" placementindex="1">
        <div className="lftNews">
          <h2 className="secHdg htImpressionTrackingTop">
            <span className="hdgTexure"></span>
            <span className="hdgStyle"><span>[</span>Latest News<span>]</span></span>
          </h2>
          <div className="htImpressionTracking">
            {articles.map((article) => (
              <LatestNewsItem
                key={article.articleID}
                id={article.articleID}
                category_id={article.category_id}
                category_name={article.category_name}
                title={article.title}
                url="http://localhost:8000/"
                publishedTime={new Date(article.publishDateTime).toLocaleString()}
              />
            ))}
            <ViewAllLink url="http://localhost:8000/articles/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
