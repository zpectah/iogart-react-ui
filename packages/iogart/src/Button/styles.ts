import { createUseStyles } from 'react-jss';
import {
  buttonBaseMixin,
  buttonResetMixin,
  getButtonSizeProps,
  getButtonColorVariantProps,
  CLASSNAMES,
  getDisabledPseudoElement,
  getPillBorderRadius,
} from '@iogart-react-ui/styles';
import { withIogartThemeProps } from '@iogart-react-ui/types';
import { ButtonVariant, ButtonSize, ButtonColor } from './types';

type useButtonBaseStylesProps = withIogartThemeProps;

type useButtonStylesProps = withIogartThemeProps & {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  loading: boolean;
  pill: boolean;
};

type useButtonStylesClassNames = 'root' | 'loading' | ButtonColor;

export const useButtonBaseStyles = createUseStyles<'root', useButtonBaseStylesProps>({
  root: {
    ...buttonResetMixin,
    ...buttonBaseMixin,
  },
});

export const useButtonStyles = createUseStyles<useButtonStylesClassNames, useButtonStylesProps>({
  root: ({ theme, size, disabled, loading, pill }) => ({
    gap: theme.spacer,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: getPillBorderRadius(pill, theme.shapes.borderRadius),
    borderColor: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    position: loading ? 'relative' : 'inherit',
    transition: [theme.transitions._create('background-color', 'sharp')],
    ...theme.typography.button,
    ...getButtonSizeProps(theme, size, pill),

    [`&:disabled, &.${CLASSNAMES.disabled}`]: {
      ...getDisabledPseudoElement(theme, pill ? '3rem' : theme.shapes.borderRadius),
    },
  }),
  primary: ({ theme, variant }) => getButtonColorVariantProps(theme, 'primary', variant),
  secondary: ({ theme, variant }) => getButtonColorVariantProps(theme, 'secondary', variant),
  success: ({ theme, variant }) => getButtonColorVariantProps(theme, 'success', variant),
  error: ({ theme, variant }) => getButtonColorVariantProps(theme, 'error', variant),
  warning: ({ theme, variant }) => getButtonColorVariantProps(theme, 'warning', variant),
  info: ({ theme, variant }) => getButtonColorVariantProps(theme, 'info', variant),
  loading: ({ theme, pill }) => ({
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
    boxShadow: `0 0 2px 2px ${theme.palette.action.loading}`,
    borderRadius: pill ? '3rem' : theme.shapes.borderRadius,
  }),
});
