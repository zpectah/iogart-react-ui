import React from 'react';

import { SvgIcon } from '@iogart-react-ui/types/src';

const Close = (props: SvgIcon) => {
    const {
        size = '24px',
        color = '#000000',
        ...rest
    } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...rest}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
    );
};

export default Close;