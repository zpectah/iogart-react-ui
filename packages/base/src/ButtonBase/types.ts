import {
    ReactNode,
    ButtonHTMLAttributes,
    AriaRole,
    FocusEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    LegacyRef,
} from 'react';

import {
    IogartElementBase,
    iogartButtonElement,
    iogartAnchorElement,
} from '@iogart-react-ui/types/src';

export interface ButtonBaseProps<T = iogartButtonElement | iogartAnchorElement> extends IogartElementBase {
    children?: ReactNode;
    elementType?: 'button' | 'a';
    disabled?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'],
    role?: AriaRole,
    onBlur?: FocusEventHandler;
    onFocus?: FocusEventHandler;
    onKeyDown?: KeyboardEventHandler;
    onKeyUp?: KeyboardEventHandler;
    onMouseEnter?: MouseEventHandler;
    onMouseDown?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
    onMouseUp?: MouseEventHandler;
    onClick?: MouseEventHandler<T> | undefined;
    onDoubleClick?: MouseEventHandler<T> | undefined;
    ref?: LegacyRef<HTMLButtonElement> | undefined;
    href?: string;
    to?: string;
}

export interface useButtonBaseParameters extends ButtonBaseProps {}
export interface useButtonBaseReturn extends useButtonBaseParameters {}
