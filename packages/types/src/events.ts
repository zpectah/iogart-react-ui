import { FocusEvent, KeyboardEvent, MouseEvent } from 'react';

export type IogartFocusEvent<T = HTMLElement> = FocusEvent<T>;
export type IogartKeyboardEvent = KeyboardEvent;
export type IogartMouseEvent<T = HTMLElement> = MouseEvent<T>;
export type IogartClickEvent<T> = MouseEvent<T>;
export type IogartDoubleClickEvent<T> = MouseEvent<T, MouseEvent>;
