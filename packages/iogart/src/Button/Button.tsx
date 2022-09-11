import React from 'react';
import styled from '@emotion/styled';

import { Theme } from '@iogart-react-ui/types/src';
// import { styled } from '@iogart-react-ui/styles/src';
import { ButtonBase, ButtonBaseProps } from '@iogart-react-ui/base/src/ButtonBase';

const StyledElement = styled(ButtonBase)`
    /* imported global styles */
    
    margin: 0;
    padding: .5rem 1rem;
    
    display: inline-flex;
    
    color: ${({ theme }) =>  (theme as Theme).palette?.primary.main};
`;

export interface ButtonProps extends ButtonBaseProps {}

const Button = (props: ButtonProps) => {
    const { ...rest } = props;

    return (
        <StyledElement
            {...rest}
        />
    );
};

export default Button;
