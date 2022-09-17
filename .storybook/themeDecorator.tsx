import {
    ThemeProvider,
    lightTheme,
    darkTheme,
    GlobalStyles,
} from '@iogart-react-ui/styles/src';

const themeDecorator = (Story, context) => {
    const themes = {
        light: lightTheme,
        dark: darkTheme,
    };
    const theme = themes[context.args.theme];

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    );
}

export default themeDecorator;
