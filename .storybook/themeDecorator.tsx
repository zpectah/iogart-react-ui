import { ThemeProvider, baseTheme } from '@iogart-react-ui/styles/src';

const themeDecorator = (Story) => (
    <ThemeProvider theme={baseTheme}>
        <Story />
    </ThemeProvider>
);

export default themeDecorator;
