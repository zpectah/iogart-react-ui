import React, { createElement } from 'react';

import { Theme } from '@iogart-react-ui/types';
import { styled, useTheme } from '@iogart-react-ui/styles';
import { ButtonBase } from '@iogart-react-ui/base';
import { ButtonProps } from './types';
import useButton from './useButton';

const StyledElement = styled(ButtonBase)(() => {
    const theme = useTheme() as Theme;

    console.log('theme', theme);
    return `
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
