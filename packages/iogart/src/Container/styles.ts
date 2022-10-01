import { createUseStyles } from 'react-jss';
import { breakpointKeys, withIogartThemeProps } from '@iogart-react-ui/types';
import { THEME_BREAKPOINT_CONTAINER } from '@iogart-react-ui/styles';

type useContainerStylesProps = withIogartThemeProps;

type useContainerStylesClassNames = 'root' | 'fluid' | keyof typeof breakpointKeys;

const useContainerStyles = createUseStyles<useContainerStylesClassNames, useContainerStylesProps>({
  root: ({ theme }) => ({
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theme._spacing(1),
    paddingRight: theme._spacing(1),

    [theme.breakpoints._up('md')]: {
      paddingLeft: theme._spacing(2),
      paddingRight: theme._spacing(2),
    },
  }),
  fluid: {
    maxWidth: '100%',
  },
  xs: ({ theme }) => ({
    [theme.breakpoints._up('xs')]: {
      maxWidth: '100%',
    },
  }),
  sm: ({ theme }) => ({
    [theme.breakpoints._up('sm')]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.sm,
    },
  }),
  md: ({ theme }) => ({
    [theme.breakpoints._up('md')]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.md,
    },
  }),
  lg: ({ theme }) => ({
    [theme.breakpoints._up('lg')]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.lg,
    },
  }),
  xl: ({ theme }) => ({
    [theme.breakpoints._up('xl')]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.xl,
    },
  }),
  xxl: ({ theme }) => ({
    [theme.breakpoints._up('xxl')]: {
      maxWidth: THEME_BREAKPOINT_CONTAINER.xxl,
    },
  }),
});

export default useContainerStyles;
