import { containerElementTypeKeys, breakpointKeys, withChildren, withStyles, withSx } from '@iogart-react-ui/types';

export type ContainerElementType = keyof typeof containerElementTypeKeys;
export type ContainerMaxWidth = keyof typeof breakpointKeys;

export interface ContainerProps extends withChildren, withStyles, withSx {
  elementType?: ContainerElementType;
  maxWidth?: ContainerMaxWidth;
  fluid?: boolean;
}

export type useContainerProps = ContainerProps;
export type useContainerReturn = useContainerProps;
