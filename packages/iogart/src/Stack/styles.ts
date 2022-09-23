import { createUseStyles } from 'react-jss';

const useStackStyles = createUseStyles({
  root: {
    display: 'flex',
    gap: (props: any) =>
      props.spacing ? `calc(${props.spacing} * .75rem)` : 0,
    flexDirection: (props: any) => (props.direction ? props.direction : 'row'),
    alignItems: (props: any) =>
      props.alignItems ? props.alignItems : 'initial',
    alignContent: (props: any) =>
      props.alignContent ? props.alignContent : 'initial',
    alignSelf: (props: any) => (props.alignSelf ? props.alignSelf : 'initial'),
    justifyContent: (props: any) =>
      props.justifyContent ? props.justifyContent : 'initial',
    justifyItems: (props: any) =>
      props.justifyItems ? props.justifyItems : 'initial',
    justifySelf: (props: any) =>
      props.justifySelf ? props.justifySelf : 'initial',
  },
});

export default useStackStyles;
