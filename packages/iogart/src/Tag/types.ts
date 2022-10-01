import { ReactNode } from 'react';
import { tagElementTypeKeys, withChildren, withStyles, withSx } from '@iogart-react-ui/types';

export type TagElementType = keyof typeof tagElementTypeKeys;

export interface TagBaseProps extends withChildren {
  elementType?: TagElementType;
  label?: ReactNode;
  clickable?: boolean; // TODO
}
export interface TagProps extends TagBaseProps, withStyles, withSx {}

export type useTagBaseProps = TagBaseProps;
export type useTagBaseReturn = useTagBaseProps;

export type useTagProps = TagProps;
export type useTagReturn = useTagProps;
