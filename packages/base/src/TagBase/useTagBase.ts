import { useState } from 'react';

import { getElementClassName } from '@iogart-react-ui/utils/src';
import { Sx } from '@iogart-react-ui/core/src';
import { IogartMouseEvent } from '@iogart-react-ui/types/src';
import { useTagBaseParameters, useTagBaseReturn } from './types';

const useTagBase = (props: useTagBaseParameters) => {
    const {
        className,
        onMouseEnter,
        onMouseLeave,
        sx,
        ...rest
    } = props;

    const [ isHover, setHover ] = useState(false);

    const getClassName = () => getElementClassName(
        className,
        [ 'iogart-tag-base' ],
        { hover: isHover },
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

    return {
        className: getClassName(),
        sx: Sx(sx),
        ...eventsProps,
        ...rest,
    } as useTagBaseReturn;
};

export default useTagBase;
