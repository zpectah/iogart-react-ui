import React, { createContext, createElement } from 'react';
import { deepMerge } from '@iogart-react-ui/utils';
import { IogartThemeProviderProps, IogartTheme } from './types';
import { THEME_DEFAULT } from './theme';

export const IogartThemeContext = createContext({ theme: THEME_DEFAULT });

const IogartThemeProvider = (props: IogartThemeProviderProps) => {
  const {
    children,
    theme,
  } = props;

  const assignedTheme = theme ? deepMerge(THEME_DEFAULT, theme) : THEME_DEFAULT;

  // console.log('assignedTheme', assignedTheme);

  return createElement(
    IogartThemeContext.Provider,
    {
      value: { theme: assignedTheme as IogartTheme },
    },
    children,
  );
};

export default IogartThemeProvider;
