import { createUseStyles } from 'react-jss';
import { HEADER_HEIGHT } from '../../const';

export const usePreviewStyles = createUseStyles({
  root: {},
  notFound: {
    width: '100%',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const usePreviewDetailStyles = createUseStyles({
  root: {
    width: '100%',
    minHeight: `calc(100% - ${HEADER_HEIGHT})`,
    margin: 0,
    border: 0,
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    width: '100%',
  },
});
