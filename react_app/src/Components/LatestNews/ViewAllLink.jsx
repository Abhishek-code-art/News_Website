import React from 'react';
import './LatestNews.css';

const ViewAllLink = ({ url }) => {
  return (
    <div className="viewAllLink">
      <a href={url} className="view" style={{color: "#00b1cd"}}><span>View All</span></a>
    </div>
  );
};

export default ViewAllLink;
