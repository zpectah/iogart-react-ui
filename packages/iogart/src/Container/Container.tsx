import React, { useMemo } from 'react';
import styled from '@emotion/styled';

import {
    breakpoints,
    container,
} from '@iogart-react-ui/styles';
import { ContainerProps } from './types';
import useContainer from './useContainer';

const Container = (props: ContainerProps) => {
    const {
        children,
        component = 'div',
        maxWidth,
        fluid,
        ...rest
    } = props;

    const updateProps = useContainer({
        ...rest
    });

    const renderElement = useMemo(() => {
        const isa_xs = (!maxWidth || maxWidth === 'xs');
        const isa_sm = (!maxWidth || maxWidth === 'sm');
        const isa_md = (!maxWidth || maxWidth === 'md');
        const isa_lg = (!maxWidth || maxWidth === 'lg');
        const isa_xl = (!maxWidth || maxWidth === 'xl');
        const isa_xxl = (!maxWidth || maxWidth === 'xxl');
        const bp_xs = `@media (min-width: ${breakpoints.xs.min}px) { max-width: 100%; }`;
        const bp_sm = `@media (min-width: ${breakpoints.sm.min}px) { max-width: ${container.sm}px; }`;
        const bp_md = fluid ? '' : `@media (min-width: ${breakpoints.md.min}px) { max-width: ${container.md}px; }`;
        const bp_lg = fluid ? '' : `@media (min-width: ${breakpoints.lg.min}px) { max-width: ${container.lg}px; }`;
        const bp_xl = fluid ? '' : `@media (min-width: ${breakpoints.xl.min}px) { max-width: ${container.xl}px; }`;
        const bp_xxl = fluid ? '' : `@media (min-width: ${breakpoints.xxl.min}px) { max-width: ${container.xxl}px; }`;

        const Element = styled(component)`
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
          ${isa_xs && bp_xs}
          ${isa_sm && bp_sm}
          ${isa_md && bp_md}
          ${isa_lg && bp_lg}
          ${isa_xl && bp_xl}
          ${isa_xxl && bp_xxl}                              
        `;

        return (
            <Element
                className="dpr-container"
                {...updateProps}
            >
                {children}
            </Element>
        );
    }, [ children, fluid, maxWidth, updateProps ]);

    return (
        <>
            {renderElement}
        </>
    );
};

export default Container;
