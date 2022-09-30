import { CSSProperties } from 'react';
import { IogartTheme } from '@iogart-react-ui/types';

const getDisabledPseudoElement = (theme: IogartTheme) => {
  return {
    position: 'relative',
    overflow: 'hidden',

    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      color: 'inherit',
      backgroundColor: theme.palette.action.disabled,
    } as CSSProperties,
  };
};

export default getDisabledPseudoElement;
