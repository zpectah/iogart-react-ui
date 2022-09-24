import { createUseStyles } from 'react-jss';

import { palette } from '../../styles';

export const useDashboardStyles = createUseStyles({
  root: {
    width: '100%',
    margin: 0,
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '.5rem',
  },
});

export const useDashboardTileStyles = createUseStyles({
  root: {
    width: '25%',
    minHeight: '50px',
    margin: 0,
    padding: '2rem',
    textDecoration: 'none',
    display: 'flex',
    flex: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '.5rem',
    color: palette.secondary,
    backgroundColor: palette.light,
    border: `1px solid ${palette.secondary}`,
    borderRadius: '.25rem',
    position: 'relative',
    overflow: 'hidden',
    transition:
      'color .25s cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color .25s cubic-bezier(0.4, 0, 0.2, 1) 0s',
    cursor: 'pointer',

    '& h3, & small, & p': {
      margin: 0,
      padding: 0,
    },
    '& p': {
      marginTop: '.5rem',
      fontSize: '.9rem',
    },

    '&:hover': {
      color: palette.light,
      backgroundColor: palette.secondary,
    },
  },
  primary: {},
});
