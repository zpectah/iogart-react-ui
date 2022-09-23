import { createUseStyles } from 'react-jss';
import { buttonBaseMixin, buttonResetMixin } from '@iogart-react-ui/styles';
import { palette } from '@iogart-react-ui/styles';

export const useButtonBaseStyles = createUseStyles({
  root: {
    ...buttonResetMixin,
    ...buttonBaseMixin,
  },
});

export const useButtonStyles = createUseStyles({
  root: {
    padding: '.75rem 1rem',
    justifyContent: 'space-between',
    gap: '.5rem',
    border: 0,
    fontSize: '1rem',
    color: palette.light,
    backgroundColor: palette.blueGrey,
    borderRadius: '.25rem',
  },

  primary: {},
  secondary: {},
  success: {},
  error: {},
  warning: {},
  info: {},

  contained: {},
  outlined: {},
  link: {},

  small: {
    fontSize: '.75rem',
  },
  large: {},
});
