import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import "./NextStory.css";
import Ads from '../ArticleDetail/Ads';

const NextStoryArticle = ({ category_id, category_name, image, title, content, username, url, publishedTime, id }) => {
  const categoryId = category_id ? `${category_id}` : '#';
  const categoryName = category_name || 'Unknown';

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
    <div className="next-story-section">
        <h1 className="next-story-title">{title}</h1>
      <div className="next-story-author">
        <div>
            <span className="authorBy" style={{color: "#757575"}}>By</span>
            <small className="author-name">
                <a href="#" style={{color: "#757575"}}>{username}</a>
            </small>
        </div>
      </div>

      <div className="date-socialIcon">
        <div className="date-time">
            {formatDateTime(publishedTime).date} {formatDateTime(publishedTime).time}
        </div>
        <div className="socialIcon">
            <div>
                <div className="icons">
                    <SocialIcon url="https://facebook.com" className="icon" style={{width: "28px", height: "28px"}}/>
                    <SocialIcon url="https://twitter.com" className="icon" style={{width: "28px", height: "28px"}}/>
                    <SocialIcon url="https://linkedin.com" className="icon" style={{width: "28px", height: "28px"}}/>
                </div>
            </div>
        </div>
      </div>

      <div className="article-content">
        <div className="detail">
            <div className="paragraph">
                {image && <img src={`${url}${image}`} alt={title} id="new-story-image" />}
                <div>
                    <p>
                        {content}
                    </p>
                </div>
            </div>

            <Ads />
            <div class="readMoreStory">
                <div class="moreButton">
                    <a href="javascript:void(0);">
                        <span>Read More</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

NextStoryArticle.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default NextStoryArticle;
