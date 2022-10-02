import { AriaRole, MouseEvent, MouseEventHandler, ReactNode } from 'react';
import { withSx, withStyles, sizeVariantKeys, colorVariantKeys, tagVariantKeys } from '@iogart-react-ui/types';

export type TagVariant = keyof typeof tagVariantKeys;

export type TagSize = keyof typeof sizeVariantKeys;

export type TagColor = keyof typeof colorVariantKeys;

export interface TagProps extends withStyles, withSx {
  label?: ReactNode;
  size?: TagSize;
  color?: TagColor;
  variant?: TagVariant;
  pill?: boolean;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement> | undefined;
  onDoubleClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void;
  onClose?: MouseEventHandler<HTMLElement> | undefined;
}

export type useTagProps = TagProps;
export interface useTagReturn extends useTagProps {
  role: AriaRole;
  closeNode: ReactNode;
}
