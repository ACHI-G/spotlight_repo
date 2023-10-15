import { useEffect } from 'react';

const IntersectionObserverComponent = () => {
  // Using useEffect to handle the intersection observation
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    /* console.log(entry); */
                    entry.target.classList.add('showAnimation');
                } 
                // possibility to let animation run every time and not only once
                /* else {
                    entry.target.classList.remove('showAnimation');
                } */
            });
        });

        // Getting all elements with class 'hiddenAnimation' and observing them
        const hiddenAnimationElements = document.querySelectorAll('.hiddenAnimation');
        hiddenAnimationElements.forEach((el) => observer.observe(el));

        // Getting all elements with class 'hiddenAnimationAlt' and observing them
        const hiddenAnimationAltElements = document.querySelectorAll('.hiddenAnimationAlt');
        hiddenAnimationAltElements.forEach((el) => observer.observe(el));

        // Clean up the observer when the component unmounts
        return () => observer.disconnect();
    }, []); // Adding an empty dependency array to ensure the effect runs only once

    return null; // or you can return a placeholder div if needed
};

export default IntersectionObserverComponent;
