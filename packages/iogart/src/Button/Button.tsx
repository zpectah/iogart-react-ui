import React, { createElement } from 'react';
import { SpinnerThreeDots } from '@iogart-react-ui/icons';
import { ButtonProps } from './types';
import ButtonBase from './ButtonBase';
import useButton from './useButton';

const Button = (props: ButtonProps) => {
  const { children, startIcon, endIcon, loading, ...rest } = props;

  const spinner = <SpinnerThreeDots size={12} />;
  const { loadingNode, ...updatedProps } = useButton({ loading, spinnerNode: spinner, ...rest });

  const childrenNode = createElement('span', {}, children);

  const renderChildren = () => {
    return (
      <>
        {startIcon && startIcon}
        {childrenNode}
        {endIcon && endIcon}
        {loadingNode}
      </>
    );
  };

  return createElement(ButtonBase, { children: childrenNode, ...updatedProps }, renderChildren());
};

export default Button;
