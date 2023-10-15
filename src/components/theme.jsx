import ButtonContactLight from '../images/ui/ButtonContactLight.svg';
import ButtonContactDark from '../images/ui/ButtonContactDark.svg';
import ButtonSkengmanModeLight from '../images/ui/ButtonSkengmanModeLight.svg';
import ButtonSkengmanModeDark from '../images/ui/ButtonSkengmanModeDark.svg';

/* LightTheme color settings */
export const lightTheme = {
    name: 'light',
    text: '#363537',
    body: '#E2E2E2',
    selection: '#00ffd5',

    background: 'radial-gradient(circle at bottom center, #f2f2f2 0%, #999999 80%)',
    switchButton: `url(${ButtonSkengmanModeLight})`,
    gradient: 'radial-gradient(circle at center, transparent 0%, #f2f2f2 80%)',
    textHighlight: '#212427',
    textColorVariation: '#212427',
    backgroundImage: `url(${ButtonContactLight})`,

    modalBackground: '#f2f2f2',
    heroBackground: '#e0e0e0',

    colorHovered: '#737373',
    colorModel: '#94b6ff'
    /* colorHovered: '#ccddff',
  colorModel: '#99bbff', */
};

/* DarkTheme color settings */
export const darkTheme = {
    name: 'dark',
    text: 'white',
    body: '#59ff00',
    selection: '#8f000e',

    gradient: 'radial-gradient(circle at center, transparent 20%, black 80%)',
    textHighlight: '#E1E3EC',
    textColorVariation: '#E1E3EC',
    backgroundImage: `url(${ButtonContactDark})`,

    background: 'radial-gradient(circle at bottom center, #021d31 0%, #000000 80%)',

    switchButton: `url(${ButtonSkengmanModeDark})`,

    modalBackground: '#212427',
    heroBackground: '#2B2F33',

    colorHovered: '#737373',
    colorModel: '#647db5'
    /* colorHovered: 'grey',
  colorModel: '#4D5E80', */
};
