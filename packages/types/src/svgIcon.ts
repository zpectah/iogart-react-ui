import { MouseEvent, MouseEventHandler } from 'react';
import { SvgElement } from './element';

export interface SvgIcon extends Omit<SvgElement, 'onClick' | 'onDoubleClick'> {
  size?: string | number;
  color?: string;
  onClick?: MouseEventHandler<HTMLElement> | undefined;
  onDoubleClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void;
}
