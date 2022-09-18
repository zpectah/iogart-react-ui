import { ReactNode } from 'react';

import { IogartCommonUiProps } from '@iogart-react-ui/types';
import { ContainerMaxWidthKeys, ContainerComponentKeys } from './enums';

export interface ContainerProps extends IogartCommonUiProps {
    children?: ReactNode;
    component?: keyof typeof ContainerComponentKeys;
    maxWidth?: keyof typeof ContainerMaxWidthKeys;
    fluid?: boolean;
}

export interface useContainerParameters extends ContainerProps {}
export interface useContainerReturn extends useContainerParameters {}