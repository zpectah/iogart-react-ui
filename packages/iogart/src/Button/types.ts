import { AriaRole, ReactNode, FocusEventHandler, KeyboardEventHandler, MouseEventHandler, MouseEvent } from 'react';

import {
  AnchorElement,
  ButtonElement,
  MixedReactHTML,
  buttonElementTypeKeys,
  buttonVariantKeys,
  colorVariantKeys,
  sizeVariantKeys,
  withStyles,
  withChildren,
  withSx,
} from '@iogart-react-ui/types';

export type ButtonElementType = keyof typeof buttonElementTypeKeys;

export type ButtonVariant = keyof typeof buttonVariantKeys;

export type ButtonSize = keyof typeof sizeVariantKeys;

export type ButtonColor = keyof typeof colorVariantKeys;

export interface ButtonEvents<T = ButtonElement | AnchorElement> {
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  onKeyDown?: KeyboardEventHandler;
  onKeyUp?: KeyboardEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
  onClick?: MouseEventHandler<T> | undefined;
  onDoubleClick?: (event: MouseEvent<T, MouseEvent>) => void;
}

export interface ButtonBaseProps extends Omit<HTMLButtonElement, 'children'>, ButtonEvents, withChildren {
  elementType?: ButtonElementType;
  role?: AriaRole;
  href?: string;
  to?: string;
  as?: MixedReactHTML;
}

export interface ButtonProps extends ButtonBaseProps, Omit<withStyles, 'className' | 'style'>, withSx {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  pill?: boolean;
}

export type useButtonBaseProps = ButtonBaseProps;

export type useButtonBaseReturn = useButtonBaseProps;

export type useButtonProps = Omit<ButtonProps, 'children'> & {
  spinnerNode: ReactNode;
};

export type useButtonReturn = Omit<useButtonProps, 'spinnerNode'> & {
  loadingNode: ReactNode | null;
};
