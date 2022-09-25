import { createUseStyles } from 'react-jss';
import { buttonBaseMixin, buttonResetMixin } from '@iogart-react-ui/styles';
import { palette } from '@iogart-react-ui/styles';
import { withIogartThemeProps, IogartTheme } from '@iogart-react-ui/styles';

interface useButtonBaseStylesProps extends withIogartThemeProps {}

interface useButtonStylesProps extends withIogartThemeProps {}

const getColorPreferences = (theme: IogartTheme, color?: string) => {
  let base = {
    color: theme.palette.common.light,
    backgroundColor: theme.palette.common.blueGrey,
    borderColor: 'transparent',
  };


  return base;
};

export const useButtonBaseStyles = createUseStyles<'root', useButtonBaseStylesProps>({
  root: {
    ...buttonResetMixin,
    ...buttonBaseMixin,
  },
});

export const useButtonStyles = createUseStyles<any, useButtonStylesProps>({
  root: {
    padding: '.75rem 1rem',
    justifyContent: 'space-between',
    gap: '.5rem',
    border: 0,
    fontFamily: ({ theme }) => theme.typography.button.fontFamily,
    fontSize: ({ theme }) => theme.typography.button.fontSize,
    fontWeight: ({ theme }) => theme.typography.button.fontWeight,

    color: palette.light,
    backgroundColor: palette.blueGrey,
    borderRadius: ({ theme }) => theme.shapes.borderRadius,
    // TODO
  },

  /*
  primary: {},
  secondary: {},
  success: {},
  error: {},
  warning: {},
  info: {},
  */

  contained: {},
  outlined: {},
  link: {},

  small: {
    fontSize: '.75rem',
  },
  large: {},

});
