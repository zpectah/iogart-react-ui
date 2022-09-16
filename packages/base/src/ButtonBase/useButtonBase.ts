import { useRef, useState } from 'react';

import {
    IogartAnchorElement,
    IogartButtonElement,
    IogartFocusEvent,
    // IogartKeyboardEvent,
    IogartMouseEvent,
    IogartClickEvent,
    IogartDoubleClickEvent,
} from '@iogart-react-ui/types/src';
import { Sx } from '@iogart-react-ui/core/src';
import { getElementClassName } from '@iogart-react-ui/utils/src';
import { useButtonBaseParameters, useButtonBaseReturn } from './types';

const useButtonBase = (props: useButtonBaseParameters) => {
    const {
        ref,
        type = 'button',
        className,
        onBlur,
        onFocus,
        // onKeyDown,
        // onKeyUp,
        onMouseEnter,
        // onMouseDown,
        onMouseLeave,
        // onMouseUp,
        onClick,
        onDoubleClick,
        style,
        sx,
        ...rest
    } = props;

    const [ isHover, setHover ] = useState(false);
    const [ isFocus, setFocus ] = useState(false);

    const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement>();

    const getClassName = () => getElementClassName(
        className,
        [ 'iogart-button-base' ],
        { hover: isHover, focus: isFocus },
        { ui: true, base: true, },
    );

    const blurHandler = (event: IogartFocusEvent) => {
        setFocus(false);
        if (onBlur) onBlur(event);
    };
    const focusHandler = (event: IogartFocusEvent) => {
        setFocus(true);
        if (onFocus) onFocus(event);
    };
    // const keyDownHandler = (event: IogartKeyboardEvent) => {
    //     if (onKeyDown) onKeyDown(event);
    // };
    // const keyUpHandler = (event: IogartKeyboardEvent) => {
    //     if (onKeyUp) onKeyUp(event);
    // };
    const mouseEnterHandler = (event: IogartMouseEvent) => {
        setHover(true);
        if (onMouseEnter) onMouseEnter(event);
    };
    // const mouseDownHandler = (event: IogartMouseEvent) => {
    //     if (onMouseDown) onMouseDown(event);
    // };
    const mouseLeaveHandler = (event: IogartMouseEvent) => {
        setHover(false);
        if (onMouseLeave) onMouseLeave(event);
    };
    // const mouseUpHandler = (event: IogartMouseEvent) => {
    //     if (onMouseUp) onMouseUp(event);
    // };
    const clickHandler = (event: IogartClickEvent<IogartAnchorElement | IogartButtonElement>) => {
        if (onClick) onClick(event);
    };
    const doubleClickHandler = (event: IogartDoubleClickEvent<IogartAnchorElement | IogartButtonElement>) => {
        if (onDoubleClick) onDoubleClick(event);
    };

    const eventsProps = {
        onBlur: blurHandler,
        onFocus: focusHandler,
        // onKeyDown: keyDownHandler,
        // onKeyUp: keyUpHandler,
        onMouseEnter: mouseEnterHandler,
        // onMouseDown: mouseDownHandler,
        onMouseLeave: mouseLeaveHandler,
        // onMouseUp: mouseUpHandler,
        onClick: clickHandler,
        onDoubleClick: doubleClickHandler,
    };

    const styleProperties = {
        ...style,
        ...sx && Sx(sx),
    };

    return {
        ref: ref || elementRef,
        className: getClassName(),
        style: styleProperties,
        type,
        ...eventsProps,
        ...rest,
    } as useButtonBaseReturn;
};

export default useButtonBase;
