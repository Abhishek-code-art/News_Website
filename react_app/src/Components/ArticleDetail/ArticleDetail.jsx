import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/articles/${id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch article');
        }
        return response.json();
      })
      .then(data => {
        setArticle(data);
      })
      .catch(error => {
        console.error('Error fetching article:', error);
        setError(error);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <p><strong>Category:</strong> {article.category_name}</p>
      <p><strong>Published on:</strong> {new Date(article.publishDateTime).toLocaleString()}</p>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
