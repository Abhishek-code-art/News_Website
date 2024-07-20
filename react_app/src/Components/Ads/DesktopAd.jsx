// src/Components/Ads/DesktopAd.jsx
import React, { useEffect } from 'react';
import './DesktopAd.css';

const DesktopAd = () => {
    useEffect(() => {
        if (isDeviceEnabled('large') && !adFree) {
            googletag.cmd.push(() => {
                googletag.display('div-gpt-ad-1522659065797-0');
            });
        }
    }, []);

    return (
        <div className="desktopAd dh250 noAdLabel">
            <div id="div-gpt-ad-1522659065797-0"></div>
        </div>
    );
};

export default DesktopAd;
