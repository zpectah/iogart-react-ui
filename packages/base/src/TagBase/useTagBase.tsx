import { ReactNode } from 'react';

import { useTagBaseParameters, useTagBaseReturn } from './types';
import { Close } from '@iogart-react-ui/icons/src';

const useTagBase = (props: useTagBaseParameters) => {
    const { className, deleteIcon, ...rest } = props;

    const getClassName = () => {

        return `iogart-base iogart-tag-base${className && ` ${className}`}`;
    };

    const getDeleteIcon = () => {

        return deleteIcon ? deleteIcon : <Close size="1rem" />;
    };

    return {
        className: getClassName(),
        deleteIcon: getDeleteIcon() as ReactNode,
        ...rest,
    } as useTagBaseReturn;
};

export default useTagBase;
