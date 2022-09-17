import React, { createElement, useMemo } from 'react';

import { IogartButtonElement, Theme } from '@iogart-react-ui/types';
import { useButtonBase } from '@iogart-react-ui/base';
import { styled } from '@iogart-react-ui/styles';
import { Close } from '@iogart-react-ui/icons';
import { TagElementKeys } from './enums';
import { TagProps } from './types';
import useTag from './useTag';

// TODO -->
const StyledElement = styled('div')`
    /* imported global styles */
    
    margin: 0;
    padding: .5rem 1rem;
    
    display: inline-flex;
    
    color: ${({ theme }) =>  (theme as Theme).palette?.primary.main};
`;
// TODO <--

const Tag = (props: TagProps) => {
    const {
        component = TagElementKeys.span,
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
        component,
        { ...restOfUpdatedProps },
        childrenNode,
    );
};

export default Tag;
