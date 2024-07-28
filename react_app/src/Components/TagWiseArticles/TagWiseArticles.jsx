import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TagWiseArticles.css';


const TagWiseArticles = ({fetchUrl}) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const { tagID, tagName} = useParams();

    useEffect(() => {
      if (!tagID || !tagName) return;

      axios.get(`${fetchUrl}tags/${tagID}/articles/`)
          .then(response => {
              console.log('Fetched articles:', response.data);
              setArticles(response.data);
              sessionStorage.setItem(`articles_${tagID}`, JSON.stringify(response.data));
          })
          .catch(error => {
              console.error('Error fetching articles:', error);
              setError(error);
          });
  }, [tagID, tagName]);

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
      <div className="tag-wise-article-container">
          <div className="articles" key={tagName}>
            <div className="secHdg htImpressionTrackingTop" data-vars-widget-name={tagName} data-vars-placement-number="1">
              <span className="hdgTexure"></span>
              <span className="hdgStyle">
                <span>[</span>
                <h1 style={{color: "#000000"}}>{tagName.toUpperCase()}</h1>
                <span>]</span>
              </span>
          </div>
            {articles.map((article) => (
              <div key={article.articleID} className={`news-item other-news-item`}>
                <div className="change-style" style={{width: "100%", padding: "5px"}}>
                <h3><a href={`/article/${article.articleID}`} style={{color: "#000000"}}>{article.title}</a></h3>
                <div className='tagPublishTime'>
                  <div className='secName'>
                    <a href={`/categories/${article.category_id}/${article.category_name}/articles`}>{article.category_name}</a>
                  </div>
                  <div>
                    <p id="publishedDateTime"><strong>Published on:</strong> {formatDateTime(article.publishDateTime).date} {formatDateTime(article.publishDateTime).time}</p>
                  </div>
                  
                </div>
                </div>
                {article.image && <img src={getImageUrl(article.image)} alt={article.title} id="publishImage" className={`other-news-item-image`}/>}
              </div>
            ))}
          </div>
      </div>
    );
  };
  
  export default TagWiseArticles;