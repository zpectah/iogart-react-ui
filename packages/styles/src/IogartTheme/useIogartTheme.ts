import { useContext } from 'react';
import { IogartThemeContext } from '@iogart-react-ui/styles';
import { IogartTheme } from '@iogart-react-ui/types';

const useIogartTheme = () => {
  const { theme } = useContext(IogartThemeContext);

  return theme as IogartTheme;
};

export default useIogartTheme;
