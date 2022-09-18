import React from 'react';
import {
    css,
    useTheme,
    Global,
    GlobalProps,
    CSSObject,
} from '@emotion/react';

import { Theme } from '@iogart-react-ui/types';
import {
    FONT_IMPORT_URL,
    FONT_FAMILY_DEFAULT,
    FONT_SIZE_DEFAULT,
    LINE_HEIGHT_DEFAULT,
} from './const';

export interface GlobalStylesProps extends Partial<GlobalProps> {
    styles?: CSSObject,
}

const GlobalStyles = (props: GlobalStylesProps) => {
    const {
        styles = {},
        ...rest
    } = props;

    const theme: Partial<Theme> = useTheme();

    const globals = css`
            @import url('${FONT_IMPORT_URL}');
        
            html {
                margin: 0;
                padding: 0;
                font-size: ${FONT_SIZE_DEFAULT};
            }
        
            body {
                margin: 0;
                padding: 0;
                font-family: ${FONT_FAMILY_DEFAULT};
                font-size: 1rem;
                line-height: ${LINE_HEIGHT_DEFAULT};
                
                color: ${theme.palette?.common.dark};
                background-color: ${theme.palette?.common.light};
            }
    `;

    return (
        <Global
            styles={globals}
            {...rest}
        />
    );
};

export default GlobalStyles;
