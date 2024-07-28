import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./NextStory.css";
import NextStoryArticle from "./NextStoryArticle";

const NextStory = ({ category_id, article_id }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!category_id) return;

        axios.get(`http://localhost:8000/categories/${category_id}/articles/`)
            .then(response => {
                console.log('Fetched articles:', response.data);
                setArticles(response.data);
                sessionStorage.setItem(`articles_${category_id}`, JSON.stringify(response.data));
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setError(error);
            });
    }, [category_id]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="next-story-container">
            <div id="next-story-article" placementindex="1">
                {articles.slice(0,5).map((article) => (
                    article.articleID !== article_id && (<NextStoryArticle
                        key={article.articleID}
                        id={article.articleID}
                        category_id={article.categories[0].category_id}
                        category_name={article.categories[0].name}
                        image={article.image}
                        title={article.title}
                        content={article.content}
                        username={article.author.username}
                        url="http://localhost:8000/"
                        publishedTime={new Date(article.publishDateTime).toLocaleString()}
                        tags={article.tags}
                    />)
                ))}
            </div>
        </div>
    );
};

export default NextStory;
