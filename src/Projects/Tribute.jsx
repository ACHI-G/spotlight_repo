import React, { useState, useEffect } from 'react';

let hasShownMessage = false;

const TributeLog = () => {
    useEffect(() => {
        if (!hasShownMessage) {
            console.log('%c👀 GET OUTTA HERE! 👀', 'color: #777777');
            console.log('%cSpecial thanks to Bruno Simon____🚗___, Gegi & Töbeler 🚀', 'color: #777777');
            console.log('%cHave a great day! 🖖', 'color: #777777');
            hasShownMessage = true;
        }
    }, []);

  return null;
};

export default TributeLog;