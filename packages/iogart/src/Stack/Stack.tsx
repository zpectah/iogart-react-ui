import React, { createElement } from 'react';

import { StackProps } from './types';
import useStack from './useStack';

const Stack = (props: StackProps) => {
  const { children, elementType = 'div', ...rest } = props;

  const updatedProps = useStack({ ...rest });

  return createElement(elementType, updatedProps, children);
};

export default Stack;
