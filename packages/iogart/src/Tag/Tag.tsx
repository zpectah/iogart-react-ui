import React from 'react';

import { Theme } from '@iogart-react-ui/types';
import { styled } from '@iogart-react-ui/styles';
import { TagBase } from '@iogart-react-ui/base';
import { TagProps } from './types';
import useTag from './useTag';

const StyledElement = styled(TagBase)`
    /* imported global styles */
    
    margin: 0;
    padding: .5rem 1rem;
    
    display: inline-flex;
    
    color: ${({ theme }) =>  (theme as Theme).palette?.primary.main};
`;

const Tag = (props: TagProps) => {
    const { ...rest } = props;

    const updateProps = useTag({ ...rest });

    return (
        <StyledElement
            {...updateProps}
        />
    );
};

export default Tag;
