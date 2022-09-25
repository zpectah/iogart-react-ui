import { createUseStyles } from 'react-jss';

import { palette } from '../../../styles';

export const useButtonStyles = createUseStyles({
  root: {
    width: 'auto',
    height: 'auto',
    margin: 0,
    padding: '.5rem',
    display: 'inline-flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    gap: '.5rem',
    fontSize: '1rem',
    color: palette.primary,
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    borderRadius: '.25rem',

    '&:focus, &:hover': {
      borderColor: palette.primary,
    },
  },
  primary: {
    color: palette.light,
    backgroundColor: palette.primary,
  },
  secondary: {},
  spaced: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
});
