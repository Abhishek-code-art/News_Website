import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetail.css';
import Ads from './Ads';
import Carousel from './Carousel';

const ArticleDetail = ({ fetchUrl }) => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchArticleDetail = async () => {
      const articleUrl = `${fetchUrl}articles/${id}/`;
      try {
        const response = await fetch(articleUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch post details: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();

          const authorID = data.author ? data.author.userID : null;
          const categoryID = data.category ? data.category.categoryID : null;

          if (authorID) {
            const userResponse = await fetch(`${fetchUrl}users/${authorID}/`);
            const userData = await userResponse.json();
            data.author = userData;
          }

          if (categoryID) {
            const categoryResponse = await fetch(`${fetchUrl}categories/${categoryID}/`);
            const categoryData = await categoryResponse.json();
            data.category = categoryData;
          }

          setArticle(data);
        } else {
          const errorText = await response.text();
          throw new Error(`Server response is not JSON: ${errorText}`);
        }
      } catch (error) {
        console.error('Error fetching post details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticleDetail();
  }, [fetchUrl, id]);

  // const toggleDescription = () => {
  //   setShowFullDescription(!showFullDescription);
  // };

  const formatDateTime= (dateTime) => {
    if (!dateTime) return { date: '', time: '' };
    const dateObj = new Date(dateTime);
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const date = dateObj.toLocaleDateString(undefined, optionsDate);
    const time = dateObj.toLocaleTimeString(undefined, optionsTime);
    return { date, time };
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '#';
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `${fetchUrl}${imagePath}`;
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!article) {
    return <div>No post details available.</div>;
  }

  
  return (
    <div className="article-detail">
      <div className='article-header'>
        {/* {article.category_id && (
          <div className="foryou-categories article-cat">
            <Link to={`http://localhost:8000/categories/${article.category_id}/articles`} className="category-link">
              <h5>{article.category_name}</h5>
            </Link>
          </div>
        )} */}
        <h1 className='article-title'>{article.title || ''}</h1>
        {article.author && <p>By: {article.author.username || ''}</p>}
        <p>Date Updated: {formatDateTime(article.publishDateTime).date} {formatDateTime(article.publishDateTime).time}</p>
      </div>
      <img src={getImageUrl(article.image)} className='article-img' alt={article.title || ''} />
      {/* <img src={article.image} className='article-img' alt={article.title} /> */}
      <div className='article-body'>
        <p className='article-short forYoutext'>
          {/* {showFullDescription ? article.content : `${article.content.slice(0, 180)}...`}
          <button onClick={toggleDescription}>
            <b>{showFullDescription ? 'close' : 'more'}</b>
          </button> */}
          {article.content || ''}
        </p>
        {/* <div className='article-content' dangerouslySetInnerHTML={{ __html: article.content }}></div> */}
        {/* <p>Date Updated: {formatDateTime(article.publishDateTime).date} {formatDateTime(article.publishDateTime).time}</p> */}
      </div>
      <Ads />
      <Carousel />
    </div>
  );
};

export default ArticleDetail;
