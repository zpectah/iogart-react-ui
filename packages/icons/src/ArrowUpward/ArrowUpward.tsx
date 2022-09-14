import React from 'react';

import { ArrowUpwardProps } from './ArrowUpward.d';

const ArrowUpward = (props: ArrowUpwardProps) => {
    const {
        size = '24px',
        color = '#000000',
        ...rest
    } = props;

    return (
        <span {...rest}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
            </svg>
        </span>
    );
};

export default ArrowUpward;
