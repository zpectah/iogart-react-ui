import { useState, CSSProperties } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';

import {
    CollapsibleRenderToggleType,
    useCollapsibleParameters,
    useCollapsibleReturn,
} from './types';

const useCollapsible = (props: useCollapsibleParameters) => {
    const {
        collapsed = false,
        ...rest
    } = props;

    const [ isCollapsed, setCollapsed ] = useState<boolean>(collapsed);
    const [ ref, bounds ] = useMeasure();

    const getClassName = () => {

        return ``;
    };

    const toggleHandler = (): void => {
        setCollapsed(!isCollapsed);
    };

    const springProps = useSpring({
        config: { duration: 125 },
        height: !isCollapsed ? 0 : bounds.height,
    }) as unknown as CSSProperties;
    const renderProps: CollapsibleRenderToggleType = {
        collapsed: isCollapsed,
        toggle: toggleHandler,
    };

    return {
        animated,
        springProps,
        renderProps,
        contentRef: ref,
        className: getClassName(),
        ...rest
    } as useCollapsibleReturn;
};

export default useCollapsible;
