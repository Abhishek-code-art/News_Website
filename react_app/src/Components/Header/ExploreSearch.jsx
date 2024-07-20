import React from 'react';

const ExploreSearch = ({ toggleSidebar }) => {
  return (
    <div className="exploreSearch">
      <div className="btnExplore" onClick={toggleSidebar}>
        <span className="navIco">
          <picture>
            <source srcSet="https://www.hindustantimes.com/static-content/1y/ht/hamburger-i.webp" type="image/webp" />
            <source srcSet="https://www.hindustantimes.com/static-content/1y/ht/hamburger-i.png" type="image/png" />
            <img src="https://www.hindustantimes.com/static-content/1y/ht/hamburger-i.png" alt="Menu" width="16" height="12" />
          </picture>
        </span>
        <strong style={{ color: "white" }}> Explore</strong>
      </div>
      <div className="searchLink">
        <a href="#" className="freeTag" style={{ color: "white" }}>
          <picture>
            <source srcSet="https://www.hindustantimes.com/static-content/1y/ht/search-i1.webp" type="image/webp" />
            <source srcSet="https://www.hindustantimes.com/static-content/1y/ht/search-i1.png" type="image/png" />
            <img src="https://www.hindustantimes.com/static-content/1y/ht/search-i1.png" alt="Search" width="15" height="18" />
          </picture>Search
        </a>
      </div>
    </div>
  );
};

export default ExploreSearch;
