import React from 'react';

const Logo = () => {
  return (
    <div className="logo logoGroup">
      <a href="/">
        <picture>
          <source srcSet="https://www.hindustantimes.com/static-content/1y/ht/ht-logo2.webp" type="image/webp" />
          <source srcSet="https://www.hindustantimes.com/static-content/1y/ht/ht-logo.png" type="image/png" />
          <img src="https://www.hindustantimes.com/static-content/1y/ht/ht-logo.png" alt="Hindustan Times News" width="300" height="38" />
        </picture>
      </a>
    </div>
  );
};

export default Logo;
