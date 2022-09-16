import {
    MouseEvent,
    MouseEventHandler,
    ReactNode,
} from 'react';

import {
    IogartButtonElement,
    IogartCommonUiProps,
    IogartSpanElement,
} from '@iogart-react-ui/types';
import { TagElementKeys } from './enums';

export interface TagProps<T = IogartSpanElement | IogartButtonElement> extends IogartCommonUiProps {
    label?: ReactNode;
    elementType?: keyof typeof TagElementKeys;
    clickable?: boolean;
    onClick?: MouseEventHandler<T> | undefined;
    onDoubleClick?: (event: MouseEvent<T, MouseEvent>) => void;
    onClickDelete?: MouseEventHandler<IogartButtonElement> | undefined;
    deleteIcon?: ReactNode;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}

export interface useTagParameters extends TagProps {}
export interface useTagReturn extends useTagParameters {}
