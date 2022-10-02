import { MouseEventHandler } from 'react';
import { SvgElement } from './element';

export interface SvgIcon extends Omit<SvgElement, 'onClick'> {
  size?: string | number;
  color?: string;
  onClick?: MouseEventHandler<SVGSVGElement> | undefined;
}
