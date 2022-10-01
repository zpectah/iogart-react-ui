import Color from 'color';
import { IogartTheme } from '@iogart-react-ui/types';
import { invertColor } from '@iogart-react-ui/utils';
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
        dark: Color(PALETTE.veryPeri).darken(0.35).toString(),
        light: Color(PALETTE.veryPeri).lighten(0.35).toString(),
        contrastText: PALETTE.light,
      },
      secondary: {
        main: PALETTE.anthracite,
        dark: Color(PALETTE.anthracite).darken(0.35).toString(),
        light: Color(PALETTE.anthracite).lighten(0.35).toString(),
        contrastText: PALETTE.light,
      },
      success: {
        main: PALETTE.green,
        dark: Color(PALETTE.green).darken(0.35).toString(),
        light: Color(PALETTE.green).lighten(0.35).toString(),
        contrastText: PALETTE.light,
      },
      info: {
        main: PALETTE.lightBlue,
        dark: Color(PALETTE.lightBlue).darken(0.35).toString(),
        light: Color(PALETTE.lightBlue).lighten(0.35).toString(),
        contrastText: PALETTE.light,
      },
      warning: {
        main: PALETTE.yellow,
        dark: Color(PALETTE.yellow).darken(0.25).toString(),
        light: Color(PALETTE.yellow).lighten(0.35).toString(),
        contrastText: PALETTE.black,
      },
      error: {
        main: PALETTE.red,
        dark: Color(PALETTE.red).darken(0.25).toString(),
        light: Color(PALETTE.red).lighten(0.25).toString(),
        contrastText: PALETTE.light,
      },
      common: PALETTE,
      text: {
        primary: Color(PALETTE.black).alpha(0.9).toString(),
        secondary: PALETTE.dark,
        disabled: Color(PALETTE.dark).alpha(0.25).toString(),
      },
      divider: Color(PALETTE.volcanicGlass).alpha(0.75).toString(),
      border: Color(PALETTE.dark).alpha(0.75).toString(),
      background: {
        body: PALETTE.white,
        paper: PALETTE.light,
        backdrop: Color(PALETTE.dark).alpha(0.5).toString(),
      },
      action: {
        active: Color(PALETTE.black).alpha(0.125).toString(),
        hover: Color(PALETTE.white).alpha(0.125).toString(),
        selected: Color(PALETTE.veryPeri).alpha(0.125).toString(),
        disabled: Color(PALETTE.white).alpha(0.45).toString(),
        focus: Color(PALETTE.white).alpha(0.15).toString(),
        loading: Color(PALETTE.white).alpha(0.45).toString(),
      },
      _negated(color) {
        return Color(color).negate().toString();
      },
      _inverted(color, bw) {
        return invertColor(Color(color).hex(), bw);
      },
      _lighten(color, amount) {
        return Color(color).lighten(amount).toString();
      },
      _darken(color, amount) {
        return Color(color).darken(amount).toString();
      },
      _alpha(color, amount) {
        return Color(color).alpha(amount).toString();
      },
      _grayscale(color) {
        return Color(color).grayscale().toString();
      },
    },
    spacer: THEME_SPACER,
    _spacing(value) {
      return `calc(${value} * ${this.spacer})`;
    },
    direction: 'ltr',
    breakpoints: {
      keys: THEME_BREAKPOINT_KEYS,
      values: THEME_BREAKPOINTS,
      container: THEME_BREAKPOINT_CONTAINER,
      _up(breakpoint) {
        return `@media (min-width: ${THEME_BREAKPOINTS[breakpoint].min}px)`;
      },
      _down(breakpoint) {
        return `@media (max-width: ${THEME_BREAKPOINTS[breakpoint].min}px)`;
      },
      _between(min, max) {
        return `@media (min-width: ${THEME_BREAKPOINTS[min].min}px and max-width: ${THEME_BREAKPOINTS[max].min}px)`;
      },
      _only(breakpoint) {
        switch (breakpoint) {
          case 'xs':
            return `@media (min-width: ${THEME_BREAKPOINTS.xs.min}px and max-width: ${THEME_BREAKPOINTS.xs.max}px)`;

          case 'sm':
            return `@media (min-width: ${THEME_BREAKPOINTS.sm.min}px and max-width: ${THEME_BREAKPOINTS.sm.max}px)`;

          case 'md':
            return `@media (min-width: ${THEME_BREAKPOINTS.md.min}px and max-width: ${THEME_BREAKPOINTS.md.max}px)`;

          case 'lg':
            return `@media (min-width: ${THEME_BREAKPOINTS.lg.min}px and max-width: ${THEME_BREAKPOINTS.lg.max}px)`;

          case 'xl':
            return `@media (min-width: ${THEME_BREAKPOINTS.xl.min}px and max-width: ${THEME_BREAKPOINTS.xl.max}px)`;

          case 'xxl':
          default:
            return `@media (min-width: ${THEME_BREAKPOINTS.xxl.min}px)`;
        }
      },
    },
    typography: {
      fontFamilyBase: THEME_FONT_FAMILY,
      fontSizeBody: '16px',
      fontSizeBase: '.9rem',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      fontWeightHeavy: 900,
      h1: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 700,
        fontSize: '2.75rem',
        lineHeight: 1.2,
        letterSpacing: 0,
        marginTop: '.75rem',
        marginBottom: '1rem',
      },
      h2: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 600,
        fontSize: '2.35rem',
        lineHeight: 1.2,
        letterSpacing: 0,
        marginTop: '.75rem',
        marginBottom: '1rem',
      },
      h3: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.2,
        letterSpacing: 0,
        marginTop: '.75rem',
        marginBottom: '1rem',
      },
      h4: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 700,
        fontSize: '1.75rem',
        lineHeight: 1.25,
        letterSpacing: 0,
        marginTop: '.75rem',
        marginBottom: '1rem',
      },
      h5: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 700,
        fontSize: '1.5rem',
        lineHeight: 1.25,
        letterSpacing: 0,
        marginTop: '.75rem',
        marginBottom: '1rem',
      },
      h6: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.25,
        letterSpacing: 0,
        marginTop: '.75rem',
        marginBottom: '1rem',
      },
      subtitle: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 300,
        fontSize: '1.075rem',
        lineHeight: 1.167,
        letterSpacing: '.05rem',
        marginTop: '.75rem',
        marginBottom: '1rem',
      },
      body: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 400,
        fontSize: '.975rem',
        lineHeight: 1.45,
        letterSpacing: 0,
        marginTop: '.5rem',
        marginBottom: '.5rem',
      },
      caption: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 300,
        fontSize: '.825rem',
        lineHeight: 1.3,
        letterSpacing: 0,
        marginTop: '.75rem',
        marginBottom: '.75rem',
      },
      button: {
        fontFamily: THEME_FONT_FAMILY,
        fontWeight: 400,
        fontSize: '.95rem',
        lineHeight: 1.25,
        letterSpacing: 0,
        marginTop: 0,
        marginBottom: 0,
      },
    },
    shapes: {
      borderRadius: 3,
    },
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4,0,0.2,1)',
        easeOut: 'cubic-bezier(0.0,0,0.2,1)',
        easeIn: 'cubic-bezier(0.4,0,1,1)',
        sharp: 'cubic-bezier(0.4,0,0.6,1)',
      },
      duration: {
        short: 125,
        standard: 275,
        slow: 450,
        slower: 725,
      },
      _create(property, easing = 'easeInOut', duration = 'standard', delay = 0) {
        return `${property} .${this.duration[duration]}s ${this.easing[easing]} ${delay}s`;
      },
    },
    shadows: {
      0: 'none',
      1: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`, // TODO
      2: `0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)`, // TODO
      3: `0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)`, // TODO
      4: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`, // TODO
      5: `0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)`, // TODO
    },
    zAxis: {
      drawer: 1190,
      modal: 1290,
      tooltip: 1790,
      toasts: 1890,
    },
    // mixins: {}, // TODO
  };

  return theme;
}

export const THEME_DEFAULT = createIogartTheme();
