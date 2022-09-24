import React from 'react';

import { Container, ContainerProps } from '@iogart-react-ui/iogart';
import config from '../../config';
import useHeaderStyles from './style';

export interface HeaderProps {
  maxWidth?: ContainerProps['maxWidth'];
}

const Header = (props: HeaderProps) => {
  const { maxWidth } = props;

  const classes = useHeaderStyles();

  return (
    <header className={classes.root}>
      <Container maxWidth={maxWidth}>
        <h1 className={classes.title}>{config.globals.meta.title}</h1>
      </Container>
    </header>
  );
};

export default Header;
