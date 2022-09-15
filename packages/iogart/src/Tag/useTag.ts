import { useTagParameters, useTagReturn } from './types';

const useTag = (props: useTagParameters) => {
    const { className, ...rest } = props;

    const getClassName = () => {
        const privateClasses = [ 'iogart-tag' ].join(' ');
        const publicClasses = className ? className : '';

        return `${privateClasses} ${publicClasses}`;
    };

    return {
        className: getClassName(),
        ...rest
    } as useTagReturn;
};

export default useTag;
