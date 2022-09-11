import React from 'react';

import { Theme } from '@iogart-react-ui/types/src';
import { styled } from '@iogart-react-ui/styles/src';
import { ButtonBase } from '@iogart-react-ui/base/src/ButtonBase';
import { ButtonProps } from './Button.d';

const StyledElement = styled(ButtonBase)`
    /* imported global styles */
    
    margin: 0;
    padding: .5rem 1rem;
    
    display: inline-flex;
    
    color: ${({ theme }) =>  (theme as Theme).palette?.primary.main};
`;

const Button = (props: ButtonProps) => {
    const { ...rest } = props;

    return (
        <StyledElement
            {...rest}
        />
    );
};

export default Button;
