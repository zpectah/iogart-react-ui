import {
  ButtonHTMLAttributes,
  AriaRole,
  LegacyRef,
  ReactNode,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  MouseEvent,
  // ComponentType,
} from 'react';

import {
  AnchorElement,
  ButtonElement,
  IogartBaseUi,
  IogartCommonUi,
  MixedReactHTML,
  withChildren,
} from '@iogart-react-ui/types';
import {
  ButtonElementTypeKeys,
  ButtonVariantKeys,
  ButtonSizeKeys,
  ButtonColorKeys,
} from './enums';

export type ButtonElementType = keyof typeof ButtonElementTypeKeys;

export type ButtonVariant = keyof typeof ButtonVariantKeys;

export type ButtonSize = keyof typeof ButtonSizeKeys;

export type ButtonColor = keyof typeof ButtonColorKeys;

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

export interface ButtonBaseProps
  extends IogartBaseUi,
    withChildren,
    ButtonEvents {
  elementType?: ButtonElementType;
  type?: ButtonType;
  role?: AriaRole;
  disabled?: boolean;
  ref?: LegacyRef<HTMLButtonElement> | undefined;
  href?: string;
  to?: string;
  as?: MixedReactHTML;
}

export interface ButtonProps extends ButtonBaseProps, IogartCommonUi {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export interface useButtonBaseProps extends ButtonBaseProps {}

export interface useButtonBaseReturn extends useButtonBaseProps {}

export interface useButtonProps extends ButtonProps {}

export interface useButtonReturn extends useButtonProps {}
