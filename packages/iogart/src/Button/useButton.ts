import { getElementClassName } from '@iogart-react-ui/utils';
import { useButtonParameters, useButtonReturn } from './types';

const useButton = (props: useButtonParameters) => {
    const { className, ...rest } = props;

    const getClassName = () => getElementClassName(
        className,
        [ 'iogart-button' ],
    );

    return {
        className: getClassName(),
        ...rest
    } as useButtonReturn;
};

export default useButton;
