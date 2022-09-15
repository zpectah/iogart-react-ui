import {
    ReactNode,
    MouseEventHandler,
} from 'react';

import { IogartElementBase, iogartSpanElement } from '@iogart-react-ui/types/src';
import { TagBaseElementTypeKeys } from './enums';

export interface TagBaseProps<T = iogartSpanElement | HTMLElement> extends IogartElementBase {
    label?: ReactNode;
    elementType?: keyof typeof TagBaseElementTypeKeys;
    clickable?: boolean;
    onClick?: MouseEventHandler<T> | undefined;
    deleteIcon?: ReactNode;
}

export interface useTagBaseParameters extends TagBaseProps {}
export interface useTagBaseReturn extends useTagBaseParameters {}
