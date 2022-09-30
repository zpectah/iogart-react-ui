import { createUseStyles } from 'react-jss';
import {
  buttonBaseMixin,
  buttonResetMixin,
  getButtonSizeProps,
  getColorVariantProps,
  CLASSNAMES,
  getDisabledPseudoElement,
} from '@iogart-react-ui/styles';
import { withIogartThemeProps } from '@iogart-react-ui/types';
import { ButtonVariant, ButtonSize, ButtonColor } from './types';

interface useButtonBaseStylesProps extends withIogartThemeProps {}

interface useButtonStylesProps extends withIogartThemeProps {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  loading: boolean;
  pill: boolean;
}

type useButtonStylesClassNames = 'root' | 'loading' | ButtonColor;

export const useButtonBaseStyles = createUseStyles<'root', useButtonBaseStylesProps>({
  root: {
    ...buttonResetMixin,
    ...buttonBaseMixin,
  },
});

export const useButtonStyles = createUseStyles<useButtonStylesClassNames, useButtonStylesProps>({
  root: ({ theme, size, disabled, loading, pill }) => ({
    justifyContent: 'space-between',
    gap: theme.spacer,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: pill ? '3rem' : theme.shapes.borderRadius,
    borderColor: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    position: loading ? 'relative' : 'inherit',
    transition: [theme.transitions._create('background-color', 'sharp')],
    ...theme.typography.button,
    ...getButtonSizeProps(theme, size),

    [`&:disabled, &.${CLASSNAMES.disabled}`]: {
      ...getDisabledPseudoElement(theme),
    },
  }),
  primary: ({ theme, variant }) => getColorVariantProps(theme, 'primary', variant),
  secondary: ({ theme, variant }) => getColorVariantProps(theme, 'secondary', variant),
  success: ({ theme, variant }) => getColorVariantProps(theme, 'success', variant),
  error: ({ theme, variant }) => getColorVariantProps(theme, 'error', variant),
  warning: ({ theme, variant }) => getColorVariantProps(theme, 'warning', variant),
  info: ({ theme, variant }) => getColorVariantProps(theme, 'info', variant),
  loading: ({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    color: 'inherit',
    backgroundColor: theme.palette.action.loading,
  }),
});
