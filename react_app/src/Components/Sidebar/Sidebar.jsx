import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='sidebar-top-icon'>
      <div className="sidebar-header">
        <div className='navLogo'></div>
        <div class="weather">New Delhi <span class="cTemp">33</span><sup>0</sup>C</div>
      </div>
      <button onClick={toggleSidebar} className="close-btn">&times;</button>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-section">
          {/* <h3>India News</h3> */}

          <div class="nav-sec">
            <ul>
                <li class="active">
                <a href="https://www.hindustantimes.com" class="hamClick" data-vars-section="Home"><em>Home</em></a>
                </li>
                <li>
                <a href="/htls/hindustan-times-leadership-summit-2023" data-id="htls-2023,2" class="hamClick" data-vars-section="HTLS 2023"><em>HTLS 2023</em></a>
                </li>
                <li>
                <a href="/astrology" data-id="astrology,3" class="hamClick" data-vars-section="Astrology"><em>Astrology</em></a>
                </li>
                <li>
                <a href="/lifestyle" data-id="lifestyle,5" class="hamClick" data-vars-section="Lifestyle"><em>Lifestyle</em></a>
                </li>
                <li>
                <a href="/entertainment" data-id="entertainment,6" class="hamClick" data-vars-section="Entertainment"><em>Entertainment</em></a>
                </li>
                <li>
                <a href="/elections" data-id="elections,7" class="hamClick" data-vars-section="Elections"><em>Elections</em></a>
                </li>
                <li>
                <a href="/trending" data-id="trending,8" class="hamClick" data-vars-section="Trending"><em>Trending</em></a>
                </li>
                <li>
                <a href="/cricket" data-id="cricket,9" class="hamClick" data-vars-section="Cricket"><em>Cricket</em></a>
                </li>
                <li>
                <a href="/videos" data-id="videos,11" class="hamClick" data-vars-section="Videos"><em>Videos</em></a>
                </li>
                <li>
                <a href="/education" data-id="education,12" class="hamClick" data-vars-section="Education"><em>Education</em></a>
                </li>
                <li>
                <a href="/photos" data-id="photos,13" class="hamClick" data-vars-section="Photos"><em>Photos</em></a>
                </li>
                <li>
                <a href="/world-news" data-id="world-news,14" class="hamClick" data-vars-section="World News"><em>World News</em></a>
                </li>
                <li>
                <a href="/sports" data-id="sports,15" class="hamClick" data-vars-section="Sports"><em>Sports</em></a>
                </li>
                <li>
                <a href="/cities" data-id="cities,16" class="hamClick" data-vars-section="Cities"><em>Cities</em></a>
                </li>
                <li>
                <a href="/daily-digest" data-id="daily-digest,19" class="hamClick" data-vars-section="Daily Digest"><em>Daily Digest</em></a>
                </li>
                <li>
                <a href="/quick-read" data-id="quickreads,20" class="hamClick" data-vars-section="Quickreads"><em>Quickreads</em></a>
                </li>
                <li>
                <a href="/opinion" data-id="opinion,21" class="hamClick" data-vars-section="Opinion"><em>Opinion</em></a>
                </li>
                <li>
                <a href="/analysis" data-id="analysis,22" class="hamClick" data-vars-section="Analysis"><em>Analysis</em></a>
                </li>
                <li>
                <a href="/ht-articles-for-you" data-id="for-you,23" class="hamClick" data-vars-section="For You"><em>For You</em></a>
                </li>
                <li>
                <a href="/personalized-content-listing" data-id="following,24" class="hamClick" data-vars-section="Following"><em>Following</em></a>
                </li>
                <li>
                <a href="/web-stories" data-id="web-stories,34" class="hamClick" data-vars-section="Web Stories"><em>Web Stories</em></a>
                </li>
                <li>
                <a href="/science" data-id="science,35" class="hamClick" data-vars-section="Science"><em>Science</em></a>
                </li>
                <li>
                <a href="/podcasts" data-id="podcasts,38" class="hamClick" data-vars-section="Podcasts"><em>Podcasts</em></a>
                </li>
                <li>
                <a href="/weather" data-id="weather,45" class="hamClick" data-vars-section="Weather"><em>Weather</em></a>
                </li>
                <li>
                <a href="https://www.hindustantimes.com/latest-news"><em>Latest News</em></a>
                </li>
                <li class="collapse mTop">
                <div>
                    <a href="/india-news" data-id="india-news,4" class="hamClick" data-vars-section="India News"><em>India News</em></a>
                    <span></span>
                </div>
                <ul>
                    <li>
                    <a href="/budget" data-id="india-news_budget-2024,1" class="hamClick" data-vars-section="India News" data-vars-subsection="Budget 2024"><em>Budget 2024</em></a>
                    </li>
                </ul>
                </li>
                <li class="collapse">
                <div>
                    <a href="/cricket" data-id="cricket,10" class="hamClick" data-vars-section="Cricket"><em>Cricket</em></a>
                    <span></span>
                </div>
                <ul>
                    <li>
                    <a href="/cricket/india-vs-zimbabwe" data-id="cricket_india-vs-zimbabwe,1" class="hamClick" data-vars-section="Cricket" data-vars-subsection="India vs Zimbabwe"><em>India vs Zimbabwe</em></a>
                    </li>
                    <li>
                    <a href="/cricket/live-score" data-id="cricket_live-cricket-score,2" class="hamClick" data-vars-section="Cricket" data-vars-subsection="Live Cricket Score"><em>Live Cricket Score</em></a>
                    </li>
                    <li>
                    <a href="/cricket/teams" data-id="cricket_cricket-teams,3" class="hamClick" data-vars-section="Cricket" data-vars-subsection="Cricket Teams"><em>Cricket Teams</em></a>
                    </li>
                    <li>
                    <a href="/cricket/players" data-id="cricket_cricket-players,4" class="hamClick" data-vars-section="Cricket" data-vars-subsection="Cricket Players"><em>Cricket Players</em></a>
                    </li>
                    <li>
                    <a href="/cricket/icc-rankings" data-id="cricket_icc-rankings,5" class="hamClick" data-vars-section="Cricket" data-vars-subsection="ICC Rankings"><em>ICC Rankings</em></a>
                    </li>
                    <li>
                    <a href="/cricket/schedule" data-id="cricket_cricket-schedule,6" class="hamClick" data-vars-section="Cricket" data-vars-subsection="Cricket Schedule"><em>Cricket Schedule</em></a>
                    </li>
                </ul>
                </li>
                <li class="collapse">
                <div>
                    <a href="/cities" data-id="cities,17" class="hamClick" data-vars-section="Cities"><em>Cities</em></a>
                    <span></span>
                </div>
                <ul>
                    <li>
                    <a href="/cities/delhi-news" data-id="cities_delhi,1" class="hamClick" data-vars-section="Cities" data-vars-subsection="Delhi"><em>Delhi</em></a>
                    </li>
                    <li>
                    <a href="/cities/mumbai-news" data-id="cities_mumbai,2" class="hamClick" data-vars-section="Cities" data-vars-subsection="Mumbai"><em>Mumbai</em></a>
                    </li>
                    <li>
                    <a href="/cities/bengaluru-news" data-id="cities_bengaluru,3" class="hamClick" data-vars-section="Cities" data-vars-subsection="Bengaluru"><em>Bengaluru</em></a>
                    </li>
                    <li>
                    <a href="/cities/kolkata-news" data-id="cities_kolkata,4" class="hamClick" data-vars-section="Cities" data-vars-subsection="Kolkata"><em>Kolkata</em></a>
                    </li>
                    <li>
                    <a href="/cities/chennai-news" data-id="cities_chennai,5" class="hamClick" data-vars-section="Cities" data-vars-subsection="Chennai"><em>Chennai</em></a>
                    </li>
                    <li>
                    <a href="/cities/jaipur-news" data-id="cities_jaipur,6" class="hamClick" data-vars-section="Cities" data-vars-subsection="Jaipur"><em>Jaipur</em></a>
                    </li>
                    <li>
                    <a href="/cities/hyderabad-news" data-id="cities_hyderabad,7" class="hamClick" data-vars-section="Cities" data-vars-subsection="Hyderabad"><em>Hyderabad</em></a>
                    </li>
                    <li>
                    <a href="/cities/ahmedabad-news" data-id="cities_ahmedabad,8" class="hamClick" data-vars-section="Cities" data-vars-subsection="Ahmedabad"><em>Ahmedabad</em></a>
                    </li>
                    <li>
                    <a href="/cities/lucknow-news" data-id="cities_lucknow,9" class="hamClick" data-vars-section="Cities" data-vars-subsection="Lucknow"><em>Lucknow</em></a>
                    </li>
                </ul>
                </li>
            </ul>
        </div>

          
        </div>
        <div className="sidebar-section">
          <h3>More from HT</h3>
          {/* Add more sections as needed */}
        </div>
        <div className="sidebar-footer">
          <button className="sign-in-btn">Sign in</button>
          {/* Add social media links here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
