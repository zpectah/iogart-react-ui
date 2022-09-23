import { useRef, useState } from 'react';

import { useButtonBaseProps, useButtonBaseReturn } from './types';

import { getElementClassName } from '@iogart-react-ui/utils';
import {
  AnchorElement,
  ButtonElement,
  IogartClickEvent,
  IogartDoubleClickEvent,
  IogartFocusEvent,
  // IogartKeyboardEvent,
  IogartMouseEvent,
} from '@iogart-react-ui/types';

const useButtonBase = (props: useButtonBaseProps) => {
  const {
    className,
    onBlur,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onClick,
    onDoubleClick,
    ...rest
  } = props;

  const [isHover, setHover] = useState(false);
  const [isFocus, setFocus] = useState(false);

  const updatedClassName = getElementClassName(
    className,
    ['iogart-ButtonBase'],
    {
      isHover,
      isFocus,
      base: true,
    }
  );

  const blurHandler = (event: IogartFocusEvent) => {
    setFocus(false);
    if (onBlur) onBlur(event);
  };
  const focusHandler = (event: IogartFocusEvent) => {
    setFocus(true);
    if (onFocus) onFocus(event);
  };
  const mouseEnterHandler = (event: IogartMouseEvent) => {
    setHover(true);
    if (onMouseEnter) onMouseEnter(event);
  };
  const mouseLeaveHandler = (event: IogartMouseEvent) => {
    setHover(false);
    if (onMouseLeave) onMouseLeave(event);
  };
  const clickHandler = (
    event: IogartClickEvent<AnchorElement | ButtonElement>
  ) => {
    if (onClick) onClick(event);
  };
  const doubleClickHandler = (
    event: IogartDoubleClickEvent<AnchorElement | ButtonElement>
  ) => {
    if (onDoubleClick) onDoubleClick(event);
  };
  // const keyDownHandler = (event: IogartKeyboardEvent) => {
  //     if (onKeyDown) onKeyDown(event);
  // };
  // const keyUpHandler = (event: IogartKeyboardEvent) => {
  //     if (onKeyUp) onKeyUp(event);
  // };
  // const mouseDownHandler = (event: IogartMouseEvent) => {
  //     if (onMouseDown) onMouseDown(event);
  // };
  // const mouseUpHandler = (event: IogartMouseEvent) => {
  //     if (onMouseUp) onMouseUp(event);
  // };

  const updatedEvents = {
    onBlur: blurHandler,
    onFocus: focusHandler,
    onMouseEnter: mouseEnterHandler,
    onMouseLeave: mouseLeaveHandler,
    onClick: clickHandler,
    onDoubleClick: doubleClickHandler,
    // onKeyDown: keyDownHandler,
    // onKeyUp: keyUpHandler,
    // onMouseDown: mouseDownHandler,
    // onMouseUp: mouseUpHandler,
  };

  const returnProps: useButtonBaseReturn = {
    className: updatedClassName,
    ...updatedEvents,
    ...rest,
  };

  return returnProps;
};

export default useButtonBase;
