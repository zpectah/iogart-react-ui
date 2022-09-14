import { ReactNode } from 'react';

import { ButtonBaseProps } from '@iogart-react-ui/base/src/ButtonBase';
import { iogartAnchorElement, iogartButtonElement } from '@iogart-react-ui/types/src';
import {
    ButtonColorKeys,
    ButtonSizeKeys,
    ButtonVariantKeys,
} from './enums';

export interface ButtonProps extends ButtonBaseProps<iogartAnchorElement | iogartButtonElement | HTMLElement> {
    size?: keyof typeof ButtonSizeKeys;
    variant?: keyof typeof ButtonVariantKeys;
    color: keyof typeof ButtonColorKeys | 'inherit' | string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}
