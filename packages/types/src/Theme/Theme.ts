import { Theme as emoTheme } from '@emotion/react';

export type themeDirectionType = 'ltr' | 'rtl';
export type themePaletteModeType = 'light' | 'dark';

export type themePaletteObjectType = {
    main: string,
    light: string,
    dark: string,
    contrastText: string,
};

export interface Theme extends emoTheme {
    direction: themeDirectionType,
    palette: {
        mode: themePaletteModeType,
        primary: themePaletteObjectType,
        secondary: themePaletteObjectType,
        error: themePaletteObjectType,
        warning: themePaletteObjectType,
        success: themePaletteObjectType,
        info: themePaletteObjectType,
        common: {
            red: string,
            pink: string,
            purple: string,
            deepPurple: string,
            indigo: string,
            blue: string,
            lightBlue: string,
            cyan: string,
            teal: string,
            green: string,
            lightGreen: string,
            lime: string,
            yellow: string,
            amber: string,
            orange: string,
            deepOrange: string,
            brown: string,
            grey: string,
            blueGrey: string,
            white: string,
            black: string,
            light: string,
            dark: string,
        },
        text: {},
        background: {},
        action: {},
        border: {},
        divider: {},
        getContrastText: (color: string) => string,
    },
    spacing: (value: number) => string,
    components: {
        Button: {},
    },
    typography: {
        fontFamily: string,
        fontSize: string | number,
        lineHeight: string | number,
    },
    shape: {},
    mixins: {},
    shadows: {},
    transitions: {},
    breakpoints: {},
    zIndex: {},
}
