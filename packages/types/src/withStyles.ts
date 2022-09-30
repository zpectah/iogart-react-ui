import { CSSProperties } from 'react';
import { SxProps } from './sx';

export interface withStyles {
  className?: string | undefined;
  style?: CSSProperties | undefined;
  sx?: SxProps | undefined;
}
