import { createElement, InputHTMLAttributes } from 'react';

import { useInputStyles } from './style';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const { ...rest } = props;

  const classes = useInputStyles();

  return createElement('input', {
    type: 'search',
    className: classes.root,
    ...rest,
  });
};

export default Input;
