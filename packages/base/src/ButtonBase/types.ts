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

export interface ButtonBaseProps<T> extends IogartElementBase {
    children?: ReactNode;
    elementType?: 'button' | 'a';
    disabled?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'],
    role?: AriaRole,
    onBlur?: FocusEventHandler;
    onFocus?: FocusEventHandler;
    onKeyDown?: KeyboardEventHandler;
    onKeyUp?: KeyboardEventHandler;
    onMouseDown?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
    onMouseUp?: MouseEventHandler;
    onClick?: MouseEventHandler<T> | undefined;
    onDoubleClick?: MouseEventHandler<T> | undefined;
    ref?: LegacyRef<HTMLButtonElement> | undefined;
    href?: string;
    to?: string;
}

export interface useButtonBaseParameters extends ButtonBaseProps<iogartButtonElement | iogartAnchorElement | HTMLElement> {}
export interface useButtonBaseReturn extends useButtonBaseParameters {}
