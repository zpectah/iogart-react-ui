import { createUseStyles } from 'react-jss';
import { buttonBaseMixin, buttonResetMixin, withIogartThemeProps, getButtonSizeProps, getColorVariantProps, CLASSNAMES } from '@iogart-react-ui/styles';
import { ButtonVariant, ButtonSize, ButtonColor } from './types';

interface useButtonBaseStylesProps extends withIogartThemeProps {}

interface useButtonStylesProps extends withIogartThemeProps {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  loading: boolean;
  pill: boolean;
}

type useButtonStylesClassNames = 'root' | ButtonColor;

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
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: loading ? 'relative' : 'inherit',
    ...theme.typography.button,
    ...getButtonSizeProps(theme, size),

    [`&.${CLASSNAMES.disabled}`]: {
      opacity: .75,
    },

  }),
  primary: ({ theme, variant}) => (getColorVariantProps(theme, 'primary', variant)),
  secondary: ({ theme, variant }) => (getColorVariantProps(theme, 'secondary', variant)),
  success: ({ theme, variant}) => (getColorVariantProps(theme, 'success', variant)),
  error: ({ theme, variant}) => (getColorVariantProps(theme, 'error', variant)),
  warning: ({ theme, variant }) => (getColorVariantProps(theme, 'warning', variant)),
  info: ({ theme, variant }) => (getColorVariantProps(theme, 'info', variant)),
});
