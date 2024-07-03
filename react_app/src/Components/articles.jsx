import React, { useState, useEffect } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/articles/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticles(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) return <p>Loading articles...</p>;
    if (error) return <p>Error loading articles: {error.message}</p>;

    return (
        <div>
            <h1>Articles</h1>
            {articles.map((article) => (
                <div key={article.articleID}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    <p>Author ID: {article.authorID}</p>
                    <p>Published Date: {article.publishDate}</p>
                    <p>Status: {article.status}</p>
                </div>
            ))}
        </div>
    );
};

export default Articles;
