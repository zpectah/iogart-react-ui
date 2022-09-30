import { ReactNode } from 'react';

import { IogartBaseUi, IogartCommonUi, withChildren, withStyles } from '@iogart-react-ui/types';
import { TagElementTypeKeys } from './enums';

export type TagElementType = keyof typeof TagElementTypeKeys;

export interface TagBaseProps extends IogartBaseUi, withChildren, withStyles {
  elementType?: TagElementType;
  label?: ReactNode;
  clickable?: boolean; // TODO
}
export interface TagProps extends TagBaseProps, IogartCommonUi {}

export type useTagBaseProps = TagBaseProps;
export type useTagBaseReturn = useTagBaseProps;

export type useTagProps = TagProps;
export type useTagReturn = useTagProps;
