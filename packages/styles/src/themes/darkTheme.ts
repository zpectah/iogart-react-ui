import { Theme } from '@iogart-react-ui/types';
import baseTheme from './base';

const darkTheme = {
    palette: {
        mode: 'dark',
        primary: { // TODO
            main: 'pink',
            light: '#ababab',
            dark: '#ababab',
            contrastText: '#ababab',
        },
        secondary: { // TODO
            main: '#ababab',
            light: '#ababab',
            dark: '#ababab',
            contrastText: '#ababab',
        },
        error: { // TODO
            main: '#ababab',
            light: '#ababab',
            dark: '#ababab',
            contrastText: '#ababab',
        },
        warning: { // TODO
            main: '#ababab',
            light: '#ababab',
            dark: '#ababab',
            contrastText: '#ababab',
        },
        success: { // TODO
            main: '#ababab',
            light: '#ababab',
            dark: '#ababab',
            contrastText: '#ababab',
        },
        info: { // TODO
            main: '#ababab',
            light: '#ababab',
            dark: '#ababab',
            contrastText: '#ababab',
        },
        common: {
            red: 'rgb(211,47,47)',
            pink: 'rgb(194,24,91)',
            purple: 'rgb(123,31,162)',
            deepPurple: 'rgb(81,45,168)',
            indigo: 'rgb(48,63,159)',
            blue: 'rgb(25,118,210)',
            lightBlue: 'rgb(2,136,209)',
            cyan: 'rgb(0,151,167)',
            teal: 'rgb(0,121,107)',
            green: 'rgb(56,142,60)',
            lightGreen: 'rgb(104,159,56)',
            lime: 'rgb(175,180,43)',
            yellow: 'rgb(251,192,45)',
            amber: 'rgb(255,160,0)',
            orange: 'rgb(245,124,0)',
            deepOrange: 'rgb(230,74,25)',
            brown: 'rgb(93,64,55)',
            grey: 'rgb(97,97,97)',
            blueGrey: 'rgb(69,90,100)',
            white: 'rgb(253,253,253)',
            black: 'rgb(2,2,2)',
            light: 'rgb(250,250,250)',
            dark:  'rgb(25,25,25)',
        },
        // TODO ...
        text: {},
        background: {},
        action: {},
        border: {},
        divider: {},
        getContrastText: () => '',
    },
    ...baseTheme,
} as Theme;

export default darkTheme;
