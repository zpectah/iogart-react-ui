import { ReactNode } from 'react';

import {
    IogartCommonUiProps,
    contentElementType,
    elementFlexDirectionType,
    elementFlexAlignContentType,
    elementFlexAlignItemsType,
    elementFlexAlignSelfType,
    elementFlexJustifyContentType,
    elementFlexJustifyItemsType,
    elementFlexJustifySelfType,
} from '@iogart-react-ui/types';

export interface StackProps extends IogartCommonUiProps {
    children?: ReactNode;
    component?: contentElementType;
    direction?: elementFlexDirectionType;
    spacing?: number;
    alignContent?: elementFlexAlignContentType;
    alignItems?: elementFlexAlignItemsType;
    alignSelf?: elementFlexAlignSelfType;
    justifyContent?: elementFlexJustifyContentType;
    justifyItems?: elementFlexJustifyItemsType;
    justifySelf?: elementFlexJustifySelfType;
}

export interface useStackParameters extends StackProps {}
export interface useStackReturn extends useStackParameters {}
