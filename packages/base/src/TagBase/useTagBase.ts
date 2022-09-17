import { useState } from 'react';

import { Sx } from '@iogart-react-ui/core';
import { getElementClassName } from '@iogart-react-ui/utils';
import {
    IogartAnchorElement,
    IogartButtonElement,
    IogartClickEvent,
    IogartDoubleClickEvent,
    IogartMouseEvent,
} from '@iogart-react-ui/types';
import { useTagBaseParameters, useTagBaseReturn } from './types';

const useTagBase = (props: useTagBaseParameters) => {
    const {
        className,
        onClick,
        onDoubleClick,
        onMouseEnter,
        onMouseLeave,
        ...rest
    } = props;

    const [ isHover, setHover ] = useState(false);

    const updatedClassName = getElementClassName(
        className,
        [ 'iogart-tag-base' ],
        { hover: isHover },
        { ui: true, base: true },
    );

    const clickHandler = (event: IogartClickEvent<IogartAnchorElement | IogartButtonElement>) => {
        if (onClick) onClick(event);
    };
    const doubleClickHandler = (event: IogartDoubleClickEvent<IogartAnchorElement | IogartButtonElement>) => {
        if (onDoubleClick) onDoubleClick(event);
    };
    const mouseEnterHandler = (event: IogartMouseEvent) => {
        setHover(true);
        if (onMouseEnter) onMouseEnter(event);
    };
    const mouseLeaveHandler = (event: IogartMouseEvent) => {
        setHover(false);
        if (onMouseLeave) onMouseLeave(event);
    };

    const eventsProps = {
        onClick: clickHandler,
        onDoubleClick: doubleClickHandler,
        onMouseEnter: mouseEnterHandler,
        onMouseLeave: mouseLeaveHandler,
    };

    return {
        className: updatedClassName,
        ...eventsProps,
        ...rest
    } as useTagBaseReturn;
};

export default useTagBase;
