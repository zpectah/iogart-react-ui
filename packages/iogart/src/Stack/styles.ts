import { createUseStyles } from 'react-jss';
import { withIogartThemeProps } from '@iogart-react-ui/styles';

interface useStackStylesProps extends withIogartThemeProps {
  spacing?: number;
  direction?: string;
  alignItems?: string;
  alignContent?: string;
  alignSelf?: string;
  justifyContent?: string;
  justifyItems?: string;
  justifySelf?: string;
}

const useStackStyles = createUseStyles<'root', useStackStylesProps>({
  root: {
    display: 'flex',
    // backgroundColor: ({ theme }) => theme.palette.primary.main, // Example for theme
    gap: ({ spacing, theme }) => (spacing ? theme.spacing(spacing) : 0),
    flexDirection: ({ direction }) => (direction ? direction : 'row'),
    alignItems: ({ alignItems }) => (alignItems ? alignItems : 'initial'),
    alignContent: ({ alignContent }) => (alignContent ? alignContent : 'initial'),
    alignSelf: ({ alignSelf }) => (alignSelf ? alignSelf : 'initial'),
    justifyContent: ({ justifyContent }) => (justifyContent ? justifyContent : 'initial'),
    justifyItems: ({ justifyItems }) => (justifyItems ? justifyItems : 'initial'),
    justifySelf: ({ justifySelf }) => (justifySelf ? justifySelf : 'initial'),
  },
});

export default useStackStyles;
