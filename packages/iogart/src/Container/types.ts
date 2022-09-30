import { IogartCommonUi, withChildren, containerElementTypeKeys, breakpointKeys, withStyles } from '@iogart-react-ui/types';

export type ContainerElementType = keyof typeof containerElementTypeKeys;
export type ContainerMaxWidth = keyof typeof breakpointKeys;

export interface ContainerProps extends IogartCommonUi, withChildren, withStyles {
  elementType?: ContainerElementType;
  maxWidth?: ContainerMaxWidth;
  fluid?: boolean;
}

export type useContainerProps = ContainerProps;
export type useContainerReturn = useContainerProps;
