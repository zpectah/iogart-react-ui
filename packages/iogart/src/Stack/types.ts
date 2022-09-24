import {
  IogartCommonUi,
  withChildren,
  flexboxDirection,
  flexboxAlignContent,
  flexboxAlignItems,
  flexboxAlignSelf,
  flexboxJustifyContent,
  flexboxJustifyItems,
  flexboxJustifySelf,
} from '@iogart-react-ui/types';
import { StackElementTypeKeys } from './enums';

export type StackElementType = keyof typeof StackElementTypeKeys;

export interface StackProps extends IogartCommonUi, withChildren {
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
