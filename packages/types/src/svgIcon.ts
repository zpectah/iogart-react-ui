import { SVGProps } from 'react';

export interface SvgIcon extends SVGProps<SVGSVGElement> {
  size?: string | number;
  color?: string;
}
