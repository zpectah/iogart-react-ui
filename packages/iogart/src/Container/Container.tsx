import React, { createElement } from 'react';

import { ContainerProps } from './types';
import useContainer from './useContainer';

const Container = (props: ContainerProps) => {
  const { children, elementType = 'div', ...rest } = props;

  const updatedProps = useContainer({ ...rest });

  return createElement(elementType, updatedProps, children);
};

export default Container;
