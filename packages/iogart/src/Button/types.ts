import { ReactNode } from 'react';

import { ButtonBaseProps } from '@iogart-react-ui/base/src/ButtonBase';
import { IogartAnchorElement, IogartButtonElement } from '@iogart-react-ui/types/src';
import {
    ButtonColorKeys,
    ButtonSizeKeys,
    ButtonVariantKeys,
} from './enums';

export interface ButtonProps extends ButtonBaseProps<IogartAnchorElement | IogartButtonElement | HTMLElement> {
    size?: keyof typeof ButtonSizeKeys;
    variant?: keyof typeof ButtonVariantKeys;
    color: keyof typeof ButtonColorKeys | 'inherit' | string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

export interface useButtonParameters extends ButtonProps {}
export interface useButtonReturn extends useButtonParameters {}
