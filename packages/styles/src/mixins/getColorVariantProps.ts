import { ButtonColor, ButtonVariant } from '@iogart-react-ui/iogart';
import { IogartTheme } from '../IogartTheme';

const getColorVariantProps = (theme: IogartTheme, color: ButtonColor, variant: ButtonVariant) => {
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
      };

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
      };

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
      };
  }
};

export default getColorVariantProps;
