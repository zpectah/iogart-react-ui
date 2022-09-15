import { useRef } from 'react';

import { useButtonBaseParameters, useButtonBaseReturn } from './types';

const useButtonBase = (props: useButtonBaseParameters) => {
    const { ref, className, ...rest } = props;

    const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement | HTMLElement>();

    const getClassName = () => {
        const privateClasses = [ 'iogart-base', 'iogart-button-base' ].join(' ');
        const publicClasses = className ? className : '';

        return `${privateClasses} ${publicClasses}`;
    };

    return {
        ref: ref || elementRef,
        className: getClassName(),
        ...rest,
    } as useButtonBaseReturn;
};

export default useButtonBase;
