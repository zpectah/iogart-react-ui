import { FC, createElement } from 'react';

import useButtonBase from './useButtonBase';
import { iogartButtonElement, iogartAnchorElement } from '@iogart-react-ui/types/src';
import { ButtonBaseProps } from './types';

const ButtonBase: FC<ButtonBaseProps<iogartButtonElement | iogartAnchorElement | HTMLElement>> = (props) => {
    const {
        children,
        elementType = 'button',
        ...rest
    } = props;

    const updatedProps = useButtonBase({ ...rest });

    return createElement(
        elementType,
        updatedProps,
        children,
    );
};

export default ButtonBase;
