import {
  flexboxDirectionKeys,
  flexboxAlignContentKeys,
  flexboxAlignItemsKeys,
  flexboxAlignSelfKeys,
  flexboxJustifyContentKeys,
  flexboxJustifyItemsKeys,
  flexboxJustifySelfKeys,
} from '@iogart-react-ui/utils';

export type flexboxDirection = keyof typeof flexboxDirectionKeys;

export type flexboxAlignContent = keyof typeof flexboxAlignContentKeys;

export type flexboxAlignItems = keyof typeof flexboxAlignItemsKeys;

export type flexboxAlignSelf = keyof typeof flexboxAlignSelfKeys;

export type flexboxJustifyContent = keyof typeof flexboxJustifyContentKeys;

export type flexboxJustifyItems = keyof typeof flexboxJustifyItemsKeys;

export type flexboxJustifySelf = keyof typeof flexboxJustifySelfKeys;
