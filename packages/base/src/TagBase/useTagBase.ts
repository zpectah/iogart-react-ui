import { useState } from 'react';

import { getElementClassName } from '@iogart-react-ui/utils';
import { Sx } from '@iogart-react-ui/core';
import { IogartMouseEvent } from '@iogart-react-ui/types';
import { useTagBaseParameters, useTagBaseReturn } from './types';

const useTagBase = (props: useTagBaseParameters) => {
    const {
        className,
        onMouseEnter,
        onMouseLeave,
        style,
        sx,
        ...rest
    } = props;

    const [ isHover, setHover ] = useState(false);

    const getClassName = () => getElementClassName(
        className,
        [ 'iogart-tag-base' ],
        { hover: isHover },
        { ui: true, base: true, },
    );

    const mouseEnterHandler = (event: IogartMouseEvent) => {
        setHover(true);
        if (onMouseEnter) onMouseEnter(event);
    };
    const mouseLeaveHandler = (event: IogartMouseEvent) => {
        setHover(false);
        if (onMouseLeave) onMouseLeave(event);
    };

    const eventsProps = {
        onMouseEnter: mouseEnterHandler,
        onMouseLeave: mouseLeaveHandler,
    };

    const styleProperties = {
        ...style,
        ...sx && Sx(sx),
    };

    return {
        className: getClassName(),
        style: styleProperties,
        ...eventsProps,
        ...rest,
    } as useTagBaseReturn;
};

export default useTagBase;
