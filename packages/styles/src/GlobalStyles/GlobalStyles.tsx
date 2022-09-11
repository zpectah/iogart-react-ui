import React from 'react';
import {
    css,
    useTheme,
    Global,
    GlobalProps,
    CSSObject,
} from '@emotion/react';

import { Theme } from '@iogart-react-ui/types/src';

export interface GlobalStylesProps extends Partial<GlobalProps> {
    styles?: CSSObject,
}

const GlobalStyles = (props: GlobalStylesProps) => {
    const {
        styles = {},
        ...rest
    } = props;
    const theme: Partial<Theme> = useTheme();
    const globalStyles = React.useMemo(() => {

        console.log('styles', styles);

        return css`
            body {
                margin: 0;
                padding: 0;
                
                background-color: ${theme.palette?.common.light};
            }
        `;
    }, [ theme ]);

    return (
        <Global
            styles={globalStyles}
            {...rest}
        />
    );
};

export default GlobalStyles;
