import { useRef } from 'react';

import { useButtonBaseParameters, useButtonBaseReturn } from './types';

const useButtonBase = (props: useButtonBaseParameters) => {
    const { ref, className, ...rest } = props;

    const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement>();

    const getClassName = () => {
        const privateClasses = [ 'iogart-base', 'iogart-button-base' ].join(' ');
        const publicClasses = className ? className : '';

        return `${privateClasses} ${publicClasses}`;
    };

    const eventsProps = {
        onBlur: () => { /* TODO: event handler */ },
        onFocus: () => { /* TODO: event handler */ },
        onKeyDown: () => { /* TODO: event handler */ },
        onKeyUp: () => { /* TODO: event handler */ },
        onMouseEnter: () => { /* TODO: event handler */ },
        onMouseDown: () => { /* TODO: event handler */ },
        onMouseLeave: () => { /* TODO: event handler */ },
        onMouseUp: () => { /* TODO: event handler */ },
        onClick: () => { /* TODO: event handler */ },
        onDoubleClick: () => { /* TODO: event handler */ },
    };

    return {
        ref: ref || elementRef,
        className: getClassName(),
        ...eventsProps,
        ...rest,
    } as useButtonBaseReturn;
};

export default useButtonBase;
