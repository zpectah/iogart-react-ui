import React from 'react';

import { Theme } from '@iogart-react-ui/types';
import { styled } from '@iogart-react-ui/styles';
import { ButtonBase } from '@iogart-react-ui/base';
import { ButtonProps } from './types';
import useButton from './useButton';

const StyledElement = styled(ButtonBase)`
    /* imported global styles */
    
    margin: 0;
    padding: .5rem 1rem;
    
    display: inline-flex;
    
    color: ${({ theme }) =>  (theme as Theme).palette?.primary.main};
`;

const Button = (props: ButtonProps) => {
    const { ...rest } = props;

    const updateProps = useButton({ ...rest });

    return (
        <StyledElement
            {...updateProps}
        />
    );
};

export default Button;
