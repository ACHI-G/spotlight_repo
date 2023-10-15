import { useEffect, useState } from 'react';

export const useDarkMode = () => {
	// Initializing state for the theme, defaulting to 'light' mode
    const [theme, setTheme] = useState('light');

	// Function to toggle between 'light' and 'dark' modes
    const toggleTheme = () => {
        if (theme === 'light') {
            window.localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            window.localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

	// useEffect to check and update the theme from localStorage on component mount
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        // Updating the theme if a preference is found in localStorage
        localTheme && setTheme(localTheme);
    }, []);

    return [theme, toggleTheme];
};
