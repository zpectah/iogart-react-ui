import { IogartCommonUi, withChildren } from '@iogart-react-ui/types';
import { ContainerElementTypeKeys, ContainerMaxWidthKeys } from './enums';

export type ContainerElementType = keyof typeof ContainerElementTypeKeys;
export type ContainerMaxWidth = keyof typeof ContainerMaxWidthKeys;

export interface ContainerProps extends IogartCommonUi, withChildren {
  elementType?: ContainerElementType;
  maxWidth?: ContainerMaxWidth;
  fluid?: boolean;
}

export type useContainerProps = ContainerProps;
export type useContainerReturn = useContainerProps;
