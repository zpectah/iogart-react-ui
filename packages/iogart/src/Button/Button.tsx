import React, { createElement } from 'react';

import { Theme } from '@iogart-react-ui/types';
import {
    styled,
    useTheme,
    FONT_FAMILY_DEFAULT,
} from '@iogart-react-ui/styles';
import { ButtonBase } from '@iogart-react-ui/base';
import { ButtonProps } from './types';
import useButton from './useButton';

const StyledElement = styled(ButtonBase)(() => {
    const theme = useTheme() as Theme;

    return `
        font-family: ${FONT_FAMILY_DEFAULT};
        color: ${theme.palette.common.light};
        background-color: ${theme.palette.primary.main};
        /* ... */
    `;
});

const Button = (props: ButtonProps) => {
    const { ...rest } = props;

    const updateProps = useButton({ ...rest });

    return createElement(
        StyledElement,
        {...updateProps},
    );
};

export default Button;
