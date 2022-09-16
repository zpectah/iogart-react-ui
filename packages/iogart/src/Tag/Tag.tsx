import React, { createElement, useMemo } from 'react';

import { IogartButtonElement } from '@iogart-react-ui/types';
import { useButtonBase } from '@iogart-react-ui/base';
import { Close } from '@iogart-react-ui/icons';
import { TagElementKeys } from './enums';
import { TagProps } from './types';
import useTag from './useTag';

const Tag = (props: TagProps) => {
    const {
        elementType = TagElementKeys['span'],
        label = '',
        clickable,
        deleteIcon,
        onClickDelete,
        ...rest
    } = props;

    const { ...restOfUpdatedProps } = useTag({ clickable, ...rest });

    const buttonProps = useButtonBase({
        className: 'iogart-tag-button',
        onClick: onClickDelete && onClickDelete,
    }) as IogartButtonElement;

    const childrenNode = useMemo(() => {
        let children = label;
        if (clickable && onClickDelete) {
            const closeButton = (
                <button {...buttonProps}>
                    {deleteIcon ? deleteIcon : <Close />}
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
    }, [ label, clickable, onClickDelete, deleteIcon, buttonProps ]);

    return createElement(
        elementType,
        { ...restOfUpdatedProps },
        childrenNode,
    );
};

export default Tag;
