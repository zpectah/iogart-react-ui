import { IogartThemeProvider } from '@iogart-react-ui/styles';

const themeDecorator = (Story, context) => {
    // const themes = {};
    // const theme = themes[context.args.theme];

    return (
        <IogartThemeProvider>
            <Story />
        </IogartThemeProvider>
    );
}

export default themeDecorator;
