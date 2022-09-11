import { useRef } from 'react';

const useButtonBase = (props?: any) => {
    const {
        disabled = false,
        href,
        ref,
        tabIndex,
        to,
        type,
    } = props;

    const buttonRef = useRef();

    const getRootProps = () => {

        return {
            onBlur: () => {},
            onClick: () => {},
            onFocus: () => {},
            onKeyDown: () => {},
            onKeyUp: () => {},
            onMouseDown: () => {},
            onMouseLeave: () => {},
            onMouseUp: () => {},
        };
    };

    return {
        // button base properties
        getRootProps,
        // ...
        disabled,
    };
};

export default useButtonBase;
