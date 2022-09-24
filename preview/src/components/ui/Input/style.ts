import { createUseStyles } from 'react-jss';

// import { palette } from '../../styles';

export const useInputStyles = createUseStyles({
  root: {
    width: 'auto',
    height: 'auto',
    minHeight: '2.25rem',
    margin: 0,
    padding: '0 .5rem',
    display: 'inline-block',
    fontSize: '1rem',
    lineHeight: 1,
    border: '1px solid rgba(25,25,25,.25)',
    borderRadius: '.25rem',

    '&:hover': {
      borderColor: 'rgba(25,25,25,.5)',
    },
    '&:focus, &:active': {
      borderColor: 'rgba(25,25,25,.75)',
      outline: 'none',
    },
    '&:active': {},

  },
});
