import React, { FC } from 'react';

import { CollapsibleProps } from './types';
import useCollapsible from './useCollapsible';

const Collapsible: FC<CollapsibleProps> = (props) => {
    const {
        children,
        renderToggle,
        ...rest
    } = props;

    const {
        renderProps,
        springProps,
        contentRef,
        className,
        animated,
    } = useCollapsible({ ...rest });

    return (
        <>
            {renderToggle && renderToggle(renderProps)}
            <animated.div style={{
                overflow: 'hidden',
                ...springProps
            }} className={className}>
                <div ref={contentRef}>
                    {children}
                </div>
            </animated.div>
        </>
    );
};

export default Collapsible;
