import React from 'react';

import { SvgIcon } from '@iogart-react-ui/types/src';

const Check = (props: SvgIcon) => {
    const {
        size = '24px',
        color = '#000000',
        ...rest
    } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...rest}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
    );
};

export default Check;
