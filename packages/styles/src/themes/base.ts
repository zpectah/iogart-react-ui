import {
    FONT_FAMILY_DEFAULT,
    FONT_SIZE_DEFAULT,
    LINE_HEIGHT_DEFAULT,
} from '../GlobalStyles';

const baseTheme = {
    direction: 'ltr',
    spacing: (value: number) => {
        return `calc(${value} * ${FONT_SIZE_DEFAULT})`;
    },
    components: {
        Button: {},
    },
    typography: {
        fontFamily: FONT_FAMILY_DEFAULT,
        fontSize: FONT_SIZE_DEFAULT,
        lineHeight: LINE_HEIGHT_DEFAULT,
    },
    shape: {},
    mixins: {},
    shadows: {},
    transitions: {},
    breakpoints: {},
    zIndex: {},
};

export default baseTheme;
