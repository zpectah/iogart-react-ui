import React from 'react';

import { SvgIcon } from '@iogart-react-ui/types';

const ExpandMore = (props: SvgIcon) => {
    const {
        size = '24px',
        color = '#000000',
        ...rest
    } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...rest}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
        </svg>
    );
};

export default ExpandMore;
