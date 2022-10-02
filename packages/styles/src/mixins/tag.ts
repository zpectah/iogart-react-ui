import { CSSProperties } from 'react';
import { Styles } from 'jss';
import { ButtonSize, TagColor, TagVariant } from '@iogart-react-ui/iogart';
import { IogartTheme } from '@iogart-react-ui/types';

export const getTagColorVariantProps = (theme: IogartTheme, color: TagColor, variant: TagVariant, clickable: boolean) => {
  let containedProps: Styles, outlinedProps: Styles;
  switch (variant) {
    case 'contained':
      containedProps = {
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
        textShadow: `0 0 .25rem ${theme.palette._alpha(theme.palette[color].dark, 0.25)}`,
        borderColor: theme.palette[color].main,
        cursor: clickable ? 'pointer' : 'default',
      };
      if (clickable) {
        containedProps['&:hover'] = {
          backgroundColor: theme.palette._darken(theme.palette[color].main, 0.1),
        };
        containedProps['&:focus'] = {
          outline: `1px solid ${theme.palette[color].dark}`,
        };
      }

      return containedProps;

    case 'outlined':
    default:
      outlinedProps = {
        color: theme.palette[color].main,
        backgroundColor: 'transparent',
        borderColor: theme.palette[color].main,
        cursor: clickable ? 'pointer' : 'default',
      };
      if (clickable) {
        outlinedProps['&:hover'] = {
          backgroundColor: theme.palette._alpha(theme.palette[color].light, 0.05),
        };
        outlinedProps['&:focus'] = {
          outline: `1px solid ${theme.palette[color].dark}`,
        };
      }

      return outlinedProps;
  }
};

export const getTagSizeProps = (theme: IogartTheme, size: ButtonSize, pill: boolean) => {
  switch (size) {
    case 'large':
      return {
        padding: `${theme._spacing(1)} ${pill ? theme._spacing(1.5) : theme._spacing(1)}`,
        fontSize: '1rem',
        gap: theme._spacing(1),
      } as CSSProperties;

    case 'small':
      return {
        padding: `${theme._spacing(0.5)} ${pill ? theme._spacing(1) : theme._spacing(0.5)}`,
        fontSize: '.75rem',
        gap: theme._spacing(0.5),
      } as CSSProperties;

    case 'medium':
    default:
      return {
        padding: `${theme._spacing(0.75)} ${pill ? theme._spacing(1.25) : theme._spacing(0.75)}`,
        fontSize: '.9rem',
        gap: theme._spacing(0.75),
      } as CSSProperties;
  }
};

export const tagResetMixin = {
  width: 'auto',
  height: 'auto',
  margin: 0,
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
};
