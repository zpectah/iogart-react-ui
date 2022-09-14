import React from 'react';

import { Theme } from '@iogart-react-ui/types/src';
import { styled } from '@iogart-react-ui/styles/src';
import { TagBase } from '@iogart-react-ui/base/src';
import { TagProps } from './types';

const StyledElement = styled(TagBase)`
    /* imported global styles */
    
    margin: 0;
    padding: .5rem 1rem;
    
    display: inline-flex;
    
    color: ${({ theme }) =>  (theme as Theme).palette?.primary.main};
`;

const Tag = (props: TagProps) => {
    const { ...rest } = props;

    return (
        <StyledElement {...rest} />
    );
};

export default Tag;
