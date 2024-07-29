import React from "react";
import "./footer.css";
const Footer_ht = () => {
    return (
        <div className="footer_ht_links" style={{backgroundColor: "#00131a"}}>
        <div className="container">
          <div className="ht_basic_links dataLayerFooter">
            <ul className="basic_links">
              <li><a rel="nofollow" href="https://www.htmedia.in/hindustantimes-com">About Us</a></li>
              <li><a href="https://www.hindustantimes.com/contact-us">Contact us</a></li>
              <li><a href="https://www.hindustantimes.com/termsofuse">Terms of use</a></li>
              <li><a href="https://www.hindustantimes.com/privacy-policy">Privacy policy</a></li>
              <li><a href="https://www.hindustantimes.com/weather">Weather Today</a></li>
              <li><a href="https://www.hindustantimes.com/subscribe-newsletter">HT Newsletters</a></li>
              <li><a
                style={{ cursor: 'pointer' }}
                rel="nofollow"
                onClick={() => setOtherFunnelEntry('https://accounts.hindustantimes.com/ht/userplan?type=plain&ref=ht&funnel_entry=subscription_footer&cta=subscription_footer')}
              >
                Subscription
              </a></li>
              <li><a href="https://www.hindustantimes.com/disclaimer">Disclaimer</a></li>
              <li><a href="https://www.hindustantimes.com/rate-card">Print Ad Rates</a></li>
              <li><a href="https://www.hindustantimes.com/dnpa-code-of-ethics-for-digital-news-websites">Code of Ethics</a></li>
              <li><a href="https://www.hindustantimes.com/sitemap">Site Map</a></li>
              <li><a href="https://www.hindustantimes.com/rss">RSS Feeds</a></li>
            </ul>
          </div>
          <div className="ht_basic_links other_news dataLayerFooter">
            <ul className="basic_links">
              <li>
                <a target="_blank" rel="nofollow" href="https://www.livemint.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/mint-logo.svg"
                    alt="mint-logo"
                    className="lazy"
                    width="62"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.livehindustan.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/HH-logo.svg"
                    alt="HH-logo"
                    className="HH-logo lazy"
                    width="89"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="https://lifestyle.livemint.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/mint-lounge.svg"
                    alt="mint-lounge"
                    className="mint-lounge lazy"
                    width="75"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="https://auto.hindustantimes.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/HT_Auto.svg"
                    alt="HT_Auto"
                    className="lazy"
                    width="71"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="https://tech.hindustantimes.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-tech.svg"
                    alt="ht-tech"
                    className="lazy"
                    width="77"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://bangla.hindustantimes.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-bangla.svg"
                    alt="ht-bangla"
                    className="lazy"
                    width="52"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="https://www.healthshots.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/healthshots.png"
                    alt="healthshots"
                    className="healthshots lazy"
                    width="94"
                    height="17"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="https://www.ottplay.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/OTT-icon.png"
                    alt="OTT-icons"
                    className="OTT-icon lazy"
                    width="70"
                    height="19"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="https://www.slurrp.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/slurrp-icon.svg"
                    alt="slurrp-icon"
                    className="slurrp-icon lazy"
                    width="45"
                    height="21"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="https://www.htsmartcast.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/smartcast-logo.png"
                    alt="smartcast-logo"
                    className="smartcast-logo lazy"
                    width="69"
                    height="23"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://kannada.hindustantimes.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-kannada.png"
                    alt="ht-kannada"
                    className="lazy"
                    width="64"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://tamil.hindustantimes.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-tamil.png"
                    alt="ht-tamil"
                    className="lazy"
                    width="66"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://telugu.hindustantimes.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-telugu.png"
                    alt="ht-telegu"
                    className="lazy"
                    width="81"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://marathi.hindustantimes.com/">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-marathi.png"
                    alt="ht-marathi"
                    className="lazy"
                    width="73"
                    height="23"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="copy_right"> © 2024 ThePublive </div>
        </div>
      </div>
    )
}

export default Footer_ht;