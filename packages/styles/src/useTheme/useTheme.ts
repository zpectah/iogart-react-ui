import { useTheme as emoUseTheme } from '@emotion/react';

import { Theme } from '@iogart-react-ui/types/src';

const useTheme = () => {
    const theme: Partial<Theme> = emoUseTheme();

    return {
        theme,
        setTheme: (theme: Partial<Theme>) => {
            /* TODO */
        },
    };
};

export default useTheme;
