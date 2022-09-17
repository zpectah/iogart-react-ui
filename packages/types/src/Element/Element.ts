import {
    DetailedHTMLProps,
    HTMLAttributes,
    CSSProperties,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
} from 'react';

import { SxProps } from '@iogart-react-ui/types';
import {
    contentElementTypeKeys,
    elementTypeKeys,
    elementFlexDirectionKeys,
    elementFlexAlignContentKeys,
    elementFlexAlignItemsKeys,
    elementFlexAlignSelfKeys,
    elementFlexJustifyContentKeys,
    elementFlexJustifyItemsKeys,
    elementFlexJustifySelfKeys,
} from './enums';

/* */
export type contentElementType = keyof typeof contentElementTypeKeys;
export type elementType = keyof typeof elementTypeKeys & contentElementType;
export type elementFlexDirectionType = keyof typeof elementFlexDirectionKeys;
export type elementFlexAlignContentType = keyof typeof elementFlexAlignContentKeys;
export type elementFlexAlignItemsType = keyof typeof elementFlexAlignItemsKeys;
export type elementFlexAlignSelfType = keyof typeof elementFlexAlignSelfKeys;
export type elementFlexJustifyContentType = keyof typeof elementFlexJustifyContentKeys;
export type elementFlexJustifyItemsType = keyof typeof elementFlexJustifyItemsKeys;
export type elementFlexJustifySelfType = keyof typeof elementFlexJustifySelfKeys;


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
export interface IogartBaseUiProps {
    tabIndex?: number | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    // ...
}
export interface IogartCommonUiProps extends IogartBaseUiProps {
    sx?: SxProps | undefined;
    // ...
}
