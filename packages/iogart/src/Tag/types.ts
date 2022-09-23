import { ReactNode } from 'react';

import { IogartBaseUi, IogartCommonUi } from '@iogart-react-ui/types';
import { TagElementTypeKeys } from './enums';

export type TagElementType = keyof typeof TagElementTypeKeys;

export interface TagBaseProps extends IogartBaseUi {
  elementType?: TagElementType;
  label?: ReactNode;
  clickable?: boolean; // TODO
}
export interface TagProps extends TagBaseProps, IogartCommonUi {}

export interface useTagBaseProps extends TagBaseProps {}
export interface useTagBaseReturn extends useTagBaseProps {}

export interface useTagProps extends TagProps {}
export interface useTagReturn extends useTagProps {}
