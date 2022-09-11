import {
    ThemeProvider,
    baseTheme,
    GlobalStyles,
} from '@iogart-react-ui/styles/src';

const themeDecorator = (Story) => (
    <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <Story />
    </ThemeProvider>
);

export default themeDecorator;
