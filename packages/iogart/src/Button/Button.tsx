import React, { createElement } from 'react';

import { ButtonProps } from './types';
import ButtonBase from './ButtonBase';
import useButton from './useButton';

const Button = (props: ButtonProps) => {
  const { children, startIcon, endIcon, loading, ...rest } = props;

  const updatedProps = useButton({ loading, ...rest });

  const renderChildren = () => {
    return (
      <>
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
        {loading && (
          <span
            style={{
              display: 'block',
              textAlign: 'center',
              position: 'absolute',
              backgroundColor: 'rgba(250,250,250,.5)',
              zIndex: 1,
            }}
          >
            loading
          </span>
        )}
      </>
    );
  };

  return createElement(ButtonBase, { children, ...updatedProps }, renderChildren());
};

export default Button;
