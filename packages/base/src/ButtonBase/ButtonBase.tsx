import React from 'react';

// import useButtonBase from './useButtonBase';

export interface ButtonBaseProps {
    children?: React.ReactNode,
}

const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
    const { children } = props;

    // const { ...rest } = useButton();
    // const ps = useButtonBase();
    // console.log('ps', ps);

    return (
        <button
            // {...rest}
        >
            {children}
        </button>
    );
};

export default ButtonBase;
