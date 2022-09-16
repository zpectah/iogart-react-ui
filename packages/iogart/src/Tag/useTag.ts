import { getElementClassName } from '@iogart-react-ui/utils';
import { useTagParameters, useTagReturn } from './types';

const useTag = (props: useTagParameters) => {
    const { className, ...rest } = props;

    const getClassName = () => getElementClassName(
        className,
        [ 'iogart-tag' ],
    );

    return {
        className: getClassName(),
        ...rest
    } as useTagReturn;
};

export default useTag;
