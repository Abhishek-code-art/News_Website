import React, { useState } from 'react';
import './BreakingNews.css';

const BreakingNews = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handlePopupToggle = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <div className="container mHide">
            <div className="breakingNews">
                <div className="title">
                    Breaking <span>News</span>
                </div>
                <div className="headline">
                    <a href="https://www.hindustantimes.com/world-news/us-news/prince-george-set-to-mark-11th-birthday-with-two-parties-but-things-will-change-next-year-due-to-morbid-rule-101721570968635.html">
                        Prince George set to mark 11th birthday with two parties, but things will change next year due to 'morbid rule'
                    </a>
                </div>
                <div className="socialEl" onClick={handlePopupToggle}>
                    <label
                        className="share share-candidate"
                        data-url="https://www.hindustantimes.com/world-news/us-news/prince-george-set-to-mark-11th-birthday-with-two-parties-but-things-will-change-next-year-due-to-morbid-rule-101721570968635.html"
                        data-title="Prince George set to mark 11th birthday with two parties, but things will change next year due to 'morbid rule'"
                        title="share"
                        htmlFor="sharePop-101632898402056"
                    ></label>
                    <input id="sharePop-101632898402056" type="checkbox" name="shareElPop" />
                    {isPopupVisible && (
                        <label className="sharePopUp" htmlFor="sharePop-101632898402056">
                            <div className="shareIcons">
                                <div className="labelTxt">Share Via</div>
                                <div className="icons">
                                    <a href="#" rel="nofollow noreferrer" className="wt"></a>
                                    <a href="#" rel="nofollow noreferrer" className="fb"></a>
                                    <a href="#" rel="nofollow noreferrer" className="tw"></a>
                                    <a href="#" rel="nofollow noreferrer" className="ln"></a>
                                </div>
                            </div>
                            <div className="copyUrl">
                                <div className="labelTxt">Copy Link</div>
                                <div className="copyLink"></div>
                            </div>
                        </label>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
