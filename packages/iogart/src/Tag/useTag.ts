import { Sx } from '@iogart-react-ui/core';
import { getElementClassName } from '@iogart-react-ui/utils';
import { useTagParameters, useTagReturn } from './types';

const useTag = (props: useTagParameters) => {
    const {
        className,
        style,
        sx,
        ...rest
    } = props;

    const updatedClassName = getElementClassName(
        className,
        [ 'iogart-tag' ],
    );

    const styleProperties = {
        ...style,
        ...sx && Sx(sx),
    };

    return {
        className: updatedClassName,
        style: styleProperties,
        ...rest
    } as useTagReturn;
};

export default useTag;
