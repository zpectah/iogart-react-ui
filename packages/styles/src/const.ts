export const PALETTE = {
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
  dark: 'rgb(25,25,25)',
  veryPeri: 'rgb(104,104,172)', // Pantone 2022
  anthracite: 'rgb(41,40,45)', // Pantone 2022
  volcanicGlass: 'rgb(98,93,96)', // Pantone 2022
  deepTaupe: 'rgb(125,100,97)', // Pantone 2022
  plazaTaupe: 'rgb(173,163,146)', // Pantone 2022
  whiteSand: 'rgb(219,211,208)', // Pantone 2022
  petrifiedOak: 'rgb(143,121,96)', // Pantone 2022
  cloudDancer: 'rgb(241,237,234)', // Pantone 2022
};

export const THEME_SPACER = '.75rem';

export const THEME_FONT_FAMILY = `'Inter', sans-serif`;

export const THEME_BREAKPOINT_KEYS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const THEME_BREAKPOINTS = {
  xs: {
    min: 0,
    max: 575,
  },
  sm: {
    min: 576,
    max: 767,
  },
  md: {
    min: 768,
    max: 991,
  },
  lg: {
    min: 992,
    max: 1199,
  },
  xl: {
    min: 1200,
    max: 1399,
  },
  xxl: {
    min: 1400,
    max: null,
  },
};

export const THEME_BREAKPOINT_CONTAINER = {
  xs: null,
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
  xxl: 1320,
};

export const CLASSNAME_PREFIX = 'iogart-';

export const CLASSNAMES = {
  base: `${CLASSNAME_PREFIX}base`,
  ui: `${CLASSNAME_PREFIX}ui`,
  active: `${CLASSNAME_PREFIX}-active`,
  hover: `${CLASSNAME_PREFIX}-hover`,
  focus: `${CLASSNAME_PREFIX}-focus`,
  disabled: `${CLASSNAME_PREFIX}-disabled`,
  hidden: `${CLASSNAME_PREFIX}-hidden`,
  collapsed: `${CLASSNAME_PREFIX}-collapsed`,
  expanded: `${CLASSNAME_PREFIX}-expanded`,
  open: `${CLASSNAME_PREFIX}-open`,
  loading: `${CLASSNAME_PREFIX}-loading`,
};
