import React, { FC, createElement, useMemo } from 'react';

import { IogartButtonElement } from '@iogart-react-ui/types';
import { useButtonBase } from '@iogart-react-ui/base';
import { Close } from '@iogart-react-ui/icons';
import { TagBaseElementKeys } from './enums';
import { TagBaseProps } from './types';
import useTagBase from './useTagBase';

const TagBase: FC<TagBaseProps> = (props) => {
    const {
        component = TagBaseElementKeys.span,
        label = '',
        clickable,
        deleteIcon,
        onClickDelete,
        ...rest
    } = props;

    const { ...restOfUpdatedProps } = useTagBase({ clickable, ...rest });

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
        component,
        { ...restOfUpdatedProps },
        childrenNode,
    );
};

export default TagBase;
