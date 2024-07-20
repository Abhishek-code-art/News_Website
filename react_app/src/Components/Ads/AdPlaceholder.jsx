import React, { useEffect } from 'react';
import './AdPlaceholder.css';

const AdPlaceholder = () => {
  useEffect(() => {
    const isDeviceEnabled = (device) => {
      // Implement your device checking logic here
      return device === 'large'; // Example check
    };

    const adFree = false; // Replace with the actual condition or state check

    if (isDeviceEnabled('large') && !adFree) {
      window.googletag.cmd.push(() => {
        window.googletag.display('div-gpt-ad-1522659065797-0');
      });
    }
  }, []);

  return (
    <div className="adPlaceholder dh250">
      <div id="div-gpt-ad-1522659065797-0">
        {/* <img className="ad-image" src={`${process.env.PUBLIC_URL}/ad.jpg`} alt="" /> */}
      </div>
    </div>
  );
};

export default AdPlaceholder;
