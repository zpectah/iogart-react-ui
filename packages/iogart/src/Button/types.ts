import {
  ButtonHTMLAttributes,
  AriaRole,
  ReactNode,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  MouseEvent,
} from 'react';

import { AnchorElement, ButtonElement, IogartCommonUi, MixedReactHTML } from '@iogart-react-ui/types';
import { ButtonElementTypeKeys, ButtonVariantKeys, ButtonSizeKeys, ButtonColorKeys } from './enums';

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

export interface ButtonBaseProps extends HTMLButtonElement, ButtonEvents {
  elementType?: ButtonElementType;
  role?: AriaRole;
  href?: string;
  to?: string;
  as?: MixedReactHTML;
}

export interface ButtonProps extends IogartCommonUi, ButtonBaseProps {
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

export type useButtonProps = ButtonProps;

export type useButtonReturn = useButtonProps;
