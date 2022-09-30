import { ButtonSize } from '@iogart-react-ui/iogart';
import { IogartTheme } from '../IogartTheme';

const getButtonSizeProps = (theme: IogartTheme, size: ButtonSize) => {
  switch (size) {
    case 'large':
      return {
        padding: `${theme._spacing(1.15)} ${theme._spacing(1.5)}`,
        fontSize: '1.15rem',

        '& svg': {
          width: `1.15rem`,
          height: `1.15rem`,
        },
      };

    case 'small':
      return {
        padding: `${theme._spacing(0.75)} ${theme._spacing(1)}`,
        fontSize: '.825rem',

        '& svg': {
          width: `.825rem`,
          height: `.825rem`,
        },
      };

    case 'medium':
    default:
      return {
        padding: `${theme._spacing(1)} ${theme._spacing(1.25)}`,

        '& svg': {
          width: `calc(${theme.typography.fontSizeBase} * 1.25)`,
          height: `calc(${theme.typography.fontSizeBase} * 1.25)`,
        },
      };
  }
};

export default getButtonSizeProps;
