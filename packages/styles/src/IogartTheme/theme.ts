import { palette } from '../palette';
import { IogartTheme } from './types';
import {
  THEME_SPACER,
  THEME_FONT_FAMILY,
  THEME_BREAKPOINT_KEYS,
  THEME_BREAKPOINTS,
  THEME_BREAKPOINT_CONTAINER,
} from './const';

const createIogartTheme = () => {
  // console.log('???', this);
  const self = this;

  const theme: IogartTheme = {
    palette: {
      mode: 'default',
      primary: {
        main: palette.blueGrey,
        dark: '', // TODO
        light: '', // TODO
        contrastText: palette.light,
      },
      secondary: {
        main: palette.brown,
        dark: '', // TODO
        light: '', // TODO
        contrastText: palette.light,
      },
      success: {
        main: palette.green,
        dark: '', // TODO
        light: '', // TODO
        contrastText: palette.light,
      },
      info: {
        main: palette.lightBlue,
        dark: '', // TODO
        light: '', // TODO
        contrastText: palette.light,
      },
      warning: {
        main: palette.yellow,
        dark: '', // TODO
        light: '', // TODO
        contrastText: palette.dark,
      },
      error: {
        main: palette.red,
        dark: '', // TODO
        light: '', // TODO
        contrastText: palette.light, // TODO
      },
      common: palette,
      text: {
        primary: palette.dark,
        secondary: '', // TODO
        disabled: '', // TODO
      },
      divider: '', // TODO
      border: '', // TODO
      background: palette.light, // TODO
      action: {
        active: '', // TODO
        hover: '', // TODO
        selected: '', // TODO
        disabled: '', // TODO
        focus: '', // TODO
      },
      getContrastColor(color) {
        return color;
      }, // TODO
    },
    spacer: THEME_SPACER,
    spacing(value) {
      return `calc(${value} * ${this.spacer})`;
    },
    direction: 'ltr',
    breakpoints: {
      keys: THEME_BREAKPOINT_KEYS,
      values: THEME_BREAKPOINTS,
      container: THEME_BREAKPOINT_CONTAINER,
      up(breakpoint) {
        const minWidth = THEME_BREAKPOINTS[breakpoint].min;

        return `@media (min-width: ${minWidth}px)`;
      },
      down(breakpoint) {
        const maxWidth = THEME_BREAKPOINTS[breakpoint].min;

        return `@media (max-width: ${maxWidth}px)`;
      },
      between(min, max) {
        const minWidth = THEME_BREAKPOINTS[min].min;
        const maxWidth = THEME_BREAKPOINTS[max].min;

        return `@media (min-width: ${minWidth}px and max-width: ${maxWidth}px)`;
      },
      only(breakpoint) {
        return ``;
      }, // TODO
      not(breakpoint) {
        return ``;
      }, // TODO
    },
    typography: {
      fontFamilyBase: THEME_FONT_FAMILY,
      fontSizeBody: '16px',
      fontSizeBase: '.9rem',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 900,
      h1: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 900,
        fontSize: '2.75rem',
        lineHeight: 1.2,
        letterSpacing: 0,
      },
      h2: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 600,
        fontSize: '2.35rem',
        lineHeight: 1.2,
        letterSpacing: 0,
      },
      h3: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.2,
        letterSpacing: 0,
      },
      h4: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 600,
        fontSize: '1.75rem',
        lineHeight: 1.25,
        letterSpacing: 0,
      },
      h5: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.25,
        letterSpacing: 0,
      },
      h6: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.25,
        letterSpacing: 0,
      },
      subtitle: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 300,
        fontSize: '1rem',
        lineHeight: 1.167,
        letterSpacing: 0,
      },
      body: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.167,
        letterSpacing: 0,
      },
      button: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 400,
        fontSize: '.95rem',
        lineHeight: 1.35,
        letterSpacing: 0,
      },
    },
    shapes: {
      borderRadius: 3,
    },
    transitions: {}, // TODO
    shadows: {}, // TODO
    mixins: {}, // TODO
  };

  // Fixing values from default values (???)
  theme.typography.h1.fontFamily = theme.typography.fontFamilyBase;
  theme.typography.h2.fontFamily = theme.typography.fontFamilyBase;
  theme.typography.h3.fontFamily = theme.typography.fontFamilyBase;
  theme.typography.h4.fontFamily = theme.typography.fontFamilyBase;
  theme.typography.h5.fontFamily = theme.typography.fontFamilyBase;
  theme.typography.h6.fontFamily = theme.typography.fontFamilyBase;
  theme.typography.subtitle.fontFamily = theme.typography.fontFamilyBase;
  theme.typography.body.fontFamily = theme.typography.fontFamilyBase;
  theme.typography.button.fontFamily = theme.typography.fontFamilyBase;


  return theme;
}

export const THEME_DEFAULT = createIogartTheme();
