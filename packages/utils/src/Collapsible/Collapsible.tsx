import React, { FC, createElement } from 'react';

import { CollapsibleElementKeys } from './enums';
import { CollapsibleProps } from './types';
import useCollapsible from './useCollapsible';

const Collapsible: FC<CollapsibleProps> = (props) => {
    const {
        children,
        renderToggle,
        element = CollapsibleElementKeys['div'],
        contentElement = CollapsibleElementKeys['div'],
        styles,
        contentStyles,
        ...rest
    } = props;

    const {
        renderProps,
        springProps,
        contentRef,
        className,
        animated,
    } = useCollapsible({ ...rest });

    const Wrapper = animated[element];
    const Content = createElement(
        contentElement,
        {
            ref: contentRef,
            styles: contentStyles,
        },
        children,
    );

    const animatedProps = {
        style: {
            overflow: 'hidden',
            ...styles,
            ...springProps
        },
        children: Content,
        className,
    };

    return (
        <>
            {renderToggle && renderToggle(renderProps)}
            <Wrapper {...animatedProps} />
        </>
    );
};

export default Collapsible;
