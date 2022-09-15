import { FC, createElement } from 'react';

import useButtonBase from './useButtonBase';
import { ButtonBaseProps } from './types';

const ButtonBase: FC<ButtonBaseProps> = (props) => {
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
