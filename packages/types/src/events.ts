import { FocusEvent, KeyboardEvent, MouseEvent } from 'react';

export type IogartFocusEvent = FocusEvent<HTMLElement>;
export type IogartKeyboardEvent = KeyboardEvent;
export type IogartMouseEvent<T = HTMLElement> = MouseEvent<T>;
export type IogartClickEvent<T> = MouseEvent<T>;
export type IogartDoubleClickEvent<T> = MouseEvent<T, MouseEvent>;
