import { merge } from 'lodash';

import { Sx } from '@iogart-react-ui/core';
import { getElementClassName } from '@iogart-react-ui/utils';
import {
    elementFlexAlignContentKeys,
    elementFlexAlignItemsKeys,
    elementFlexAlignSelfKeys,
    elementFlexDirectionKeys,
    elementFlexJustifyContentKeys,
    elementFlexJustifyItemsKeys,
    elementFlexJustifySelfKeys,
} from '@iogart-react-ui/types';
import { useStackParameters, useStackReturn } from './types';

const useStack = (props: useStackParameters) => {
    const {
        className,
        style,
        sx,
        spacing = 0,
        direction = elementFlexDirectionKeys.column,
        alignContent = elementFlexAlignContentKeys.initial,
        alignItems = elementFlexAlignItemsKeys.initial,
        alignSelf = elementFlexAlignSelfKeys.initial,
        justifyContent = elementFlexJustifyContentKeys.initial,
        justifyItems = elementFlexJustifyItemsKeys.initial,
        justifySelf = elementFlexJustifySelfKeys.initial,
        ...rest
    } = props;

    const updatedClassName = getElementClassName(
        className,
        [ 'iogart-stack' ],
        {},
        { ui: true },
    );
    const updatedStyle = merge({
        display: 'flex',
        flexDirection: direction,
        alignContent,
        alignItems,
        alignSelf,
        justifyContent,
        justifyItems,
        justifySelf,
        gap: spacing,
    }, style);

    const styleProperties = {
        ...updatedStyle,
        ...sx && Sx(sx),
    };

    return {
        className: updatedClassName,
        style: styleProperties,
        ...rest,
    } as useStackReturn;
};

export default useStack;
