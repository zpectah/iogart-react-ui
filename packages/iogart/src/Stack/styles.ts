import { createUseStyles } from 'react-jss';

const useStackStyles = createUseStyles({
  root: {
    display: 'flex',
    gap: (props) => (props.spacing ? `calc(${props.spacing} * .75rem)` : 0),
    flexDirection: (props) => (props.direction ? props.direction : 'row'),
    alignItems: (props) => (props.alignItems ? props.alignItems : 'initial'),
    alignContent: (props) => (props.alignContent ? props.alignContent : 'initial'),
    alignSelf: (props) => (props.alignSelf ? props.alignSelf : 'initial'),
    justifyContent: (props) => (props.justifyContent ? props.justifyContent : 'initial'),
    justifyItems: (props) => (props.justifyItems ? props.justifyItems : 'initial'),
    justifySelf: (props) => (props.justifySelf ? props.justifySelf : 'initial'),
  },
});

export default useStackStyles;
