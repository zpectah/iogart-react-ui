import { useContext } from 'react';
import { IogartThemeContext, IogartTheme } from '@iogart-react-ui/styles';

const useIogartTheme = () => {
  const { theme } = useContext(IogartThemeContext);

  return theme as IogartTheme;
};

export default useIogartTheme;
