import React from 'react';

const RightLinks = () => {
  return (
    <div className="rgtLinks">
      <div className="links">
        <a className="mSubscibe mHeaderSubscribe" style={{display: 'none'}}>Subscribe</a>
        <div className="gamezop icon">
          <a rel="nofollow noreferrer noopener" href="https://www.hindustantimes.com/games" title="game">Games</a>
        </div>
        <div className="epaper icon">
          <a rel="nofollow noreferrer noopener" href="https://epaper.hindustantimes.com/" target="_blank" title="epaper">E-Paper</a>
        </div>
        <div className="signin">
          <div className="login">
            <div className="sign-in">Sign in</div>
            {/* <div className="afterLogin myaccountbtntop">My Account</div> */}
          </div>
        </div>
      </div>
      <div className="hdrSubcribe">
        <div className="txt">
          <span className="headSpanTxt">
            <div id="htEchoNavBarL2">
              <div className="echoSDK_navBarL2">
                <div style={{paddingRight: "5px"}}>FREE TRIAL - 14 days</div>
                <div className="echoSDK_subsBtn">
                  <a className="echoSDK_a">Subscribe</a>
                </div>
              </div>
            </div>
          </span>
          <span className="crownIcon" style={{display: 'none'}}>
            <img src="https://www.hindustantimes.com/static-content/1y/ht/crown-icon.png" alt="crown-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightLinks;
