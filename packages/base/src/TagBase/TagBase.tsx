import { createElement, useMemo } from 'react';

import { Close } from '@iogart-react-ui/icons/src';
import { IogartButtonElement } from '@iogart-react-ui/types/src';
import useTagBase from './useTagBase';
import { useButtonBase } from '../ButtonBase';
import { TagBaseProps } from './types';

const TagBase = (props: TagBaseProps) => {
    const {
        elementType = 'span',
        label = '',
        clickable,
        deleteIcon,
        onClick,
        ...rest
    } = props;

    const { ...restOfUpdatedProps } = useTagBase({ clickable, onClick, ...rest });

    const buttonProps = useButtonBase({
        className: 'iogart-tag-button',
        onClick: (e) => { console.log('on close', e) },
    }) as IogartButtonElement;

    const childrenNode = useMemo(() => {
        let children = label;
        if (clickable && onClick) {
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
    }, [ label, clickable, onClick, deleteIcon, buttonProps ]);

    return createElement(
        elementType,
        { ...restOfUpdatedProps },
        childrenNode,
    );
};

export default TagBase;
