import { CSSProperties } from 'react';
import { ButtonColor, ButtonSize, ButtonVariant } from '@iogart-react-ui/iogart';
import { IogartTheme } from '@iogart-react-ui/types';

export const getButtonColorVariantProps = (theme: IogartTheme, color: ButtonColor, variant: ButtonVariant) => {
  switch (variant) {
    case 'contained':
      return {
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
        textShadow: `0 0 .25rem ${theme.palette._alpha(theme.palette[color].dark, 0.25)}`,

        [`&:not(:disabled)`]: {
          borderColor: theme.palette[color].main,
        },
        [`&:hover`]: {
          [`&:not(:disabled)`]: {
            backgroundColor: theme.palette._darken(theme.palette[color].main, 0.1),
          },
        },
        [`&:focus`]: {
          [`&:not(:disabled)`]: {
            outline: `1px solid ${theme.palette[color].dark}`,
          },
        },
        // [`&:disabled, &.${CLASSNAMES.disabled}`]: {},
      } as CSSProperties;

    case 'outlined':
      return {
        color: theme.palette[color].main,
        backgroundColor: 'transparent',

        [`&:not(:disabled)`]: {
          borderColor: theme.palette[color].main,
        },
        [`&:hover`]: {
          [`&:not(:disabled)`]: {
            backgroundColor: theme.palette._alpha(theme.palette[color].light, 0.05),
          },
        },
        [`&:focus`]: {
          [`&:not(:disabled)`]: {
            outline: `1px solid ${theme.palette[color].dark}`,
          },
        },
        // [`&:disabled, &.${CLASSNAMES.disabled}`]: {},
      } as CSSProperties;

    case 'text':
    default:
      return {
        color: theme.palette[color].main,
        backgroundColor: 'transparent',

        [`&:not(:disabled)`]: {
          borderColor: 'inherit',
        },
        [`&:hover`]: {
          [`&:not(:disabled)`]: {
            color: theme.palette[color].dark,
          },
        },
        [`&:focus`]: {
          [`&:not(:disabled)`]: {
            outline: `1px solid ${theme.palette._alpha(theme.palette[color].main, 0.35)}`,
          },
        },
        // [`&:disabled, &.${CLASSNAMES.disabled}`]: {},
      } as CSSProperties;
  }
};

export const getButtonSizeProps = (theme: IogartTheme, size: ButtonSize, pill: boolean) => {
  switch (size) {
    case 'large':
      return {
        padding: `${theme._spacing(1.15)} ${pill ? theme._spacing(1.75) : theme._spacing(1.5)}`,
        fontSize: '1.15rem',
      } as CSSProperties;

    case 'small':
      return {
        padding: `${theme._spacing(0.75)} ${pill ? theme._spacing(1.25) : theme._spacing(1)}`,
        fontSize: '.825rem',
      } as CSSProperties;

    case 'medium':
    default:
      return {
        padding: `${theme._spacing(1)} ${pill ? theme._spacing(1.5) : theme._spacing(1.25)}`,
      } as CSSProperties;
  }
};

export const buttonResetMixin = {
  width: 'auto',
  height: 'auto',
  margin: 0,
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const buttonBaseMixin = {
  cursor: 'pointer',
};
