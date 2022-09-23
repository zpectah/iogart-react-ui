import React, { createElement } from 'react';

import { ButtonProps } from './types';
import ButtonBase from './ButtonBase';
import useButton from './useButton';

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  const updatedProps = useButton({ ...rest });

  return createElement(ButtonBase, updatedProps, children);
};

export default Button;
