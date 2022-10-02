import { createContext, createElement } from 'react';
import { mergeDeep } from '@iogart-react-ui/utils';
import { IogartThemeProviderProps, IogartTheme } from '@iogart-react-ui/types';
import { THEME_DEFAULT } from './theme';

export const IogartThemeContext = createContext({ theme: THEME_DEFAULT });

const IogartThemeProvider = (props: IogartThemeProviderProps) => {
  const { children, theme } = props;

  const assignedTheme = theme ? mergeDeep(THEME_DEFAULT, theme) : THEME_DEFAULT;

  return createElement(
    IogartThemeContext.Provider,
    {
      value: { theme: assignedTheme as IogartTheme },
    },
    children
  );
};

export default IogartThemeProvider;
