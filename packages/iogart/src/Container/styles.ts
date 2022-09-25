import { createUseStyles } from 'react-jss';

import { THEME_BREAKPOINT_CONTAINER, THEME_BREAKPOINTS } from '@iogart-react-ui/styles';

const useContainerStyles = createUseStyles({
  root: {
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
  fluid: {
    maxWidth: '100%',
  },
  xs: {
    [`@media (min-width: ${THEME_BREAKPOINTS.xs.min}px)`]: {
      maxWidth: '100%',
    },
  },
  sm: {
    [`@media (min-width: ${THEME_BREAKPOINTS.sm.min}px)`]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.sm,
    },
  },
  md: {
    [`@media (min-width: ${THEME_BREAKPOINTS.md.min}px)`]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.md,
    },
  },
  lg: {
    [`@media (min-width: ${THEME_BREAKPOINTS.lg.min}px)`]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.lg,
    },
  },
  xl: {
    [`@media (min-width: ${THEME_BREAKPOINTS.xl.min}px)`]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.xl,
    },
  },
  xxl: {
    [`@media (min-width: ${THEME_BREAKPOINTS.xxl.min}px)`]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.xxl,
    },
  },
});

export default useContainerStyles;
