import { createUseStyles } from 'react-jss';

import { palette } from '../../../styles';

export const useButtonStyles = createUseStyles({
    root: {
        width: 'auto',
        height: 'auto',
        margin: 0,
        padding: '.75rem 1rem',
        display: 'inline-flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        gap: '.5rem',
        border: 0,
        fontSize: '1rem',
        color: palette.light,
        backgroundColor: palette.blueGrey,
        borderRadius: '.25rem',
    },
});