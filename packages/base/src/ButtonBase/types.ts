import {
    ReactNode,
    ButtonHTMLAttributes,
    AriaRole,
    FocusEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    LegacyRef, MouseEvent,
} from 'react';

import {
    IogartBaseUiProps,
    IogartButtonElement,
    IogartAnchorElement,
} from '@iogart-react-ui/types';
import { ButtonBaseElementKeys } from './enums';

export interface ButtonBaseProps<T = IogartButtonElement | IogartAnchorElement> extends IogartBaseUiProps {
    children?: ReactNode;
    elementType?: keyof typeof ButtonBaseElementKeys;
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
    onDoubleClick?: (event: MouseEvent<T, MouseEvent>) => void;
    ref?: LegacyRef<HTMLButtonElement> | undefined;
    href?: string;
    to?: string;
}

export interface useButtonBaseParameters extends ButtonBaseProps {}
export interface useButtonBaseReturn extends useButtonBaseParameters {}
