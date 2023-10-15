import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './globalStyles';

import { useDarkMode } from './useDarkMode.jsx';
import Toggle from './Toggle';

const DarkSide = () => {
  // useDarkMode hook to manage the current theme and the function to toggle between themes
    const [theme, toggleTheme] = useDarkMode();

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            {/* Rendering the Toggle component and passing the 'toggleTheme' function as a prop */}
            <Toggle onToggle={toggleTheme}></Toggle>
        </ThemeProvider>
    );
};

export default DarkSide;
