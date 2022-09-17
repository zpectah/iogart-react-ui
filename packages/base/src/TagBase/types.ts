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
import { TagBaseElementKeys } from './enums';

export interface TagBaseProps<T = IogartSpanElement | IogartButtonElement> extends IogartCommonUiProps {
    label?: ReactNode;
    component?: keyof typeof TagBaseElementKeys;
    clickable?: boolean;
    onClick?: MouseEventHandler<T> | undefined;
    onDoubleClick?: (event: MouseEvent<T, MouseEvent>) => void;
    onClickDelete?: MouseEventHandler<IogartButtonElement> | undefined;
    deleteIcon?: ReactNode;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}

export interface useTagBaseParameters extends TagBaseProps {}
export interface useTagBaseReturn extends useTagBaseParameters {}
