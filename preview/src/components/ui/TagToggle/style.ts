import { createUseStyles } from 'react-jss';

import { palette } from '../../../styles';

export const useTagToggleStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',
  },
  tag: {
    width: 'auto',
    height: '1.75rem',
    margin: 0,
    padding: '0 .5rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: palette.secondary,
    background: 'transparent',
    border: `1px solid ${palette.secondary}`,
    borderRadius: '.25rem',
    fontSize: '.8rem',
    fontWeight: 400,
    textTransform: 'uppercase',

    '&.is--selected': {
      color: palette.light,
      background: palette.secondary,
    },
  },
});
