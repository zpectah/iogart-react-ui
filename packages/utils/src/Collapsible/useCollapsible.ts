import { useState, CSSProperties } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';

import { getElementClassName } from '@iogart-react-ui/utils';
import {
    CollapsibleRenderToggleType,
    useCollapsibleParameters,
    useCollapsibleReturn,
} from './types';

const useCollapsible = (props: useCollapsibleParameters) => {
    const {
        duration = 125,
        collapsed = false,
        className,
        toggleClassName,
        ...rest
    } = props;

    const [ isCollapsed, setCollapsed ] = useState<boolean>(collapsed);
    const [ ref, bounds ] = useMeasure();

    const updatedClassName = getElementClassName(
        className,
        [ 'iogart-collapsible' ],
        { collapsed: isCollapsed },
    );

    const toggleHandler = (): void => {
        setCollapsed(!isCollapsed);
    };

    const springProps = useSpring({
        config: { duration },
        height: !isCollapsed ? 0 : bounds.height,
    }) as unknown as CSSProperties;
    const renderProps: CollapsibleRenderToggleType = {
        collapsed: isCollapsed,
        toggleProps: {
            onClick: toggleHandler,
            className: getElementClassName(
                toggleClassName,
                [ 'iogart-collapsible-toggle' ],
                { expanded: isCollapsed },
            ),
            'aria-expanded': String(isCollapsed),
        },
    };

    return {
        animated,
        springProps,
        renderProps,
        contentRef: ref,
        className: updatedClassName,
        ...rest
    } as useCollapsibleReturn;
};

export default useCollapsible;
