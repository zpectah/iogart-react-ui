import {
  flexboxDirection,
  flexboxAlignContent,
  flexboxAlignItems,
  flexboxAlignSelf,
  flexboxJustifyContent,
  flexboxJustifyItems,
  flexboxJustifySelf,
  stackElementTypeKeys,
  withChildren,
  withStyles,
  withSx,
} from '@iogart-react-ui/types';

export type StackElementType = keyof typeof stackElementTypeKeys;

export interface StackProps extends withChildren, withStyles, withSx {
  elementType?: StackElementType;
  spacing?: number;
  direction?: flexboxDirection;
  alignContent?: flexboxAlignContent;
  alignItems?: flexboxAlignItems;
  alignSelf?: flexboxAlignSelf;
  justifyContent?: flexboxJustifyContent;
  justifyItems?: flexboxJustifyItems;
  justifySelf?: flexboxJustifySelf;
}

export type useStackProps = StackProps;
export type useStackReturn = useStackProps;
