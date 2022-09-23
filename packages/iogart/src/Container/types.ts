import { IogartCommonUi, withChildren } from '@iogart-react-ui/types';
import { ContainerElementTypeKeys, ContainerMaxWidthKeys } from './enums';

export type ContainerElementType = keyof typeof ContainerElementTypeKeys;
export type ContainerMaxWidth = keyof typeof ContainerMaxWidthKeys;

export interface ContainerProps extends IogartCommonUi, withChildren {
  elementType?: ContainerElementType;
  maxWidth?: ContainerMaxWidth;
  fluid?: boolean;
}

export interface useContainerProps extends ContainerProps {}
export interface useContainerReturn extends useContainerProps {}
