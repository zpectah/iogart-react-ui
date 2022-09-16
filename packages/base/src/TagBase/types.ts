import {
    ReactNode,
    MouseEventHandler,
} from 'react';

import { IogartElementBase, IogartSpanElement } from '@iogart-react-ui/types';
import { TagBaseElementTypeKeys } from './enums';

export interface TagBaseProps<T = IogartSpanElement | HTMLElement> extends IogartElementBase {
    label?: ReactNode;
    elementType?: keyof typeof TagBaseElementTypeKeys;
    clickable?: boolean;
    onClick?: MouseEventHandler<T> | undefined;
    deleteIcon?: ReactNode;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}

export interface useTagBaseParameters extends TagBaseProps {}
export interface useTagBaseReturn extends useTagBaseParameters {}
