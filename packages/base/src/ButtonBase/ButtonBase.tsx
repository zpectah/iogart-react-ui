import { FC, createElement } from 'react';

import { ButtonBaseElementKeys } from './enums';
import { ButtonBaseProps } from './types';
import useButtonBase from './useButtonBase';

const ButtonBase: FC<ButtonBaseProps> = (props) => {
    const {
        children,
        elementType = ButtonBaseElementKeys['button'],
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
