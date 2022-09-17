import React from 'react';
import {
    ThemeProvider as EmoThemeProvider,
    ThemeProviderProps as EmoThemeProviderProps,
} from '@emotion/react';

import { lightTheme } from '../themes';

export interface ThemeProviderProps extends EmoThemeProviderProps {
    // theme: Partial<Theme>,
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        theme,
        ...rest
    } = props;

    const currentTheme = Object.assign(lightTheme, theme);

    return (
        <EmoThemeProvider
            theme={currentTheme}
            {...rest}
        />
    );
};

export default ThemeProvider;
