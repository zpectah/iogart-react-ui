import { ReactNode, createElement, Attributes, RefAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { useButtonStyles } from './style';

export interface ButtonProps {
  children?: ReactNode;
  to?: string;
  href?: string;
  primary?: boolean;
  secondary?: boolean;
  spaced?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, to, href, primary, secondary, spaced = true } = props;

  const classes = useButtonStyles();

  const element = to ? Link : href ? 'a' : 'button';
  const buttonProps = {
    className: [
      classes.root,
      primary ? classes.primary : '',
      secondary ? classes.secondary : '',
      spaced ? classes.spaced : '',
    ].join(' '),
  };
  const linkProps = {
    to: to ? to : '/',
    href,
    ...buttonProps,
  };
  const finalProps =
    to || href ? linkProps : (buttonProps as (Attributes & LinkProps & RefAttributes<HTMLAnchorElement>) | null | undefined);

  return createElement(element, finalProps, children);
};

export default Button;
