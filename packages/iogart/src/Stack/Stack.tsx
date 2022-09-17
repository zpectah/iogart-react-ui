import React, { FC, createElement } from 'react';

import { contentElementTypeKeys } from '@iogart-react-ui/types';
import { StackProps } from './types';
import useStack from './useStack';

const Stack:FC<StackProps> = (props) => {
    const {
        children,
        style,
        component = contentElementTypeKeys.div,
        ...rest
    } = props;

    const updatedProps = useStack({ style, ...rest });

    return createElement(
        component,
        updatedProps,
        children,
    );
};

export default Stack;
