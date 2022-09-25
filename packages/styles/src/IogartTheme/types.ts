import { DefaultTheme } from 'react-jss';
import { withChildren } from '@iogart-react-ui/types';
import { ThemeBreakpointKeys } from './enums';

export type ThemeBreakpointKeyType = keyof typeof ThemeBreakpointKeys;

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
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    divider: string;
    border: string;
    background: string;
    action: {
      active: string;
      hover: string;
      selected: string;
      disabled: string;
      focus: string;
    };
    getContrastColor: (color: string) => string;
  };
  spacer: string | number;
  spacing: (value: number) => string;
  direction: 'ltr' | 'rtl';
  breakpoints: {
    keys: string[];
    values: {
      [k: string]: themeBreakpointValueObject;
    };
    container: {
      [k: string]: number | null;
    };
    up: (breakpoint: ThemeBreakpointKeyType) => string;
    down: (breakpoint: ThemeBreakpointKeyType) => string;
    between: (min: ThemeBreakpointKeyType, max: ThemeBreakpointKeyType) => string;
    only: (breakpoint: ThemeBreakpointKeyType) => string;
    not: (breakpoint: ThemeBreakpointKeyType) => string;
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
    button: themeTypographyObject;
  };
  shapes: {
    borderRadius: number;
  };
  transitions: Record<string, unknown>; // TODO
  shadows: Record<string, unknown>; // TODO
  mixins: Record<string, unknown>; // TODO
}

export type PartialIogartTheme = Partial<IogartTheme>;

export interface withIogartThemeProps {
  theme?: IogartTheme;
}

export interface IogartThemeProviderProps extends withChildren {
  theme?: PartialIogartTheme;
}
