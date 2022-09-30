import { DefaultTheme } from 'react-jss';
import { withChildren } from './withChildren';
import { breakpointKeys, transitionEasingKeys, transitionDurationKeys } from './enums';

export type ThemeBreakpointKeyType = keyof typeof breakpointKeys;

export type ThemeEasingType = keyof typeof transitionEasingKeys;

export type ThemeDurationType = keyof typeof transitionDurationKeys;

interface themeColor {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}

interface themeTypographyObject {
  fontFamily: string;
  fontWeight: number;
  fontSize: string | number;
  lineHeight: string | number;
  letterSpacing: string | number;
}

interface themeBreakpointValueObject {
  min: number;
  max: number | null;
}

export interface IogartTheme extends DefaultTheme {
  palette: {
    mode: 'default' | string;
    primary: themeColor;
    secondary: themeColor;
    success: themeColor;
    info: themeColor;
    warning: themeColor;
    error: themeColor;
    common: {
      red: string;
      pink: string;
      purple: string;
      deepPurple: string;
      indigo: string;
      blue: string;
      lightBlue: string;
      cyan: string;
      teal: string;
      green: string;
      lightGreen: string;
      lime: string;
      yellow: string;
      amber: string;
      orange: string;
      deepOrange: string;
      brown: string;
      grey: string;
      blueGrey: string;
      white: string;
      black: string;
      light: string;
      dark: string;
      veryPeri: string; // Pantone 2022
      anthracite: string; // Pantone 2022
      volcanicGlass: string; // Pantone 2022
      deepTaupe: string; // Pantone 2022
      plazaTaupe: string; // Pantone 2022
      whiteSand: string; // Pantone 2022
      petrifiedOak: string; // Pantone 2022
      cloudDancer: string; // Pantone 2022
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    divider: string;
    border: string;
    background: {
      body: string;
      paper: string;
      backdrop: string;
    };
    action: {
      active: string;
      hover: string;
      selected: string;
      disabled: string;
      focus: string;
      loading: string;
    };
    _negated: (color: string) => string;
    _inverted: (color: string, bw?: boolean) => string;
    _lighten: (color: string, amount: number) => string;
    _darken: (color: string, amount: number) => string;
    _alpha: (color: string, amount: number) => string;
    _grayscale: (color: string) => string;
  };
  spacer: string | number;
  _spacing: (value: number) => string;
  direction: 'ltr' | 'rtl';
  breakpoints: {
    keys: string[];
    values: {
      [k: string]: themeBreakpointValueObject;
    };
    container: {
      [k: string]: number | null;
    };
    _up: (breakpoint: ThemeBreakpointKeyType) => string;
    _down: (breakpoint: ThemeBreakpointKeyType) => string;
    _between: (min: ThemeBreakpointKeyType, max: ThemeBreakpointKeyType) => string;
    _only: (breakpoint: ThemeBreakpointKeyType) => string;
  };
  typography: {
    fontFamilyBase: string;
    fontSizeBody: string | number;
    fontSizeBase: string | number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: themeTypographyObject;
    h2: themeTypographyObject;
    h3: themeTypographyObject;
    h4: themeTypographyObject;
    h5: themeTypographyObject;
    h6: themeTypographyObject;
    subtitle: themeTypographyObject;
    body: themeTypographyObject;
    caption: themeTypographyObject;
    button: themeTypographyObject;
  };
  shapes: {
    borderRadius: number;
  };
  transitions: {
    easing: {
      [k: string]: string;
    };
    duration: {
      [k: string]: number;
    };
    _create: (property: string, easing?: ThemeEasingType, duration?: ThemeDurationType, delay?: number) => string;
  };
  shadows: {
    [k: number]: string;
  };
  zAxis: {
    drawer: number;
    modal: number;
    tooltip: number;
    toasts: number;
  };
  // mixins: Record<string, unknown>; // TODO
}

export type PartialIogartTheme = Partial<IogartTheme>;

export interface withIogartThemeProps {
  theme?: IogartTheme;
}

export interface IogartThemeProviderProps extends withChildren {
  theme?: PartialIogartTheme;
}
