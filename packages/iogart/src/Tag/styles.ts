import { createUseStyles } from 'react-jss';
import { withIogartThemeProps } from '@iogart-react-ui/types';
import { tagResetMixin, getTagColorVariantProps, getTagSizeProps, getPillBorderRadius } from '@iogart-react-ui/styles';
import { TagColor, TagVariant, TagSize } from './types';

interface useTagStylesProps extends withIogartThemeProps {
  variant: TagVariant;
  size: TagSize;
  pill: boolean;
  clickable: boolean;
}

type useTagStylesClassNames = 'root' | 'closeIcon' | TagColor;

export const useTagStyles = createUseStyles<useTagStylesClassNames, useTagStylesProps>({
  root: ({ theme, size, pill }) => ({
    ...tagResetMixin,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: getPillBorderRadius(pill, theme.shapes.borderRadius),
    borderColor: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    lineHeight: 1,
    ...getTagSizeProps(theme, size, pill),
  }),
  closeIcon: ({ theme }) => ({
    position: 'relative',
    marginTop: `calc(${theme._spacing(0.25)} * -1)`,
    marginBottom: `calc(${theme._spacing(0.25)} * -1)`,
    cursor: 'pointer',
  }),
  primary: ({ theme, variant, clickable }) => getTagColorVariantProps(theme, 'primary', variant, clickable),
  secondary: ({ theme, variant, clickable }) => getTagColorVariantProps(theme, 'secondary', variant, clickable),
  success: ({ theme, variant, clickable }) => getTagColorVariantProps(theme, 'success', variant, clickable),
  error: ({ theme, variant, clickable }) => getTagColorVariantProps(theme, 'error', variant, clickable),
  warning: ({ theme, variant, clickable }) => getTagColorVariantProps(theme, 'warning', variant, clickable),
  info: ({ theme, variant, clickable }) => getTagColorVariantProps(theme, 'info', variant, clickable),
});
