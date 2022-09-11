import React from 'react';

// import useButtonBase from './useButtonBase';

import { ButtonBaseProps } from './ButtonBase.d';

const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
    const {
        children,
        ...rest
    } = props;

    // const { ...rest } = useButton();
    // const ps = useButtonBase();
    // console.log('ps', ps);

    console.log('props', props);

    return (
        <button
            className="iogart-base iogart-button"
            {...rest}
        >
            {children}
        </button>
    );
};

export default ButtonBase;
