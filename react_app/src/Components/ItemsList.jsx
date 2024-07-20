import React, { useEffect, useState } from 'react';
import './ItemsList.css';

const ItemsList = () => {
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

  // Group articles by category
  const categorizedArticles = articles.reduce((acc, article) => {
    const categoryName = article.category_name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(article);
    return acc;
  }, {});

  return (
    <div className="news-container">
      {Object.keys(categorizedArticles).map(category => (
        <div className="column" key={category}>
          <div className="secHdg htImpressionTrackingTop" data-vars-widget-name={category} data-vars-placement-number="1">
            <span className="hdgTexure"></span>
            <span className="hdgStyle">
              <span>[</span>
              <h1 style={{color: "#000000"}}>{category.toUpperCase()}</h1>
              <span>]</span>
            </span>
        </div>
          {categorizedArticles[category].map(article => (
            <div key={article.articleID} className="news-item">
              <h3><a href={`http://localhost:8000/articles/${article.articleID}`} style={{color: "#000000"}}>{article.title}</a></h3>
              <div className='categoryPublishTime'>
                <div className='secName'>
                  <a href={`http://localhost:8000/categories/${article.category_id}/articles`}>{category}</a>
                </div>
                <div>
                  <p id="publishedDateTime"><strong>Published on:</strong> {new Date(article.publishDateTime).toLocaleString()}</p>
                </div>
                
              </div>
              {article.image && <img src={`http://localhost:8000${article.image}`} alt={article.title} id="publishImage"/>}
              <p className="articleContent">{article.content}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
