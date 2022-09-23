import { createUseStyles } from 'react-jss';

export const usePreviewStyles = createUseStyles({
  root: {},
});

export const usePreviewDetailStyles = createUseStyles({
  root: {
    width: '100%',
    height: '100%',
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
