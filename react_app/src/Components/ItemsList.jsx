import React, { useEffect, useState } from 'react';

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
        console.log('Fetched articles:', data); // Check response data
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
    <div>
      <h2>Latest Articles</h2>
      <ul style={{ listStyleType: 'none' }}>
        {articles.map(article => (
          <li key={article.articleID}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            {article.image && <img src={`http://localhost:8000${article.image}`} alt={article.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
