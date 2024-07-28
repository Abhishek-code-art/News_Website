import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LatestNews.css';

const LatestNewsItem = ({ category_id, category_name, title, url, publishedTime, id }) => {
  const categoryId = category_id ? `${category_id}` : '#';
  const categoryName = category_name || 'Unknown';
  const validUrl = url ? url : '#';
  const articleUrl = `/article/${id}`;
  const categoryUrl = `/categories/${categoryId}/${category_name}/articles/`;

  return (
    <div className="row">
      <div className="catName pt10">
        <a href={categoryUrl}>{categoryName.toUpperCase()}</a>
      </div>
      <h3 className="hdg3">
        <Link to={articleUrl}>{title}</Link>
      </h3>
      <div className="dateTime" title={`Published on ${publishedTime}`}>Published {publishedTime}</div>
    </div>
  );
};

LatestNewsItem.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default LatestNewsItem;
