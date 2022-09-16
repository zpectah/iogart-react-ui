import {
    ReactNode,
    MouseEventHandler,
} from 'react';

import {
    IogartBaseUiProps,
    IogartSpanElement,
    IogartButtonElement,
} from '@iogart-react-ui/types';
import { TagBaseElementKeys } from './enums';

export interface TagBaseProps<T = IogartSpanElement | IogartButtonElement> extends IogartBaseUiProps {
    label?: ReactNode;
    elementType?: keyof typeof TagBaseElementKeys;
    clickable?: boolean;
    onClick?: MouseEventHandler<T> | undefined;
    deleteIcon?: ReactNode;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}

export interface useTagBaseParameters extends TagBaseProps {}
export interface useTagBaseReturn extends useTagBaseParameters {}
