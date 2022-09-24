import { createElement } from 'react';

import { ButtonBaseProps } from './types';
import useButtonBase from './useButtonBase';

const ButtonBase = (props: ButtonBaseProps) => {
  const { elementType = 'button', children, as, ...rest } = props;

  const Element = as ? as : elementType;
  const updatedProps = useButtonBase({ ...rest });

  return createElement(Element, updatedProps, children);
};

export default ButtonBase;
