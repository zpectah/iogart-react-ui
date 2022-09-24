import { createUseStyles } from 'react-jss';

import { HEADER_HEIGHT } from '../../const';

export const useLayoutStyles = createUseStyles({
  root: {
    paddingTop: HEADER_HEIGHT,
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export const useLayoutHeadingStyles = createUseStyles({
  root: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  primary: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    flexDirection: 'row',

    '& a': {
      textDecoration: 'none',
    },
    '& h4': { margin: 0, padding: 0, display: 'inline-flex' },
  },
  secondary: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
