import { createElement, useMemo } from 'react';

import useTagBase from './useTagBase';
import { iogartSpanElement } from '@iogart-react-ui/types/src';
import { TagBaseProps } from './types';

const TagBase = (props: TagBaseProps<iogartSpanElement | HTMLElement>) => {
    const {
        elementType = 'span',
        label = '',
        clickable,
        onClick,
        ...rest
    } = props;

    const { deleteIcon, ...restOfUpdatedProps } = useTagBase({ clickable, onClick, ...rest });

    const childrenNode = useMemo(() => {
        let children = label;
        if (clickable && onClick) {
            const closeButton = (
                <button
                    onClick={onClick}
                >
                    {deleteIcon}
                </button>
            );
            children = (
                <>
                    {children}
                    {closeButton}
                </>
            );
        }

        return children;
    }, [ label, clickable, onClick, deleteIcon ]);

    return createElement(
        elementType,
        { ...restOfUpdatedProps },
        childrenNode,
    );
};

export default TagBase;
