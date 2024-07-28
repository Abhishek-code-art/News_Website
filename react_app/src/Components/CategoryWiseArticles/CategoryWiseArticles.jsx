import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryWiseArticles.css';


const CategoryWiseArticles = ({fetchUrl}) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const { id, category} = useParams();

    useEffect(() => {
      if (!id || !category) return;

      axios.get(`http://localhost:8000/categories/${id}/articles/`)
          .then(response => {
              console.log('Fetched articles:', response.data);
              setArticles(response.data);
              sessionStorage.setItem(`articles_${id}`, JSON.stringify(response.data));
          })
          .catch(error => {
              console.error('Error fetching articles:', error);
              setError(error);
          });
  }, [id, category]);

  if (error) {
      return <div>Error: {error.message}</div>;
  }

    const getImageUrl = (imagePath) => {
      if (!imagePath) return '#';
      if (imagePath.startsWith('http')) {
        return imagePath;
      }
      return `${fetchUrl}${imagePath}`;
    };

    const formatDateTime= (dateTime) => {
        if (!dateTime) return { date: '', time: '' };
        const dateObj = new Date(dateTime);
        const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
        const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const date = dateObj.toLocaleDateString(undefined, optionsDate);
        const time = dateObj.toLocaleTimeString(undefined, optionsTime);
        return { date, time };
      };
  
    return (
      <div className="category-wise-article-container">
          <div className="articles" key={category}>
            <div className="secHdg htImpressionTrackingTop" data-vars-widget-name={category} data-vars-placement-number="1">
              <span className="hdgTexure"></span>
              <span className="hdgStyle">
                <span>[</span>
                <h1 style={{color: "#000000"}}>{category.toUpperCase()}</h1>
                <span>]</span>
              </span>
          </div>
            {articles.map((article, index) => (
              <div key={article.articleID} className={`news-item ${index === 0 ? 'first-news-item' : 'other-news-item'}`}>
                <div className="change-style" style={{width: "100%", padding: "5px"}}>
                <h3><a href={`/article/${article.articleID}`} style={{color: "#000000"}}>{article.title}</a></h3>
                <div className='categoryPublishTime'>
                  <div className='secName'>
                    <a href={`/categories/${id}/${category}/articles`}>{category}</a>
                  </div>
                  <div>
                    <p id="publishedDateTime"><strong>Published on:</strong> {formatDateTime(article.publishDateTime).date} {formatDateTime(article.publishDateTime).time}</p>
                  </div>
                  
                </div>
                </div>
                {article.image && <img src={getImageUrl(article.image)} alt={article.title} id="publishImage" className={`${index==0 ? 'first-news-item-image':'other-news-item-image'}`}/>}
              </div>
            ))}
          </div>
      </div>
    );
  };
  
  export default CategoryWiseArticles;