import { createUseStyles } from 'react-jss';

import { HEADER_HEIGHT } from '../../const';
import { palette } from '../../styles';

const useHeaderStyles = createUseStyles({
  root: {
    width: '100%',
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
    color: palette.light,
    backgroundColor: palette.dark,
  },
  title: {
    margin: 0,
    padding: 0,
    fontSize: '1.35rem',
    fontWeight: 900,
    textTransform: 'uppercase',
  },
});

export default useHeaderStyles;
