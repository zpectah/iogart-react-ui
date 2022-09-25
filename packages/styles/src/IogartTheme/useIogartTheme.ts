import { useContext } from 'react';

import { IogartTheme } from '@iogart-react-ui/types';
import { IogartThemeContext } from '@iogart-react-ui/styles';

const useIogartTheme = () => {
  const { theme } = useContext(IogartThemeContext);

  return theme as IogartTheme;
};

export default useIogartTheme;
