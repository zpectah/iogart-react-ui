import { useButtonParameters, useButtonReturn } from './types';

const useButton = (props: useButtonParameters) => {
    const { className, ...rest } = props;

    const getClassName = () => {
        const privateClasses = [ 'iogart-button' ].join(' ');
        const publicClasses = className ? className : '';

        return `${privateClasses} ${publicClasses}`;
    };

    return {
        className: getClassName(),
        ...rest
    } as useButtonReturn;
};

export default useButton;
