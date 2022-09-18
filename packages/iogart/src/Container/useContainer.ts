import { Sx } from '@iogart-react-ui/core';
import { getElementClassName } from '@iogart-react-ui/utils';
import { useContainerParameters, useContainerReturn } from './types';

const useContainer = (props: useContainerParameters) => {
    const {
        className,
        style,
        sx,
        ...rest
    } = props;

    const updatedClassName = getElementClassName(
        className,
        [ 'iogart-container' ],
    );

    const styleProperties = {
        ...style,
        ...sx && Sx(sx),
    };

    return {
        className: updatedClassName,
        style: styleProperties,
        ...rest
    } as useContainerReturn;
};

export default useContainer;
