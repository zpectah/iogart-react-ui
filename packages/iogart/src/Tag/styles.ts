import { createUseStyles } from 'react-jss';
import { withIogartThemeProps } from '@iogart-react-ui/types';

type useTagStylesProps = withIogartThemeProps;

const useTagStyles = createUseStyles<'root', useTagStylesProps>({
  root: {},
});

export default useTagStyles;
