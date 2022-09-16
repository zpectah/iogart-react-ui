import {
    DetailedHTMLProps,
    HTMLAttributes,
    CSSProperties,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
} from 'react';

import { SxProps } from '@iogart-react-ui/core/src';

// TODO

/*
Common elements
*/
export type IogartDivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type IogartLinkElement = DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
export type IogartAnchorElement = DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export type IogartButtonElement = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type IogartSpanElement = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

/*
Common events
*/
export type IogartFocusEvent = FocusEvent<HTMLElement>;
export type IogartKeyboardEvent = KeyboardEvent;
export type IogartMouseEvent<T = HTMLElement> = MouseEvent<T>;
export type IogartClickEvent<T> = MouseEvent<T>;
export type IogartDoubleClickEvent<T> = MouseEvent<T, MouseEvent>;

/*
Common component
*/
export interface IogartElementBase {
    tabIndex?: number | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    sx?: SxProps;
    // TODO
}
