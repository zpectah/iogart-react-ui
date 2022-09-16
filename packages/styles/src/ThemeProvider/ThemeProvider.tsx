import React from 'react';
import {
    ThemeProvider as EmoThemeProvider,
    ThemeProviderProps as EmoThemeProviderProps,
} from '@emotion/react';

import { Theme } from '@iogart-react-ui/types';
import { baseTheme } from '../themes';

export interface ThemeProviderProps extends EmoThemeProviderProps {
    theme: Partial<Theme>,
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        theme,
        ...rest
    } = props;

    const [ currentTheme, setCurrentTheme ] = React.useState<Partial<Theme>>(baseTheme);

    React.useEffect(() => {
        console.log('theme provider loaded ...', theme, currentTheme);

        // deep merge with default theme ...

    }, []);

    return (
        <EmoThemeProvider
            theme={currentTheme}
            {...rest}
        />
    );
};

export default ThemeProvider;
