import { ButtonColor, ButtonVariant } from '@iogart-react-ui/iogart';
import { IogartTheme } from '../IogartTheme';
import { CLASSNAMES } from '../const';

const getColorVariantProps = (theme: IogartTheme, color: ButtonColor, variant: ButtonVariant ) => {
  switch (variant) {

    case 'contained':
      return {
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
        borderColor: theme.palette[color].main,

        [`&.${CLASSNAMES.hover}`]: {
          [`&:not(.${CLASSNAMES.disabled})`]: {
            backgroundColor: theme.palette._darken(theme.palette[color].main, .1),
          },
        },
        [`&.${CLASSNAMES.focus}`]: {
          [`&:not(.${CLASSNAMES.disabled})`]: {
            outline: `1px solid ${theme.palette[color].dark}`,
          },
        },
        // [`&.${CLASSNAMES.disabled}`]: {},
        // [`&.${CLASSNAMES.loading}`]: {},
      };

    case 'outlined':
      return {
        color: theme.palette[color].main,
        backgroundColor: 'transparent',
        borderColor: theme.palette[color].main,

        [`&.${CLASSNAMES.hover}`]: {
          [`&:not(.${CLASSNAMES.disabled})`]: {
            backgroundColor: theme.palette._alpha(theme.palette[color].light, .05),
          },
        },
        [`&.${CLASSNAMES.focus}`]: {
          [`&:not(.${CLASSNAMES.disabled})`]: {
            outline: `1px solid ${theme.palette[color].dark}`,
          },
        },
        // [`&.${CLASSNAMES.disabled}`]: {},
        // [`&.${CLASSNAMES.loading}`]: {},
      };

    case 'text':
    default:
      return {
        color: theme.palette[color].main,
        backgroundColor: 'transparent',
        borderColor: 'transparent',

        [`&.${CLASSNAMES.hover}`]: {
          [`&:not(.${CLASSNAMES.disabled})`]: {
            color: theme.palette[color].dark,
          },
        },
        [`&.${CLASSNAMES.focus}`]: {
          [`&:not(.${CLASSNAMES.disabled})`]: {
            outline: `1px solid ${theme.palette._alpha(theme.palette[color].main, .35)}`,
          },
        },
        // [`&.${CLASSNAMES.disabled}`]: {},
        // [`&.${CLASSNAMES.loading}`]: {},
      };

  }
};

export default getColorVariantProps;
