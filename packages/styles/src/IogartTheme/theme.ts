import Color from 'color';
import { IogartTheme } from './types';
import {
  PALETTE,
  THEME_SPACER,
  THEME_FONT_FAMILY,
  THEME_BREAKPOINT_KEYS,
  THEME_BREAKPOINTS,
  THEME_BREAKPOINT_CONTAINER,
} from '../const';

function createIogartTheme() {
  const theme: IogartTheme = {
    palette: {
      mode: 'default',
      primary: {
        main: PALETTE.veryPeri,
        dark: Color(PALETTE.veryPeri).darken(0.5).toString(),
        light: Color(PALETTE.veryPeri).lighten(0.5).toString(),
        contrastText: PALETTE.light,
      },
      secondary: {
        main: PALETTE.anthracite,
        dark: Color(PALETTE.anthracite).darken(0.5).toString(),
        light: Color(PALETTE.anthracite).lighten(0.5).toString(),
        contrastText: PALETTE.light,
      },
      success: {
        main: PALETTE.green,
        dark: Color(PALETTE.green).darken(0.5).toString(),
        light: Color(PALETTE.green).lighten(0.5).toString(),
        contrastText: PALETTE.light,
      },
      info: {
        main: PALETTE.lightBlue,
        dark: Color(PALETTE.lightBlue).darken(0.5).toString(),
        light: Color(PALETTE.lightBlue).lighten(0.5).toString(),
        contrastText: PALETTE.light,
      },
      warning: {
        main: PALETTE.yellow,
        dark: Color(PALETTE.yellow).darken(0.5).toString(),
        light: Color(PALETTE.yellow).lighten(0.5).toString(),
        contrastText: PALETTE.white,
      },
      error: {
        main: PALETTE.red,
        dark: Color(PALETTE.red).darken(0.5).toString(),
        light: Color(PALETTE.red).lighten(0.5).toString(),
        contrastText: PALETTE.light,
      },
      common: PALETTE,
      text: {
        primary: PALETTE.dark,
        secondary: '', // TODO
        disabled: '', // TODO
      },
      divider: Color(PALETTE.volcanicGlass).alpha(0.5).toString(), // TODO
      border: '', // TODO
      background: PALETTE.white,
      action: {
        active: Color(PALETTE.veryPeri).alpha(0.125).toString(),
        hover: '', // TODO
        selected: '', // TODO
        disabled: Color(PALETTE.white).alpha(0.45).toString(),
        focus: '', // TODO
      },
      _contrast(color) {
        return Color(color).negate().toString(); // TODO
      },
      _lLighten(color, amount) {
        return Color(color).lighten(amount).toString();
      },
      _darken(color, amount) {
        return Color(color).darken(amount).toString();
      },
      _alpha(color, amount) {
        return Color(color).alpha(amount).toString();
      },
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
        lineHeight: 1.25,
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

  return theme;
}

export const THEME_DEFAULT = createIogartTheme();
