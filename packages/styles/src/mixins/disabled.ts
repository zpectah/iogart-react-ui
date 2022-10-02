import { CSSProperties } from 'react';
import { IogartTheme } from '@iogart-react-ui/types';

export const getDisabledPseudoElement = (theme: IogartTheme, radius: number | string = 0) => {
  return {
    position: 'relative',

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
      boxShadow: `0 0 2px 2px ${theme.palette.action.disabled}`,
      borderRadius: radius,
    } as CSSProperties,
  };
};
