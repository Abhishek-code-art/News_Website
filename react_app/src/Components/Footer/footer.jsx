import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_logo">
          <div className="ht_logo">
            <picture>
              <source srcSet='https://www.hindustantimes.com/static-content/1y/ht/ht-logo2.webp' type='image/webp'/>
              <source srcSet='https://www.hindustantimes.com/static-content/1y/ht/ht-logo.png' type='image/png'/>
              <img src="https://www.hindustantimes.com/static-content/1y/ht/1x1.webp" alt="" loading="lazy" width={"404"} height={"52"}/>
            </picture>
          </div>
          <div className="app_link">
            {/* <a href="#">
              <img src="https://www.hindustantimes.com/static-content/1y/ht/1x1.webp" alt="" />
            </a> */}
            <a href="#">
              <img src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/mweb_button_svg.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="footer_subscribe">
          <div className="subscribe_input">
            <label htmlFor="" className="footerSubscribe">
              Subscribe to our best newsletters
            </label>

            <div className="subscribe_box">
              <div className="dropdown" id="select_newsletter_footer">
                <label htmlFor=""></label>
                <ul style={{display: "none"}}> 
                </ul>
              </div>
              <input type="text" id=""user_email_footer placeholder="Enter Email Address"/>
              <button id="footer-subscribe-newsletter">Sign Up to Subscribe</button>
            </div>
          </div>
          <div className="subscribe_social">
            <ul>
              <li>
                <a target="_blank" rel="nofollow noreferrer" href="#">
                  <img src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/fb-logo.svg" 
                      data-src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/fb-logo.svg" 
                      alt="fb-logo" 
                      className="lazy" 
                      width="32" 
                      height="32" 
                      data-loaded="true" />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow noreferrer" href="https://www.linkedin.com/company/the-publive/mycompany/">
                  <img src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/in-logo.svg" 
                      data-src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/in-logo.svg" 
                      alt="in-logo" 
                      className="lazy" 
                      width="32" 
                      height="32" 
                      data-loaded="true" />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow noreferrer" href="#">
                  <img src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/instagram.svg" 
                      data-src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/instagram.svg" 
                      alt="instagram" 
                      class="lazy" 
                      width="32" 
                      height="32" 
                      data-loaded="true" />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow noreferrer" href="#">
                  <img src="https://www.hindustantimes.com/static-content/1y/ht/new-tw.png" 
                      data-src="https://www.hindustantimes.com/static-content/1y/ht/new-tw.png" 
                      alt="new-tw" 
                      className="lazy" 
                      width="32" 
                      height="32" 
                      data-loaded="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_menu dataLayerFooter">
          <ul>
            <li className="heading">Publive</li>
            <li className="heading">Publive</li>
            <li className="heading">Publive</li>
            <li className="heading">Publive</li>
            
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>

            <li className="heading">Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>

            <li className="heading">Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>

            <li className="heading">Publive</li>
            <li className="heading">Publive</li>
            <li className="heading">Publive</li>
            <li className="heading">Publive</li>

            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
            <li>Publive</li>
          </ul>
        </div>

        <div className="ftrStories latestNews">
          <div className="container dataLayerFooter">
            <div className="secTitle">
              <a 
                onClick={() => handleOnClick('india news', 'https://www.hindustantimes.com/india-news')} 
                href="https://www.hindustantimes.com/india-news"
              >
                Latest India News
              </a>
            </div>
            <ul>
              <li>
                <a href="/india-news/mumbai-rain-city-waterlogged-local-trains-partially-hit-more-downpour-expected-101721621458609.html">
                  Mumbai rain: City waterlogged, local trains partially hit; more downpour expected
                </a>
              </li>
              <li>
                <a href="/india-news/ban-on-govt-employees-from-taking-part-in-rss-activities-withdrawn-amit-malviya-101721628092721.html">
                  Ban on govt employees from taking part in RSS activities withdrawn: Amit Malviya
                </a>
              </li>
              <li>
                <a href="/india-news/pm-raises-viksit-bharat-disruptions-in-opening-remarks-before-budget-session-101721626351650.html">
                  PM raises ‘Viksit Bharat’, disruptions in opening remarks before Budget session
                </a>
              </li>
              <li>
                <a href="/india-news/pm-narendra-modi-slams-opposition-before-parliament-budget-session-they-tried-to-not-let-me-101721624325624.html">
                  PM Narendra Modi slams Opposition before Parliament Budget Session: ‘They tried to not let me…’
                </a>
              </li>
              <li>
                <a href="/india-news/bangladesh-unrest-1-045-students-return-to-india-via-indo-bangla-border-in-wb-101721625631369.html">
                  Bangladesh unrest: 1,045 students return to India via Indo-Bangla border in WB
                </a>
              </li>
              <li>
                <a href="/world-news/kamala-harris-ancestral-village-in-india-excited-plans-celebrations-as-joe-biden-endorses-her-101721616724953.html">
                  Kamala Harris' ancestral village in India excited, plans celebrations as Joe Biden endorses her
                </a>
              </li>
              <li>
                <a href="/india-news/parliament-monsoon-session-live-lok-sabha-rajya-sabha-latest-updates-neet-paper-leak-kanwar-yatra-news-today-july-22-101721612274104.html">
                  Parliament monsoon session LIVE: Oppn raise NEET issue, Rahul Gandhi terms Indian exam system a ‘fraud’
                </a>
              </li>
              <li>
                <a href="/india-news/pm-narendra-modi-to-visit-kargil-war-memorial-in-ladakh-for-25th-anniversary-of-vijay-diwas-101721620275590.html">
                  PM Narendra Modi to visit Kargil War Memorial in Ladakh for 25th anniversary of Vijay Diwas
                </a>
              </li>
              <li>
                <a href="/india-news/parliament-monsoon-session-from-today-july-22-2024-oppostion-vs-nda-govt-over-neet-ug-kanwar-yatra-10-points-101721618237245.html">
                  Parliament Monsoon Session begins today: Opposition vs NDA govt over NEET-UG, Kanwar Yatra rows likely | 10 points
                </a>
              </li>
              <li>
                <a href="">
                  Suzuki expects 15% of its India sales to come from EVs by 2030. But…
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
