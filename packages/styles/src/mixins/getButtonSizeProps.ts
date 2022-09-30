import { CSSProperties } from 'react';
import { ButtonSize } from '@iogart-react-ui/iogart';
import { IogartTheme } from '@iogart-react-ui/types';

const getButtonSizeProps = (theme: IogartTheme, size: ButtonSize) => {
  switch (size) {
    case 'large':
      return {
        padding: `${theme._spacing(1.15)} ${theme._spacing(1.5)}`,
        fontSize: '1.15rem',
      } as CSSProperties;

    case 'small':
      return {
        padding: `${theme._spacing(0.75)} ${theme._spacing(1)}`,
        fontSize: '.825rem',
      } as CSSProperties;

    case 'medium':
    default:
      return {
        padding: `${theme._spacing(1)} ${theme._spacing(1.25)}`,
      } as CSSProperties;
  }
};

export default getButtonSizeProps;
