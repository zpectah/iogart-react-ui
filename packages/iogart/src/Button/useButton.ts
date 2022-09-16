import { Sx } from '@iogart-react-ui/core';
import { getElementClassName } from '@iogart-react-ui/utils';
import { useButtonParameters, useButtonReturn } from './types';

const useButton = (props: useButtonParameters) => {
    const {
        className,
        style,
        sx,
        ...rest
    } = props;

    const updatedClassName = getElementClassName(
        className,
        [ 'iogart-button' ],
    );

    const styleProperties = {
        ...style,
        ...sx && Sx(sx),
    };

    return {
        className: updatedClassName,
        style: styleProperties,
        ...rest
    } as useButtonReturn;
};

export default useButton;
