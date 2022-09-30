import { IogartCommonUi, withChildren, containerElementTypeKeys, containerMaxWidthKeys, withStyles } from '@iogart-react-ui/types';

export type ContainerElementType = keyof typeof containerElementTypeKeys;
export type ContainerMaxWidth = keyof typeof containerMaxWidthKeys;

export interface ContainerProps extends IogartCommonUi, withChildren, withStyles {
  elementType?: ContainerElementType;
  maxWidth?: ContainerMaxWidth;
  fluid?: boolean;
}

export type useContainerProps = ContainerProps;
export type useContainerReturn = useContainerProps;
