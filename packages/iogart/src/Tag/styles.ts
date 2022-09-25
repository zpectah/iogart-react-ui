import { createUseStyles } from 'react-jss';
import { withIogartThemeProps } from '@iogart-react-ui/styles';

interface useTagStylesProps extends withIogartThemeProps {}

const useTagStyles = createUseStyles<'root', useTagStylesProps>({
  root: {},
});

export default useTagStyles;
