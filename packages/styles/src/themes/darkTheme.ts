import { Theme } from '@iogart-react-ui/types';
import baseTheme from './base';
import palette from '../palette';

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
            ...palette
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
