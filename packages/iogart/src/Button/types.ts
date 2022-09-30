import {
  ButtonHTMLAttributes,
  AriaRole,
  ReactNode,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  MouseEvent,
} from 'react';

import {
  AnchorElement,
  ButtonElement,
  IogartCommonUi,
  MixedReactHTML,
  buttonElementTypeKeys,
  buttonVariantKeys,
  buttonSizeKeys,
  buttonColorKeys,
  withStyles,
} from '@iogart-react-ui/types';

export type ButtonElementType = keyof typeof buttonElementTypeKeys;

export type ButtonVariant = keyof typeof buttonVariantKeys;

export type ButtonSize = keyof typeof buttonSizeKeys;

export type ButtonColor = keyof typeof buttonColorKeys;

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>['type'];

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

export interface ButtonBaseProps extends HTMLButtonElement, ButtonEvents {
  elementType?: ButtonElementType;
  role?: AriaRole;
  href?: string;
  to?: string;
  as?: MixedReactHTML;
}

export interface ButtonProps extends IogartCommonUi, ButtonBaseProps, Omit<withStyles, 'className' | 'style'> {
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

export type useButtonProps = Omit<ButtonProps, 'children'>;

export type useButtonReturn = useButtonProps;
