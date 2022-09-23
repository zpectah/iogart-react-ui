import { createUseStyles } from 'react-jss';

import { breakpoints, container } from '@iogart-react-ui/styles';

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
    [`@media (min-width: ${breakpoints.xs.min}px)`]: {
      maxWidth: '100%',
    },
  },
  sm: {
    [`@media (min-width: ${breakpoints.sm.min}px)`]: {
      maxWidth: container.sm,
    },
  },
  md: {
    [`@media (min-width: ${breakpoints.md.min}px)`]: {
      maxWidth: container.md,
    },
  },
  lg: {
    [`@media (min-width: ${breakpoints.lg.min}px)`]: {
      maxWidth: container.lg,
    },
  },
  xl: {
    [`@media (min-width: ${breakpoints.xl.min}px)`]: {
      maxWidth: container.xl,
    },
  },
  xxl: {
    [`@media (min-width: ${breakpoints.xxl.min}px)`]: {
      maxWidth: container.xxl,
    },
  },
});

export default useContainerStyles;
