import { useState } from 'react';

import { getElementClassName } from '@iogart-react-ui/utils';
import { IogartMouseEvent } from '@iogart-react-ui/types';
import { useTagBaseParameters, useTagBaseReturn } from './types';

const useTagBase = (props: useTagBaseParameters) => {
    const {
        className,
        onMouseEnter,
        onMouseLeave,
        ...rest
    } = props;

    const [ isHover, setHover ] = useState(false);

    const updatedClassName = getElementClassName(
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

    return {
        className: updatedClassName,
        ...eventsProps,
        ...rest,
    } as useTagBaseReturn;
};

export default useTagBase;
